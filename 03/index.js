const usuario = {
    nome: 'Gabriel',
    idade: 37,
    profissao: 'Programador',
    corPreferida: 'Azul'
}
//console.log(`Olá... Eu sou ${usuario.nome} e tenho ${usuario.idade} anos de idade. 
//Sou ${usuario.profissao} e minha cor preferida é ${usuario.corPreferida}!`);

const { nome, idade, profissao, corPreferida } = usuario;

console.log(`Olá... Eu sou ${nome} e tenho ${idade} anos de idade. 
Sou ${profissao} e minha cor preferida é ${corPreferida}!`);

