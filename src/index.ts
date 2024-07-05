import electionjson from "../legislativetour1.json";
import { findEluTour1, findFirstSecondThird } from "./helpers/findFirstTour";

const resultats: Record<string, number> = {};

electionjson.forEach((data) => {
  const elu = findEluTour1(data);
  if (elu) {
    console.log(
      `${elu.nuance} - ${data["Libellé département"]} - ${data["Libellé circonscription législative"]} - ${elu.name} - ${elu.result}`
    );
    resultats[elu.nuance] = (resultats[elu.nuance] || 0) + 1;
  } else {
    const { candidates, vainqueur } = findFirstSecondThird(data);
    resultats[vainqueur.nuance] = (resultats[vainqueur.nuance] || 0) + 1;
    console.log(
      `${data["Libellé département"]} - ${data["Libellé circonscription législative"]} - Vainqueur ${vainqueur.nuance} - ${vainqueur.name} - ${candidates[0].name} - ${candidates[0].nuance} - ${candidates[0].voix} - ${candidates[1].name} - ${candidates[1].nuance} - ${candidates[1].voix} - ${candidates[2].name} - ${candidates[2].nuance} - ${candidates[2].voix}`
    );
  }
});

console.log(resultats);
