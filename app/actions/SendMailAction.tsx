"use server";
import { boolean, z } from "zod";
import { ContactFormTemplate } from "@/components/emails/templates/ContactFormTemplate";
import { Resend } from "resend";
import { MutableRefObject } from "react";

const contactFormSchema = z
  .object({
    fullname: z
      .string({
        invalid_type_error: "Type non valide",
        required_error: "Veuillez saisir votre nom et prénom :) ",
      })
      .min(
        3,
        "Votre identité est trop courte pour que je puisse vous recontacter.",
      ),
    email: z.string().optional(),
    phone: z.string().optional(),
    captcha: z.string().optional(),
    message: z
      .string()
      .min(
        5,
        "Veuillez m'indiquer la raison de votre message, je vous recontacterai pour y répondre ;)",
      ),
  })
  .superRefine(({ email, phone, captcha }, ctx) => {
    if (email == "" && phone == "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Veuillez remplir votre téléphone ou votre e-mail",
      });
    }
    if (captcha != String("true")) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "La protection anti-bot a expiré ou a rencontré un problème, merci de rafraîchir cette page et de réenvoyer votre message",
      });
    }
  });

const validateFormFields = (formData: FormData) => {
  const validatedFields = contactFormSchema.safeParse({
    fullname: formData.get("fullname"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
    captcha: formData.get("captcha"),
  });

  return {
    errors: validatedFields.error?.errors,
  };
};

export async function SendMail(prevState: any, formData: FormData) {
  let success = false;
  const { isCaptchaValid, captchaScore } = await checkIfCaptchaValid(
    formData.get("token") ?? "",
  );
  formData.append("captcha", isCaptchaValid);
  const messages = validateFormFields(formData);

  if (isCaptchaValid) {
    let id_sended_mail = null;
    if (typeof messages.errors === "undefined") {
      id_sended_mail = await send(formData, captchaScore);
      success = id_sended_mail != null;
    }
  }
  return { messages, success };
}

async function send(formData: FormData, captchaScore: number) {
  const { fullname, company, email, phone, message } = {
    fullname: formData.get("fullname")?.toString(),
    company: formData.get("company")?.toString(),
    email: formData.get("email")?.toString(),
    phone: formData.get("phone")?.toString(),
    message: formData.get("message")?.toString(),
  };
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data } = await resend.emails.send({
    from: "JONATHAN-HARTZ.DEV <contact@jonathan-hartz.dev>",
    to: ["jonat.hartz@gmail.com"],
    subject: `[PORTFOLIO] Nouveau message de : ${fullname}`,
    react: ContactFormTemplate({
      fullname,
      company,
      email,
      phone,
      message,
      captchaScore,
    }),
  });
  return data?.id;
}

async function checkIfCaptchaValid(captchaToken: string) {
  const minimumCaptchaScore = 0.5;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY || "";
  const data = new FormData();
  data.append("secret", secretKey);
  data.append("response", captchaToken);
  const captchaResponse = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      body: data,
    },
  );
  const res = await captchaResponse.json();
  if (!res.success && res["error-codes"].length >= 1) {
    res["error-codes"].map((error_code: string, key) => {
      if (error_code == "browser-error") {
        res.success = true;
        res.score = 0.5;
      }
    });
  }
  const captchaScore = res.score;
  const isCaptchaValid =
    res.success && res.score && res.score >= minimumCaptchaScore;
  return {
    isCaptchaValid,
    captchaScore,
  };
}
