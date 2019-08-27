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


