import { Link } from "react-router-dom"

export const Politicas = () => {
    return (
        <>
            <div className="container">
                <div className="text-center mt-3">
                    <h1>POLÍTICA DE COOKIES</h1>
                </div>
                <div className="mt-4">
                    <h2 className="mt-1 mb-3">Acerca de esta politica:</h2>
                    <p className="mt-1">
                        En esta Política se describe cómo procesamos tus datos personales en Spotify AB.

                        Se aplica a lo siguiente:

                        el uso que haga el usuario de todos los servicios de streaming de Spotify. Por ejemplo, esto incluye lo siguiente:
                        tu uso de Spotify en cualquier dispositivo
                        la personalización de tu experiencia de usuario
                        la infraestructura obligatoria para prestar nuestros servicios
                        la conexión de tu cuenta de Spotify con otra aplicación
                        nuestras opciones de streaming gratuitas y pagas.
                        otros servicios de Spotify que incluyan un enlace a esta Política de Privacidad. Estos incluyen los sitios web de Spotify, el servicio de atención al cliente y el sitio de la comunidad.
                        De ahora en adelante, los llamaremos colectivamente Servicios de Spotify.
                    </p>
                    <p className="mt-1">
                        De vez en cuando, podemos desarrollar nuevos servicios u ofrecer servicios adicionales. Esos servicios también estarán sujetos a esta Política, a menos que se indique lo contrario cuando los presentemos.

                        Esta Política no es...

                        lo mismo que los Términos de Uso de Spotify, que es un documento independiente. En los Términos de Uso se describe el contrato legal entre tú y Spotify para usar el Servicio de Spotify. También se describen las reglas de Spotify y tus derechos de usuario.
                        sobre el uso de otros servicios de Spotify que tienen su propia política de privacidad. Otros servicios de Spotify incluyen Anchor, Soundtrap, Megaphone y la aplicación de Spotify Live.
                        Otros recursos y configuraciones

                        La información principal sobre tus datos personales se encuentra aquí, en esta Política. Sin embargo, puede que quieras leer sobre otros recursos y controles de privacidad:
                    </p>
                    <p className="mt-1">
                        Centro de Privacidad: una sección fácil de usar con resúmenes de temas claves.
                        Configuración de privacidad: controla el procesamiento de ciertos datos personales, incluidos los anuncios personalizados.
                        Configuración de notificaciones: establece qué información publicitaria recibes de parte de Spotify.
                        Configuración (que se encuentra en las versiones de escritorio y de dispositivo móvil de Spotify): controla ciertos aspectos del Servicio de Spotify como Social o Contenido explícito. En el parámetro de configuración Social, puedes hacer lo siguiente:
                        comenzar una Sesión privada
                        elegir si quieres compartir lo que escuchas en Spotify con tus seguidores
                        elegir si quieres mostrar tus artistas escuchados recientemente en tu perfil público
                        En el parámetro de configuración Contenido explícito, puedes controlar la reproducción de contenido explícito en tu cuenta de Spotify.
                    </p>
                    <p className="mt-1">
                        Política de Cookies: información sobre cómo usamos las cookies y cómo administrar tus preferencias de cookies. Las cookies son archivos que se guardan en tu teléfono, tablet o computadora cuando visitas un sitio web.
                    </p>

                </div>

                <Link className="a-politicas" to='/auth/home'>Back home</Link>

            </div>
        </>
    )
}
