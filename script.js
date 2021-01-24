'use strict';

const checkbox = document.querySelector('.text-box');
const submit = document.querySelector('.submit-btn');
const newItem = document.createElement('LI');
const taskContainer = document.querySelector('.task-container')
submit.addEventListener('click', function(e){
    e.preventDefault();
    newItem.innerText = checkbox.value
    taskContainer.appendChild(newItem)
})