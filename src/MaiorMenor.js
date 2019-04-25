class MaiorMenor {

    constructor() {
        this.bigger = Number.MIN_VALUE;
        this.smaller = Number.MAX_VALUE;
    }

    find(values) {

        values.forEach(value => {
            if (value < this.smaller) this.smaller = value;
            if (value > this.bigger) this.bigger = value;
        });
    }

    get max() {
        return this.bigger;
    }

    get min() {
        return this.smaller;
    }

}