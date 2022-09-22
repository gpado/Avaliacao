
function createNode(element) {
    return document.createElement(element);
}

function createNodetexto(element2) {
    return document.createTextNode(element2);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const tbody = document.querySelector("#authors");
const url = '../arquivos/produtos.json';


fetch(url, {
    method: 'GET',
})
    .then((resp) => resp.json())
    .then(function (data) {
        let authors = data.data;

        return authors.map(function (author) {
            let tr = createNode('tr');


            let id = createNode('td');
            let nome = createNode('td');
            let valor = createNode('td');
            let dataCadastro = createNode('td');
            let DataValidade = createNode("td");

            let validade = `${author.DataValidade}`


            var novaData = new Date();

            if (validade == 'null') {
                validade = '';

            }

            id.innerHTML = `${author.Id}`;
            nome.innerHTML = `${author.Nome}`;
            valor.innerHTML = `R$ ${author.Valor}`;
            dataCadastro.innerHTML = `${author.DataCadastro.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1')}`;
            DataValidade.innerHTML = validade.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1');

            append(tr, id);
            append(tr, nome);
            append(tr, valor);
            append(tr, dataCadastro);
            append(tr, DataValidade);




            append(tbody, tr);

        })
    })
    .catch(function (error) {
        console.log(error);
    });

function FormataStringData(data) {
    var dia = data.split("/")[0];
    var mes = data.split("/")[1];
    var ano = data.split("/")[2];
    return ano + '-' + ("0" + mes).slice(-2) + '-' + ("0" + dia).slice(-2);
}


function ColorirLinha(validade) {

    const myDate = new Date(Date.now()).toLocaleString().split(',')[0];   //data hoje
    validade = myDate; //seta data hoje


    $('#tb1 tbody tr').each(function (i) {
        tr = $(this);
        tr.children('td').removeClass('colorirlinha');
        valor = tr.children('td:eq(4)').html();

        if (FormataStringData(valor) < FormataStringData(validade) && valor != "") {
            tr.children('td').addClass('colorirlinha');


        }
    })


}
