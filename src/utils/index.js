/**
 * 
 * @param {number} year Año a utilizar
 */
export function getYearDifference(year) {
    return new Date().getFullYear() - year;
}

export function getBrandDiscount(brand) {
     switch(brand) {
        case 'europeo':
            return 1.3;
        case 'americano':
            return 1.15;
        case 'asiático':
            return 1.05;
        default:
            return 1;
     }
}

export function getPlan(plan) {
    return (plan === 'básico' ? 1.2 : 1.5);
}

/**
 * Función para capitalizar un oración
 * @param {string} text Texto a capitalizar
 */
export function toCapital(text) {
    return `${text.charAt(0).toUpperCase()}${text.slice(1)}`
}
