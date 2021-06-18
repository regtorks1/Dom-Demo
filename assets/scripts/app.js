
const addBtn = document.querySelector("button");
const add = document.getElementById("add-modal");
const movieData = []
const back_drop = document.getElementById("backdrop");

function clickMovie(){
    const add = document.getElementById("add-modal");
    add.classList.add("visible");

    const back_drop = document.getElementById("backdrop");
    back_drop.classList.add("visible");
}

function cancel(){
    const add = document.getElementById("add-modal");
    add.classList.remove("visible");

    const back_drop = document.getElementById("backdrop");
    back_drop.classList.remove("visible");
    
}

function back_dropClick(){
    const add = document.getElementById("add-modal");
    add.classList.remove("visible");

    const back_drop = document.getElementById("backdrop");
    back_drop.classList.remove("visible");
}


const add_movie = document.getElementById("btn-add");

function myAddition(){
     const movie_Title = document.getElementById("title").value;
     const imag_url = document. getElementById("image-url").value;
     const your_rating = document.getElementById("rating").value;
     
     if (movie_Title != ""){
         if(imag_url != ""){
             if((your_rating < 1) || (your_rating > 5)){
                      alert("Enter a valid value");
             }else{
                const movieDetails = {
                    Title : movie_Title,
                    imageUrl: imag_url,
                    Rating: your_rating,
                }
                movieData.push(movieDetails);
             }
         }else{
            alert("Enter a valid value");
        }
     }else{
        alert("Enter a valid value");
    }

     
     
     console.log(movieData);

    }
  
    

    
    
    


