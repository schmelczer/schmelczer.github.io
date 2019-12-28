import { html } from "../../model/misc";
import "./background.scss";

export const generate = (
  count: number,
  z?: () => number,
  color?: (z) => string,
  height?: () => number,
  isAnimated?: (index) => boolean,
  transform?: (z) => string
): html => {
  return `
    <section class="background">
        ${
          count > 0
            ? new Array(count)
                .fill(0, 0, count)
                .map(_ => z())
                .map(
                  (zValue, i) => `
                    <div class="${isAnimated(i) ? "animated" : ""}" style="
                        background-color: ${color(zValue)};
                        height: ${height()}px;
                        z-index: ${-zValue};
                        transform: ${transform(zValue)}"
                    ></div>
                `
                )
                .join("")
            : ""
        }
    </section>
`;
};
