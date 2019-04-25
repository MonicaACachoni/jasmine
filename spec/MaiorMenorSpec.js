describe("Maior e Menor", () => {

    describe("Ordem nao sequencial", () => {

        it('deve entender numeros em ordem não sequencial', () => {

            let bigAndSmall = new MaiorMenor();

            bigAndSmall.find([20, 5, 1, 6, 23]);

            expect(bigAndSmall.max).toEqual(23);
            expect(bigAndSmall.min).toEqual(1);
        });
    });

    describe("Ordem sequencial", () => {

        it('deve entender numeros em orderm crescente', () => {

            let bigAndSmall = new MaiorMenor();

            bigAndSmall.find([6, 9, 10, 90]);

            expect(bigAndSmall.max).toEqual(90);
            expect(bigAndSmall.min).toEqual(6);
        });

        it('deve entender numeros em orderm decrescente', () => {

            let bigAndSmall = new MaiorMenor();

            bigAndSmall.find([23, 9, 8, 7, 6]);

            expect(bigAndSmall.max).toEqual(23);
            expect(bigAndSmall.min).toEqual(6);
        });

        it('should be understand numbers with only one number', () => {

            let bigAndSmall = new MaiorMenor();

            bigAndSmall.find([9]);

            expect(bigAndSmall.max).toEqual(9);
            expect(bigAndSmall.min).toEqual(9);
        });
    });
});