$(document).ready(function(){
    $(".fa-microphone").click(function(){
        agregarMensajesNuevosAlChat();
});
$("input.nuevo-mensaje").keydown(function(e){
            var code = e.keyCode || e.which;
            if(code == 13) { //Enter keycode
            agregarMensajesNuevosAlChat();
            }
        });

function agregarMensajesNuevosAlChat() {
        var mensaje = $(".nuevo-mensaje").val();
        $(".nuevos-chats").append("<div class='row'><div class='offset-m7 col m5 verde'><p>" + mensaje + "</p></div></div>");
        $('.nuevo-mensaje').val("");
    }

    $(".raymu").click(function(event) {
        window.open('conversacionespersonales.html','_self',false);
    });

    $(".perfil-principal").click(function(event) {
        window.open('index.html','_self',false);
    });

    $(".mariana").click(function(event) {
        alert("sorry");
    });

    $(".ana").click(function(event) {
        alert("denme mas tiempo xD");
    });
});

