"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import getMenuEntries from "@/app/portfolio/components/navigation/MenuEntries";
import { Squash as Hamburger } from "hamburger-react";
import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";

export default function Menubar() {
  const current_path = usePathname();
  const entries = getMenuEntries(current_path);
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="relative z-50 flex justify-between pr-2 font-medium text-white md:py-5">
      <span></span>
      <nav>
        <span className="hidden lg:block">
          <MenubarDesktop entries={entries} />
        </span>
        <span className="hidden max-lg:block">
          <MenubarMobile entries={entries} isOpen={isOpen} setOpen={setOpen} />
        </span>
      </nav>
    </header>
  );
}

const MenubarDesktop = ({
  entries,
}: {
  entries: {
    url: string;
    name: string;
    alternate_name: string;
    className: string;
    sidebarClassName: string;
    icon: string;
    active: boolean;
  }[];
}) => {
  return renderEntriesForDesktop(entries);
};
const MenubarMobile = ({
  entries,
  isOpen,
  setOpen,
}: {
  entries: {
    url: string;
    name: string;
    alternate_name: string;
    className: string;
    sidebarClassName: string;
    icon: string;
    active: boolean;
  }[];
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <span className="relative z-50">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </span>
      {isOpen && renderEntriesForMobile(setOpen, entries)}
    </>
  );
};

const renderEntriesForMobile = (
  setOpen: Dispatch<SetStateAction<boolean>>,
  entries: {
    url: string;
    name: string;
    alternate_name: string;
    className: string;
    sidebarClassName: string;
    icon: string;
    active: boolean;
  }[],
) => {
  return (
    <motion.span
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ scale: 0 }}
      transition={{ ease: "easeInOut", duration: 0.2 }}
      onClick={() => setOpen(false)}
      className="fixed left-0 top-0 z-40 flex h-full w-full flex-col items-center justify-center justify-items-center bg-black/90 py-24"
    >
      {entries.map((item, key) => (
        <Link
          key={key}
          href={item.url}
          className={
            "m-auto flex h-14 w-3/4 items-center justify-center justify-items-center bg-slate-500/75 hover:underline " +
            (item.active ? "underline decoration-yellow-400" : "") +
            (item.className ? item.className : "")
          }
        >
          {item.icon ? <i className={item.icon}></i> : item.name}
        </Link>
      ))}
    </motion.span>
  );
};

const renderEntriesForDesktop = (
  entries: {
    url: string;
    name: string;
    alternate_name: string;
    className: string;
    sidebarClassName: string;
    icon: string;
    active: boolean;
  }[],
) => {
  return (
    <span>
      {entries.map((item, key) => (
        <Link
          key={key}
          href={item.url}
          className={
            "px-3 py-2 hover:underline " +
            (item.active ? " " + "underline decoration-yellow-400" : " ") +
            (item.className ? " " + item.className : " ")
          }
        >
          {item.icon ? <i className={item.icon}></i> : item.name}
        </Link>
      ))}
    </span>
  );
};
