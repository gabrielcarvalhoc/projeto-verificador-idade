function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.querySelector('div#res');

    // Pessoa mais velha viva atualmente tem 118 anos, portanto vamos incluir na validação

    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 0 || Number(fano.value) < (ano - 118)) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        
        if (fsex[0].checked) {
            genero = 'homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/foto-bebe-m.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'img/foto-adolescente-m.png');
            } else if (idade < 40) {
                img.setAttribute('src', 'img/foto-jovem-m.png');
            } else if (idade < 60) {
                img.setAttribute('src', 'img/foto-adulto-m.png');
            } else {
                img.setAttribute('src', 'img/foto-idoso-m.png');
            }       
        } else if (fsex[1].checked) {
            genero = 'mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/foto-bebe-f.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'img/foto-adolescente-f.png');
            } else if (idade < 40) {
                img.setAttribute('src', 'img/foto-jovem-f.png');
            } else if (idade < 60) {
                img.setAttribute('src', 'img/foto-adulto-f.png');
            } else {
                img.setAttribute('src', 'img/foto-idoso-f.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}