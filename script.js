var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){

    popupoverlay.style.display="block"
    popupbox.style.display="block"

    
});

var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){

    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
   
var container = document.querySelector(".container")
var addstory =document.getElementById("add-story")
var storytitleinput =document.getElementById("story-title-input")
var storyauthorinput =document.getElementById("story-author-input")
var storydescriptioninput =document.getElementById("story-description-input")

addstory.addEventListener("click",function(event){
event.preventDefault()
var div = document.createElement("div")
div.setAttribute("class","story-container")
div.innerHTML = `
    <h1>${storytitleinput.value}</h1>
    <h5>${storyauthorinput.value}</h5>
    <p>${storydescriptioninput.value}</p>
    <button onclick="deletestory(event)">Delete</button>`
container.append(div)
popupoverlay.style.display="none"
popupbox.style.display="none"
storytitleinput.value = "";
    storyauthorinput.value = "";
    storydescriptioninput.value = "";
})
function deletestory(event)
{
     event.target.parentElement.remove()
}