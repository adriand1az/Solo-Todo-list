'use strict';

const checkbox = document.querySelector('.text-box');
const submit = document.querySelector('.submit-btn')

submit.addEventListener('click', function(e){
    e.preventDefault();
    console.log(checkbox.value)
})