
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

export function calculRemise(nb){
    if(nb > 10) return 10;
    return 0
}

// {id : 1 , nom : "alain" , nb : 20 , montant : 100}
export const remise = (profil) => { 
    const montant = calculRemise(profil.nb)
    return (100 - montant) / 100 * profil.montant; 
}