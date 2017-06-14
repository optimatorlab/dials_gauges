'use strict'

// we make an object and add some attribs
function Dials() {
    this.attitude = attitude
    this.heading = heading
    this.variometer = variometer
    this.airSpeed = airspeed
    this.altimeter = altimeter
}

// We are useing the cool properties of java and adding method via prototypes to the object we made above
// Same as adding those to the initial object but it is cleaner this way and looks cooler 

Dials.prototype.addAttitude = function () {
    this.attitude = $.flightIndicator('#attitude', 'attitude', {img_directory: '../dials_gauges/img/', size:50});
}
Dials.prototype.getAttitude = function () {
    return this.attitude
}
Dials.prototype.addHeading = function () {
    this.heading = $.flightIndicator('#heading', 'heading', {img_directory: '../dials_gauges/img/', size:50});
}

Dials.prototype.getHeading = function () {
    return this.heading
}

Dials.prototype.addVariometer = function () {
    this.variometer = $.flightIndicator('#variometer', 'variometer', {img_directory: '../dials_gauges/img/', size:50});
}
Dials.prototype.getVariometer = function () {
    return this.variometer
}

Dials.prototype.addAirSpeed = function () {
    this.airspeed = $.flightIndicator('#airspeed', 'airspeed', {img_directory: '../dials_gauges/img/', size:50});
}
Dials.prototype.getAirSpeed = function () {
    return this.airspeed
}

Dials.prototype.addAltimeter = function () {
    this.altimeter = $.flightIndicator('#altimeter', 'altimeter', {img_directory: '../dials_gauges/img/', size:50});
}
Dials.prototype.getAltimeter = function () {
    return this.altimeter
}
