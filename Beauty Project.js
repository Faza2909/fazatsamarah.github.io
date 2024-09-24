function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function showImage(imageIndex) {
    var images = ["Faza 12.jpg", "Faza 3.jpg", "Faza 7.jpg", "Faza 8.jpg", "Faza 9.jpg", "Faza10.jpg", "Faza 11.jpg", "Faza  12.jpg","Faza 13"];
    var captions = ["Project Image 1", "Project Image 2", "Project Image 3", "Project Image 4", "Project Image 5","Project Image 6", "Project Image 7", "Project Image 8", "Project Image 9"];

    document.getElementById("lightboxImage").src = images[imageIndex - 1];
    document.getElementById("caption").innerHTML = captions[imageIndex - 1];
}
