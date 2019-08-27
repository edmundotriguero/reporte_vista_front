$(document).ready(function () {
    var sel = $("#sel");
    aux_nombre = [];
    aux_tiempo = [];
    aux_info_producto = [];
    // ----------------------------------

    

    // ----------------------------------
    $('#ver').click(function () {
        // agregar();
        // inicio prueba ajax 
        
        
        var datos = $("#datos");
        var route = "http://localhost:8000/hi/";
        
        $.ajax({
            url: route,
            type: 'GET',
            dataType: 'json',
            
            success: function(res){
                // console.log(res);
                // console.log(res.slice(0, 4))
                aux_info_producto = res.slice(0, 4)
                res = res.slice(5 )
                $(res).each(function(key,value){
               
                    
                    
                    if (value.includes('#')){
                        aux_tiempo.push(value.split("'")[1]) 
                        
                    }

                    if(!value.includes('#')){
                        aux_nombre.push(value)
                    }

                    
                   
                });
            }

            
            
        });
        // llenar_select();
        console.log('tes')
        sel.find('option').remove();
        for (i = 0; i < aux_nombre.length; i++) {
            
            // console.log(aux_nombre[i] + ' | '+ aux_tiempo[i]);
            sel.append('<option value="">'+ i +' | ' +aux_nombre[i] + ' | '+ aux_tiempo[i] + '</option>');
        }
        llenar_informacion_producto()
        aux_nombre = [];
        aux_tiempo = [];
        // fin prueba ajax
    });
});

       
    
function llenar_informacion_producto(){
    $('#nombre_producto').text( aux_info_producto[0].split('=')[1] )
    $('#hora_inicio').text( aux_info_producto[1].split('=')[1] )
    $('#hora_final').text( aux_info_producto[2].split('=')[1] )
    $('#horas_funcionamiento').text( aux_info_producto[3].split('=')[1] )

    $('#pauta_segundos').text( calculo_tiempo(aux_tiempo)[0])

    $('#horas').text( calculo_tiempo(aux_tiempo)[1])
    $('#minutos').text( calculo_tiempo(aux_tiempo)[2])
    $('#segundos').text( calculo_tiempo(aux_tiempo)[3])

}


function calculo_tiempo(aux_tiempo){
    var acum = 0
    var hora = 0
    var minuto = 0
    var segundo = 0
    var res = []
    var aux = 0
    for (j = 0; j<aux_tiempo.length; j++){
        // console.log(aux_tiempo[j])
        acum = acum + parseInt(aux_tiempo[j], 10)
    }
    res[0] = acum

    hora = Math.floor( acum / 3600 );  
    minuto = Math.floor( (acum % 3600) / 60 );
    segundo = acum % 60;

    //Anteponiendo un 0 a los minutos si son menos de 10 
    minuto = minuto < 10 ? '0' + minuto : minuto;
 
    //Anteponiendo un 0 a los segundos si son menos de 10 
    segundo = segundo < 10 ? '0' + segundo : segundo;
    res[1] = hora
    res[2] = minuto
    res[3] = segundo
    // console.log(acum)
    return res;

  }

// funcion para tener la lista completra que ordeno en el ejemplo.
function extraer_lista() {
    var playlist = [];
    $("#sel option").each(function(){
        playlist.push($(this).text())
        console.log($(this).text());
     });

     $.ajax({
        url: 'http://localhost:8000/api/reporte/',
        type: 'POST',
        dataType: 'json',
        data: {id: 3},
        success: function(res){
            console.log(res);
            
        }

        
        
    });
      
    
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