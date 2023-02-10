// Adding icons https://fontawesome.com/docs/web/use-with/vue/add-icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default (): void => {
  library.add(faTimes, faChevronLeft, faChevronRight);
};
