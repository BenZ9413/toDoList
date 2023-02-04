import { createHeader } from "./landingPageHTML";
import { createMain } from "./landingPageHTML";
import { createFooter } from "./landingPageHTML";
import { addButtonFunctionalityToLandingPage } from "./btnEventHandler";

const loadLandingPage = function () {
  createHeader();
  createMain();
  createFooter();
  addButtonFunctionalityToLandingPage();
};

export default loadLandingPage;
