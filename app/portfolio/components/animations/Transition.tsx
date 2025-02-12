"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { isPreviousPageBeforeCurrentPage } from "@/app/portfolio/components/navigation/MenuEntries";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const getVariants = (
  isTheScrollBottomToTop: boolean,
  isANewNavigation: boolean,
  isTheSamePage: boolean,
) => {
  const variants = {
    initial: {},
    animate: {},
    exit: {},
  };
  if (isTheSamePage) return variants;
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

  useEffect(() => {
    document
      .querySelectorAll(".aos-animate")
      .forEach((element) => element.classList.remove("aos-animate"));

    setTimeout(
      () => {
        AOS.init({
          duration: 400, // Global animation duration
          easing: "ease-in-out-quart",
          offset: 0,
          once: false,
          disable: () => {
            return (
              current_page_pathname != "/portfolio" && window.innerWidth < 768
            );
          },
        });
      },
      current_page_pathname != "/portfolio" && window.innerWidth < 768
        ? 0
        : 400,
    );
  }, [current_page_pathname]);
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
  const variants = getVariants(
    isTheScrollBottomToTop,
    isANewNavigation,
    previous_page_pathname == current_page_pathname,
  );

  return (
    <>
      <motion.div
        onViewportEnter={() => {}}
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
