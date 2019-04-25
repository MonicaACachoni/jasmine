class Paciente {

    constructor(nome, idade, altura, peso) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }

    batimentos() {
        return this.idade * 365 * 24 * 60 * 80;
    }

    imc() {
        return this.peso / (this.altura * this.altura)
    }

}