const answers = document.querySelectorAll('.answer');
const plusIcons = document.querySelectorAll('.plus');
const minusIcons = document.querySelectorAll('.minus');


const answersText = {
    'answer1': "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    'answer2': "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    'answer3': "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    'answer4': "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
};


function showAnswer(event, answerId) {
    
    answers.forEach((answer, index) => {
        answer.textContent = '';  
        plusIcons[index].style.display = 'block';  
        minusIcons[index].style.display = 'none';  
    });

  
    const selectedAnswer = document.getElementById(answerId);
    const selectedPlusIcon = event.target.closest('.question-content').querySelector('.plus');
    const selectedMinusIcon = event.target.closest('.question-content').querySelector('.minus');


    if (selectedAnswer.textContent === '') {
        selectedAnswer.textContent = answersText[answerId];
        selectedPlusIcon.style.display = 'none';
        selectedMinusIcon.style.display = 'block';
    } else {
        selectedAnswer.textContent = '';
        selectedPlusIcon.style.display = 'block';
        selectedMinusIcon.style.display = 'none';
    }
}