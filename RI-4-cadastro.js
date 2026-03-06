class Cliente{
    #cpf
    constructor(nome, cpf, endereco){
        this.nome = nome
        this.#cpf = cpf
        this.endereco = endereco
        this.telefones = new Set()
    }

    get cpf(){
        return this.#cpf
    }

    detalhe(){

        let telefonesStr = ""

        for (let tel of this.telefones){
            telefonesStr += `DDD: ${tel.ddd} Número: ${tel.numero} \n`
        }

        return `Nome: ${this.nome} \nEstado: ${this.endereco.estado} \nCidade: ${this.endereco.cidade} \nRua: ${this.endereco.rua} \nNúmero: ${this.endereco.numeroend} \nTelefones: \n${telefonesStr}` 
    }

}

class Telefone{
    constructor(ddd, numero){
        this.ddd = ddd
        this.numero = numero
    }
}


class Endereco{
    constructor(estado, cidade, rua, numeroend){
    this.estado = estado
    this.cidade = cidade
    this.rua = rua
    this.numeroend = numeroend
    }
}

class Empresa{
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.endereco = endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }

    enderecoUpper(){
        return this.endereco.toUpperCase()
    }

    nomeFantasiaUpper(){
        return this.nomeFantasia.toUpperCase()
    }

    razaoSocialUpper(){
        return this.razaoSocial.toUpperCase()
    }

    clientesUpper(){
        return this.clientes.toUpperCase()
    }

    get cnpj(){
        return this.#cnpj
    }

    detalhe(){
        let clienteStr = ""
        for (let cliente of this.clientes){
            clienteStr += `${cliente.detalhe()} \n`
        }

        return `Razão Social: ${this.razaoSocial} \nNome Fantasia: ${this.nomeFantasia} \n
        ------------------------------ \n${clienteStr}
        `
    }
}
