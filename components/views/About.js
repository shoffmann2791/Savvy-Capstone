import html from "html-literal";

import Family from "../../Lib/Family.jpg";

export default () => html`
  <div class="container">
    <div class="header2">
      <h1>Hi, I'm Sally...</h1>
    </div>
    <img src="${Family}" height="350px" padding="250px" />

    <p>
      I am not an topnotch photographer. I am just a mom who loves taking photos
      of her child and realized that I was pretty good at it. As a mom, I am
      passionate about capturing my child at every milestone. These are moments
      I will never get back so I take photos every chance I can. My photography
      approach focuses on capturing the moments you share with people you
      cherish.
    </p>
    <p>
      To inquire about booking a session, send me a message on the form below
      and I will get back with you within 1-2 business days.
    </p>

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
  </div>
`;
