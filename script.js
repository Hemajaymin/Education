function getAIResponse() {
    let question = document.getElementById("question").value;
    let answerDiv = document.getElementById("answer");

    if (question.trim() === "") {
        answerDiv.innerHTML = "Please enter a question.";
        return;
    }

    // Simulating AI response (Replace with API call)
    setTimeout(() => {
        answerDiv.innerHTML = "<strong>AI Answer:</strong> This is a sample answer for your question.";
    }, 2000);
}
