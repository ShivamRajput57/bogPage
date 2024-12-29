console.log('Using serverData in home.js:', serverData);

const container = document.getElementById('feedback-container');
for (let details of serverData){
    let {user,feed,rating}=details
    const feedbackElement = document.createElement('div');
    feedbackElement.innerHTML = `
        <p>User: ${user}</p>
        <p>Feedback: ${feed}</p>
        <p>Rating: ${rating}</p>
    `;
    container.appendChild(feedbackElement);
}
