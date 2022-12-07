import React from "react";
var Mousetrap = require('mousetrap');

const Buttons = () => {
    function onClickNumber (elm) {
        let lbResult = document.getElementById("result");
        let Result = document.getElementById("igual");
        
        if (lbResult.value === undefined || Result.value === undefined){
            lbResult.value = "";
            Result.value = "";
        }

        if(lbResult.value === "0" || lbResult.value ===""){
            lbResult.value = elm;
            lbResult.innerHTML = elm;
        }else{
            lbResult.value = lbResult.value + elm;
            lbResult.innerHTML = lbResult.value;
        }

        
    }

    function onClickCE () {
        let lbResult = document.getElementById("result");
        let lbOperation = document.getElementById("operation");
        let Result = document.getElementById("igual");
        lbResult.innerHTML = "0";
        lbResult.value = "0";
        lbOperation.innerHTML = "";
        lbOperation.value = "";
        Result.value = "";
    }

    function onClickOperation(elm) {
        let lbResult = document.getElementById("result");
        let Operation = document.getElementById(elm);
        let lbOperation = document.getElementById("operation");
        let Result = document.getElementById("igual");

        if (lbResult.value === undefined) {
            lbResult.value = "0";
            Result.value = "0";
        }
        
        if (lbOperation.value === null || lbOperation.value === "" || lbOperation.value === undefined){
            lbOperation.innerHTML = Operation.innerHTML;
            lbOperation.value = Operation.value;
            Result.value = lbResult.value;
            lbResult.innerHTML = "";
            lbResult.value = "";
        }else{
            let answer = eval(parseFloat(Result.value) + (lbOperation.value) + parseFloat(lbResult.innerHTML));
            lbOperation.innerHTML = Operation.innerHTML;
            lbOperation.value = Operation.value;
            Result.value = answer;
            lbResult.innerHTML = answer;
            lbResult.value = answer;
        }
        
    }

    function onClickEqual (){
        let lbResult = document.getElementById("result");
        let lbOperation = document.getElementById("operation");
        let Result = document.getElementById("igual");

        if (lbOperation.value === "pow"){
            let answer =  Math.pow(parseFloat(Result.value),parseFloat(lbResult.innerHTML));
            lbResult.innerHTML = answer;
            lbResult.value = "";
            lbOperation.innerHTML = "";
            lbOperation.value = "";
            Result.value = answer;
        }else if (lbOperation.value === ""){

        }else{
            let answer = eval(parseFloat(Result.value) + (lbOperation.value) + parseFloat(lbResult.innerHTML));
            lbOperation.innerHTML = "";
            lbOperation.value = "";
            Result.value = answer;
            lbResult.innerHTML = answer;
            lbResult.value = answer;
        }

        
    }

    function onClickSqr(){
        let lbResult = document.getElementById("result");
        let Result = document.getElementById("igual");
        if (lbResult.value < 0){
            lbResult.innerHTML = "Error";
        }else{
            let answer =  Math.sqrt(parseFloat(lbResult.innerHTML));
            lbResult.innerHTML = answer;
            lbResult.value = answer;
            Result.value = answer;
        }
    }

    function onClickPow(){
        let lbResult = document.getElementById("result");
        let lbOperation = document.getElementById("operation");
        let Result = document.getElementById("igual");

        Result.value = lbResult.value;
        lbOperation.innerHTML = lbResult.value + "^";
        lbOperation.value = "pow"
        lbResult.value = "";
        lbResult.innerHTML = "";
    }

    Mousetrap.bind('1', function() {
        let btn = document.getElementById("1");
        btn.click();
    });
    Mousetrap.bind('2', function() {
        let btn = document.getElementById("2");
        btn.click();
    });
    Mousetrap.bind('3', function() {
        let btn = document.getElementById("3");
        btn.click();
    });
    Mousetrap.bind('4', function() {
        let btn = document.getElementById("4");
        btn.click();
    });
    Mousetrap.bind('5', function() {
        let btn = document.getElementById("5");
        btn.click();
    });
    Mousetrap.bind('6', function() {
        let btn = document.getElementById("6");
        btn.click();
    });
    Mousetrap.bind('7', function() {
        let btn = document.getElementById("7");
        btn.click();
    });
    Mousetrap.bind('8', function() {
        let btn = document.getElementById("8");
        btn.click();
    });
    Mousetrap.bind('9', function() {
        let btn = document.getElementById("9");
        btn.click();
    });
    Mousetrap.bind('0', function() {
        let btn = document.getElementById("0");
        btn.click();
    });
    Mousetrap.bind('+', function() {
        let btn = document.getElementById("suma");
        btn.click();
    });
    Mousetrap.bind('-', function() {
        let btn = document.getElementById("resta");
        btn.click();
    });
    Mousetrap.bind('*', function() {
        let btn = document.getElementById("multiplicacion");
        btn.click();
    });
    Mousetrap.bind('/', function() {
        let btn = document.getElementById("division");
        btn.click();
    });
    Mousetrap.bind('enter', function() {
        let btn = document.getElementById("igual");
        btn.click();
    });
    Mousetrap.bind('backspace', function() {
        let btn = document.getElementById("reset");
        btn.click();
    });
    Mousetrap.bind('.', function() {
        let btn = document.getElementById("punto");
        btn.click();
    });

    return(
        <div>
            <div className="div-results">
                    <label id="operation" className="lb-operation" value = ""></label>
                    <label id="result" className="lb-result" value = "0">0</label>
            </div>
            <div className="div-numbers">
                <button id="7" value="7" onClick={e => onClickNumber(e.target.value)}>7</button>
                <button id="8" value="8" onClick={e => onClickNumber(e.target.value)}>8</button>
                <button id="9" value="9" onClick={e => onClickNumber(e.target.value)}>9</button>
                <button id="suma" value="+" onClick={e => onClickOperation(e.target.id)}>+</button>
                <button id="sqr" onClick={onClickSqr}>2√</button>
            </div>
            <div className="div-numbers">
                <button id="4" value="4" onClick={e => onClickNumber(e.target.value)}>4</button>
                <button id="5" value="5" onClick={e => onClickNumber(e.target.value)}>5</button>
                <button id="6" value="6" onClick={e => onClickNumber(e.target.value)}>6</button>
                <button id="resta" value="-" onClick={e => onClickOperation(e.target.id)}>-</button>
                <button id="potencia" onClick={onClickPow}>x^a</button>
            </div>
            <div className="div-numbers" >
                <button id="1" value="1" onClick={e => onClickNumber(e.target.value)}>1</button>
                <button id="2" value="2" onClick={e => onClickNumber(e.target.value)}>2</button>
                <button id="3" value="3" onClick={e => onClickNumber(e.target.value)}>3</button>
                <button id="multiplicacion" value="*" onClick={e => onClickOperation(e.target.id)}>x</button>
                <button id="modulo" value="%" onClick={e => onClickOperation(e.target.id)}>mod</button>
            </div>
            <div className="div-numbers">
                <button id="punto" value="." onClick={e => onClickNumber(e.target.value)} >.</button>
                <button id="0" value="0" onClick={e => onClickNumber(e.target.value)}>0</button>
                <button id="reset" onClick={onClickCE}>CE</button>
                <button id="division" value="/" onClick={e => onClickOperation(e.target.id)}>/</button>
                <button id="igual" onClick={onClickEqual}>=</button>
            </div>
        </div>
    )
}

export default Buttons;