class ConsultarPaciente {

    constructor(paciente, procedimentos, retorno, particular, data) {
        this.paciente = paciente;
        this.procedimentos = procedimentos;
        this.retorno = retorno;
        this.particular = particular;
        this.data = data;
    }

    preco() {

        if (this.retorno) return 0;

        let precoFinal = 0;

        this.procedimentos.forEach(procedure => {
            if (procedure === "gesso") precoFinal += 32;
            else if (procedure === "raio-x") precoFinal += 40;
            else precoFinal += 25;
        });

        if (this.particular) precoFinal *= 2;

        return precoFinal;

    }

    getNome() { return this.paciente; }
    getProcedimentos() { return this.procedimentos; }
    isParticular() { return this.particular; }
    isRetorno() { return this.retorno; }
    getData() { return this.data; }

}