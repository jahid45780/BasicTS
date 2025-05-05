"use strict";
{
    const person = {
        idNo: 20,
        name: {
            firstName: 'md',
            lastName: 'Jahid'
        },
        phoneNumber: "01244",
        address: 'Dhaka'
    };
    // array Destructuring
    const myFriends = ['jahid', 'korim', 'monika', 'mim', 'ex', 'next'];
    const [besrtFriend, ...rest] = myFriends;
}
