const correctAnswers = ["B", "A", "B", "C", "C", "B", "B", "C", "A", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".score");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];

    // Check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 10;
        }
    });

    // Show results
    scrollTo(0,0);
    result.querySelector("span").textContent =`${score}%`;
    result.classList.remove("d-none");

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector("span").textContent = `${output}%`;
        if(output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});

