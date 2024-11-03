import { usePathname, useRouter } from "next/navigation";
import { MutableRefObject, useEffect, useRef } from "react";
import {
  getNextPage,
  getPreviousPage,
} from "@/app/portfolio/components/navigation/MenuEntries";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

function handleWheel(
  deltaY: number,
  lastScrollTime: MutableRefObject<number>,
  router: AppRouterInstance,
  current_page_pathname: string,
) {
  const previous_page = getPreviousPage(current_page_pathname);
  const next_page = getNextPage(current_page_pathname);
  const scrollToBottom = deltaY > 0;
  if (
    (scrollToBottom && next_page.url != "") ||
    (!scrollToBottom && previous_page.url != "")
  ) {
    router.push(scrollToBottom ? next_page.url : previous_page.url);
    document.getElementById("mainLayout")?.scrollTo(0, 0);
  }
}

export function useDebouncedWheel(
  isAtScrollEdge: () => {
    isAtTop: boolean;
    isAtBottom: boolean;
  },
) {
  const router = useRouter();
  const lastScrollTime = useRef(0);
  const current_page_pathname = usePathname();

  useEffect(() => {
    localStorage.setItem("previousPage", current_page_pathname);

    const onWheel = (event: WheelEvent) => {
      const { isAtTop, isAtBottom } = isAtScrollEdge();
      const isTopSwipe = event.deltaY > 0;
      const isBottomSwipe = event.deltaY < 0;
      if ((isTopSwipe && isAtBottom) || (isBottomSwipe && isAtTop)) {
        setTimeout(() => {
          const currentTime = new Date().getTime();
          if (event.deltaY > 100 || event.deltaY < -100) {
            return false;
          }
          const scrollDelay =
            event.deltaY == -100 || event.deltaY == 100 ? 400 : 2100;
          if (currentTime - lastScrollTime.current < scrollDelay) {
            return false;
          }
          lastScrollTime.current = currentTime;
          handleWheel(
            event.deltaY,
            lastScrollTime,
            router,
            current_page_pathname,
          );
        }, 400);
      }
    };
    window.addEventListener("wheel", onWheel);

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, [current_page_pathname, isAtScrollEdge, router]);
}
