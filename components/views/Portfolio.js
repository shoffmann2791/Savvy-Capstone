import html from "html-literal";

export default st => html`
  <section id="Portfolio">
    ${st.pictures.reduce(
      (html, pic) =>
        html + `<img class="Image" src="${pic.url}" alt="${pic.title}">`,
      ``
    )}
  </section>
`;
