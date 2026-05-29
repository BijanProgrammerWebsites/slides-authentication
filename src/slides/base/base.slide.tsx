import { PropsWithChildren, ReactElement } from "react";

import { Slide } from "@revealjs/react";

export type BaseSlideProps = PropsWithChildren & {
  isAutoAnimated?: boolean;
  heading: string;
};

export default function BaseSlide({
  isAutoAnimated,
  heading,
  children,
}: BaseSlideProps): ReactElement {
  return (
    <Slide autoAnimate={!!isAutoAnimated}>
      <header>
        <h2>{heading}</h2>
      </header>
      <main className="r-stretch">{children}</main>
    </Slide>
  );
}
