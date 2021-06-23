import html from "html-literal";

import Insta1 from "../Lib/Insta1.png";
import fb from "../Lib/fb.png";
import linked from "../Lib/linked.png";
export default () => html`
  <footer>
    <div class="fixed-footer">
      <div class="container">
        <a target="_blank" href="https://www.instagram.com/sally.hoff27/">
          <img src="${Insta1}" height="40px" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/sallyhoffmann/">
          <img src="${linked}" height="40px" />
        </a>
        <a target="_blank" href="https://www.facebook.com/sally.hoffmann">
          <img src="${fb}" height="40px" padding="10px" />
        </a>

        Copyright &copy; 2021 Sally Hoffmann Photgraphy
      </div>
    </div>
  </footer>
`;
