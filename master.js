
/* TEMPLATE */
/*

let projectName = {
    name: "projectName",
    thumbnailPage: "linkToTheImage",
    linkToWebsite: "linkToWebsite",
    codeThumbnail: "thumbnail to code",
    downloadableCode: "zipfile of the code",
    linkToCode: "linkToCode",
    PDFDownloadkThumbnail: "thumbnail"
    pdf: "linkToPDFFile"
    isFinished:Boolean
}

*/ 
/* END OF TEMPLATE */


let portfolio = {
    name: "portfolio",
    thumbnail: "./assets/images/websiteImgPortfolio.png",
    linkToWebsite: "https://brigdene.github.io/portfolio/",
    codeThumbnail: "./assets/images/codeImgPortfolio.png",
    codeImgIsDark: true,
    downloadableCode: "zip",
    linkToCode: "https://github.com/Brigdene/portfolio",
    isFinished: true
}

let resume = {
    name: "resume",
    thumbnail: "./assets/images/temporalTemplate.jpg",
    linkToWebsite: "#",
    codeThumbnail: "./assets/images/temporalTemplate.jpg",
    downloadableCode: "zip",
    linkToCode: "#",
    pdf: null,
    estimatedFinishTime: "Mon 13/07/2020 at 20:00"
}


let projectArray = [portfolio, resume]



function loadMainPage(){
 
    // IF coming from a project page, clean the whole page to rebuild it
    if(document.getElementsByTagName("body")[0].hasChildNodes){
        while(document.getElementsByTagName("body")[0].childElementCount != 0){document.getElementsByTagName("body")[0].removeChild(document.getElementsByTagName("body")[0].childNodes[0])}
    }
    // Begin creation of main page
    let titleOfPage = document.createElement("h1");
    titleOfPage.innerHTML = "Portfolio of Brighton De Neef"
    document.getElementsByTagName("body")[0].appendChild(titleOfPage)

    let flexWrapper = document.createElement("div");
    flexWrapper.classList.add("flexWrap");
   

    // Adding all projects by making use of a while-Loop
    let counter = 0;
    while(counter != projectArray.length){
    

        let buttons = document.createElement("button")
        buttons.setAttribute("onclick", "openProjectPageOptions("+counter+")")
        buttons.innerHTML = projectArray[counter].name

    // let projectOuterDiv = document.createElement("div");
    // projectOuterDiv.classList.add("projectOuterDiv");
    // projectOuterDiv.setAttribute("onclick", "openProjectPageOptions("+counter+")")

    // let projectThumbnail = document.createElement("img");
    // projectThumbnail.setAttribute("src", projectArray[counter].thumbnail)
    
    // let textDiv = document.createElement("div");
    // let projectName = document.createElement("p");
    // projectName.innerHTML = projectArray[counter].name;
   
    // // adding the projects to the wrapbox 
    // textDiv.appendChild(projectName);
    // projectOuterDiv.appendChild(projectThumbnail)
    // projectOuterDiv.appendChild(textDiv);
    // flexWrapper.appendChild(projectOuterDiv);
    flexWrapper.appendChild(buttons)

        counter++;
}
    document.getElementsByTagName("body")[0].appendChild(flexWrapper);
}



// Open a projectpage after clicking on its thumbnail / button in the index
function openProjectPageOptions(index){

let flexWrapEl = document.getElementsByClassName("flexWrap")[0];


    // Remove all
while(flexWrapEl.childElementCount != 0){
   flexWrapEl.removeChild(flexWrapEl.childNodes[0]);
} 

// IF Statements to create elements for existing data
if(projectArray[index].isFinished){
if(projectArray[index].linkToWebsite != null){ 
    let box = document.createElement("div");
    box.classList.add("imageBox")

    let websiteLink = document.createElement("a");
    websiteLink.setAttribute("href", projectArray[index].linkToWebsite)
    websiteLink.setAttribute("target", "_blank")

    let websiteLinkImg = document.createElement("img")
    websiteLinkImg.setAttribute("src", projectArray[index].thumbnail)

    let textBox = document.createElement("div");
    textBox.classList.add("textOnImage");

    let linkToWebsiteText = document.createElement("p");
    if(projectArray[index].websiteImgIsDark){
    linkToWebsiteText.classList.add("lightText");
}
    linkToWebsiteText.innerHTML = projectArray[index].name;
    
    textBox.appendChild(linkToWebsiteText);
    websiteLink.appendChild(websiteLinkImg);
    box.appendChild(websiteLink)
    box.appendChild(textBox)
    flexWrapEl.appendChild(box)
}

if(projectArray[index].codeThumbnail != null){
    let box = document.createElement("div");
    box.classList.add("imageBox")
    let codeLink = document.createElement("a");
    codeLink.setAttribute("href", projectArray[index].linkToCode)
    codeLink.setAttribute("target", "_blank")

    let codeLinkThumbnail = document.createElement("img")
    codeLinkThumbnail.setAttribute("src", projectArray[index].codeThumbnail)

    let textBox = document.createElement("div");
    textBox.classList.add("textOnImage");

    let linkToCodeText = document.createElement("p");
    linkToCodeText.innerHTML = "code";
    if(projectArray[index].codeImgIsDark){
        linkToCodeText.classList.add("lightText");
    }
    textBox.appendChild(linkToCodeText);
    codeLink.appendChild(codeLinkThumbnail);
    box.appendChild(codeLink)
    box.appendChild(textBox)
    flexWrapEl.appendChild(box)
}

if(projectArray[index].pdf != null){
    let box = document.createElement("div");
    box.classList.add("imageBox")
    let PDFDownloadLink = document.createElement("a");
    PDFDownloadLink.setAttribute("href", projectArray[index].pdf)
    PDFDownloadLink.setAttribute("download", "")

    let PDFDownloadkThumbnail = document.createElement("img")
    PDFDownloadkThumbnail.setAttribute("src", projectArray[index].PDFDownloadkThumbnail)

    let textBox = document.createElement("div");
    textBox.classList.add("textOnImage");
    let PDFDownloadText = document.createElement("p");
    PDFDownloadText.innerHTML = "pdf-files";
    
    textBox.appendChild(PDFDownloadText);
    PDFDownloadLink.appendChild(PDFDownloadkThumbnail);
    box.appendChild(PDFDownloadLink)
    box.appendChild(textBox)
    flexWrapEl.appendChild(box)
}
}else{
    let notFinishedSpan = document.createElement("span");
    notFinishedSpan.innerHTML = "This project is not yet finished \n Estimated time to be finished is: " + projectArray[index].estimatedFinishTime

    flexWrapEl.appendChild(notFinishedSpan)
}
// A button to return to the main page
let returnButton = document.createElement("button");
returnButton.innerHTML = "back to index";
returnButton.setAttribute("onclick", "loadMainPage()")
document.getElementsByTagName("body")[0].appendChild(returnButton)

}

window.onload = loadMainPage;
