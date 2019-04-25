class ConversorDeNumerosRomanos {

    constructor(num) {
        this.num = num;
    }

    toNumber() {
        let n = 0;
        let numeralDaDireita = 0;
        for (let i = this.num.length - 1; i >= 0; i--) {
            let valor = parseInt(this._traduzirNumeralRomano(this.num.charAt(i)));
            n += valor * Math.sign(valor + 0.5 - numeralDaDireita);
            numeralDaDireita = valor;
        }
        return n;
    }

    _traduzirNumeralRomano(caractere) {
        return Math.floor(Math.pow(10, "IXCM".indexOf(caractere))) + 5 * Math.floor(Math.pow(10, "VLD".indexOf(caractere)));
    }
}