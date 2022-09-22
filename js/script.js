
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





fetch(url,{
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

            if(validade == 'null'){
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








