document.addEventListener("DOMContentLoaded", () => {
    let enter = document.getElementById("enter");
    let input = document.getElementById("inputdate");
    let dateContainer = document.getElementById("datecontiner");
    let reneter = document.getElementById("reenter");
    reneter.addEventListener("click",()=>{
        enter.classList.remove("hidden");
        dateContainer.innerHTML="";
        reneter.classList.add("hidden");
    })

    input.max = new Date().toISOString().split("T")[0];

    let y3 = 0, m3 = 0, d3 = 0;
    enter.addEventListener("click", () => {
        enter.classList.add("hidden");
        reneter.classList.remove("hidden");
        calculateAge();
        console.log(y3, m3, d3);
        dateContainer.innerHTML ="";
       let headtag =  document.createElement("h1");
       headtag.classList.add("text-white");
        headtag.innerHTML =` Your age is: ${y3} years, ${m3} months and ${d3} days`;
        dateContainer.appendChild(headtag);
        input.value ="";
    });

    function calculateAge() {
        let todayDate = new Date();
        let birthDate = new Date(input.value);

        if (isNaN(birthDate)) {
            alert("Please select a valid date!");
            return;
        }

        let birthYear = birthDate.getFullYear();
        let birthMonth = birthDate.getMonth() + 1;
        let birthDay = birthDate.getDate();

        let presentYear = todayDate.getFullYear();
        let presentMonth = todayDate.getMonth() + 1;
        let presentDay = todayDate.getDate();

        y3 = presentYear - birthYear;

        if (presentMonth < birthMonth) {
            y3--;
            m3 = 12 + presentMonth - birthMonth;
        } else {
            m3 = presentMonth - birthMonth;
        }

        if (presentDay >= birthDay) {
            d3 = presentDay - birthDay;
        } else {
            m3--;
            d3 = getDaysInMonth(birthYear, birthMonth) + presentDay - birthDay;
        }

        if (m3 < 0) {
            m3 = 11;
            y3--;
        }
    }

    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }
});
