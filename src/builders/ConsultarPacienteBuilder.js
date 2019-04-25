class ConsultarPacienteBuilder {

    constructor(paciente, procedimentos, retorno, particular, data) {
        this.paciente = paciente;
        this.procedimentos = procedimentos;
        this.retorno = retorno;
        this.particular = particular;
        this.data = data;
    }

    doPaciente(paciente) {
        this.paciente = paciente;
        return this;
    }

    comProcedimentos(procedimentos) {
        this.procedimentos = procedimentos;
        return this;
    }

    temRetorno(retorno) {
        this.retorno = retorno;
        return this;
    }

    ehParticular(particular) {
        this.particular = particular;
        return this;
    }

    comDataDeRetorno(data) {
        this.data = data;
        return this;
    }

    build() {
        return new ConsultarPaciente(this.paciente, this.procedimentos, this.retorno, this.particular, this.data);
    }


}