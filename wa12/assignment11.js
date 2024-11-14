const comicTitle = document.getElementById("comic-title");
const comicImage = document.getElementById("comic-img");
const comicDate = document.getElementById("comic-date");
const randomComicBtn = document.getElementById("random-comic-btn");

function getRandomComicNumber() {
  return Math.floor(Math.random() * 3000) + 1;
}

async function fetchRandomComic() {
  const randomComicNumber = getRandomComicNumber();
  const url = `https://corsproxy.io/?https://xkcd.com/${randomComicNumber}/info.0.json`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    
    const comicData = await response.json();
    
    comicTitle.textContent = comicData.title;
    comicImage.src = comicData.img;
    comicImage.alt = comicData.alt;
    comicDate.textContent = `Published on: ${comicData.day}/${comicData.month}/${comicData.year}`;
    
  } catch (error) {
    console.error("Error fetching comic:", error);
  }
}

randomComicBtn.addEventListener("click", fetchRandomComic);

fetchRandomComic();