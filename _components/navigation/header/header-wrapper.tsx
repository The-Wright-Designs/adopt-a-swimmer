"use client";

import useScrollPosition from "@/_utils/scroll-position";
import { useEffect, useState } from "react";
import Header from "./header";

const HeaderWrapper = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [scrollPosition]);

  return (
    <>
      <Header isScrolled={isScrolled} />
    </>
  );
};

export default HeaderWrapper;
