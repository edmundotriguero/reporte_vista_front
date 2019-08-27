$(document).ready(function () {
    
    
});



    $('#ver').click(function () {
        // agregar();
        // inicio prueba ajax 
        
        
        var datos = $("#datos");
        var route = "http://localhost:8000/hi";
        
        $.ajax({
            url: route,
            // headers: {'X-CSRF-TOKEN': token},
            type: 'GET',
            dataType: 'json',
            // data: {idlote: idlote},
            success: function(res){
                
                // $(res).each(function(key,value){
                // datos.append("<tr class='fila'><td>"+(key+1)+"</td><td>"+value.lote+" - "+value.producto+" - "+value.categoria+"</td><td>"+value.sucursal+"</td></tr>")
            // });
            }
        });
         
        // $.get(route, function(res){
        // 	$(res).each(function(key,value){
        // 		datos.append("<tr><td>"+value.categoria+"</td></tr>")
        // 	});
        // });
        // fin prueba ajax
    });


// funcion para tener la lista completra que ordeno en el ejemplo.
function extraer_lista() {

    $("#sel option").each(function(){
        console.log($(this).text());
     });
      
    // var valor = $("#sel option[value='3']").on();
    // (valor[0].text);
}




function arriba() {
    obj = document.getElementById('sel');
    indice = obj.selectedIndex;
    if (indice > 0) cambiar(obj, indice, indice - 1);
}
function abajo() {
    obj = document.getElementById('sel');
    indice = obj.selectedIndex;
    if (indice != -1 && indice < obj.length - 1)
        cambiar(obj, indice, indice + 1);
}
function cambiar(obj, num1, num2) {
    proVal = obj.options[num1].value;
    proTex = obj.options[num1].text;
    obj.options[num1].value = obj.options[num2].value;
    obj.options[num1].text = obj.options[num2].text;
    obj.options[num2].value = proVal;
    obj.options[num2].text = proTex;
    obj.selectedIndex = num2;
}