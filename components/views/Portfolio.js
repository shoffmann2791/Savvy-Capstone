import html from "html-literal";

export default st => html`
  <div class="header2">
    <h1>Portfolio</h1>
  </div>
  <div class="align">
    <section id="Portfolio">
      ${st.pictures.reduce(
        (html, pic) =>
          html + `<img class="Image" src="${pic.url}" alt="${pic.title}">`,
        ``
      )}
    </section>
  </div>
`;
