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

export const findFirstSecondThird = (circo: Resultat) => {
  const candidats = [];
  for (let i = 1; i <= 19; i++) {
    candidats.push({
      voix: parseInt(circo[`Voix ${i}`]),
      result: parseInt(circo[`% Voix/inscrits ${i}`]),
      name: `${circo[`Nom candidat ${i}`]} ${circo[`Prénom candidat ${i}`]}`,
      nuance: circo[`Nuance candidat ${i}`],
    });
  }
  candidats.sort((a, b) => b.voix - a.voix);
  let vainqueur = candidats[0];
  const RNEnTete = vainqueur.nuance === "RN";
  if (RNEnTete) {
    const second = candidats[1];
    const troisieme = candidats[2];
    if (troisieme && troisieme.voix + second.voix > vainqueur.voix) {
      vainqueur = second;
    }
  }
  return { candidates: candidats, vainqueur };
};
