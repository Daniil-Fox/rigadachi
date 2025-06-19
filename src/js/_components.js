import "./components/fancy.js";
import "./components/map.js";
import "./components/validation.js";
import "./components/aos.js";

import { initHeader } from "./components/header.js";
import { initAllSliders } from "./components/slider.js";
import { initInfraCards } from "./components/infra.js";
import { initModals } from "./components/modal.js";
import { burger } from "./functions/burger.js";
import { initClickAbout } from "./components/about.js";
import { initHistoryCards } from "./components/history.js";

import Rellax from "rellax";
const rellax = new Rellax(".rellax", { center: true });

initHeader();
initAllSliders();
initInfraCards();
initModals();
initClickAbout();
initHistoryCards();
