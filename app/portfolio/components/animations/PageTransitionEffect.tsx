"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";
import { useDebouncedWheel } from "./useDebouncedWheel";
import { useSwipe } from "./useSwipe";
function FrozenRouter({ children }: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  if (!frozen) {
    return <>{children}</>;
  }

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}
const isAtScrollEdge = () => {
  const container = window.document.querySelector("#mainLayout");
  const scrollTop = Math.round(container?.scrollTop || 0);
  const scrollHeight = Math.round(container?.scrollHeight || 0);
  const clientHeight = Math.round(container?.clientHeight || 0);
  const isAtTop = scrollTop === 0;
  const isAtBottom = scrollTop + clientHeight >= scrollHeight;
  return { isAtTop, isAtBottom };
};

const PageTransitionEffect = ({ children }: { children: React.ReactNode }) => {
  // The `key` is tied to the url using the `usePathname` hook.
  const current_page_pathname = usePathname();
  useDebouncedWheel(isAtScrollEdge);
  useSwipe(isAtScrollEdge);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={current_page_pathname}
        className="m-auto w-full overflow-hidden"
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionEffect;
