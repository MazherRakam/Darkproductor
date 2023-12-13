axios.get("https://leonardoapi.onrender.com/music")
    .then((res) => {
        res.data.map((song) => {
            // Document es para interactuar con la vista del usuario
            let li = document.createElement("li")
            li.classList.add("Tracklist")
            li.innerHTML = `
            <h2>${song.title}</h2>
            <p>${song.album}</p>
            <p>${song.author}</p>
            <img class="FotoAlbum" src="${song.path.front}" alt="Imagenalbum">
            `
            // Evento escuchando
            li.addEventListener("click", () => {

                document.querySelector("#currentsongtitle").innerHTML = song.title
                document.querySelector("#currentsongauthor").innerHTML = song.author
                document.querySelector("#currentsongaudio").setAttribute("src", song.path.audio)
                document.querySelector("#currentsongalbum").setAttribute("src", song.path.front)
                document.querySelector("#currentsongtitle2").innerHTML = song.title
                document.querySelector("#currentsongauthor2").innerHTML = song.author
                document.querySelector("#currentsongalbum2").setAttribute("src", song.path.front)
            })
            // Agrewgando al contenedor
            document.querySelector("#Tracklist").appendChild(li)



        })
    } )