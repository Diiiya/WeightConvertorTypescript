let input: HTMLInputElement = <HTMLInputElement> document.getElementById("input");
let buttonToOunces: HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonToOunces");
buttonToOunces.addEventListener("click", ConvertToOunces);
let buttonToGrams: HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonToGrams");
buttonToGrams.addEventListener("click", ConvertToGrams);
let divElement: HTMLDivElement = <HTMLDivElement> document.getElementById("output");

function ConvertToOunces(): void {
    let inputVal: string = input.value;
    let result: number = (parseInt(inputVal) * 0.035274);
    divElement.innerHTML = "The amount in ounces is: " + result.toString();
}

function ConvertToGrams(): void {
    let inputVal: string = input.value;
    let result: number = (parseInt(inputVal) * 28.3495);
    divElement.innerHTML = "The amount in grams is: " + result.toString();
}