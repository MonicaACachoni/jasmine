describe("Consultar Pacientes", () => {

    let thiago;

    beforeEach(() => {
        thiago = new PacienteBuilder().deNome("Thiago")
            .comIdade(25)
            .comAltura(1.90)
            .comPeso(95.8)
            .build();
    });

    describe("Consultar Pacientes cuja consulta seja de retorno", () => {

        it("nao deve cobrar de pacientes cujo tipo da consulta é de retorno", () => {
            var info = new ConsultarPacienteBuilder()
                .doPaciente(thiago)
                .comProcedimentos([])
                .temRetorno(true)
                .ehParticular(false).build();

            expect(info.preco()).toEqual(0);
        });
    });

    describe("Consultar Pacientes cuja consulta não seja por convênio e com procedimento comum", () => {

        it("deve cobrar de paciente cuja consulta não seja por convênio e de procedimentos comuns", () => {
            var info = new ConsultarPacienteBuilder()
                .doPaciente(thiago)
                .comProcedimentos(["proc1", "proc2", "proc3"])
                .temRetorno(false)
                .ehParticular(false).build();

            expect(info.preco()).toEqual(75);
        });
    });

    describe("Consultar Pacientes cuja consulta seja por convênio e com procedimento comum", () => {

        it("deve cobrar de paciente cuja consulta seja por convênio e de procedimentos comuns", () => {
            var info = new ConsultarPacienteBuilder()
                .doPaciente(thiago)
                .comProcedimentos(["proc1", "proc2", "proc3"])
                .temRetorno(false)
                .ehParticular(true).build();

            expect(info.preco()).toEqual(75 * 2);
        });
    });

    describe("Consultar Pacientes cuja consulta seja por convênio e com procedimentos específicos", () => {

        it("deve cobrar de paciente cuja consulta é particular e de procedimentos específicos", () => {
            var info = new ConsultarPacienteBuilder()
                .doPaciente(thiago)
                .comProcedimentos(["gesso", "raio-x"])
                .temRetorno(false)
                .ehParticular(true).build();
            expect(info.preco()).toEqual(144);
        });
    });

});