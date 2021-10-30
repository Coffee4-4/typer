

var frase =
    //função jquery ($)>seletor>argumento
    $(".frase").text();
var numPalavras = frase.split(" ").length;

var tamanhoFrase = $("#tamanho-frase").
    //text pode receber um valor se estiver sem argumento, se receber um argumento substitui o valor
text(numPalavras);

var campo = $(".campo-digitacao");
//evento de escuta ON, (TIPO DO EVENTO), (FUNCAO)
//click pega um evento de click
//input pega um evento de digitação
campo.on("input",function (){
    //quando queremos pegar um valor de um campo input precisamos utilizar um .val()
    var conteudo = campo.val();
    // expressão regular que busca qualquer evento de espaço /\S+/
    var qtdPalavras = conteudo.split(/\S+/).length -1;
    $("#contador-palavras").text(qtdPalavras);

    var qtdCaracter = conteudo.length;
    $("#contador-caracteres").text(qtdCaracter);
})

