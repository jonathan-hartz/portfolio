"use client";

import { usePathname, useRouter } from "next/navigation";
import { isOnTheLastPage, getNextPage } from "./MenuEntries";

export default function ArrowBottom() {
  const current_path = usePathname();
  const next_page = getNextPage(current_path);
  const router = useRouter();

  const onclick = () => {
    router.push(next_page?.url);
    document.getElementById("mainLayout")?.scrollTo(0, 0);
  };

  if (!isOnTheLastPage(current_path))
    return (
      <span
        id="ArrowBottom"
        className="fixed bottom-0 left-0 z-50 flex w-full flex-row justify-center"
      >
        <span
          onClick={onclick}
          className="flex h-10 animate-bounce cursor-pointer items-center justify-center rounded-full bg-blue-600/80 px-4"
        >
          <i className="fa-solid fa-arrow-down"></i>
          &nbsp; &nbsp;Vers {next_page.title}&nbsp;&nbsp;
          <i className="fa-solid fa-arrow-down"></i>
        </span>
      </span>
    );
}
