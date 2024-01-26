import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import response, {Request} from "../Request";

export const AlbumDetails = () => {
    const id = useParams().id;
    const [album, setAlbum ] = useState();
    const [newSong, setNewSong] = useState(
        {
            name: "",
            duration: 0,
            album: {id: id}
        }
    );
    const [songs, setSongs] = useState();
    const [show, setShow] = useState(false);



    useEffect(() => {
        Request({endpoint: "/album/"+id, method: "GET"}).then(r => {
                if (r?.status === 200) {
                    r.json().then(data => {
                        setAlbum(data);
                    });
                }
            }
        );
    }, []);

    //get songs
    useEffect(() => {
        Request({endpoint: "/song/"+id, method: "GET"}).then(r => {
                if (r?.status === 200) {
                    r.json().then(data => {
                        setSongs(data);
                    });
                }
            }
        );
    }, []);


    const saveSong = async (song) => {
        const endpoint = "/album";
        const method = "POST";
        const response = require('../Request');
        response.Request({endpoint: endpoint, body: song, method: method}).then(r =>
            {
                if (r?.status === 200) {
                    r.json().then(data => {
                        setAlbum(data);
                       // window.location.reload();
                    });
                } else {
                    console.log(r.status);
                }
            }
        );
    }
    return (
        <div className={"album"}>
            <h1>Album details</h1>
            <span>Titel: {album?.title}</span>
            <p>Artist: {album?.artist}</p>
            <p>Genre: {album?.genre}</p>

            <h2>Songs</h2>
            <ul>
                {songs?.map((song) => (
                    <li key={song.id}>
                       <ul>
                            <li>{song.name}</li>
                            <li>{song.duration}</li>
                       </ul>
                    </li>

                ))}
            </ul>
            <button onClick={() => setShow(!show)}>Add new song</button>
            {show && <form >
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={(e) => setNewSong({...newSong, name: e.target.value})}/>
                    <label htmlFor="duration">Duration</label>
                    <input type="number" name="duration" id="duration" onChange={(e) => setNewSong({...newSong, duration: e.target.value})}/>
                </div>
                <button onClick={() => saveSong(newSong)}>Add new Song</button>


            </form>
            }

        </div>
    );
}
