"use client";
import getMenuEntries from "@/app/portfolio/components/navigation/MenuEntries";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Sidebar() {
  const current_path = usePathname();
  const entries = getMenuEntries(current_path);
  {
    return (
      <div className="absolute right-8 top-0 hidden h-full flex-col justify-center xl:flex">
        {entries.map((item, key) => (
          <Link
            key={key}
            href={item.url}
            className={
              "mb-3 rounded-sm border-2 border-solid bg-gradient-to-b from-blue-700 to-violet-700 p-3 text-center font-extrabold" +
              " " +
              (item.active
                ? "scale-125 border-yellow-300 transition-transform"
                : "border-blue-600") +
              (item.sidebarClassName ? " " + item.sidebarClassName : " ")
            }
          ></Link>
        ))}
      </div>
    );
  }
}
