import { Song } from "./SongApi"
import { Song2 } from "./SongApi2"

export const Songs = () => {
    return (
        <>
            <div className="artist-div border-test border-radius">
                <h1 className="m-2 texto-artistas ">Estas son tus canciones favoritos: </h1>
                <div className="row m-1">
                    <Song />
                </div>
                <div className="row m-1">
                    <Song2 />
                </div>
            </div>
        </>
    )
}
