"use client";
import { SendMail } from "@/app/actions/SendMailAction";
import SubmitButton from "./SubmitButton";
import { useFormState } from "react-dom";
import { useReCaptcha } from "next-recaptcha-v3";
import { ZodIssue } from "zod";
import { useEffect } from "react";

export default function ContactForm() {
  type MessageState = {
    messages: {
      errors: ZodIssue[] | undefined;
    };
    success: boolean;
  };

  const initialState: MessageState = {
    messages: {
      errors: undefined,
    },
    success: false,
  };
  const { executeRecaptcha } = useReCaptcha();
  const [state, formAction] = useFormState(SendMailWithToken, initialState);

  async function SendMailWithToken(
    prevState: MessageState,
    formData: FormData,
  ) {
    const token = await executeRecaptcha("contact_form");

    formData.set("token", token);
    return SendMail(prevState, formData);
  }
  useEffect(() => {
    document.getElementById("mainLayout")?.scrollTo(0, 0);
  }, []);

  return (
    <div className="isolate mx-auto rounded-xl bg-indigo-900/95 px-6 py-6 shadow-2xl sm:py-12 lg:px-2">
      <div className="mx-auto w-4/5">
        {state?.messages?.errors?.length ? (
          <ul className="mx-auto max-w-xl animate-bounce list-decimal border-2 border-dotted border-amber-500 bg-amber-500/45 py-4 pl-8 indent-4">
            {state.messages.errors?.map((error, key) => (
              <li className="" key={key}>
                {error.message}
              </li>
            ))}
          </ul>
        ) : state?.success ? (
          <div className="mx-auto mt-2 text-center">
            <h1 className="rounded-md bg-green-600/75 p-4 font-bold tracking-tight text-slate-200">
              Votre message a été envoyé avec succès ! Je vous recontacte
              prochainement 👌
            </h1>
          </div>
        ) : (
          <div className="mx-auto mt-2 max-w-2xl text-center">
            <h1 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-4xl">
              Vous voulez qu&#39;on entre en contact ?
            </h1>
            <p className="text-lg leading-8 text-slate-300 sm:text-lg">
              N&#39;hésitez pas à me laisser un message. Je vous contacterai dès
              que possible !
            </p>
          </div>
        )}
        <form action={formAction} className="mt-2 sm:mt-4">
          <div className="grid grid-cols-1 gap-x-1 gap-y-1 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-4">
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-semibold leading-6 text-gray-100"
              >
                Votre identité
              </label>
              <div className="mt-2.5">
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  autoComplete="fullname"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-100"
              >
                Entreprise / Société
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-100"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="phone"
                className="block text-sm font-semibold leading-6 text-gray-100"
              >
                Numéro de téléphone
              </label>
              <div className="relative mt-2.5">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-100"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-2 sm:mt-10">
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}
