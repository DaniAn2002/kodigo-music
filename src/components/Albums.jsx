import { Artist } from "../components/ArtistApi"

export const Albums = () => {
    return (
        <>
            <div className="album-div border-test border-radius">
                <h2 className="m-1">Estos son tus albums más escuchados últimamente: </h2>
                <div className="row m-1 album-height">
                    <Artist />

                </div>
            </div>
        </>
    )
}
