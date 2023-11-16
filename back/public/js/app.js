$(document).ready(function() {

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    var opcoes = [
        "arrolar", "arrulhar", "assobiar", "bater", "berrar",
        "bramar", "bufar", "cantar", "chalrar", "chalrear",
        "chiar", "chichiar", "chirrear", "chirriar", "chorar",
        "crocitar", "estalar", "estrilar", "estrondar", "gargalhar",
        "gemer", "grasnar", "gritar", "guinchar", "guizalhar",
        "ladrar", "piar", "relinchar", "retinir", "rir",
        "roncar", "silvar", "soar", "suspirar", "sussurrar",
        "tilintar", "tinir", "tocar", "trilar", "uivar",
        "ulular", "urrar", "ziziar", "zumbir", "zunir",
        "soluço","grito de dor","grito de surpresa",
        "risada ou gargalhada","Aaah","choro",
        "animal arfando","nojo","espirro","desagrado",
        "tiro de revólver","bater com violência e ruído",
        "tiro de revólver Bam ou Bum!",
        "trovões ou explosão de bomba Baruuum",
        "choque causado por uma queda Bou",
        "bater","choro em história infantil ou humorística Buá",
        "batida em cabeça com objecto duro","queda",
        "sintonia de rádio","ruído eletrônico Bip",
        "soco no queixo","Gozo","explosão",
        "Corda de arco após soltar a flecha","cabeça com cabeça",
        "tiro","choque por queda","pontapé traseiro","vaia",
        "mola soltando","cabeça chocando","tiro","estrondear",
        "sensação de frio ou pavor Brrr","Booom",
        "eructação contida Bô","abelha voando",
        "choro","arroto","cricrilar",
        "mastigar Nhoc Nhac! ou Nhec!",
        "chapinhar","mastigar",
        "batida em objecto metálico",
        "tinir","aplaudir",
        "ligar ou desligar um aparelho Clic",
        "piscar de olhos Plic",
        "Animal agarrando um objeto repentinamente entre os dentes Tlum ou Vap! ou Vop!",
        "palmas","tosse por asfixia Oss ou Uss! Cof! ou Caf!",
        "quebrar","rachar","objeto grande caindo ou indo de encontro a outro",
        "colidir Crás","ranger","mastigar alimento torrado Croc Croc!",
        "moer","colidir","campainha Dim","gota caindo Pim","vôo curto de abelha",
        "soluço Ic","indecisão Ahn","soluço","indecisão",
        "suspiro de cansaço Ufa","rosnar","animal ou pessoa",
        "engasgo Glup","líquido sendo engolido","Ah Ah! Ah!",
        "riso de satisfação Eh Eh! ou Rê! Rê!","assobiar",
        "reflexão Hum","buzina Fom Fom!","vaia Uuu",
        "interrogação Hã ou Hem! ou Hein!","satisfação Hum",
        "riso de satisfação","interrogação","risinho de satisfação",
        "reflexão","buzina","riso ridículo Ih Ih! Ih! ou Ri! Ri! Ri!",
        "hoo","Boom","ruído surdo de objeto caindo Clunc ou Plunc! ou Tlunc!",
        "bater à porta Toc Toc!","boom ta","ruído surdo de objeto caindo",
        "batida","miado do felino Miau","satisfação","mugido de boi",
        "mastigar ruidosamente Nham Chomp!","miado de felino",
        "satisfação","mugido de búfalo","mastigada de animal grande",
        "suspiro de cansaço ou dor Ufa","espanto","grito de dor Ai Ow!",
        "suspiro de cansaço ou dor","espanto","grito de dor",
        "desabafo de dor","estalada carinhosa Tap Tap!","cuspir",
        "fruto caindo da árvore Plom","batida em objeto oco",
        "desaparecer ou aparecer de repente Puf","cansaço Puf Puf!",
        "soco Pou Whack!","expulsar ou chamar a atenção Psst",
        "ronronar Prrr","cuspir","gota caindo","batida em objeto oco",
        "rat","rugido de gorila em ação Grrr","relincho",
        "tocar (campainha)","tecido rasgando","rugido","rugir",
        "ribombar","travagem Iééé","suspiro Ai Ai!","escorregar",
        "fechar com força","pessoa ou animal babando","lambida Lamb Lamb!",
        "porta batendo","fechar com força","estalado","estalada",
        "beijo propriamente dito Mmm","beijocar","estalar",
        "estalar os dedos","snip rasg! riip!","roncar",
        "ronco","aspirar","aspirar","choro","porrada","soluçar",
        "ver Paw","ver Pow","pessoa ou objeto caindo na água",
        "queda na água","queda de objeto oco","ver Splash",
        "pessoa ou objeto caindo na água Tchá ou Chuá!",
        "espirrar (água)","queda de objeto oco Ploc ou Plopt! ou Plop!",
        "estalar","ranger","objecto queimando","objecto arremessado",
        "pistola de água","objecto cortar rapidamente","ver Zip",
        "pistola de água Tchuf","corneta Tarará","golpear",
        "bater com som surdo Tum tunc!","chicotada Plaft ou Pleft!",
        "cócegas Tic","tac","campainha sinos Blim","tilintar",
        "mola Tóim","objecto partindo","toque do telefone Trim ou Prim!",
        "risadinha entre dentes de desprezo Tss","vibrar","trinar",
        "corneta","pancada surda","chicotada",
        "exclamação de pele vermelha Ugh ou Ug!","huh","surpresa Hã",
        "Ver Ah","exclamação","HuH ã","surpresa","choro","Voom",
        "ver Swooish","arranque de automóvel Brum","voom",
        "golpe com objeto Vap","soco Pow","tiro",
        "objecto zunindo no ar e atingindo o alvo Vapt","bomba caindo Fiii",
        "suspiro de alívio ou cansaço Uf","zunido","queda Vump",
        "corte","vento uivando Vu","admiração Uau",
        "golpe com objeto","bocejar Uaah","espanto",
        "dor Ai","pancada","","choque elétrico",
        "sibilar de flecha Zing ou Zim","silvar",
        "zunido de objeto arremessado",
        "pedrada na cabeça Pof ou Tou!","zunir","Zunido Zum",
        "indicação de sono","pancada"
    ];
    
    for (var i = 0; i < opcoes.length; i++) {
        var valor = i + 1;
        var opcao = '<option value="' + valor + '">' + opcoes[i] + '</option>';
        $('#tagSelect1').append(opcao);
    }
    
    $('#tagSearchInput1').on('input', function() {
        var searchTerm = $(this).val().toLowerCase();
        
        // Filtra as opções do select com base no termo de pesquisa
        $('#tagSelect1 option').each(function() {
            var tag = $(this).text().toLowerCase();
            var containsTerm = tag.includes(searchTerm);
            $(this).toggle(containsTerm);
        });
    });
    
    $('#tagSearchInput2').on('input', function() {
        var searchTerm = $(this).val().toLowerCase();
        
        // Filtra as opções do select com base no termo de pesquisa
        $('#tagSelect2 option').each(function() {
            var tag = $(this).text().toLowerCase();
            var containsTerm = tag.includes(searchTerm);
            $(this).toggle(containsTerm);
        });
    });

    // Manipula o duplo clique nas opções selecionadas para a form-select 1
    $('#tagSelect1').dblclick(function() {
        var selectedOptions = $(this).find('option:selected');
        selectedOptions.each(function() {
            // Clona a opção
            var clonedOption = $(this).clone();

            // Adiciona a opção ao novo select (tagsSelect2)
            clonedOption.prop('selected', true).appendTo('#tagSelect2');
            $(this).remove(); // Remove a opção da form-select 1
            getTagSelect2Values();
        });
    });

    // Manipula o duplo clique nas opções selecionadas para a form-select 2
    $('#tagSelect2').dblclick(function() {
        var selectedOptions = $(this).find('option:selected');
        selectedOptions.each(function() {
            // Clona a opção
            var clonedOption = $(this).clone();

            // Adiciona a opção ao novo select (tagsSelect2)
            clonedOption.appendTo('#tagSelect1');
            $(this).remove(); // Remove a opção da form-select 2
            getTagSelect2Values();
        });
    });
    
    function getTagSelect2Values() {
        var valuesArray = [];
        
        $('#tagSelect2 option').each(function() {
            valuesArray.push($(this).val());
        });
        
        return valuesArray;
    }    

    function updateAndSendData() {
        var tagSelect2Values = getTagSelect2Values();
    
        // Exemplo de exibição dos valores na console
        console.log(tagSelect2Values);
    
        // Envia os dados para o servidor usando AJAX
        $.ajax({
            type: 'POST',
            url: '/save-data',  // Atualize a rota conforme necessário
            data: { tagSelect2Values: tagSelect2Values },
            success: function (response) {
                console.log('Dados enviados com sucesso!');
                // Lógica adicional, se necessário, após o envio bem-sucedido
            },
            error: function (error) {
                console.error('Erro ao enviar dados:', error);
                // Lógica adicional, se necessário, em caso de erro
            }
        });
    }
    
    $('#sendForm').click(function(){
        updateAndSendData()
    });
    
});