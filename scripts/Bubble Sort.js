const bubble_sort_blocks_swap = (block1, block2) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            array_container.insertBefore(block2, block1);
            resolve(); 
        }, 300*(5-(sorting_speed.value)));
    });
}

//Bubble Sort
const bubbleSort = async () => {
    
    disableButtons();

    time_complexity.innerHTML = "Time Complexity - O(N*N)";
    space_complexity.innerHTML = "Auxiliary Space - O(1)";

    let arr = document.querySelectorAll(".bar");
    
    const size = array_size.value;
    
    for(let i = 0; i < size-1; i++){
        
        let isSwapped = false;
        
        for(let j = 0; j < size-i-1; j++){
            arr[j].style.backgroundColor = "orange";
            arr[j+1].style.backgroundColor = "orange";

            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 150*(5-(sorting_speed.value)));
            });

            if(parseInt(arr[j].innerHTML) > parseInt(arr[j+1].innerHTML)){
                await bubble_sort_blocks_swap(arr[j], arr[j+1]);

                await new Promise((resolve) => {
                    setTimeout(() => {
                       resolve(); 
                    }, 150*(5-(sorting_speed.value)));
                });
                
                arr = document.querySelectorAll(".bar");
                
                isSwapped = true;
            }
            else{
                await new Promise((resolve) => {
                    setTimeout(() => {
                       resolve(); 
                    }, 300*(5-(sorting_speed.value)));
                });
            }

            arr[j].style.backgroundColor = "red";
            arr[j+1].style.backgroundColor = "red";
        }

        if(isSwapped === false){
            break;
        }
    }
    
    enableButtons();
}