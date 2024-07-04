type Resultat = {
  [key: `Elu ${number}`]: string;
  [key: `Nom candidat ${number}`]: string;
  [key: `Prénom candidat ${number}`]: string;
  [key: `Nuance candidat ${number}`]: string;
  [key: `Voix candidat ${number}`]: string;
};

export const findEluTour1 = (circo: Resultat) => {
  for (let i = 1; i <= 19; i++) {
    if (circo[`Elu ${i}`]) {
      return {
        name: `${circo[`Nom candidat ${i}`]} ${circo[`Prénom candidat ${i}`]}`,
        nuance: circo[`Nuance candidat ${i}`],
      };
    }
  }
};

export const findFirstSecondThird = (circo: Resultat) => {
  const candidates = [];
  for (let i = 1; i <= 19; i++) {
    candidates.push({
      voix: parseInt(circo[`Voix candidat ${i}`]),
      name: `${circo[`Nom candidat ${i}`]} ${circo[`Prénom candidat ${i}`]}`,
      nuance: circo[`Nuance candidat ${i}`],
    });
  }
  candidates.sort((a, b) => b.voix - a.voix);
  return candidates;
};
