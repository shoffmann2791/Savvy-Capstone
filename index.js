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

function render(st = st.Home) {
  document.querySelector("#root").innerHTML = `
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}

  `;
  router.updatePageLinks();
}

axios
  .get("https://api.sunrise-sunset.org/json?lat=38.6270&lng=-90.1994")
  .then(response => {
    let sunrise = response.data.sunrise;
    console.log(sunrise);
    document.querySelector(".api").innerHTML = sunrise;
  });
