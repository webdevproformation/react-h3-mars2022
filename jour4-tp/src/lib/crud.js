
export function add(tableau , valeur){
    tableau.push(valeur)
    return tableau ; 
}

export const valeurAbsolue = (chiffre) => {
    if(chiffre > 0) return chiffre ;
    if(chiffre < 0) return -chiffre ;
    return 0
  }