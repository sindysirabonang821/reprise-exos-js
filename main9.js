let nombre =parseInt(prompt("veuiller saisire un nombre"))
let fact=1;
if(nombre<1){
    alert("saisiser un nombre positif")
}
else{
    for(let i = 1; i<= nombre; i++){
        fact*=i;
    }
    alert(fact);
}
