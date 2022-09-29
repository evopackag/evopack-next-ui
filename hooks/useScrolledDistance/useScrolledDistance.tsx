import { useEffect, useState } from "react";

export default function useScrolledDistance(
  triggerScrollDistance: number,
  trueValue: any,
  ref: any,
  falseValue?: any
) {
  const [scrolledDistance, setScrolledDistance] = useState(0);
  const [returnedValue, setReturnedValue] = useState(falseValue || "none");

  useEffect(() => {
    const updateAnimationRelease = () => {
      function recordScrollDistance() {
        setScrolledDistance(ref.current.getBoundingClientRect().top);
      }
      window.addEventListener("scroll", recordScrollDistance);

      setScrolledDistance(ref.current.getBoundingClientRect().top);

      setReturnedValue(
        scrolledDistance > triggerScrollDistance ? falseValue : trueValue
      );

      const returnValue =
        scrolledDistance > triggerScrollDistance ? trueValue : falseValue;

      return returnedValue;
    };
    window.addEventListener("scroll", updateAnimationRelease);

    return () => {
      window.removeEventListener("scroll", updateAnimationRelease);
    };
  }, [scrolledDistance]);

  // function recordScrollDistance(e: Event) {
  //   setScrolledDistance(ref.current.getBoundingClientRect().y);
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", recordScrollDistance);

  //   return () => {
  //     window.removeEventListener("scroll", recordScrollDistance);
  //   };
  // });

  const returnValue =
    scrolledDistance > triggerScrollDistance ? trueValue : falseValue;
  return returnedValue;
}
