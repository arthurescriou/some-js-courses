//Toutes les fonctions sont à faire de manière récursive
//Interdit d'utiliser list[n] pour accéder aux éléments des listes

//Une fonction prenant un tableau de number retournant la somme de ses nombres
const somme = ([first, ...rest]) => 0

//Une fonction prenant un tableau de number retournant un tableau sans les nombres impairs
const odd = ([first, ...rest]) => []

//Une fonction prenant un tableau de number retournant un tableau sans les nombres à des emplacement pairs (arr[0] arr[2])
const half = ([first, ...rest]) => []

//Une fonction réalisant le calcul de la factorielle (rappel: fact(3) = 1x2x3)
const fact = n => 0

//Une fonction réalisant le calcul de Fibonnaci (rappel: F(0) = 0, F(1) = 1, et F(n) = F(n - 1) + F(n - 2))
const F = n => 0

//Une fonction retournant la taille de la liste (interdit d'utiliser List.length ( c'est de la triche ))
const length = ([first, ...rest]) => 0

//Réécrire la fonction filter (f étant une fonction)
const filter = ([first, ...rest], f) => []

//Réécrire la fonction map (f étant une fonction)
const map = ([first, ...rest], f) => []

module.exports = {
  somme,
  odd,
  half,
  fact,
  F,
  length,
  filter,
  map,
}
