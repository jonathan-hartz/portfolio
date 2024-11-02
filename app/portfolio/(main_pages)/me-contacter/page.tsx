import { ReCaptchaProvider } from "next-recaptcha-v3";
import ContactForm from "./components/ContactForm";

export default function MeContacter() {
  return (
    <>
      <ReCaptchaProvider
        reCaptchaKey={process?.env?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      >
        <div className="w-full">
          <ContactForm />
        </div>
      </ReCaptchaProvider>
    </>
  );
}
