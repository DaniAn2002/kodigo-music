import { Link } from "react-router-dom"

export const SideBar = () => {
    return (
        <>
            <div className="nav navbar-div border-test flex-column border-radius">
                <div className="d-flex  justify-content-center">
                    <img className="logo" src="https://res.cloudinary.com/doi7ukubm/image/upload/f_auto,q_auto/v1/kodigo-music/m4p5jqci6owoyetejvog" alt="" />
                </div>
                <ul>
                    <li className="nav-item li-margin border-test">
                        <img className="icons" src="https://res.cloudinary.com/doi7ukubm/image/upload/f_auto,q_auto/v1/kodigo-music/visatey50lkamyvy8lcf" alt="" />
                        <Link className="button">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item li-margin border-test">
                        <img className="icons" src="https://res.cloudinary.com/doi7ukubm/image/upload/f_auto,q_auto/v1/kodigo-music/rooftsslxj6egr4ogxjp" alt="" />
                        <Link className="button">
                            Search
                        </Link>
                    </li>
                    <div className="border-test d-flex flex-column mt-5">
                        <Link to='/login' className="a-homepage p-2 button-login mb-2">Login</Link>
                        <Link to='/register' className="a-homepage-register p-2 button-register mt-2">Register</Link>
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
            </div>
        </>
    )
}
