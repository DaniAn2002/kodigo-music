import { Albums } from "../components/Albums"
import { Play } from "../components/Play"
import { SideBar } from "../components/SideBar"
import { Songs } from "../components/Songs"


export const HomePage = () => {
    return (
        <>
            <div className="bg-black">
                <div className="parent font-color">
                    <SideBar />
                    <Songs />
                    <Albums />
                    <Play />
                </div>
            </div>
        </>
    )
}
