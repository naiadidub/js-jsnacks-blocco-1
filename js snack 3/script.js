function send(){
    let valoreStringa = document.getElementById('number').value.toString();
    console.log(valoreStringa)
    if (valoreStringa.length != 4){
        alert('devi inserire un numero di 4 cifre')
    } else {
        let puntatore1 = 0
        let puntatore2 = 1
        let sliced = 0
        for (let i = 0; i < valoreStringa.length; i++){
            sliced += parseInt( valoreStringa.slice(puntatore1, puntatore2));
            puntatore1 += 1
            puntatore2 += 1
        }
        console.log(sliced)
    }
    
}