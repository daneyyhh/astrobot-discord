// Trivia command for AstroBot
// Provides random trivia questions from various categories

module.exports = {
    name: 'trivia',
    description: 'Get a random trivia question from various categories',
    execute(message, args) {
        // Array of trivia questions with answers
        const triviaQuestions = [
            {
                question: '🌍 What is the capital of France?',
                answer: 'Paris',
                category: 'Geography'
            },
            {
                question: '🔬 What is the chemical symbol for gold?',
                answer: 'Au',
                category: 'Science'
            },
            {
                question: '🎮 In what year was the first iPhone released?',
                answer: '2007',
                category: 'Technology'
            },
            {
                question: '📚 Who wrote "Romeo and Juliet"?',
                answer: 'William Shakespeare',
                category: 'Literature'
            },
            {
                question: '🎬 Which movie won the Oscar for Best Picture in 2020?',
                answer: 'Parasite',
                category: 'Movies'
            },
            {
                question: '🏛️ In which year did World War II end?',
                answer: '1945',
                category: 'History'
            },
            {
                question: '🦁 What is the largest land animal?',
                answer: 'African Elephant',
                category: 'Nature'
            },
            {
                question: '⚽ How many players are there in a soccer team on the field?',
                answer: '11',
                category: 'Sports'
            },
            {
                question: '🌌 What planet is known as the Red Planet?',
                answer: 'Mars',
                category: 'Space'
            },
            {
                question: '🎨 Who painted the Mona Lisa?',
                answer: 'Leonardo da Vinci',
                category: 'Art'
            }
        ];

        // Select a random trivia question
        const randomTrivia = triviaQuestions[Math.floor(Math.random() * triviaQuestions.length)];

        // Create the trivia message
        const triviaMessage = `
**🎯 TRIVIA TIME! 🎯**
**Category:** ${randomTrivia.category}

${randomTrivia.question}

*Type your answer in the chat! The answer will be revealed in 10 seconds...*
        `;

        // Send the trivia question
        message.channel.send(triviaMessage);

        // Reveal the answer after 10 seconds
        setTimeout(() => {
            message.channel.send(`✅ **Answer:** ${randomTrivia.answer}`);
        }, 10000);
    },
};
