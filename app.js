const birthdayEl = document.getElementById("birthday");
const btnEl = document.getElementById("btn");
const resultEl = document.getElementById("result");

function AgeCalculator() {
    const birthdayUser = birthdayEl.value;
    if (birthdayUser === "") {
        alert("Please try again");
    } else {
        const age = GetAge(birthdayUser);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years":"year"} old `;
    }
}

function GetAge(inputDate) {
    const currentDate = new Date();
    const userDate = new Date(inputDate);
    let age = currentDate.getFullYear() - userDate.getFullYear();
    const monthDiff = currentDate.getMonth() - userDate.getMonth();
    const dayDiff = currentDate.getDate() - userDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    return age;
}

btnEl.addEventListener("click", AgeCalculator);
