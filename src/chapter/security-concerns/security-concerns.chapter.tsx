import { ReactElement } from "react";

import captchaImage from "@/assets/images/security-concerns/captcha.webp";
import lazyLoadRoutesImage from "@/assets/images/security-concerns/lazy-load-routes.webp";
import recaptchaImage from "@/assets/images/security-concerns/recaptcha.webp";
import routeGuardsImage from "@/assets/images/security-concerns/route-guards.webp";
import tokenValidationImage from "@/assets/images/security-concerns/token-validation.webp";

import ImageSlide, { ImageSize } from "@/slides/image/image.slide";

export default function SecurityConcernsChapter(): ReactElement {
  const heading = "Security Concerns" as const;

  return (
    <section>
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={tokenValidationImage.src}
        caption="Fully Check Token Validity and Not Just Availability"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={routeGuardsImage.src}
        imageSize={ImageSize.SMALL}
        caption="Route Guards"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={lazyLoadRoutesImage.src}
        caption="Lazy Load Routes"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={captchaImage.src}
        imageSize={ImageSize.SMALL}
        caption="CAPTCHA"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={recaptchaImage.src}
        caption="reCAPTCHA"
      />
    </section>
  );
}
