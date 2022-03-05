
     var bomb;
     function trending() {
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
   function search() {
    var key ="28c69169c6de26fc79486ad5bed15b9d"
     var input = document.getElementById("mvname").value
        var slider = document.getElementById("slider") 
        slider.style.display = "block"
        let url = `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${input}&page=1`
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
    function slidering(products){
        var key ="28c69169c6de26fc79486ad5bed15b9d"
        var input = document.getElementById("mvname").value
        var slider = document.getElementById("slider") 
        slider.style.display = "block"
        let url = `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${input}&page=1`
        let wall = document.getElementById("wall")
        
        fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(res) {
           const data = res
            wall.style.color = "Black"
            // console.log(data)
            // appendMovies(data.results)
            sliderDisplay(data.results)
            console.log(res)
        }) 
    }
    function sliderDisplay(products){
            var sliderDiv = document.getElementById("slider")
                sliderDiv.innerHTML = ""
            localStorage.setItem("MoviesDAta",JSON.stringify(products))
            products.forEach(function(product,index){

              var subDiv = document.createElement("div")
               
                var img = document.createElement("img")
                img.addEventListener("click",function(){
                    localStorage.setItem("SingleMovie",JSON.stringify(product))
                    window.location.href="singleMovie.html"
                })
                        img.id="sliderImg"
                    img.style.display="inline-block"
                var poster = product.backdrop_path
                    img.src = `https://image.tmdb.org/t/p/w500/${poster}`
                    
                    let title = document.createElement('h4')
                    title.innerHTML = product.title
                    title.id ="sliderTxt"
                    title.style.display ="inline-block"
                    subDiv.append(img,title)
                sliderDiv.append(subDiv)
             })
    }
    // function addToProduct(p,id){
    //     console.log(p,id)
    //     localStorage.setItem("SingleMovie",JSON.locindex);
    //         //  console.log("testing")
    // }
    function deleteSlider(){
        var sliderDiv = document.getElementById("slider")
        sliderDiv.innerHTML = ""
        slider.style.display = "none"
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
                    window.open("singleMovie.html")
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
    
    function debounce(fun,delay) {
        clearTimeout(bomb)  
        
        bomb =setTimeout(function(){
           fun()
        },1000)
    
    }
    
