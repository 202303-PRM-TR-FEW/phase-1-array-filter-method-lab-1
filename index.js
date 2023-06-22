// Code your solution here
function findMatching(driver,string){
    return driver.filter(drive => drive.toLowerCase() === string.toLowerCase());
}
function fuzzyMatch(driver, string){
    return driver.filter(drive => drive.toLowerCase().startsWith(string.toLowerCase()));
}

function matchName(driver, string){
    return driver.filter(drive.name.toLowerCase() === string.toLowerCase());
}