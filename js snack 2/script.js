document.getElementById('trol').addEventListener('click', pollo);

function pollo(){
    let lunghezzaArrey = document.getElementsByClassName('numb').length
    let numeriDispari = []
    for (let i = 0; i < lunghezzaArrey; i++) {
        if (document.getElementsByClassName('numb')[i].value % 2){
            numeriDispari.push(document.getElementsByClassName('numb')[i].value)
        }
    }
    console.log(numeriDispari)
}



