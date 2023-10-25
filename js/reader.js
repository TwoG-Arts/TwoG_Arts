
function incrementaVariabile() {
    if (contatore<lunghezzaArray-1){
        contatore=contatore+1;
        carosellino(contatore);
    }
    else{
        contatore=0;
        carosellino(contatore); 
    }
}
function decrementaVariabile() {
    if (contatore>0){
        contatore=contatore-1;
        carosellino(contatore);
    }else{
        contatore=lunghezzaArray -1;
        carosellino(contatore);
    }
}