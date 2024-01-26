import {useEffect, useState} from "react";
import {Request} from "../Request";

export const Album = () => {
    const [albums, setAlbums] = useState();
    const [newAlbum, setNewAlbum] = useState({
        title: "",
        artist: "",
        genre: "",
    });
    const [showalbumForm, setShowAlbumForm] = useState(false);

    useEffect(() => {
        Request({endpoint: "/music", method: "GET"}).then(r => {
            if (r?.status === 200) {
                r.json().then(data => {
                    setAlbums(data);
                });
            } else {
                console.log(r.status);
            }
        });
    }, []);

    const addNewAlbum = async (newAlbum) => {
        const endpoint = "/music";
        const method = "POST";
        const response = require('../Request');
        response.Request({endpoint: endpoint, body: newAlbum, method: method}).then(r =>
            {
                if (r?.status === 200) {
                    r.json().then(data => {
                        setAlbums(data);
                        //navigate to album details
                        window.location.href = "/music/"+data.id;
                    });
                } else {
                   console.log(r.status);
                }
            }
        );
    }

    return (
        <div className={"album"}>
            <h1>Album</h1>
            <ul>
                {albums?.map((album) => (
                        <li key={album.id}>
                           <a href={"/music/"+album?.id}>{album?.title}</a>  <br />
                        </li>

                ))}
            </ul>

            <button onClick={() => setShowAlbumForm(!showalbumForm)}>Add new album</button>
            {showalbumForm && <form >
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" onChange={(e) => setNewAlbum({...newAlbum, title: e.target.value})}/>
                    <label htmlFor="artist">Artist</label>
                    <input type="text" name="artist" id="artist" onChange={(e) => setNewAlbum({...newAlbum, artist: e.target.value})}/>
                    <label htmlFor="genre">Genre</label>
                    <input type="text" name="genre" id="genre" onChange={(e) => setNewAlbum({...newAlbum, genre: e.target.value})}/>
                    <button onClick={() => addNewAlbum(newAlbum)}>Add</button>
                </div>
            </form>}




        </div>



    );
}
