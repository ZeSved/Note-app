"use strict";
const button = document.querySelector('.new-note-button');
const mainn = document.querySelector('.main');
const div = document.querySelector('.div');
// const buttonremove = document.querySelector('.remove-button')
// let remove:any
let divcreate;
// const removeButtonArray = ['removeone', 'removetwo', 'removethree',
//  'removefour', 'removefive', 'removesix',
//  'removeseven', 'removeeight', 'removenine',
//  'removeten', 'removeeleven', 'removetwelve',
//  'removethirteen', 'removefourteen', 'removefifteen'
// ]
// const createdDivArray = ['divone', 'divtwo', 'divthree',
// 'divfour', 'divfive', 'divsix',
// 'divseven', 'diveight', 'divnine',
// 'divten', 'diveleven', 'divtwelve',
// 'divthirteen', 'divfourteen', 'divfifteen'
// ]
// let i = 0
button?.addEventListener('click', () => {
    if (document.querySelectorAll('div').length > 14)
        return;
    const h5 = document.createElement('h5');
    // const removebutton = document.createElement('button')
    // const img = document.createElement('img')
    divcreate = document.createElement('div');
    // img.src = "https://flexitauctions.com/wp-content/uploads/2019/01/white-x-png-2.png"
    // removebutton.setAttribute('class', '')
    divcreate.setAttribute('class', 'div');
    divcreate.appendChild(h5);
    // divcreate.appendChild(removebutton)
    // removebutton?.appendChild(img)
    mainn?.appendChild(divcreate);
});
