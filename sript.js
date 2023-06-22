
document.getElementById('Furmolario').addEventListener('submit',function(event){




    event.preventDefault();

    var input_name = document.getElementById('anime').value;

    if (input_name == ""){

        alert("Campo obrigatorio")

        //console.log("vazio");

    }


var manga  = JSON.parse(localStorage.getItem("manga")) || [];

var id;

if(manga.length > 0){
    id = manga[manga.length - 1 ].id + 1;
}else
{
    id=1;
}
manga.push({id: id, name:input_name});
localStorage.setItem('manga',JSON.stringify(manga));
document.getElementById('anime').value = '';
});


function displayanime(){
    var manga  = JSON.parse(localStorage.getItem("manga")) || [];
    var mangaList = document.getElementById('mangaList');
    mangaList.innerHTML = '';
    for(var i = 0; i < manga.length;i++){
        var anime = manga[i];
        var li = document.createElement('li');
        var id = anime.id;
        li.innerHTML = anime.name;
        '<button onclick= "editAnime(' + id + ')" > Editar</button>' +
        '<button onclick= "deleteAnime(' + id + ')" > Apagar</button>';
        mangaList.appendChild(li);
        console.log(anime.name);
    }
    console.log(anime);
}

displayanime();