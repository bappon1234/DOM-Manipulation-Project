const countDisplay = document.getElementById("count");
const errorMsg = document.getElementById("error-msg");
const decrementBtn = document.getElementById("decrement-btn");
const incrementBtn = document.getElementById("increment-btn");
const clearBtn = document.getElementById("clear-btn");

let count = 0;

function updateUI(){
    countDisplay.textContent = count;

    if(count === 0){
        clearBtn.style.display = "none";
    }else{
        clearBtn.style.display = "inline-block";
    }
}

incrementBtn.addEventListener("click", () =>{
        count++;
        errorMsg.style.display = "none";
        updateUI();
});

decrementBtn.addEventListener("click", () =>{
    if(count > 0){
        count--;
        errorMsg.style.display = "none";
        updateUI();
    }else{
        errorMsg.style.display = "block";
    }
});

clearBtn.addEventListener("click", ()=>{

    count = 0;
    errorMsg.style.display = "none";
    updateUI();
});