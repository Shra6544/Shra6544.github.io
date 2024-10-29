document.getElementById('colorButton').addEventListener('click', function() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
});
  
document.getElementById('toggleImage').addEventListener('mouseover', function() {
    document.getElementById('toggleText').textContent = "You're hovering over the image!";
});
  
document.getElementById('toggleImage').addEventListener('mouseout', function() {
    document.getElementById('toggleText').textContent = "Hover over the image to change this text!";
});