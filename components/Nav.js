import html from "html-literal";

export default links => html`
  <div class="fixed-header">
    <div class="container">
      <nav>
        ${links.map(
          link =>
            `<a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a>`
        )}
      </nav>
    </div>
  </div>
`;
