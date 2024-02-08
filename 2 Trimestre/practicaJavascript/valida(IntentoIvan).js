function comprobar(campos){

    for(var i = 0; i < campos.length; i++){

        document.getElementById("campo"+i).innerHTML = "";

        if(campos[i].value == ""){

            document.getElementById("campo"+i).innerHTML = "El campo " + campos[i].id + " no puede estar vacio"
        }
       
    }
}