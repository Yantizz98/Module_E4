class ElectricalApp {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }
    
    turnOn() {
        console.log(this.name + " is turn on!");
        this.isPlugged = true;
    }

    turnOff() {
        console.log(this.name + " is turn out");
        this.isPlugged = false;
    }
}


class Lamps extends ElectricalApp {
    constructor(color, category,isPlugged, name, power) {
        super(name, power);
        this.color = color;
        this.category = category;
        this.isPlugged = isPlugged;
    }
}


class Televisions extends ElectricalApp {
    constructor(screenResolution, brand, isPlugged, name, power) {
        super(name, power);
        this.screenResolution= screenResolution;
        this.company = brand;
        this.isPlugged = isPlugged
    }
}

function calculatePowerUsage(...devices) {
    let sum = 0;
    for (let device of devices) {
        if (device.isPlugged) {
            sum += device.power;
        }
    }
    return sum;
}

const lamp1 = new Lamps('blue', 'table lamp', false, 'lamp1', 9)
const telly1 = new Televisions('1080 HD', 'LG', false,'telly1', 60)

lamp1.turnOn()
telly1.turnOn()

console.log(calculatePowerUsage(lamp1, telly1))
