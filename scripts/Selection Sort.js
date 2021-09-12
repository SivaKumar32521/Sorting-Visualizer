const selection_sort_blocks_swap = (block1, block2, block3) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            array_container.insertBefore(block2, block1);
            array_container.insertBefore(block1, block3);
            resolve();
        }, 300*(5-(sorting_speed.value)));
    });
}

//Selection Sort
const selectionSort = async () => {
    
    disableButtons();

    time_complexity.innerHTML = "Time Complexity - O(N*N)";
    space_complexity.innerHTML = "Auxiliary Space - O(1)";
    
    let arr = document.querySelectorAll(".bar");

    const size = array_size.value;
    
    for(let i = 0; i < size-1; i++){
        
        let min_idx = i;

        arr[i].style.backgroundColor = "blue";

        for(let j = i+1; j < size; j++){
            arr[j].style.backgroundColor = "orange";
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(); 
                }, 150*(5-(sorting_speed.value)));
            });
            if(parseInt(arr[j].innerHTML) < parseInt(arr[min_idx].innerHTML)){
                if(min_idx != i){
                    arr[min_idx].style.backgroundColor = "red";
                }

                min_idx = j;
                arr[min_idx].style.backgroundColor = "blue";
            }
            
            if(j != min_idx){
                arr[j].style.backgroundColor = "red";
            }
        }

        await new Promise((resolve) => {
            setTimeout(() => {
               resolve(); 
            }, 150*(5-(sorting_speed.value)));
        });

        if(min_idx != i){
            await selection_sort_blocks_swap(arr[i], arr[min_idx], arr[min_idx+1]);
            await new Promise((resolve) => {
                setTimeout(() => {
                   resolve(); 
                }, 300*(5-(sorting_speed.value)));
            });
            arr = document.querySelectorAll(".bar");
            arr[i].style.backgroundColor = "red";
            arr[min_idx].style.backgroundColor = "red";
        }
        else{
            arr[min_idx].style.backgroundColor = "red";
        }

        if(i == size-2){
            arr[size-1].style.backgroundColor = "red";
        }
    }

    enableButtons();
}