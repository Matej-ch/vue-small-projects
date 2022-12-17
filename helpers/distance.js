// this file has helpers to get the distance from a given latitude-longtitude to the north pole

// source: https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula

export function getDistanceKm(lat, lon) {
    let R = 6371 // Radius of the earth in km
    let dLat = deg2rad(90 - lat) // deg2rad below
    let dLon = deg2rad(135 - lon)
    let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat)) * Math.cos(deg2rad(90)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    let d = R * c // Distance in km
    return Math.round(d)
}

export function getDistanceMiles(lat, lon) {
    return Math.round(getDistanceKm(lat, lon) * 0.621371)
}

export function deg2rad(deg) {
    return deg * (Math.PI / 180)
}