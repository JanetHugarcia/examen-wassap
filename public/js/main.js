var chat=[];
var persona=$('#contacto').text();
var msgactual;
//socket
 var socket = io(); 
 socket.on('chat message', function (msg,hora,minuto) {
 	$('.chat-chat').append('<div class="msg"><div class="bubble message-out tail"><div class="message-text"><span class="emoji-text">'+msg+'</span><div class="message-meta"><span class="message-datetime chat-time">'+hora+':'+minuto+'</span></div></div></div></div>');
 	persona =$('#contacto').text();

	 for(var a=1;a<contacto.length;a++){
		 if(contacto[a].nombre==persona){
			 chat.push(msg);
			 msgactual=msg;
			 contacto[a].mensaje=chat;
		 }
	 }
	 
 });
 $('#m-wassap').keyup(function (evt) {
    if (evt.keyCode === 13) {
		var tiempo = new Date();
 		var hora = tiempo.getHours();
 		var minuto = tiempo.getMinutes();

     	socket.emit('chat message', $('#m-wassap').val(),hora,minuto);
     	$('#m-wassap').val('');
		alert("hola" );
    }
 });

$('.cont_inf').click(function(evt){
	var img = $(this).find('img').attr("src").substring(6);

	for(i in contacto){
		if(img===contacto[i].foto){
				$('#contacto').text(contacto[i].nombre);
 				$('#i-contacto').text(contacto[i].ultimo_mensaje);
 				$('#contacto-face').attr("src","image/"+contacto[i].foto);
 				$('.chat-chat').html('<div class="msg"><div class="bubble message-in tail"><div class="message-text"><span class="emojitext">'+contacto[i].ultimo_mensaje+'</span><div class="message-meta"><span class="message-datetime chat-time">'+contacto[i].hora+':'+contacto[i].minuto+'</span></div></div></div></div>');
				
				for(a in contacto[i].mensaje){
					$('.chat-chat').append('<div class="msg"><div class="bubble message-out tail"><div class="message-text"><span class="emojitext">'+contacto[i].mensaje[a]+'</span><div class="message-meta"><span class="message-datetime chat-time">'+contacto[i].hora+':'+contacto[i].minuto+'</span></div></div></div></div>');
					$(this).find('span.actual').text(contacto[i].mensaje[a]);
				}
			
		}
	}
	alert("mami ");
	chat=[];
	
});

	
// 	//_-------------
$( "#autocomplete" ).autocomplete({
	source: availableTags
});
$("#autocomplete").on("keyup",buscar);

function buscar(){
	var bloques = $('.cont_inf li:nth-child(2) span:first-child');
	var bloquesi = $('.cont_inf');
	var texto = $('#autocomplete').val();
	texto=texto.toLowerCase();
	bloques.show();
	for(var i=0;i<bloques.size();i++){
		var contenido = bloques.eq(i).text();
		contenido = contenido.toLowerCase();
		var index = contenido.indexOf(texto);
		if(index == -1){
			bloquesi.eq(i).hide();
		}else{
			bloquesi.eq(i).show();
		}
	}
}

$('#autocomplete').keyup(function (evt) {
	if (evt.keyCode === 13) {

	alert("mami ");

	}
});




