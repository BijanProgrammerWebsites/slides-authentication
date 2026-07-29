import { ReactElement } from "react";

import clientCookieImage from "@/assets/images/cookies/client-cookie.webp";
import cookieHeaderImage from "@/assets/images/cookies/cookie-header.webp";
import serverCookieImage from "@/assets/images/cookies/server-cookie.webp";
import setCookieHeaderImage from "@/assets/images/cookies/set-cookie-header.webp";

import ImageSlide, { ImageSize } from "@/slides/image/image.slide";
import VersusSlide from "@/slides/versus/versus.slide";

export default function CookiesChapter(): ReactElement {
  const heading = "Cookies" as const;

  return (
    <section>
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={clientCookieImage.src}
        caption="Client Cookie"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={serverCookieImage.src}
        imageSize={ImageSize.SMALL}
        caption="Server Cookie"
      />
      <VersusSlide
        isAutoAnimated={true}
        heading={heading}
        columns={[
          {
            heading: "Set-Cookie Header",
            imageSrc: setCookieHeaderImage.src,
            description:
              "It is used to send a cookie from the server to the client.",
          },
          {
            heading: "Cookie Header",
            imageSrc: cookieHeaderImage.src,
            description: "Allows client to send cookies back to the server.",
          },
        ]}
      />
    </section>
  );
}
