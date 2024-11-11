const imageFiles = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.5.webp'];
const imageAlts = {
    'img1.jpg': 'Chess Pieces',
    'img2.jpg': 'Yellow Umbrella',
    'img3.jpg': 'Orange Pumpkin',
    'img4.jpg': 'A group of Strawberries',
    'img5.5.webp': 'A Tree'
};

const thumbBar = document.querySelector('.thumb-bar');
const displayedImg = document.querySelector('.displayed-img');
const btn = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < imageFiles.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${imageFiles[i]}`);
    newImage.setAttribute('alt', imageAlts[imageFiles[i]]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', (e) => {
        displayedImg.setAttribute('src', e.target.getAttribute('src'));
        displayedImg.setAttribute('alt', e.target.getAttribute('alt'));
    });
}

btn.addEventListener('click', () => {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
});