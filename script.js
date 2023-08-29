let favouriteMedia = [
    "pokemon",
    "digimon",
    "supernatural",
    "sherlock",
    "doctor who",
    "parks & recreation",
    "harry potter",
    "barbie",
    "yugi-oh",
    "oppenheimer",
    "dragonball z"
];

function exampleHello(){
    console.log("hello world");
}

function createListOfMedia(){

    let rootUlNode = document.querySelector("ul")
    // let exampleNode = document.getElementsByClassName("bananas")[0];
	// let exampleNode = document.getElementById("mediaList");


    favouriteMedia.forEach(mediaItem => {
        //Create an element but do not display it yet
        let newListItem = document.createElement("li");
        //Assign some data to the element
        newListItem.textContent = mediaItem;
        newListItem.id = mediaItem


        // Creating a button that will remove item later
        let removeItemButton = document.createElement("button");
        removeItemButton.onclick = (() => removeItemFromList(mediaItem));
        removeItemButton.textContent = "Remove item";

        // Add the button to the list item 
        newListItem.appendChild(removeItemButton);


        // Add it to the node
        rootUlNode.appendChild(newListItem);
    });
}

function removeItemFromList(targetItem){
    let targetItemNode = document.getElementById(targetItem);
    if (targetItemNode){
        targetItemNode.parentNode.removeChild(targetItemNode);
    }
}