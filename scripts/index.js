const generate_new_array = document.getElementById("generate-array-btn");
const array_container = document.getElementById("array-container");
const array_size = document.getElementById("array-size");
const sorting_speed = document.getElementById("sorting-speed");

const bubble_sort_btn = document.getElementById("bubble-sort-btn");
const selection_sort_btn = document.getElementById("selection-sort-btn");
const insertion_sort_btn = document.getElementById("insertion-sort-btn");

const time_complexity = document.getElementById("time-complexity");
const space_complexity = document.getElementById("space-complexity");

//Generate new array
const newArray = () => {
    array_container.innerHTML = "";
    
    time_complexity.innerHTML = "Time Complexity -";
    space_complexity.innerHTML = "Auxiliary Space -";
    
    const size = array_size.value;
    for(let i = 0; i < size; i++){
        let num = Math.ceil(Math.random()*100);
        if(num <= 3){
            num *= 10;
        }
        let newDiv = document.createElement('div');
        newDiv.classList.add("bar");
        newDiv.style.height = num*5 + "px";
        newDiv.style.background = "red";
        newDiv.style.margin = "0px 5px 0px 5px";
        newDiv.style.padding = "3px 0px 0px 0px";
        newDiv.innerHTML = num;
        newDiv.style.color = "white";
        array_container.appendChild(newDiv);
    }
}

window.onload = newArray();

//Update array size
const updateArray = () => {
    newArray();
}

const disableButtons = () => {
    generate_new_array.disabled = true;
    array_size.disabled = true;
    bubble_sort_btn.disabled = true;
    selection_sort_btn.disabled = true;
    insertion_sort_btn.disabled = true;
}

const enableButtons = () => {
    generate_new_array.disabled = false;
    array_size.disabled = false;
    bubble_sort_btn.disabled = false;
    selection_sort_btn.disabled = false;
    insertion_sort_btn.disabled = false;
}

//functions
generate_new_array.addEventListener("click", newArray);
array_size.addEventListener("input", updateArray);