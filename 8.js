

function risultato(){
	a=document.f.frt.value;
    var re=/^(\+|-|^)(\d+\.\d{2}$)/;
        
	if((a== "somma")&&(re.test(document.f.primo.value))){
		document.f.somma.value=parseFloat(document.f.primo.value)+parseFloat(document.f.secondo.value);
	}
	if(a== "differenza"){
		document.f.somma.value=parseFloat(document.f.primo.value)-parseFloat(document.f.secondo.value);
	}
	if(a== "prodotto"){
		document.f.somma.value=parseFloat(document.f.primo.value)*parseFloat(document.f.secondo.value);
	}
	if(a== "quoziente"){
		document.f.somma.value=parseFloat(document.f.primo.value)/parseFloat(document.f.secondo.value);
	}
	//ho aggiunto un commento
}