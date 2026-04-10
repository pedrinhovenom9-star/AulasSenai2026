function carregar(){
    //Buscando os obj da primeira div e img
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours;
    msg.innerHTML = `Agora são ${hora} horas`
}