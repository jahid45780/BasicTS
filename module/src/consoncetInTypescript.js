"use strict";
{
    const addCourchStudent = (Student) => {
        const coursc = "next lavel devloper";
        return Object.assign(Object.assign({}, Student), { coures });
    };
    const student3 = addCourchStudent({ id: 44, name: "Mr.C", email: 'C@gmail.com', emmi: "emmi" });
    const student1 = addCourchStudent({
        id: 99,
        name: 'me x',
        email: "v@gmail.com",
        Devtype: "kjl"
    });
    const student2 = addCourchStudent({
        id: 88,
        name: 'kld',
        email: "lu@gmail.com",
        WatchOver: "AIU"
    });
}
