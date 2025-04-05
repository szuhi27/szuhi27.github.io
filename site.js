﻿var images = [
    ["images/projects/woa/menu.jpg", "images/projects/woa/town.jpg", "images/projects/woa/farm.jpg", "images/projects/woa/lands.jpg"],
    ["images/projects/activity-manager/console.jpg", "images/projects/activity-manager/web.jpg", "images/projects/activity-manager/unity.jpg"],
    ["images/projects/battleships/ships1.jpg", "images/projects/battleships/ships2.jpg"],
    ["images/thesis/world_mobil_usage_en.png", "images/thesis/elso-tervek2.png", "images/thesis/todo-list.png"]
];

var currImg = 0;
var collectionId = 0;

//=====open=====
$("#imageDisplay").on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var ci = button.data('img-id');
    currImg = ci; 
    var cc = button.data('collection-id');
    collectionId = cc;
    $("#modal-image").attr("src", images[collectionId][currImg]);
});

//=====active=====
$('#prevButton').click(function () {
    previousImage();
});

$('#nextButton').click(function () {
    nextImage();
});

$('#imageDisplay').keydown((e) => {
    if(e.key == "ArrowRight"){
        nextImage();
    } else if (e.key == "ArrowLeft"){
        previousImage();
    }
});

function previousImage(){
    currImg = (currImg - 1 + images[collectionId].length) % images[collectionId].length;
    $('#modal-image').attr('src', images[collectionId][currImg]);
}

function nextImage(){
    currImg = (currImg + 1) % images[collectionId].length;
    $('#modal-image').attr('src', images[collectionId][currImg]);
}

//=====close=====
$('#modalBody').click(function(event) {
    if (!$(event.target).closest('#modal-image, #prevButton, #nextButton').length){
        $('#imageDisplay').modal('hide');
    }
});

$('#modal-image').click(function(event) {
    event.stopPropagation();
});