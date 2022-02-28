//search-box
$(document).ready(function() {
    $('#loading').hide()

	$("#icon-search").click(function() {
		$("#box").show()
	});
	$("#icon-close").click(function() {
		$("#box").hide()
	});

    $("#submit-btn").click(function(){
        var choose = $("#inputGroup").val()

        $("#choose-what").hide()
        $("#loading").show()

        fetch(`https://gnews.io/api/v4/top-headlines?choose=${choose}&token=0389da0db98f6aa747bc66d423750271`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                $('#loading').hide()
                var output = `<h2>Top Heading: ${choose} </h2>`
                        data.articles.forEach(function (post) {
                            output += 
                            `<div class="my-3 card bg-dark">
                                <div class="row g-0">
                                    <div class="col-4">
                                        <img src="${post.image}" class="img-fluid rounded-start" style="width: 100%, height: 30px;">
                                    </div>
                                    <div class="card-body col-8">
                                        <a class="card-title fw-bold fs-3 text-warning" target="_blank" href="${post.url}">${post.title}</a> <br>
                                        <p class="card-text text-light">${post.description}
                                        </p>
                                        <p class="card-text text-light">${post.content}></p>
                                    </div>
                                </div>
                            </div>`;
                            $('#main').html(output)
                        })
            });
})

    $("#search-btn").click(function(){
        $("#choose-what").hide();
        $("#loading").show();
        
        document.addEventListener('click', getNews);
        function getNews(){
            var entry = $("#type-box").val()
            fetch (`https://gnews.io/api/v4/search?q=${entry}&token=0389da0db98f6aa747bc66d423750271`)
            .then((res)=> res.json())
            .then((data) =>{
                
                var output = `<h2>Show Topic: ${entry} </h2>`
                data.articles.forEach(function (post) {
                    output += 
                    `<div class="my-3 card bg-dark">
                        <div class="row g-0">
                            <div class="col-4">
                                <img src="${post.image}" class="img-fluid rounded-start" style="width: 100%, height: 30px;">
                            </div>

                            <div class="card-body col-8">
                                <a class="card-title fw-bold fs-3 text-warning" target="_blank" href="${post.url}">${post.title}</a> <br>
                                <p class="card-text text-light">${post.description}
                                </p>
                                <p class="card-text text-light">${post.content}></p>
                            </div>
                        </div>
                    </div>`;
                    
                })
                console.log(data);
                document.getElementById("main").innerHTML = output
            })
        }
    })

})
        
        

    


