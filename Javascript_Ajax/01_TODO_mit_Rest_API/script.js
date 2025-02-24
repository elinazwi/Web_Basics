loadDataFromAPI();

document.getElementById("btnLoad").addEventListener("click", function() {
    loadDataFromAPI();
});

function loadDataFromAPI() {
    fetch('https://67b84573699a8a7baef35cfb.mockapi.io/toDos')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        let html = [];

        json.forEach(toDo => {
            html.push(
                "<div><div>" + 
                toDo.title + 
                "</div><img width='80px' src= '" + 
                toDo.image + "?id=" + Math.random() + 
                " '/><div>-------</div></div>")
        });

        document.getElementById("content").innerHTML = html.join("");
        console.log(html);
        
    })
}