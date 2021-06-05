const age = 28;
const isFemale = true;
const driverStatus = "bob";
const name = "Susanne";
const totalAmount = 65;

if (age >= 18) {

    console.log("Kom maar binnen!");

} else {

    console.log("Je mag niet naar binnen!");

}

if (isFemale) {

    console.log("Welkom!");

} else {

    console.log("Helaas!");

}

if (driverStatus === "bob") {

    console.log("Je mag rijden!");

} else {

    console.log("Neem een taxi.");

}

if (age >= 18 && age <= 25) {

    console.log("Je krijgt 50% korting!");

} else {

    console.log("Je krijgt geen korting.");

}

if (name === "Bram" || name === "Sarah") {

    console.log("Gefeliciteerd, een gratis biertje!");

} else {

    console.log("Drie euro, alsjeblieft.");
}

if (totalAmount >= 100) {

    console.log("Je krijgt een gratis fles champagne.");

} else if (totalAmount >= 50) {

    console.log("Je krijgt gratis een portie nacho's.");

} else if (totalAmount >= 25) {

    console.log("Je krijgt gratis bitterballen.");

} else {

    console.log("Een beetje doordrinken om mee te doen aan de jubileum-actie!")

}