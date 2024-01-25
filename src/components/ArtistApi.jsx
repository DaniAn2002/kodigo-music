import { useEffect, useState } from "react"

export const Artist = () => {

    const [artists, setArtists] = useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3e3d28e7b1msh9192d1b5f3d913ap16cca6jsn764715d6c09a',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    }

    const getArtistas = async () => {
        try {
            const url = 'https://spotify23.p.rapidapi.com/artist_albums/?id=2w9zwq3AktTeYYMuhMjju8&offset=0&limit=100'
            const data = await fetch(url, options)
            const res = await data.json()

            setArtists(res.data.artist.discography.albums.items || [])
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getArtistas();
    }, [])

    return (
        <>
            {artists.slice(0, 5).map((album, index) => (
                <div key={index} className="col album-esuchados border-test d-flex flex-column align-items-center text-center">
                    <img className="album-img m-2" src={album.releases.items[0].coverArt.sources[0].url} alt="" />
                    <h1 className="texto-album">{album.releases.items[0].name}</h1>
                </div>
            ))}
        </>
    );

}