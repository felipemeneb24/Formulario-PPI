import express from 'express';
const porta = 3000;
const host = '0.0.0.0' // todas as placas de rede do pc
var ListarProdutos = [];
const app = express();
//define as funcionalidades do servidor acessiveis por endpoints(rotas)

//Declarar ao express onde esta a fonte dos arquivos estaticos
app.use('/CadastrodeProdutos', (req, resp) => {
    //extraindo os dados escolhidos do formulario pela name="".
    const produto = req.query.produto;
    const marca = req.query.marca;
    const custo = req.query.custo;
    const categoria = req.query.categoria;

    //adicionando um novo produto a lista
    ListarProdutos.push({
        produto: produto,
        marca: marca,
        custo: custo,
        categoria: categoria
    })
    resp.write('<!DOCTYPE html>');
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<body>');
    resp.write('<h3>Usuario cadastrado com Sucesso!</h3>');
    resp.write('<a href="/CadastrodeProdutos.html"> Continuar Cadastrando...</a>');
    resp.write('<a href="/ListarProdutos"> Listar Produtos</a>');
    resp.write('</body');
    resp.write('</html>');
    resp.end();
    




});

app.use('/ListarProdutos', (req, resp) => {

});

app.use(express.static('./Publico'));

app.listen(porta, host, () => {
    console.log(`Servidor executando na porta http://${host}:${porta}`);
})