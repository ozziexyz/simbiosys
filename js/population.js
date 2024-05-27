export default class Population {
    constructor(p, cbr, cdr, name) {
        this.p = p;
        this.cbr = cbr;
        this.cdr = cdr;
        this.name = name;
    }

    iterate(dt) {
        this.p = this.p * this.r;
    }

    get r() {
        return 1 + ((this.cbr - this.cdr) / this.p);
    }

    get pop() {
        return Math.floor(this.p);
    }
}