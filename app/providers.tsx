"use client";

import { Provider as TextBalancer } from "react-wrap-balancer";

interface Props {
  children: React.ReactNode;
}
export function Providers({ children }: Props) {
  return <TextBalancer>{children}</TextBalancer>;
}
