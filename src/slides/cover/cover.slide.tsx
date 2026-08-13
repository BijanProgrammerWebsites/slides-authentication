import { ReactElement } from "react";

import { Slide } from "@revealjs/react";

import qrCodeImage from "@/assets/images/qr-code.svg";

import styles from "./cover.module.css";

type Props = {
  heading: string;
  alias: string;
};

export default function CoverSlide({ heading, alias }: Props): ReactElement {
  return (
    <Slide>
      <div>
        <h1>{heading}</h1>
        <div>
          by{" "}
          <a
            href="https://www.linkedin.com/in/bijanprogrammer/"
            target="_blank"
          >
            BijanProgrammer
          </a>
        </div>
      </div>
      <div className={styles.link}>
        <img className="qr-code" src={qrCodeImage.src} alt="QR Code" />
        <a href={`https://schort.ir/${alias}`} target="_blank">
          schort.ir/{alias}
        </a>
      </div>
    </Slide>
  );
}
