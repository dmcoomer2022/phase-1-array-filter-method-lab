// Code your solution here
function findMatching(driversArray, preacherPaul) {
return driversArray.filter(element => element.toLowerCase() === preacherPaul.toLowerCase());
} 

function fuzzyMatch(driversArray, prickleyBear) {
    return driversArray.filter(element => element[0]===prickleyBear[0])

}

function matchName(drivers, name) {
    return drivers.filter(element => element.name === name)
}