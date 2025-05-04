"use strict";
{
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res1 = createArray("jjj");
    const res2 = createArrayWithGeneric('ddd');
    const user = createArrayWithGeneric({
        id: 888,
        name: "jahid"
    });
    const addCourchStudent = (Student) => {
        const coursc = "next lavel devloper";
        return Object.assign(Object.assign({}, Student), { coures });
    };
    const student1 = addCourchStudent({ name: 'jahid', email: "v@gmail.com", Devtype: "kjl" });
    const student2 = addCourchStudent({ name: 'kld', email: "lu@gmail.com", WatchOver: "AIU" });
}
