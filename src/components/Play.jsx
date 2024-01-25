export const Play = () => {
    return (
        <>
            <div className="player-div border-test border-radius d-flex">
                <div className="p-2 flex-shrink-1 flex-column playlist-bg m-1">
                    <div className="p-2">
                        <img className="playlist-img" src="https://res.cloudinary.com/doi7ukubm/image/upload/f_auto,q_auto/v1/kodigo-music/sdfzlc2t8q3r2y6xdsql" alt="" />
                    </div>
                    <div className="margin-playlist">
                        <p className="p-play song">Rich Flex</p>
                        <p className="p-play artist">Drake</p>
                    </div>
                </div>
                <div className="d-flex w-100 justify-content-evenly margin-icons">
                    <button className="btn-bg">
                        <img
                            className="buttons-img"
                            src="https://res.cloudinary.com/doi7ukubm/image/upload/f_auto,q_auto/v1/kodigo-music/cozzmuaj9mdmaqojy5at"
                            alt="" />
                    </button>
                    <button className="btn-bg">
                        <img
                            className="buttons-img"
                            src="https://res.cloudinary.com/doi7ukubm/image/upload/f_auto,q_auto/v1/kodigo-music/i3va0bir7rq1jdizr4qg"
                            alt="" />
                    </button>
                    <button className="btn-bg">
                        <img
                            className="buttons-img"
                            src="https://res.cloudinary.com/doi7ukubm/image/upload/f_auto,q_auto/v1/kodigo-music/b4lzpt8yx5kcdvghu9jo"
                            alt="" />
                    </button>
                    <button className="btn-bg">
                        <img
                            className="buttons-img"
                            src="https://res.cloudinary.com/doi7ukubm/image/upload/f_auto,q_auto/v1/js-kodigo-actividad/ytmwwxubh0agzvz9gia7"
                            alt="" />
                    </button>
                    <button className="btn-bg">
                        <img
                            className="buttons-img"
                            src="https://res.cloudinary.com/doi7ukubm/image/upload/f_auto,q_auto/v1/kodigo-music/c3audvlxsojyluklczlb"
                            alt="" />
                    </button>
                </div>
            </div>

        </>
    )
}
