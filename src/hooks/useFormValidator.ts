import { useCallback, useRef } from "react";

const FORM_VALIDATOR_CSS_URL = "https://form-field-validator.vercel.app/widget/dist/form-validator.css";
const FORM_VALIDATOR_JS_URL = "https://form-field-validator.vercel.app/widget/dist/form-validator.js";
const FORM_VALIDATOR_LOAD_TIMEOUT_MS = 5000;
let formValidatorLoadPromise: Promise<void> | null = null;

function loadFormValidator(): Promise<void> {
  if ((window as any).FormValidator) return Promise.resolve();
  if (formValidatorLoadPromise) return formValidatorLoadPromise;

  if (!document.querySelector(`link[href="${FORM_VALIDATOR_CSS_URL}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = FORM_VALIDATOR_CSS_URL;
    document.head.appendChild(link);
  }

  formValidatorLoadPromise = new Promise((resolve) => {
    const existingScript = document.querySelector(
      `script[src="${FORM_VALIDATOR_JS_URL}"]`
    ) as HTMLScriptElement | null;

    if (existingScript) {
      if ((window as any).FormValidator) {
        resolve();
      } else {
        existingScript.addEventListener("load", () => resolve());
        existingScript.addEventListener("error", () => resolve());
      }
      return;
    }

    const script = document.createElement("script");
    script.src = FORM_VALIDATOR_JS_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.body.appendChild(script);
  });

  return formValidatorLoadPromise;
}

// Races the load against a fixed timeout so a slow/blocked/failed script load
// gives up instead of leaving the caller's disabled state stuck forever.
function loadFormValidatorWithTimeout(): Promise<void> {
  return new Promise((resolve) => {
    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      resolve();
    };
    loadFormValidator().then(done);
    setTimeout(done, FORM_VALIDATOR_LOAD_TIMEOUT_MS);
  });
}

export interface FormValidatorController {
  validate: () => Promise<boolean>;
}

// Runs on every mount of a hero form's DOM node (including intro replays,
// which unmount/remount the form), since FormValidator attaches to the
// concrete <form> element rather than tracking React state.
export function useFormValidator() {
  const controllerRef = useRef<FormValidatorController | null>(null);

  const formRef = useCallback((node: HTMLFormElement | null) => {
    // Guards against StrictMode's dev-only double ref invocation re-wrapping
    // the same node (and its already-injected widget markup) a second time.
    if (!node || node.dataset.fvAttached === "true") return;
    node.dataset.fvAttached = "true";

    // Disable submit until the widget attaches (or gives up) so a fast
    // click can't slip through native validation with an unnormalized phone
    // number while the widget is still loading.
    const submitEl = node.querySelector<HTMLButtonElement | HTMLInputElement>(
      'button[type="submit"], input[type="submit"]'
    );
    if (submitEl) submitEl.disabled = true;

    loadFormValidatorWithTimeout().then(() => {
      try {
        // Read the phone input fresh right before attach, not at mount time —
        // the load wait can take seconds on a cold start, and the user may
        // start typing at any point during it. Capturing this earlier would
        // silently miss whatever they typed after mount but before attach.
        const phoneEl = node.querySelector<HTMLInputElement>('[name="phone"]');
        const typedPhone = phoneEl?.value ?? "";
        // attachForm() flips phoneEl to type="hidden", which drops focus as a
        // side effect — capture this now, before that happens, not after.
        const hadFocus = phoneEl != null && document.activeElement === phoneEl;

        controllerRef.current = (window as any).FormValidator?.attachForm(node, { defaultCountry: "US" }) ?? null;

        // The widget hides the original (labeled) phone input and renders its
        // own, unlabeled one — give it an accessible name so it isn't flagged
        // as an unlabeled form field.
        const cpNumber = node.querySelector<HTMLInputElement>(".cp-container .cp-number");
        if (cpNumber && !cpNumber.getAttribute("aria-label")) {
          cpNumber.setAttribute("aria-label", "Phone Number");
        }

        // The widget hides the original phone input and renders its own empty
        // one, so anything the user typed before attach finished would
        // otherwise vanish mid-typing. Carry it over and let the widget
        // recompute (E.164, country) from it.
        if (typedPhone && controllerRef.current && cpNumber) {
          cpNumber.value = typedPhone;
          cpNumber.dispatchEvent(new Event("input", { bubbles: true }));
          if (hadFocus) {
            cpNumber.focus();
            cpNumber.setSelectionRange(cpNumber.value.length, cpNumber.value.length);
          }
        }
      } catch {
        // A throwing widget must degrade to native validation, not brick the
        // form — controllerRef staying null is what makes handleSubmit's
        // existing fallback (form.checkValidity()) kick in.
        controllerRef.current = null;
      } finally {
        if (submitEl) submitEl.disabled = false;
      }
    });
  }, []);

  return { formRef, controllerRef };
}
