var bomb;

function search() {
 var key ="28c69169c6de26fc79486ad5bed15b9d"

     let url = `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`
     let wall = document.getElementById("wall")
     
     fetch(url)
     .then(function(response) {
         return response.json()
     })
     .then(function(res) {
        const data = res
         wall.style.color = "Black"
         // console.log(data)
         appendMovies(data.results)
         // slidering(data.results)
         console.log(res)
     }) 
 }
 function appendMovies(Movies){
     wall.textContent = ""
     Movies.forEach(function(product){
         
         let main = document.createElement('div');
             main.id="maindiv"

             let img = document.createElement('img');
                 img.id="poster"
             var poster = product.poster_path
             img.src = `https://image.tmdb.org/t/p/w500/${poster}`
             img.addEventListener("click",function(){
                 localStorage.setItem("SingleMovie",JSON.stringify(product))
                 window.location.href="singleMovie.html"
             })
         
         let textDiv = document.createElement('div')
             textDiv.id ="txtDiv"
             let title = document.createElement('h4')
             title.innerHTML = product.title
             title.setAttribute('class',"txt")
         
             let date = document.createElement('p')
             date.textContent = product.release_date
             date.setAttribute('class',"txt")
     
             let rating = document.createElement('p')
                 rating.id = "rating"
             rating.textContent =  "🌟"+product.vote_average
             rating.setAttribute('class',"txt")
         
         textDiv.append(title,date,rating)
         main.append(img,textDiv)
         wall.append(main)
     })
 }
 search()
