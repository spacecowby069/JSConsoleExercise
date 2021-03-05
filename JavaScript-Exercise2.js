var plane = "plane";
var sevenFiftySeven = "757";
var drone = "drone";
var shellPlane = null;
var nothing = "";

var flyingObjects = [plane, sevenFiftySeven, drone, shellPlane, nothing]

function takeOff(a) {
    for (i = 0; i < a.length; i++) {
        if (a[i]) {
            console.log(a[i] + "is preparing for takeoff")
        }
        else {
            console.log(a[i] + "cannot fly")
        }
    }
}

takeOff(flyingObjects)