"use strict";

window.onload = init;

function init(){
    const addBtn = document.getElementById("addBtn");
    addBtn.onclick = addBtnClicked;

    const subBtn = document.getElementById("subBtn");
    subBtn.onclick = subBtnClicked;

    const mulBtn = document.getElementById("mulBtn");
    mulBtn.onclick = mulBtnClicked;

    const divBtn = document.getElementById("divBtn");
    divBtn.onclick = divBtnClicked;
}

function addBtnClicked(){
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let addition = Number(num1.value) + Number(num2.value);
    const answer = document.getElementById("answer");
    answer.value = addition;
}

function subBtnClicked(){
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let subtraction = Number(num1.value) - Number(num2.value);
    const answer = document.getElementById("answer");
    answer.value = subtraction;
}

function mulBtnClicked(){
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let multiplication = Number(num1.value) * Number(num2.value);
    const answer = document.getElementById("answer");
    answer.value = multiplication;
}

function divBtnClicked(){
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let division = Number(num1.value) / Number(num2.value);
    const answer = document.getElementById("answer");
    answer.value = division;
}