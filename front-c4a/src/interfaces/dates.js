const MONTHS = Object.freeze(
    {
        1: "Enero",
        2: "Febrero",
        3: "Marzo",
        4: "Abril",
        5: "Mayo",
        6: "Junio",
        7: "Julio",
        8: "Agosto",
        9: "Septiembre",
        10: "Octubre",
        11: "Noviembre",
        12: "Diciembre"
    }
);

/**
 * Convierte la fecha pasada como parámetro en una fecha legible.
 * @param fechaString Fecha pasado como String
 * @returns La fecha como String en formato DD de MES de YYYY
 */
export const showDate = (fechaString) => {
    let date = new Date(fechaString);
    let format = date.getDate() + " de "+MONTHS[date.getMonth()+1] + " de "+date.getFullYear();

    return format;
}