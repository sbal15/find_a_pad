const fs = require("fs");

function nearbyLocations(position, radius) {
    try {
        const data = fs.readFileSync("padLocations.json", 'utf8');
        const padLocations = JSON.parse(data)
        let nearbyLocs = [];
        for (let i in padLocations) {
            if (Math.abs(position[0] - padLocations[i].latitude) <= radius/69 && Math.abs(position[1] - padLocations[i].longitude) <= radius/69) {
                nearbyLocs.push(padLocations[i]);
            }
        }
        return nearbyLocs
    } catch (err) {
        console.log(err)
        return null
    }
}

console.log(nearbyLocations([67.94,-12.35], 10))
