describe("Agendamento de Clientes", () => {

    let thiago;

    beforeEach(() => {
        thiago = new PacienteBuilder().deNome("Thiago")
            .comIdade(25)
            .comAltura(1.90)
            .comPeso(95.8)
            .build();
    });

    it("deve agendar uma consulta de retorno para 20 dias depois", () => {

        let consulta = new ConsultarPacienteBuilder()
            .doPaciente(thiago)
            .comProcedimentos([])
            .temRetorno(false)
            .ehParticular(false)
            .comDataDeRetorno(new Date(2019, 4, 1))
            .build();

        let agendamento = new Agendamento(consulta).para(20);
        expect(agendamento.getData().toString()).toEqual(new Date(2019, 4, 21).toString());

    })

    it("deve pular fins de semana", () => {

        let consulta = new ConsultarPacienteBuilder()
            .doPaciente(thiago)
            .comProcedimentos([])
            .temRetorno(false)
            .ehParticular(false)
            .comDataDeRetorno(new Date(2019, 5, 1))
            .build();

        let agendamento = new Agendamento(consulta).para(20);
        expect(agendamento.getData().toString()).toEqual(new Date(2019, 5, 21).toString());

    });

});