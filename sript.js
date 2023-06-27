
document.getElementById('Furmolario').addEventListener('submit', function (event) {




    event.preventDefault();

    var input_name = document.getElementById('anime').value;

    if (input_name == "") {

        alert("Campo obrigatorio")

        //console.log("vazio");

    }


    var manga = JSON.parse(localStorage.getItem("manga")) || [];

    var id;

    if (manga.length > 0) {
        id = manga[manga.length - 1].id + 1;
    } else {
        id = 1;
    }
    manga.push({ id: id, name: input_name });
    localStorage.setItem('manga', JSON.stringify(manga));
    document.getElementById('anime').value = '';
});


function displayanime() {
    var manga = JSON.parse(localStorage.getItem("manga")) || [];
    var mangaList = document.getElementById('mangaList');
    mangaList.innerHTML = '';
    for (var i = 0; i < manga.length; i++) {
        var anime = manga[i];
        var li = document.createElement('li');
        var id = anime.id;
        li.innerHTML = anime.name +
        '<button onclick= "editAnime(' + id + ')" > Editar</button>' +
        '<button onclick= "deleteAnime(' + id + ')" > Apagar</button>';
        mangaList.appendChild(li);
        console.log(anime.name);

    }
    console.log(anime);
}

function editAnime(id) {
    var newManga = prompt('Introduza o nome do livro:');
    if (newManga) {
    var anime = JSON.parse(localStorage.getItem('manga')) || [];

     for (var i = 0; i < anime.length; i++) {
        if (anime[i].id === id);
        anime[i].name = newManga;
        break;
        }
        console.log(anime);
        localStorage.setItem('manga', JSON.stringify(anime));

       
    }

}

function deleteAnime(id){
    var newManga2 = JSON.parse(localStorage.getItem('anime')) || [];

    for(var i = 0; i < newManga2.length; i++){
        if(newManga2[i].id === id){
            newManga2.splice(i,1);
            break;
        }
    }
    localStorage.setItem('anime', JSON.stringify(newManga2));
    
}
displayanime();
