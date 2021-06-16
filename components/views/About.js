import html from "html-literal";

import Family from "../../Lib/Family.jpg";

export default () => html`
  <div class="container">
    <h1>HI, I AM SALLY.</h1>
    <img src="${Family}" height="350px" />
    <p>
      I am not an topnotch photographer. I am just a mom who loves taking photos
      of her child and realized that I was pretty good at it. As a mom, I am
      passionate about capturing my child at milestone. These are moments I will
      never get back so I take every advantage that I can. My photography
      approach focuses on capturing the moments you share with people you
      cherish.
    </p>
  </div>
  <div class="FORM">
    <form action="https://formspree.io/f/mwkabnrl" method="POST">
      <label>
        Your email:
        <input type="email" name="_replyto" />
      </label>
      <div>
        <label>
          Your message:
          <textarea name="message"></textarea>
        </label>
      </div>
      <!-- your other form fields go here -->

      <button type="submit">Send</button>
    </form>
  </div>
  <div class="fixed-footer">
    <div class="container">Copyright &copy; 2021 Savvy Coders</div>
  </div>
`;
