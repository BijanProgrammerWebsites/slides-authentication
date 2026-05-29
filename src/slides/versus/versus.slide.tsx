import { Fragment, ReactElement } from "react";

import BaseSlide, { BaseSlideProps } from "@/slides/base/base.slide";

import styles from "./versus.module.css";

type Column = {
  heading: string;
  imageSrc: string;
  description: string;
};

type Props = BaseSlideProps & {
  columns: [Column, Column];
};

export default function VersusSlide({
  columns,
  ...baseSlideProps
}: Props): ReactElement {
  return (
    <BaseSlide {...baseSlideProps}>
      <div className={styles.versus}>
        {columns.map((column, index) => (
          <Fragment key={index}>
            <div className={styles.heading}>{column.heading}</div>
            <img src={column.imageSrc} alt="" />
            <p>{column.description}</p>
          </Fragment>
        ))}
      </div>
    </BaseSlide>
  );
}
