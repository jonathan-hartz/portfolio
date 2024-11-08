"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { isPreviousPageBeforeCurrentPage } from "@/app/portfolio/components/navigation/MenuEntries";

const getVariants = (
  isTheScrollBottomToTop: boolean,
  isANewNavigation: boolean,
) => {
  const variants = {
    initial: {},
    animate: {},
    exit: {},
  };
  if (!isANewNavigation) {
    variants.initial = {
      y: isTheScrollBottomToTop ? 1500 : -1500,
      opacity: 0.5,
    };
    variants.animate = { y: 0, opacity: 1 };
    variants.exit = { y: isTheScrollBottomToTop ? -1500 : 1500, opacity: 0.5 };
  }
  return variants;
};

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  const current_page_pathname = usePathname();
  let isTheScrollBottomToTop = false;
  let isANewNavigation = true;
  let previous_page_pathname = null;
  if (typeof window !== "undefined" && localStorage.getItem("previousPage")) {
    isANewNavigation = false;
    previous_page_pathname = localStorage.getItem("previousPage");
  }
  if (
    previous_page_pathname != null &&
    current_page_pathname != previous_page_pathname
  ) {
    isTheScrollBottomToTop = isPreviousPageBeforeCurrentPage(
      current_page_pathname,
      previous_page_pathname,
    );
  }
  const variants = getVariants(isTheScrollBottomToTop, isANewNavigation);

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
