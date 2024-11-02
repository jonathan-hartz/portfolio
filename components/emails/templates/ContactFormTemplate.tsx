import * as React from "react";

interface EmailTemplateProps {
  fullname: string | undefined;
  company: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  message: string | undefined;
  captchaScore: number | undefined;
}

export const ContactFormTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullname,
  company,
  email,
  phone,
  message,
  captchaScore,
}) => (
  <div>
    <h1>Détails : </h1>
    <p>
      <b>Identité :</b>
      {fullname}
    </p>
    <p>
      <b>Société : </b>
      {company}
    </p>
    <p>
      <b>E-mail : </b>
      {email}
    </p>
    <p>
      <b>Téléphone : </b>
      {phone}
    </p>
    <p>
      <b>Message : </b>
      {message}
    </p>
    <p>
      <b>Captcha Rating : </b>
      {captchaScore}
    </p>
  </div>
);
