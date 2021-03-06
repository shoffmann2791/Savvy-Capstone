import html from "html-literal";
import girlcamera from "../../Lib/girlcamera.webp";
export default () => html`
  <div class="container">
    <div class="header2">
      <h2>Add a photo to the Portfolio!</h2>
    </div>
    <img src="${girlcamera}" height="300px" />
    <p>Below is a option to upload a quick photo to the image gallery!</p>

    <form id="register" method="POST" action="">
      <label for="url">Photo URL:</label>
      <input
        type="text"
        name="url"
        id="url"
        placeholder="Enter Photo URL"
        required
      />

      <div>
        <label for="title">Photo Title/Description:</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter Photo Description"
          required
        />
      </div>
      <input type="submit" name="submit" value="Submit Photo" />
    </form>
  </div>
`;
