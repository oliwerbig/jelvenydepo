"use client";

import React from "react";
import { useParallax } from "react-scroll-parallax";
import YouTube, { YouTubeProps } from "react-youtube";

interface Props {
  zIndex?: number;
  className?: string;
  [key: string]: any;
}
const ParallaxVideo = ({ zIndex, className, ...rest }: Props) => {
  const parallax = useParallax({
    speed: -100000,
  });

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      loop: 1,
      muted: 1,
      controls: 0,
    },
  };

  return (
    <div
      {...rest}
      ref={parallax.ref as React.RefObject<HTMLDivElement>}
      className={`relative -z-10 z-[${zIndex}] -mb-[100vh] flex h-screen items-center justify-center overflow-hidden ${className}`}
    >
      <div className={`absolute min-h-full w-auto min-w-full max-w-none`}>
        <YouTube
          videoId="h-BzKPqOv9g"
          opts={opts}
          onReady={onPlayerReady}
        ></YouTube>
      </div>
    </div>
  );
};

export default ParallaxVideo;
