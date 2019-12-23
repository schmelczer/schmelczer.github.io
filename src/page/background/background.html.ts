import { html } from "../../model/misc";
import "./background.scss";
import { fixedSeedRandom } from "../../framework/helper";

export const generate = (
  count: number,
  probability: number,
  width: number,
  color: string,
  translateZ: number
): html => `
    <section class="background">
        ${new Array(count)
          .fill(0, 0, count)
          .map(_ =>
            fixedSeedRandom() < probability
              ? `<div style="width: ${width}px; height: ${width *
                  (fixedSeedRandom() + 0.1) *
                  10}px; background-color: ${color}; transform: translateZ(${translateZ}px) rotate(-20deg);"
                ></div>`
              : `<div class="gap"></div>`
          )
          .join("")}
    </section>
`;
