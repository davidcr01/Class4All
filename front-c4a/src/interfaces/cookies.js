import Cookies from "universal-cookie";


const cookies = new Cookies();

/**
 * Petición AJAX para eliminar la cookie de sesión del sistema.
 * Precondiciones: La cookie debe existir en el servidor (arreglar).
 */
export const logoutServer = async () => {
    try {
        const url = "http://localhost:3900/api/usuarios/userLogout/";
        //console.log(url);
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id: cookies.get("loginCookie").sessionID})
        })
    } catch (error) {
        console.log(error);

    }                        
}

/**
 * Llamada AJAX que devuelve la cookie del servidor que corresponde con el usuario actual.
 * @returns undefined en caso de fallo o de no existir la cookie en el servidor o no tener la cookie en el cliente, 
 * el valor de la cookie en otro caso
 */
export const getCookie = async () => {

    try {
        let data = undefined;

        if (cookies.get("loginCookie") !== undefined) {
            const url = "http://localhost:3900/api/usuarios/cookie/" + cookies.get("loginCookie").sessionID + "/" + cookies.get("loginCookie").id + "/" + cookies.get("loginCookie").rol;


            const res = await fetch(url)
            data = await res.json();
        }

        return data;

    } catch (error) {
        console.log(error);

        return undefined;
    }
}


/**
 * Comprueba si la cookie esta tambien en el servidor y no ha sido modificada de ninguna forma
 * @returns true en caso de tener el servidor la cookie, y false en otro caso
 */
export const isCookieSet = async () => {
    const data = await getCookie();
    if (data !== undefined && data.status !== "error")
        return true;

    else
        return false;
}

/**
 * Loggea al usuario en el sistema dado el correo electronico
 */
export const loginUser = async (correo) => {
    //console.log("server: "+usernameServer);
    try {
        const url = "http://localhost:3900/api/usuarios/userLogin/";
        console.log(url);
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({correo: correo})
        })

        const data = await res.json();

        if(data.status === "success")
            return {id: data.usuario._id, sessionID: data.sessionID, rol: data.usuario.rol};

            //return data;//{id: data.usuario._id, sessionID: data.sessionID};
        else
            return undefined;

    } catch (error) {
        console.log(error);

        return undefined;
    }        
}

/**
 * Loggea al alumno en el sistema dado el id de usuario
 */
 export const loginAlumno = async (id) => {
    //console.log("server: "+usernameServer);
    try {
        const url = "http://localhost:3900/api/usuarios/classLogin/";
        console.log(url);
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id: id})
        })

        const data = await res.json();

        if(data.status === "success"){
            //alert("server local: "+data.rol)
            //const resData = {id: data.usuario._id, sessionID: data.sessionID, rol: data.rol};
            //return data;//{id: data.usuario._id, sessionID: data.sessionID};
            return {id: data.usuario._id, sessionID: data.sessionID, rol: data.usuario.rol, tamañoLetra: data.usuario.tamañoLetra, tamañoIconos: data.usuario.tamañoIconos};
        }
        else
            return undefined;

    } catch (error) {
        console.log(error);

        return undefined;
    }        
}