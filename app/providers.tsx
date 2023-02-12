"use client";

import { Provider as TextBalancer } from "react-wrap-balancer";
import { ParallaxProvider } from "react-scroll-parallax";

interface Props {
  children: React.ReactNode;
}
export function Providers({ children }: Props) {
  return (
    <TextBalancer>
      <ParallaxProvider>{children}</ParallaxProvider>
    </TextBalancer>
  );
}
