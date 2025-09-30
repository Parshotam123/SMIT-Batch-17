// Get Image in Javascript

function submit() {
    var file = document.getElementById("file");
    var image = document.getElementById("image");
    image.src = URL.createObjectURL(file.files[0]);
    image.style.display = "block";
}