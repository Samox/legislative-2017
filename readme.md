# Utilisation

```
npm install
npm run compute
```

# Source

Résultat du premier tour, [datagouv](https://www.data.gouv.fr/fr/datasets/elections-legislatives-des-30-juin-et-7-juillet-2024-resultats-provisoires-du-1er-tour/)

Candidats qui ne se retire pas au second tour, [source](https://www.liberation.fr/checknews/elections-legislatives-ces-candidats-qui-refusent-de-se-desister-face-au-rn-20240702_RK7MZN2PTJCNNJYHKPL7ROYOYM/)

# Heuristique

Dans les circonscriptions avec le RN en première position, j'ai fait l'hypothèse que le 3eme candidat se retire (sauf 10 exceptions) et j'ai sommé les résultats du 2nd et 3eme candidat, que je compare au premier candidat RN pour trouver le vainqueur. Dans toutes les autres situation, j'ai mis le meilleur candidat du premier tour en vainqueur.

Mes pronostiques:
UG 220
XDroite 150
Macronie 132
