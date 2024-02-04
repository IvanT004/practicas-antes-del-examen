function comprobar(elementos){
    let estanCorrectos = true;
    for(var i=0; i<elementos.length;i++)
        document.getElementById("campo"+ (i+1).toString()).innerHTML = "";
    if(elementos[i].value == "" || (i==6 && !elementos[i].checked)){
        document.getElementById("campo"+(i+1).toString()).innerHTML = "El campo " + elementos[i].id + " está vacio"
        estanCorrectos = false;
    }
}