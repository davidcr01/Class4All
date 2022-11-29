export const getBestSearch = async (criteria, locale = "es") => {
    try {
        const url = "https://api.arasaac.org/api/pictograms/" + locale + "/bestsearch/" + criteria;
        const res = await fetch(url)
        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getImage = (id, parameters) => {
    let parsed = "?";
    if (parameters !== undefined) {
        if (parameters.plural !== undefined && typeof parameters.plural === "boolean")
            parsed += "plural=" + parameters.plural + "&";

        if (parameters.color !== undefined && typeof parameters.color === "boolean")
            parsed += "color=" + parameters.color + "&";

        if (parameters.backgroundColor !== undefined)       //COMPROBAR A PARTIR DE AQUI SEGUNDA CONDICION
            parsed += "backgroundColor=" + parameters.backgroundColor + "&";

        if (parameters.action !== undefined && action[parameters.action] !== undefined)
            parsed += "action=" + parameters.action + "&";

        if (parameters.resolution !== undefined && resolution[parameters.resolution] !== undefined)
            parsed += "resolution=" + parameters.resolution + "&";

        if (parameters.skin !== undefined && skin[parameters.skin] !== undefined)
            parsed += "skin=" + parameters.skin + "&";

        if (parameters.hair !== undefined && hair[parameters.hair] !== undefined)
            parsed += "hair=" + parameters.hair + "&";

        if (parameters.identifier !== undefined && identifier[parameters.identifier] !== undefined)
            parsed += "identifier=" + parameters.identifier + "&";
    }
    return "https://api.arasaac.org/api/pictograms/" + id + parsed;
}


//EJEMPLO PARA OBTENER UNA IMAGEN
//getImage(123, {plural: true, action: action.past, resolution: resolution[500], skin: skin.black, hair: hair.brown, identifier: identifier.health})
//Para poder usar el archivo hace falta poner: import 
//enumerados para ayudar en los parametros
export const action = Object.freeze({ past: "past", future: "future" });
export const resolution = Object.freeze({ 500: 500, 2500: 2500 });
export const skin = Object.freeze({ white: "white", black: "black", assian: "assian", mulatto: "mulatto", aztec: "aztec" });
export const hair = Object.freeze({ blonde: "blonde", brown: "brown", darkBrown: "darkBrown", gray: "gray", darkGray: "darkGray", red: "red", black: "black" });
export const identifier = Object.freeze({ classroom: "classroom", health: "health", library: "library", office: "office" });


/**
 * EJEMPLO DE USO CON FICHERO:
 * import { getImage, skin } from '../../../interfaces/arasaac';
 * import imagenesARASAAC from "../../../img/imagenesARASAAC.json";
 * 
 * //CODIGO...
 * 
 * <img src={getImage(imagenesARASAAC.numeros.dos, {skin: skin.black})}/>
 * 
 * 
 * //Tambien se le puede pasar asi para que salga con los valores por defecto
 * <img src={getImage(imagenesARASAAC.numeros.dos)}/>
 * 
 * O bien, si se necesita acceder a un valor mediante una valiable:
 * imagenesARASAAC['numeros][variable], donde "variable" almacena el valor que necesitamos
 * 
 * <img src={getImage(imagenesARASAAC.numeros.[2])}/>
 * //Tambien se le puede pasar el ID como un numero directamente
 * <img src={getImage(123)}/>
 */