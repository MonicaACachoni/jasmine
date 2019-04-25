describe("Paciente", () => {

    let thiago;

    beforeEach(() => {
        thiago = new PacienteBuilder().deNome("Thiago")
            .comIdade(25)
            .comAltura(1.90)
            .comPeso(95.8)
            .build();
    });

    it("deve calcular o IMC do paciente", () => {
        expect(thiago.imc()).toEqual(95.8 / (1.90 * 1.90));
    });

    it("deve calcular a quantidade de batimentos do paciente", () => {
        expect(thiago.batimentos()).toEqual(thiago.idade * 365 * 24 * 60 * 80);
    });

})