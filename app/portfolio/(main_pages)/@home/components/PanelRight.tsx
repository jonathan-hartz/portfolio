import Portrait from "@/app/portfolio/(main_pages)/@home/components/Portrait";
import DownloadButton from "./DownloadButton";
import LinkedinButton from "./LinkedinButton";

export default function PanelRight() {
  return (
    <div className="flex flex-col items-center justify-end">
      <span className="hidden md:mb-4 md:block">
        <Portrait />
      </span>
      <div className="flex flex-col gap-2 pt-1 text-center sm:w-2/3 sm:flex-col">
        <DownloadButton />
        <LinkedinButton />
      </div>
    </div>
  );
}
