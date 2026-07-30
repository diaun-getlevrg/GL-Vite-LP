import { useCallback, useRef } from "react";

const FORM_VALIDATOR_CSS_URL = "https://form-field-validator.vercel.app/widget/dist/form-validator.css";
const FORM_VALIDATOR_JS_URL = "https://form-field-validator.vercel.app/widget/dist/form-validator.js";
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
      }
      return;
    }

    const script = document.createElement("script");
    script.src = FORM_VALIDATOR_JS_URL;
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });

  return formValidatorLoadPromise;
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
    loadFormValidator().then(() => {
      controllerRef.current = (window as any).FormValidator?.attachForm(node, { defaultCountry: "US" }) ?? null;
    });
  }, []);

  return { formRef, controllerRef };
}
