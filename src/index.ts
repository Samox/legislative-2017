import electionjson from "../legislativetour1.json";
import { findEluTour1 } from "./helpers/findFirstTour";

electionjson.forEach((data) => {
  const elu = findEluTour1(data);
  if (elu) {
    console.log(
      `${elu.nuance} - ${data["Libellé département"]} - ${data["Libellé circonscription législative"]} - ${elu.name}`
    );
  }
});
