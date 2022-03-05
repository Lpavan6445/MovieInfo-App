var main =document.getElementById("main");
var product =  JSON.parse(localStorage.getItem("SingleMovie"))
 let textDiv = document.getElementById('txt')
          let title = document.createElement('h1')
          title.innerHTML = product.title
          title.setAttribute('class',"txt")
      
          let date = document.createElement('h4')
          date.textContent = product.release_date
          date.setAttribute('class',"txt")
  
          let rating = document.createElement('p')
              rating.id = "rating"
          rating.textContent =  "🌟"+product.vote_average
          rating.setAttribute('class',"txt")

          let overview = document.createElement('p')
          overview.textContent = product.overview
          overview.setAttribute('class',"txt")
          overview.id = "overview"
      
      textDiv.append(title,date,rating,overview)
  let imgDiv = document.getElementById("imgDiv")
      var poster = product.backdrop_path
      
      imgDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${poster})`

