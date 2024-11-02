"use client";

export default function DownloadButton() {
  return (
    <a
      href="CV-JH-2024.pdf"
      alt="CV Jonathan Hartz"
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer rounded-md border border-yellow-700 bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 py-4 text-xs font-bold text-slate-800 hover:from-yellow-300 hover:to-yellow-400 sm:px-8 sm:text-base"
    >
      <i className="fa-regular fa-file"></i>&nbsp;&nbsp;Télécharger mon CV
    </a>
  );
}
