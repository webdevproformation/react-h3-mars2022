
export function add(tableau , valeur){
    tableau.push(valeur)
    return tableau ; 
}

export const valeurAbsolue = (chiffre) => {
    if(chiffre > 0) return chiffre ;
    if(chiffre < 0) return -chiffre ;
    return 0
  }

export const fizzBuzz = (chiffre) => {
    if(chiffre % 5 === 0 && chiffre % 3 === 0) return "FizzBuzz";
    if(chiffre % 5 === 0) return "Buzz";
    if(chiffre % 3 === 0) return "Fizz";
    return chiffre ;
}