"use client";

import { ReactElement } from "react";

import dynamic from "next/dynamic";

import ApiChapter from "@/chapter/api/api.chapter";
import HttpChapter from "@/chapter/http/http.chapter";
import NetworkChapter from "@/chapter/network/network.chapter";

import ClosingSlide from "@/slides/closing/closing.slide";
import CoverSlide from "@/slides/cover/cover.slide";
import TableOfContentsSlide from "@/slides/table-of-contents/table-of-contents.slide";

const RevealProvider = dynamic(() => import("@/providers/reveal.provider"), {
  ssr: false,
});

export default function Home(): ReactElement {
  return (
    <RevealProvider>
      <CoverSlide heading="Authentication" basePath="/auth" />
      <TableOfContentsSlide contents={["Network", "API", "HTTP"]} />
      <NetworkChapter />
      <ApiChapter />
      <HttpChapter />
      <ClosingSlide />
    </RevealProvider>
  );
}
