function checkAge() {
    let ageBox = document.getElementById("age_box");
    let age = ageBox.value;
    let displayText = document.getElementById("display_text");

    if (age <= 0) {
        let yearsLeft = Math.abs(age)
        displayText.innerHTML = "Error. It is not born yet. " + yearsLeft + " years until is born"
    } else if (age > 0 && age < 18) {
        displayText.innerHTML = "Is under 18 years old"
    } else if (age >= 18 && age <= 150) {
        displayText.innerHTML = "Is older than 18 years old"
    } else {
        displayText.innerHTML = "Error... it is dead"
    }
}