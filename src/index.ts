import electionjson from "../legislativetour1.json";
import { findEluTour1, findFirstSecondThird } from "./helpers/findFirstTour";

electionjson.forEach((data) => {
  const elu = findEluTour1(data);
  if (elu) {
    console.log(
      `${elu.nuance} - ${data["Libellé département"]} - ${data["Libellé circonscription législative"]} - ${elu.name}`
    );
  } else {
    const candidates = findFirstSecondThird(data);
    console.log(
      `${data["Libellé département"]} - ${data["Libellé circonscription législative"]} - ${candidates[0].name} - ${candidates[0].nuance} - ${candidates[1].name} - ${candidates[1].nuance} - ${candidates[2].name} - ${candidates[2].nuance}`
    );
  }
});
