const insertion_sort_blocks_swap = (block1, block2) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            array_container.insertBefore(block1, block2);
                resolve();
        }, 300*(5-(sorting_speed.value)));
    });
}

//Insertion Sort
const insertionSort = async () => {
    
    disableButtons();

    time_complexity.innerHTML = "Time Complexity - O(N*N)";
    space_complexity.innerHTML = "Auxiliary Space - O(1)";
    
    let arr = document.querySelectorAll(".bar");

    const size = array_size.value;
    
    for(let i = 1; i < size; i++){

        arr[i].style.backgroundColor = "blue";

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(); 
            }, 150*(5-(sorting_speed.value)));
        });

        for(var j = i-1; j >= 0; j--){
            arr[j].style.backgroundColor = "orange";
            
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(); 
                }, 150*(5-(sorting_speed.value)));
            });
            
            if(parseInt(arr[j].innerHTML) < parseInt(arr[i].innerHTML)){
                
                await insertion_sort_blocks_swap(arr[i], arr[j+1]);

                await new Promise((resolve) => {
                    setTimeout(() => {
                       resolve(); 
                    }, 300*(5-(sorting_speed.value)));
                });

                arr = document.querySelectorAll(".bar");

                arr[j].style.backgroundColor = "red";
                arr[j+1].style.backgroundColor = "red";

                break;
            }
            else{
                arr[j].style.backgroundColor = "red";
            }
        }

        if(j == -1){
                
            await insertion_sort_blocks_swap(arr[i], arr[0]);

            arr = document.querySelectorAll(".bar");

            await new Promise((resolve) => {
                setTimeout(() => {
                   resolve(); 
                }, 300*(5-(sorting_speed.value)));
            });

            arr[0].style.backgroundColor = "red";
        }
    }

    enableButtons();
}