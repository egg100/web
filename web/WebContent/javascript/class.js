class Student {
    constructor(sno, name) {
        this.sno = sno;
        this.name = name;
    }
    set setName(name) {
        this.name = name;
    }
    get getName() {
        return this.name;
    }
    showInfo() {
        return this.sno + ' ' + this.name;
    }
    static toShow() {
        return 'Hello';
    }
}

let s1 = new Student('1111', 'Hongkildong');
console.log(s1.getName);
console.log(s1.showInfo());
console.log(Student.toShow());
