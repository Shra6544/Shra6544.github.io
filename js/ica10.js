document.getElementById('colorButton').addEventListener('click', function() {
    if (document.body.style.backgroundColor === 'lightseagreen') {
        document.body.style.backgroundColor = 'white';
    }
    else {
        document.body.style.backgroundColor = 'lightseagreen';
    }
});
  
document.getElementById('toggleImage').addEventListener('mouseover', function() {
    document.getElementById('toggleText').textContent = "You're hovering over the image!";
});
  
document.getElementById('toggleImage').addEventListener('mouseout', function() {
    document.getElementById('toggleText').textContent = "Hover over the image to change this text!";
});