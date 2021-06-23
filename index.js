import { Nav, Main, Footer } from "./components";
import * as state from "./Store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo(window.location.origin);

router
  .on({
    ":page": params => render(state[capitalize(params.page)]),
    "/": () => render(state.Home)
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
  `;
  router.updatePageLinks();
  apiCall();
  addEventListener(st);
}
function apiCall() {
  axios
    .get("https://api.sunrise-sunset.org/json?lat=121.6270&lng=190.1994")
    .then(response => {
      let sunrise = response.data.results.sunrise;
      console.log(sunrise);
      document.querySelector(".api").innerHTML = sunrise;
    });
}

function addEventListener(st) {
  if (st.view === "Form") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      // convert HTML elements to Array
      let inputList = Array.from(event.target.elements);
      // remove submit button from list
      inputList.pop();
      // construct new picture object
      let newPic = inputList.reduce((pictureObject, input) => {
        pictureObject[input.name] = input.value;
        return pictureObject;
      }, {});
      // add new picture to state.Gallery.pictures
      state.Portfolio.pictures.push(newPic);
      render(state.Portfolio);
    });
  }
}
