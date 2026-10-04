import { useEffect } from "react";

// Custom hook to observe an element and run a callback
// whenever the element enters the viewport.
export function useIntersection(ref, onIntersect) {
  useEffect(() => {
    const el = ref.current;

    if (el === null) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [ref, onIntersect]);
}