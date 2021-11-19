const btnorchids = document.querySelector("#btnorchids");
const container = document.querySelector("#container");

$(btnorchids).click(function(){
    var esperar = 2000;

    $.ajax({
        url: 'pages/category.html',
        beforeSend: function(){
            $(container).text("Cargando...");
        },
        success: function(data){
            setTimeout(function(){
                $(container).html(data);
            },esperar
            );

        }
    })
})

