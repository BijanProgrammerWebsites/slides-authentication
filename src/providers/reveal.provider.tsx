"use client";

import { PropsWithChildren, ReactElement } from "react";

import { Deck } from "@revealjs/react";
import ZoomPlugin from "reveal.js/plugin/zoom";

type Props = PropsWithChildren;

export default function RevealProvider({ children }: Props): ReactElement {
  return (
    <Deck
      config={{
        controlsLayout: "edges",
        slideNumber: "c/t",
        hashOneBasedIndex: true,
        hash: true,
        rtl: false,
        display: "grid",
        hideInactiveCursor: false,
        margin: 0.1,
      }}
      plugins={[ZoomPlugin]}
      className="reveal"
    >
      {children}
    </Deck>
  );
}
