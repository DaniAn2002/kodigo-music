import { useEffect, useState } from "react"

export const Song = () => {

    const [songs, setSongs] = useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3e3d28e7b1msh9192d1b5f3d913ap16cca6jsn764715d6c09a',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    }

    const getSong = async () => {
        try {
            const url = 'https://spotify23.p.rapidapi.com/artist_singles/?id=2w9zwq3AktTeYYMuhMjju8&offset=0&limit=20'
            const data = await fetch(url, options)
            const res = await data.json()

            console.log(res.data.artist.discography.singles.items);

            setSongs(res.data.artist.discography.singles.items || [])
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSong();
    }, [])

    return (
        <>
            {songs.slice(8, 10).map((data, index) => (
                <div key={index} className="col fav-artistas d-flex border-test">
                    <img className="artist-img w-25" src={data.releases.items[0].coverArt.sources[0].url} alt="" />
                    <h3>{data.releases.items[0].name}</h3>
                </div>
            ))}
        </>
    );

}
