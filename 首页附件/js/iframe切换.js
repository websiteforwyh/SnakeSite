var index_frame = document.getElementById("index_frame");
var introduction_frame = document.getElementById("introduction_frame");
var snakelist_frame = document.getElementById("snakelist_frame");

function index(){
    index_frame.style.display = "block";
    introduction_frame.style.display = "none";
    snakelist_frame.style.display = "none";
}

function introduction(){
    index_frame.style.display = "none";
    introduction_frame.style.display = "block";
    snakelist_frame.style.display = "none";
}

function snakelist(){
    index_frame.style.display = "none";
    introduction_frame.style.display = "none";
    snakelist_frame.style.display = "block";
}