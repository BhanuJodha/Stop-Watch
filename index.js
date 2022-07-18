const mm = document.querySelector(".mm");
const ss = document.querySelector(".ss");
const buttons = document.querySelectorAll(".btn_tray>button");
const startBtn = buttons[0]; 
const stopBtn = buttons[1]; 
const resetBtn = buttons[2]; 


let startFlag = true; // true mean is ready to use
let intervalID = null;
let min = 0, sec = 0;



function updateMM(value){
    if (value < 10){
        mm.innerText = "0"+value;
        return;
    }
    mm.innerText = value;
};

function updateSS(value){
    if (value < 10){
        ss.innerText = "0"+value;
        return;
    }
    ss.innerText = value;
};

function timeHandler(){
    // check is one minute completed
    if (sec === 59){
        sec = 0;
        updateSS(sec);
        updateMM(++min);
        return;
    }
    updateSS(++sec);
}

function start(){
    // check is watch already started
    if (startFlag){
        startFlag = false;
        timeHandler();  // This is to remove start delay
        intervalID = setInterval(timeHandler,1000);
    }
};

function stop(){
    // check is watch started 
    if (!startFlag){
        startFlag = true;
        clearInterval(intervalID);
        intervalID = null;
    }
};

function reset(){
    stop();
    updateMM(0);
    updateSS(0);
    sec = 0;
    min = 0;
};



function clickHandler(e){
    let target = e.target;
    if(target === startBtn){
        start();
    }
    else if(target === stopBtn){
        stop();
    }
    else if(target === resetBtn){
        reset();
    }
};

document.addEventListener("click", clickHandler);