//Deel 1, Leeftijd check
const age = 28;

if (age > 17) {

    console.log("Kom binnen, leuk dat je er bent. Maak er een gezellige avond van.");

} else {

    console.log("Je bent te jong om toegelaten te worden tot de kroeg. Ik verzoek je vriendelijk weg te gaan.");

}

//Deel 2, Ladiesnight
const isFemale = true;

if (isFemale) {

    console.log("Je bent een dame en dus kun je een kaartje kopen voor de ladiesnight");

} else {

console.log("Helaas is de avond enkel voor vrouwen en daarom kom je niet in aanmerking voor een kaartje");

}

//Deel 3, Bob
const driverStatus = 'bob';

if (driverStatus == 'bob') {

    console.log("Je bent nuchter. Ik hoop dat je een leuke avond.");

} else {

    console.log("Ik bel een taxi voor je, want je mag niet meer zelf rijden.");

}

/* Opdracht: Comparison && Logical Operators
   Deel 1: 50% korting
*/
if (age >= 18 && age <= 25) {

    console.log("Je krijgt 50% korting!");

} else {

    console.log("Helaas geen korting voor jou");

}

/* Opdracht: Comparison && Logical Operators
   Deel 2: ludieke actie
*/
const firstName = 'Bram';

if (firstName === 'Bram' || firstName === 'Sarah'){

console.log("Je hebt een gratis biertje verdiend!")

} else {

console.log("Helaas, geen gratis bier voor jou, maar toch een fijne avond toegewenst.")

}

/* Opdracht: Comparison && Logical Operators
   Deel 3: jubileum korting
*/
const totalAmount = 25;

if (totalAmount >= 25 && totalAmount < 50) {

    console.log("Je krijgt een gratis portie (vega)bitterballen!")

} else if (totalAmount >=50 && totalAmount < 100){

    console.log("Je krijgt een gratis portie nachos!")

} else if (totalAmount >= 100) {

    console.log("Je krijgt een gratis flesje champagne!")

} else {

    console.log("Ik zou nog wat extra bestellen!")

}