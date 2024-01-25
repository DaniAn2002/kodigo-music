import { signOut } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"
import { app } from '../firebase'
import { getAuth } from "firebase/auth"

export const SideBarLoged = () => {
    const auth = getAuth(app)
    const nav = useNavigate()

    const logout = async () => {
        await signOut(auth)
        nav('/')
    }

    return (
        <>
            <navbar className="nav navbar-div border-test flex-column border-radius">
                <div className="d-flex  justify-content-center">
                    <img className="logo" src="https://res.cloudinary.com/doi7ukubm/image/upload/f_auto,q_auto/v1/kodigo-music/m4p5jqci6owoyetejvog" alt="" />
                </div>
                <ul>
                    <li className="nav-item li-margin border-test">
                        <img className="icons" src="https://res.cloudinary.com/doi7ukubm/image/upload/f_auto,q_auto/v1/kodigo-music/visatey50lkamyvy8lcf" alt="" />
                        <Link to='/' type="button" onClick={logout} className="button">
                            Logout
                        </Link>
                    </li>
                    <li className="nav-item li-margin border-test">
                        <img className="icons" src="https://res.cloudinary.com/doi7ukubm/image/upload/f_auto,q_auto/v1/kodigo-music/rooftsslxj6egr4ogxjp" alt="" />
                        <Link className="button">
                            Search
                        </Link>
                    </li>
                    <div className="border-test text-center d-flex flex-column mt-5 welcome-back">
                        <h1 className='mb-5'>You are logged in.</h1>
                        <h1>Welcome back to Spotify!</h1>
                    </div>
                    <div className="mt-5 m-2 d-flex justify-content-start">
                        <div>
                            <li className="nav-item">
                                <Link className="a-homepage" to='/politicas'>Politicas de cookies</Link>
                            </li>
                        </div>
                        <div>
                            <li className="nav-item"><img className="line-icon" src="https://res.cloudinary.com/doi7ukubm/image/upload/f_auto,q_auto/v1/kodigo-music/ttjgdqpnsei4vmozzbnw" alt="" /></li>
                        </div>
                        <div>
                            <li className="nav-item">
                                <Link className="a-homepage" to='/privacidad'>Privacidad</Link>
                            </li>
                        </div>
                    </div>

                </ul>
            </navbar>
        </>
    )
}
