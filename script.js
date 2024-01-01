document.getElementById("retornarBotao").onclick = function () {
    location.href = "login.html";
};
function navigateTo(page) {
    location.href = page;
}
function toggleFavorite(button) {
    const heartIcon = button.querySelector('i.bi-heart');
    heartIcon.classList.toggle("bi-heart-fill");
    button.classList.toggle("favorited");
}
function updateHeadlines() {
    const headlines = [
        "Câmara aprova projeto que transforma Dia da Consciência Negra em feriado nacional.",
        "Senado aprova projeto que regulamenta o registro de agrotóxicos.",
        "Lula diz que papel do Brasil na Opep+ será o de alertar os produtores de petróleo para o fim dos combustíveis fósseis.",
        "Escalação do Flamengo: Filipe Luís será titular na despedida, e Varela treina no time principal.",
        "Rebeca Andrade bate Simone Biles e conquista a medalha de ouro na prova do salto.",
        "Surfistas encaram ondas de quatro metros na Praia do Leblon; veja.",
        "Ana Hickmann fala pela 1ª vez sobre o caso de agressão que sofreu do ex-marido.",
        "Taylor Swift: segundo show é adiado, por causa do calor extremo no Rio.",
        "Deixou para última hora? Veja inspirações de looks para os shows do RBD.",
        "Parcela do 13º salário deve ser usada para pagar dívidas, recomenda especialista.",
        "Banco Central da China divulga medidas para fortalecer economia.",
        "Guerra e pós-pandemia: estudo revela panorama da economia mundial e do Brasil."
    ];

    const h1Elements = document.querySelectorAll('.box h1');

    h1Elements.forEach((element, index) => {
        element.innerText = headlines[index];
    });
}

updateHeadlines();