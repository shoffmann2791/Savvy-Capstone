import html from "html-literal";

import Sally2 from "../Lib/Sally2.png";

export default links => html`
  <div class="fixed-header">
    <nav>
      <img src="${Sally2}" height="50px" />
      ${links.map(
        link =>
          `<a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a>`
      )}
    </nav>
  </div>
`;
