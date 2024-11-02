import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  getNextPage,
  getPreviousPage,
} from "@/app/portfolio/components/navigation/MenuEntries";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

function handleSwipe(
  router: AppRouterInstance,
  current_page_pathname: string,
  isTopSwipe: boolean,
) {
  const previous_page = getPreviousPage(current_page_pathname);
  const next_page = getNextPage(current_page_pathname);

  if (
    (isTopSwipe && next_page?.url != "") ||
    (!isTopSwipe && previous_page?.url != "")
  ) {
    router.push(isTopSwipe ? next_page?.url : previous_page?.url);
    document.getElementById("mainLayout")?.scrollTo(0, 0);
  }
}

export function useSwipe(isAtScrollEdge) {
  const router = useRouter();
  const current_page_pathname = usePathname();
  useEffect(() => {
    let touchStart = 0;
    let touchEnd = 0;
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
      touchStart = e.targetTouches[0].clientY;
    };

    const onTouchMove = (e) => {
      touchEnd = e.targetTouches[0].clientY;
    };

    const onTouchEnd = (e) => {
      if (!touchStart || !touchEnd) return;

      const distance = touchStart - touchEnd;
      const isTopSwipe = distance > minSwipeDistance;
      const isBottomSwipe = distance < -minSwipeDistance;
      const { isAtTop, isAtBottom } = isAtScrollEdge();
      touchStart = touchEnd = 0;
      if ((isTopSwipe && isAtBottom) || (isBottomSwipe && isAtTop)) {
        handleSwipe(router, current_page_pathname, isTopSwipe);
      }
    };

    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [current_page_pathname]);
}
