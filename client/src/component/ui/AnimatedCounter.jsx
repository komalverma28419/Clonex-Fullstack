import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const AnimatedCounter = ({
  end,
  suffix = "",
  numberClassName = "",
  suffixClassName = "",
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 3000;
    const increment = end / (duration / 30);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
  <span ref={ref} >
    <span className={`text-dark dark:text-white font-bold ${numberClassName}`}>
      {count.toLocaleString()}
    </span>

    <span className={`font-medium ${suffixClassName} `}>
      {suffix}
    </span>
  </span>
);
};

export default AnimatedCounter;