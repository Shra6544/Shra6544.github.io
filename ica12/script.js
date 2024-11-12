const apiEndpoint = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

document.getElementById("getJokeButton").addEventListener("click", getJoke);

async function getJoke() {
    try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        console.log(data.joke); // Log joke to console
        displayRes(data.joke); // Show joke in paragraph
    } catch (error) {
        console.error("Fetching joke failed:", error);
        alert("Failed to fetch a joke. Please try again later.");
    }
}

function displayRes(jokeText) {
    document.getElementById("jokeText").textContent = jokeText;
}

document.addEventListener("DOMContentLoaded", getJoke);