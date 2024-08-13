// Get the popup
var popup = document.getElementById("popup");

// Get the image and insert it inside the popup - use its "alt" text as a caption
var popupImg = document.getElementById("popup-img");
var captionText = document.getElementById("caption");
var thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(function(thumbnail) {
    thumbnail.onclick = function() {
        popup.style.display = "block";
        popupImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

// Get the <span> element that closes the popup
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the popup
span.onclick = function() {
    popup.style.display = "none";
}