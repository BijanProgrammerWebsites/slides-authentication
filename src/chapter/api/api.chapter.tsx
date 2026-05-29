import type { ReactNode } from "react";

import { Slide } from "@revealjs/react";

import apiInGeneralImage from "@/assets/images/api/api-in-general.webp";
import apiInNetworkImage from "@/assets/images/api/api-in-network.webp";
import apiInWebImage from "@/assets/images/api/api-in-web.webp";
import serverAndClientsImage from "@/assets/images/api/server-and-clients.webp";

import ImageSlide, { ImageSize } from "@/slides/image/image.slide";

export default function ApiChapter(): ReactNode {
  const heading = "API" as const;

  return (
    <Slide>
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={apiInGeneralImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="Application Programming Interface"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={apiInNetworkImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="API in Network"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={serverAndClientsImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="Server & Clients"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={apiInWebImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="API in Web"
      />
    </Slide>
  );
}
