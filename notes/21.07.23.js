console.log('First Class of Javascript');

// window.alert('Are you sure, you want to delete?');

document.getElementById('fullName').innerHTML = 'Frankline H';

var firstName = 'Manideep';

console.log(typeof firstName);

var rank = 8910;

console.log(typeof rank);

var isLoggedIn = false;

console.log(typeof isLoggedIn);

var users = ['Karthik', 'Lokesh', 'Yashwanth', 'Ganesh', 'Dinesh'];

console.log(users);

var userInfo = ['Ganesh', 9012902345, 'Hyderabad'];

userInfo = {
    name: 'Ganesh',
    mobile: 9012902345,
    city: 'Hyderabad'
};

var buses = [
    {
        name: 'NueGo',
        type: 'Electric A/C Seater (2+2)',
        startTime: '05:00',
        endTime: '11:00',
        price: 499
    },
    {
        name: 'NueGo',
        type: 'Electric A/C Seater (2+2)',
        startTime: '05:00',
        endTime: '11:00',
        price: 499
    },
    {
        name: 'NueGo',
        type: 'Electric A/C Seater (2+2)',
        startTime: '05:00',
        endTime: '11:00',
        price: 499
    },
    {
        name: 'NueGo',
        type: 'Electric A/C Seater (2+2)',
        startTime: '05:00',
        endTime: '11:00',
        price: 499
    }
]

console.log(buses[0].name);

console.log(buses[1].type)

console.log(buses[2].price);
