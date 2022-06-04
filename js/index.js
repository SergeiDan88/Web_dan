var x = new Array();
$(document).ready(function(){
	
    $('#dialog').dialog({
        buttons: [{text: "Добавить", click: addDataToTable}],
        modal: true,
        autoOpen: false,
        width: 500
    });
    
    $('#show').button().click(function() {
        $('#dialog').dialog("open");
    });

    $('#close').button().click(function() {
        $('#result_fon').css("display", "none");
        $('#result_text').html("");
    });
    $('#show2').button().click(function() {
        $('#result_fon').css("display", "block");
        for(var i=0;i<x.length;i++){
            $('#result_text').append("<p>"+x[i]+"</p>");
        }
    });
    
    function addDataToTable() {
        $('#placeholder').hide();
        x.push($('#product').val()+" "+$('#color').val() +" "+ $('#count').val()+" "+ $('#weight').val() +" "+ $('#price').val() );
        $('<tr><td>' + $('#product').val() + '</td><td>' + $('#color').val() +
            '</td><td>' + $('#count').val() + '</td><td>' + $('#weight').val() +
            '</td><td>' + $('#price').val() + '</td></tr>').appendTo('#prods tbody');
			
        $('#dialog').dialog("close");
    }
			
});