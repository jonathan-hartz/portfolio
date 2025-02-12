"use client";

export default function DownloadButton() {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open("CV-JH-2025.pdf", "_blank");
  };

  return (
    <a
      href="#"
      onClick={handleDownload}
      className="cursor-pointer rounded-md border border-yellow-700 bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 py-4 text-xs font-bold text-slate-800 hover:from-yellow-300 hover:to-yellow-400 sm:px-8 sm:text-base"
    >
      <i className="fa-regular fa-file"></i>&nbsp;&nbsp;Télécharger mon CV
    </a>
  );
}
