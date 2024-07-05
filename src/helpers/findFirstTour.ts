type Resultat = {
  [key: `Elu ${number}`]: string;
  [key: `Nom candidat ${number}`]: string;
  [key: `Prénom candidat ${number}`]: string;
  [key: `Nuance candidat ${number}`]: string;
  [key: `Voix ${number}`]: string;
  [key: `% Voix/inscrits ${number}`]: string;
};

export const findEluTour1 = (circo: Resultat) => {
  for (let i = 1; i <= 19; i++) {
    if (circo[`Elu ${i}`]) {
      return {
        name: `${circo[`Nom candidat ${i}`]} ${circo[`Prénom candidat ${i}`]}`,
        nuance: circo[`Nuance candidat ${i}`],
        result: parseInt(circo[`% Voix/inscrits ${i}`]),
      };
    }
  }
};

type Candidate = {
  voix: number;
  result: number;
  name: string;
  nuance: string;
};

export const findFirstSecondThird = (circo: Resultat) => {
  const candidats = [];
  for (let i = 1; i <= 19; i++) {
    candidats.push({
      voix: parseInt(circo[`Voix ${i}`]),
      result: parseInt(circo[`% Voix/inscrits ${i}`]),
      name: `${circo[`Prénom candidat ${i}`]} ${circo[`Nom candidat ${i}`]}`,
      nuance: circo[`Nuance candidat ${i}`],
    });
  }
  candidats.sort((a, b) => b.voix - a.voix);
  let vainqueur = candidats[0];
  const RNEnTete = vainqueur.nuance === "RN";
  if (RNEnTete) {
    const second = candidats[1];
    const troisieme = candidats[2];

    if (
      troisieme != undefined &&
      !isUnGrosFDP(troisieme) &&
      troisieme.voix + second.voix > vainqueur.voix
    ) {
      vainqueur = second;
    }
  }
  return { candidates: candidats, vainqueur };
};

const isUnGrosFDP = (candidate: Candidate) => {
  const grosFDP = [
    "Anne-Laurence Petel", // Renaissance
    "Emilie Chandler", // Renaissance
    "Graig Monetti", // Horizon
    "Dominique Despras", // Modem
    "Romain Lefebvre", // LR
    "Emmanuelle Anthoine", // LR
    "Maxime Minot", // LR
    "Nathalie Serre", // LR
    "Fabrice Brun", // DVD
    "Valérie Simonet", // DVD
    "Gilles Platret", // DVD
  ].map((name) => name.toLowerCase());
  const isUnGrosFDP = grosFDP.includes(candidate.name.toLowerCase());
  if (isUnGrosFDP) {
    console.log("ca c'est un gros FDP", candidate.name);
  }
  return isUnGrosFDP;
};
