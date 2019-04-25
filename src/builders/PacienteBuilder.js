class PacienteBuilder {

    constructor(nome, idade, altura, peso) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }

    deNome(nome) {
        this.nome = nome;
        return this;
    }

    comIdade(idade) {
        this.idade = idade;
        return this;
    }

    comAltura(altura) {
        this.altura = altura;
        return this;
    }

    comPeso(peso) {
        this.peso = peso;
        return this;
    }

    build() {
        return new Paciente(this.nome, this.idade, this.altura, this.peso)
    }


}