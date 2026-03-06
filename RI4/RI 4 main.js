import {Cliente, Telefone, Endereco, Empresa} from "./RI-4-cadastro.js"

let endereco1 = new Endereco("SP", "Caçapava", "Luiz de Carvalho Gonçalves", "165")
let cliente1 = new Cliente("Theo Batista", "12345678910", endereco1)
let tel1 = new Telefone("12", "999999999")
let tel2 = new Telefone("12", "888888888")
cliente1.telefones.add(tel1)
cliente1.telefones.add(tel2)

let endereco2 = new Endereco("SP", "São José dos Campos", "Av. Anchieta", "358")
let cliente2 = new Cliente("Antônia Uaradei", "12345678911", endereco2)
let tel3 = new Telefone("12", "777777777")
let tel4 = new Telefone("12", "666666666")
cliente2.telefones.add(tel3)
cliente2.telefones.add(tel4)

let endereco3 = new Endereco("SP", "São José dos Campos", "Av. Nelson D'Avila", "798")
let cliente3 = new Cliente("Matheus Xavier", "12345678912", endereco3)
let tel5 = new Telefone("12", "555555555")
let tel6 = new Telefone("12", "444444444")
cliente3.telefones.add(tel5)
cliente3.telefones.add(tel6)

let endereco4 = new Endereco("SP", "São José dos Campos", "Av. dos Astronautas", "492")
let empresa1 = new Empresa("Foguete Educacional", "Escola Conhecimento", "0001090807", endereco4)
let tel7 = new Telefone("12", "333333333")
let tel8 = new Telefone("12", "222222222")
empresa1.telefones.add(tel7)
empresa1.telefones.add(tel8)

empresa1.clientes.add(cliente1)
empresa1.clientes.add(cliente2)
empresa1.clientes.add(cliente3)

console.log(empresa1.detalhe())