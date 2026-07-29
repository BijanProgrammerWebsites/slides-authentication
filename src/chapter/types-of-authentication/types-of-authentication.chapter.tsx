import { ReactElement } from "react";

import mfaImage from "@/assets/images/types-of-authentication/mfa.webp";
import otpImage from "@/assets/images/types-of-authentication/otp.webp";
import securityQuestionsImage from "@/assets/images/types-of-authentication/security-questions.webp";
import sfaImage from "@/assets/images/types-of-authentication/sfa.webp";
import ssoImage from "@/assets/images/types-of-authentication/sso.webp";
import totpImage from "@/assets/images/types-of-authentication/totp.webp";

import ImageSlide, { ImageSize } from "@/slides/image/image.slide";

export default function TypesOfAuthenticationChapter(): ReactElement {
  const heading = "Types of Authentication" as const;

  return (
    <section>
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={sfaImage.src}
        imageSize={ImageSize.MEDIUM}
        caption="Single-factor Authentication (SFA)"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={securityQuestionsImage.src}
        imageSize={ImageSize.MEDIUM}
        caption={"Two-factor Authentication (2FA)\nSecurity Questions"}
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={otpImage.src}
        imageSize={ImageSize.MEDIUM}
        caption={"Two-factor Authentication (2FA)\nOne-time Password (OTP)"}
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={totpImage.src}
        caption={
          "Two-factor Authentication (2FA)\nTime-based One-time Password (TOTP)"
        }
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={mfaImage.src}
        caption="Multi-factor Authentication (MFA)"
      />
      <ImageSlide
        isAutoAnimated={true}
        heading={heading}
        imageSrc={ssoImage.src}
        caption="Single Sign-on (SSO)"
      />
    </section>
  );
}
