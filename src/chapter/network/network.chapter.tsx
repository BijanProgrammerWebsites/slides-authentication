import type { ReactNode } from "react";

import { Slide } from "@revealjs/react";

import internetImage from "@/assets/images/network/internet.webp";
import lanImage from "@/assets/images/network/lan.webp";
import manImage from "@/assets/images/network/man.webp";
import networkImage from "@/assets/images/network/network.webp";
import panImage from "@/assets/images/network/pan.webp";
import wanImage from "@/assets/images/network/wan.webp";

import ImageSlide, { ImageSize } from "@/slides/image/image.slide";

export default function NetworkChapter(): ReactNode {
  const heading = "Network" as const;

  return (
    <Slide>
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={networkImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="Network"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={panImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="Personal Area Network (PAN)"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={lanImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="Local Area Network (LAN)"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={manImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="Metropolitan Area Network (MAN)"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={wanImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="Wide Area Network (WAN)"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={internetImage.src}
        imageSize={ImageSize.LARGE}
        caption="International Network (Internet)"
      />
    </Slide>
  );
}
