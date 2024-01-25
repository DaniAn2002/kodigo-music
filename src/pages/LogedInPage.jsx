import { getAuth, onAuthStateChanged } from "firebase/auth"
import { app } from '../firebase'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Albums } from "../components/Albums"
import { Play } from "../components/Play"
import { SideBarLoged } from "../components/SideBarLoged"
import { Songs } from "../components/Songs"

export const LogedInPage = () => {
    const auth = getAuth(app)
    const nav = useNavigate()


    useEffect(() => {
        const authentication = async () => {
            await onAuthStateChanged(auth, (user) => {
                if (user) {
                    console.log('Logueado correctamente')
                } else {
                    nav('/')
                }
            })
        }

        authentication()
    }, [auth, nav])

    return (
        <>
            <div className="bg-black">
                <div className="parent font-color">
                    <SideBarLoged />
                    <Songs />
                    <Albums />
                    <Play />
                </div>
            </div>
        </>
    )
}
