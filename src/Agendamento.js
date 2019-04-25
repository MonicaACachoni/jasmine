class Agendamento {

    constructor(consulta) {
        this.consulta = consulta;
    }

    para(qtdDeDias) {

        let umDiaEmMilissegundo = 1000 * 60 * 60 * 24;
        let dias = umDiaEmMilissegundo * qtdDeDias;

        let dataAnterior = this.consulta.getData();
        let novaData = new Date(dataAnterior.getTime() + dias);

        while (novaData.getDay() == 0 || novaData.getDay() == 6) {
            novaData = new Date(novaData.getTime() + umDiaEmMilissegundo);
        }

        let novaConsulta = new ConsultarPaciente(this.consulta.getNome(),
            this.consulta.getProcedimentos(),
            this.consulta.isRetorno(),
            this.consulta.isParticular(),
            novaData);

        return novaConsulta;

    }

}