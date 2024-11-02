"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { isPreviousPageBeforeCurrentPage } from "@/app/portfolio/components/navigation/MenuEntries";

const getVariants = (isTheScrollBottomToTop: boolean) => {
  return {
    initial: {
      y: isTheScrollBottomToTop ? 1500 : -1500,
      opacity: 0.5,
    },
    animate: { y: 0, opacity: 1 },
    exit: {
      y: isTheScrollBottomToTop ? -1500 : 1500,
      opacity: 0.5,
    },
  };
};

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  const current_page_pathname = usePathname();
  let isTheScrollBottomToTop = false;
  let previous_page_pathname = null;
  if (typeof window !== "undefined")
    previous_page_pathname = localStorage.getItem("previousPage");

  if (
    previous_page_pathname != null &&
    current_page_pathname != previous_page_pathname
  ) {
    isTheScrollBottomToTop = isPreviousPageBeforeCurrentPage(
      current_page_pathname,
      previous_page_pathname,
    );
  }
  const variants = getVariants(isTheScrollBottomToTop);

  return (
    <>
      <motion.div
        initial={variants.initial}
        animate={variants.animate}
        exit={variants.exit}
        transition={{ ease: "easeInOut", duration: 0.4 }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </>
  );
}
