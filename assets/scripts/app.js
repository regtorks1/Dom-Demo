
const addBtn = document.querySelector("button");
const add = document.getElementById("add-modal");
const movieData = []

function clickMovie(){
    const add = document.getElementById("add-modal");
    add.style.display = "block";

    const back_drop = document.getElementById("backdrop");
    back_drop.style.display = "block";
}

function cancel(){
    const add = document.getElementById("add-modal");
    add.style.display ="none";

    const back_drop = document.getElementById("backdrop");
    back_drop.style.display = "none";

    
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
                 alert("Nice values");
             }
         }else{
            alert("Enter a valid value");
        }
     }else{
        alert("Enter a valid value");
    }

     const movieDetails = {
         Title : "movie title",
         imageUrl: "image Url",
         Rating: "Rating",
     }
     movieData.push("Title");
     console.log("movieData");

    }
  

    

    
    
    


