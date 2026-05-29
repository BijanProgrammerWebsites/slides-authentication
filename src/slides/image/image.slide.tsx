import { ReactElement } from "react";

import BaseSlide, { BaseSlideProps } from "@/slides/base/base.slide";

import styles from "./image.module.css";

export enum ImageSize {
  LARGE = "large",
  MEDIUM = "medium",
  SMALL = "small",
}

type Props = BaseSlideProps & {
  imageSrc: string;
  imageSize?: ImageSize;
  caption: string;
};

export default function ImageSlide({
  imageSrc,
  imageSize = ImageSize.LARGE,
  caption,
  ...baseSlideProps
}: Props): ReactElement {
  return (
    <BaseSlide {...baseSlideProps}>
      <figure className={styles.figure}>
        <figcaption>{caption}</figcaption>
        <img className={styles[imageSize]} src={imageSrc} alt="" />
      </figure>
    </BaseSlide>
  );
}
