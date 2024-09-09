
var Body=document.getElementById("Body");
var ParentDiv=document.createElement("div");
ParentDiv.setAttribute("class","parentDiv")

var btnUploadLogo=document.createElement("input");
// var loadLogoNoText=document.createTextNode("Upload Logo");
// btnUploadLogo.appendChild(loadLogoNoText);
btnUploadLogo.setAttribute("type","file")
btnUploadLogo.setAttribute("class","file")



var pera1=document.createElement("p");
var peraTextNode=document.createTextNode("Customize Text");
pera1.appendChild(peraTextNode);

var inputField1=document.createElement("input");
inputField1.setAttribute("class","inputField")
inputField1.setAttribute("placeholder","Enter your Name")

var inputField2=document.createElement("input");
inputField2.setAttribute("class","inputField")
inputField2.setAttribute("placeholder","Email Address")
inputField2.setAttribute("type","email")


var inputField3=document.createElement("input");
inputField3.setAttribute("class","inputField")
inputField3.setAttribute("placeholder","Address")


var btnAddMoreText=document.createElement("button");
var btnaddMoreNoText=document.createTextNode("Upload Logo");
btnAddMoreText.appendChild(btnaddMoreNoText)
btnAddMoreText.setAttribute("class","btn")


var btnAddToCard=document.createElement("button");
var btnAddToCardNoText=document.createTextNode("Submit");
btnAddToCard.appendChild(btnAddToCardNoText);
btnAddToCard.setAttribute("class","btn")




Body.appendChild(ParentDiv)
ParentDiv.appendChild(btnUploadLogo);
ParentDiv.appendChild(pera1);
ParentDiv.appendChild(inputField1);
ParentDiv.appendChild(inputField2);
ParentDiv.appendChild(inputField3);

ParentDiv.appendChild(btnAddMoreText)
ParentDiv.appendChild(btnAddToCard);