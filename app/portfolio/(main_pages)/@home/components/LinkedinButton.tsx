"use client";

export default function LinkedinButton() {
  return (
    <a
      href="https://www.linkedin.com/in/jonathan-hartz-44a541174/"
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer rounded-md border border-orange-700 bg-gradient-to-r from-orange-400 to-orange-500 px-4 py-4 text-xs font-bold text-slate-800 hover:from-orange-300 hover:to-orange-400 sm:px-8 sm:text-base"
    >
      <i className="fa-brands fa-linkedin"></i>&nbsp;&nbsp;Voir mon profil
    </a>
  );
}
