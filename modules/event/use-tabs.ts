import { RefObject, useCallback, useEffect } from "react";
import { EventTabsCollectionItem } from "@modules/event/types";

interface UseTabsProps {
  items: EventTabsCollectionItem[];
  tabsButtonsWrapperRef: RefObject<HTMLDivElement>;
  tabsContentWrapperRef: RefObject<HTMLDivElement>;
  tabIndicatorRef: RefObject<HTMLDivElement>;
}

export default function useTabs(props: UseTabsProps) {
  const { items, tabsButtonsWrapperRef, tabsContentWrapperRef, tabIndicatorRef } = props;
  useEffect(() => {
    tabIndicatorRef.current?.style?.setProperty("width", `${100 / items.length}%`);
    (tabsButtonsWrapperRef.current?.firstChild as HTMLButtonElement)?.classList?.add("active");
    (tabsButtonsWrapperRef.current?.firstChild as HTMLButtonElement)?.setAttribute("aria-selected", "true");
  }, [items, tabIndicatorRef, tabsButtonsWrapperRef]);

  const getTabButtons = useCallback(() => {
    return Array.from(tabsButtonsWrapperRef.current?.children ?? []).filter(
      ({ nodeName }) => nodeName === "BUTTON"
    ) as HTMLButtonElement[];
  }, [tabsButtonsWrapperRef]);

  useEffect(() => {
    const target = tabsContentWrapperRef.current;
    if (target) {
      const tabContainers = Array.from(target.children) as HTMLDivElement[];
      const observerOptions: IntersectionObserverInit = {
        root: target,
        threshold: 0.51
      };
      const observerCallback: IntersectionObserverCallback = (entries) => {
        target.style.removeProperty("height");
        const intersectingEntry = entries.find((entry) => entry.isIntersecting)?.target as HTMLDivElement | undefined;
        const setterHeight = intersectingEntry?.offsetHeight;
        const index = Number(intersectingEntry?.getAttribute("data-index") ?? 0);
        const buttons = getTabButtons();
        const btn = buttons[index] as HTMLButtonElement;
        tabIndicatorRef.current?.style?.setProperty("left", `${(100 / items.length) * index}%`);
        for (const button of buttons) {
          button.classList.remove("active");
          button.setAttribute("aria-selected", "false");
        }
        btn?.classList.add("active");
        btn?.setAttribute("aria-selected", "true");
        if (setterHeight) {
          target.style.setProperty("height", `${setterHeight}px`);
        }
      };
      const observer = new IntersectionObserver(observerCallback, observerOptions);
      for (const tabContainer of tabContainers) {
        observer.observe(tabContainer);
      }
      return () => observer.disconnect();
    }
    return;
  }, [items, getTabButtons, tabIndicatorRef, tabsContentWrapperRef]);
}
