type Resultat = {
  [key: `Elu ${number}`]: string;
  [key: `Nom candidat ${number}`]: string;
  [key: `Prénom candidat ${number}`]: string;
  [key: `Nuance candidat ${number}`]: string;
};

export const findEluTour1 = (circo: Resultat) => {
  for (let i = 1; i <= 19; i++) {
    // @ts-ignore
    if (circo[`Elu ${i}`]) {
      return {
        // @ts-ignore
        name: `${circo[`Nom candidat ${i}`]} ${circo[`Prénom candidat ${i}`]}`,
        // @ts-ignore
        nuance: circo[`Nuance candidat ${i}`],
      };
    }
  }
};
