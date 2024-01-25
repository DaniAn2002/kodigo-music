import { useForm } from "react-hook-form"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app } from '../firebase'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { emailValidation, maxPassword, minPassword } from "../utils/validators";


export const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const auth = getAuth(app)
    const nav = useNavigate()
    const [error, setError] = useState()

    const LoginUser = async (data) => {
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            nav('/auth/home')
        } catch (error) {
            setError(error.message.replace('Firebase: Error (auth/invalid-credential).','Incorrect email or password.'))
        }
    }

    return (
        <>
            <div className="bg-gray">



                <div className="container d-flex justify-content-center">
                    <div className="card mt-5 bg-dark-pr login-register-bg">
                        <div className="card-body d-flex align-items-center flex-column">
                            <h5 className="text-center font-color card-title">
                                Login to your account
                            </h5>
                            <form onSubmit={handleSubmit(LoginUser)} className="mt-5">
                                <div className="mt-4 mb-3">
                                    <input type="text"
                                        name="email"
                                        {...register('email', { required: 'Email is required', pattern: emailValidation })}
                                        className="form-control"
                                        placeholder="Type your email address: " />
                                    {
                                        errors.email && <span className="text-danger">{errors.email.message}</span>
                                    }
                                </div>
                                <div className="mb-3">
                                    <input type="password"
                                        name="password"
                                        {...register('password', { required: 'Password is required', minLength: minPassword, maxLength: maxPassword })}
                                        className="form-control"
                                        placeholder="Type your password: " />
                                    {
                                        errors.password && <span className="text-danger">{errors.password.message}</span>
                                    }
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-music">
                                        Login
                                    </button>
                                </div>
                            </form>
                            {
                                error && <span className="text-danger">{error}</span>
                            }
                        </div>

                        <div className="d-flex justify-content-between">
                            <Link className="m-2 a-politicas" to='/'>Back home</Link>
                            <Link className="m-2 a-politicas" to='/register'>Create an account</Link>
                        </div>



                    </div>

                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#13aa52" fillOpacity="1" d="M0,64L6.2,101.3C12.3,139,25,213,37,240C49.2,267,62,245,74,224C86.2,203,98,181,111,192C123.1,203,135,245,148,224C160,203,172,117,185,106.7C196.9,96,209,160,222,181.3C233.8,203,246,181,258,192C270.8,203,283,245,295,234.7C307.7,224,320,160,332,144C344.6,128,357,160,369,197.3C381.5,235,394,277,406,277.3C418.5,277,431,235,443,202.7C455.4,171,468,149,480,133.3C492.3,117,505,107,517,85.3C529.2,64,542,32,554,64C566.2,96,578,192,591,224C603.1,256,615,224,628,202.7C640,181,652,171,665,170.7C676.9,171,689,181,702,165.3C713.8,149,726,107,738,90.7C750.8,75,763,85,775,96C787.7,107,800,117,812,144C824.6,171,837,213,849,229.3C861.5,245,874,235,886,218.7C898.5,203,911,181,923,192C935.4,203,948,245,960,266.7C972.3,288,985,288,997,282.7C1009.2,277,1022,267,1034,224C1046.2,181,1058,107,1071,90.7C1083.1,75,1095,117,1108,149.3C1120,181,1132,203,1145,197.3C1156.9,192,1169,160,1182,149.3C1193.8,139,1206,149,1218,170.7C1230.8,192,1243,224,1255,229.3C1267.7,235,1280,213,1292,218.7C1304.6,224,1317,256,1329,245.3C1341.5,235,1354,181,1366,138.7C1378.5,96,1391,64,1403,48C1415.4,32,1428,32,1434,32L1440,32L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path></svg>
            </div>

        </>
    )
}
