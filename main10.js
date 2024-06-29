let nombre1 = parseInt(prompt("entrez un nombre"));
let nombre2 = parseInt(prompt("entrez un nombre"));
if(nombre1 < nombre2){
    alert(`${nombre1} est plus petit que ${nombre2}`)
}
else if(nombre1 == nombre2){
    alert(`${nombre1} est egale a ${nombre2}`)
}
else if(nombre1 > nombre2){
    alert(`${nombre1} est superieure a ${nombre2}`);
}
else{
    alert("entrez un nombre!")
}