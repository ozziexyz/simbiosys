export default class Population {
    constructor(p, r, name) {
        this.p = p;
        this.r = r;
        this.name = name;
    }

    iterate() {
        this.p *= (1 + this.r);
    }
}