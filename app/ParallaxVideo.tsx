"use client";

import React from "react";
import { useParallax } from "react-scroll-parallax";
import { useWindowSize } from "usehooks-ts";

interface Props {
  className?: string;
  [key: string]: any;
}
const ParallaxVideo = ({ className, ...rest }: Props) => {
  const windowSize = useWindowSize();

  const parallax = useParallax({
    speed: windowSize.width >= 1024 ? -1000 : 0,
  });

  return (
    <div
      {...rest}
      ref={parallax.ref as React.RefObject<HTMLDivElement>}
      className={`relative -z-10 -mb-[100vh] flex h-screen items-center justify-center overflow-hidden ${className}`}
    >
      <video
        className="absolute -z-10 min-h-full w-auto min-w-full max-w-none"
        controls
        autoPlay
        muted
        preload="auto"
        loop
      >
        <source src="/media/jelvenydepo/muhely_cut.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default ParallaxVideo;
