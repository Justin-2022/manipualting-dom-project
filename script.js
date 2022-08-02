// Step X1: Using DOM, add the two buttons to script.js
// Step X2: Using DOM, add the two <div> tags to script.js
// Step X3; Create two new elements within the body, one in each <div> tag – one <img> and one <p>
// Step X4: Using .onclick, make it so that when the ‘add paragraph’ button is clicked, <p> tags are added within the box on the website due to them being added within the <div> tag corresponding with images.
// Step X5: Using .onclick, make it so that when the ‘add image’ button is clicked, <img> tags are added within the box on the website due to them being added within the <div> tag corresponding with images
// Step X6: Make it so that when ‘add paragraph’ button is clicked, <p> tags are hidden or removed (have to experiment between the two to find out)
// Step X7: Make it so that when ‘add image’ button is clicked, <img> tags are hidden or removed
// Step X8: Modify code so that output looks as close as possible to model demo
// Step X9: Run, check–and if needed debug–and repeat till successful

// Step 1
let pButton = document.getElementById("p-button");
let imgButton = document.getElementById("img-button");
// Step 2
let pDiv = document.getElementById("p-div");
let imgDiv = document.getElementById("img-div");
// Step 3
let newPara = document.createElement("p");
let newImg = document.createElement("img");
// newImg.classList.add("Size")


// ADD BUTTON -- Creates p"aragraph when user clicks 'add parapgraph'
pButton.onclick = function() {
    // Step 6
    // Step 8
    newPara = document.createElement("p");
    imgDiv.style.display = "none";
    pDiv.style.display = "";
    newPara.style.padding = "10px";
    newPara.innerHTML += "Hot chocolate is bad today <br/>";
    newPara.style.backgroundColor = "black";
    newPara.style.color = "white";
    // Step 4
    pDiv.appendChild(newPara);
}

imgButton.onclick = function() {
    // Step 7
    // Step 8
    newImg = document.createElement("img");
    pDiv.style.display = "none";
    imgDiv.style.display = "block";
    newImg.src = "pikachu.png";
    newImg.style.height = "150px";
    newImg.style.width = "150px";
    // Step 5
    imgDiv.appendChild(newImg);
}

// Step 9 -- Success

