import { html } from "../../model/misc";
import "./background.scss";

export const generate = (
  count: number,
  color?: () => string,
  height?: () => number,
  transform?: () => string
): html => `
    <section class="background">
        ${
          count > 0
            ? new Array(count)
                .fill(0, 0, count)
                .map(
                  _ =>
                    `<div style="background-color: ${color()}; height: ${height()}px; transform: ${transform()}"></div>`
                )
                .join("")
            : ""
        }
    </section>
`;
