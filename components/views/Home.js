import html from "html-literal";

import home1 from "../../Lib/home1.webp";
import Home2 from "../../Lib/Home2.webp";
import home3 from "../../Lib/home3.webp";
export default () => html`
  <div class="container">
    <div class="header2">
      <h1>Sally Hoffmann Photography</h1>

      <img src="${home1}" height="350px" display="inline-block" />
      <img src="${Home2}" height="350px" display="inline-block" />
      <img src="${home3}" height="350px" padding="150px" />

      <h2>A FAMILY PHOTOGRAPHER IN ST. LOUIS, MISSOURI.</h2>

      <div class="welcome">
        <h3>I AM A STORYTELLER.</h3>

        <h4>YOUR STORY STARTS HERE.</h4>

        <p>
          I am Sally, a St. Louis Photographer. I emphasize in Family
          Photography as well as Children's Photography. I focus on the
          connection you share with your favorite people and how you feel when
          you are around them. I tell YOUR story. I love to think of photographs
          as our very own personal time machine. And as such, it makes them
          timeless. I started my photography journey because of my passion to
          capture the growth of my own child. So as a mom, I understand that
          time flies in the blink of an eye and all I want to do is hold time
          still so I can enjoy every chapter in my child's life.
        </p>
      </div>
    </div>
  </div>
`;
