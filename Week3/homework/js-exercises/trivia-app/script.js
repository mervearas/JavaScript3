const url = "https://opentdb.com/api.php?amount=5";

async function fetchData (url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log('error',error);
    }
}

function main() {
    const root = document.createElement('div');
    root.className = "root";
    document.body.appendChild(root);
    fetchData(url).then((questions) => {
        questions.map((question, index) => {
            const questionContainer = document.createElement('div');
            questionContainer.className = 'question_container';
            const answerContainer = document.createElement('div');
            answerContainer.className = 'answer_container';
            answerContainer.id = `answer_container-${index}`;
            const questionText = document.createElement('p');
            const answerText = document.createElement('h3');

            questionText.innerText = question.question.replace(/&quot;/g, '"');
            answerText.innerText = question.correct_answer.replace(/&quot;/g, '"');
            
            questionContainer.appendChild(questionText);
            answerContainer.appendChild(answerText);
            root.appendChild(questionContainer);
            root.appendChild(answerContainer);

            questionContainer.addEventListener('click', function() {
                const answer = document.getElementById(`answer_container-${index}`);
                answer.classList.toggle('open');
            })
        })
    })
}

window.onload = main();

