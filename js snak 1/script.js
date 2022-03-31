let elencoinvitati = ['tonno lazaga', 'giacomo bosio', 'samur lolli', 'giangi brugainfetta', 'scabbia linari', 'cula chiari', 'ansa montenegro']

let nome = prompt('inserisci nome')
let statusInvito = ''
for (let i = 0; i < elencoinvitati.length; i++){
    if (nome == elencoinvitati[i]){
        statusInvito = `<h1> il tuo invito è valido! </h1>` 
        document.getElementById('miodiv').innerHTML = statusInvito
    } else {
        statusInvito = `<h1>spiacente, il tuo invito non è valido! </h1>` 
        document.getElementById('miodiv').innerHTML = statusInvito
    }
}
