import { ReactElement } from "react";

import { Slide } from "@revealjs/react";

import BaleLogo from "@/icons/BaleLogo";
import HandDrawnArrow1 from "@/icons/HandDrawnArrow1";
import HandDrawnArrow2 from "@/icons/HandDrawnArrow2";
import HandDrawnArrow3 from "@/icons/HandDrawnArrow3";
import HandDrawnArrow4 from "@/icons/HandDrawnArrow4";
import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";
import SimpleIconsAparat from "@/icons/SimpleIconsAparat";
import SimpleIconsBookstack from "@/icons/SimpleIconsBookstack";
import SimpleIconsLinkedin from "@/icons/SimpleIconsLinkedin";
import SimpleIconsYoutube from "@/icons/SimpleIconsYoutube";

import styles from "./closing.module.css";

export default function ClosingSlide(): ReactElement {
  return (
    <Slide>
      <header></header>
      <main className="r-stretch">
        <div dir="ltr" className={styles.closing}>
          <ul className={styles.socials}>
            <li>
              <div className={styles.title}>
                Let&apos;s Get to Know Each Other
              </div>
              <a
                className={styles.link}
                href="https://www.linkedin.com/in/bijanprogrammer"
                target="_blank"
              >
                <SimpleIconsLinkedin />
                BijanProgrammer
              </a>
              <HandDrawnArrow1 className={styles.arrow} />
            </li>
            <li>
              <div className={styles.title}>Join Our Wonderful Community</div>
              <a
                className={styles.link}
                href="https://t.me/Codective"
                target="_blank"
              >
                <MingcuteTelegramFill />
                Codective
              </a>
              <a
                className={styles.link}
                href="http://ble.ir/Codective"
                target="_blank"
              >
                <BaleLogo />
                Codective
              </a>
              <HandDrawnArrow4 className={styles.arrow} />
            </li>
            <li>
              <div className={styles.title}>Watch Some Awesome Content</div>
              <a
                className={styles.link}
                href="https://www.aparat.com/BijanProgrammer"
                target="_blank"
              >
                <SimpleIconsYoutube />
                BijanProgrammer
              </a>
              <a
                className={styles.link}
                href="https://www.youtube.com/@BijanProgrammer"
                target="_blank"
              >
                <SimpleIconsAparat />
                BijanProgrammer
              </a>
              <HandDrawnArrow3 className={styles.arrow} />
            </li>
            <li>
              <div className={styles.title}>Read Amazing Articles</div>
              <a
                className={styles.link}
                href="https://docs.codective.ir"
                target="_blank"
              >
                <SimpleIconsBookstack />
                docs.codective.ir
              </a>
              <HandDrawnArrow2 className={styles.arrow} />
            </li>
          </ul>
        </div>
      </main>
    </Slide>
  );
}
