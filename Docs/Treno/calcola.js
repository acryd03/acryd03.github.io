function calcola(){
var nPersone, costoPB, kil;

kil= document.getElementById("chilometri").value;
var scelta=document.getElementById("qPersone").selectedIndex;
switch(scelta){
	case 0:
	nPersone =1;
	break;
	case 1:
	nPersone =2;
	break;
	case 2:
	nPersone =3;
	break;
	case 3:
	nPersone =4;
	break;
	case 4:
	nPersone =5;
	break;
	case 5:
	nPersone =6;
	break;
}
        if (document.getElementById("classe1").checked)
        {
            costoPB=0.43*kil;
        }
		if (document.getElementById("classe2").checked)
        {
            costoPB=0.23*kil;
        }




document.getElementById("costo").innerHTML= "Il costo per biglietto è "+costoPB+" mentre il costo totale è " +costoPB*nPersone;
}


