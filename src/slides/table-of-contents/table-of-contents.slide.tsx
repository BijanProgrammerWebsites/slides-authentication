import { ReactElement } from "react";

import BaseSlide from "@/slides/base/base.slide";

import styles from "./table-of-contents.module.css";

type Props = {
  contents: string[];
};

export default function TableOfContentsSlide({
  contents,
}: Props): ReactElement {
  return (
    <BaseSlide heading="Table of Contents">
      <ul className={styles["table-of-contents"]}>
        {contents.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    </BaseSlide>
  );
}
