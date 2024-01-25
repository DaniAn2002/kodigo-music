import { Link } from "react-router-dom"

export const Privacidad = () => {
    return (
        <>
            <div className="container">
                <div className="text-center mt-3 mb-3">
                    <h1>PRIVACIDAD</h1>
                </div>
                <div>
                    <h2>
                        Protección de datos de carácter personal según la LOPDDD:
                    </h2>
                    <p>Kodigo-music, en aplicación de la normativa vigente en materia de protección de datos de carácter personal, informa que los datos personales que se recogen
                        a través de los formularios del Sitio web: Kodigo-music, se incluyen en los ficheros automatizados específicos de usuarios de los servicios de Kodigo-music</p>
                    <p>La recogida y tratamiento automatizado de los datos de carácter personal tiene como finalidad el mantenimiento de la relación comercial y el desempeño de tareas de información, formación, asesoramiento y otras actividades propias de Kodigo-music.

                        Estos datos únicamente serán cedidos a aquellas entidades que sean necesarias con el único objetivo de dar
                        cumplimiento a la finalidad anteriormente expuesta.
                    </p>
                    <p>
                        Kodigo-music adopta las medidas necesarias para garantizar la seguridad, integridad y confidencialidad de los datos conforme a lo dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de los mismos.
                    </p>
                </div>
                <Link className="a-politicas" to='/auth/home'>Back home</Link>

            </div>
        </>
    )
}
