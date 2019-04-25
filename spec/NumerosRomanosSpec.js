describe("Numeros Romanos", () => {

    it("deve trazer o numero 1 de romano para normal", () => {
      var numero = new ConversorDeNumerosRomanos("I").toNumber();
      expect(numero).toEqual(1);
    })

    it("deve trazer o numero 9 de romano para normal", () => {
        var numero = new ConversorDeNumerosRomanos("IX").toNumber();
        expect(numero).toEqual(9);
    })

    it("deve trazer o numero 569 de romano para normal", () => {
        var numero = new ConversorDeNumerosRomanos("DLXIX").toNumber();
        expect(numero).toEqual(569);
    })
});