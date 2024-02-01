function addNewWEField(){
    console.log('hello');
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter work experience")

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);

}

function addNewAQField(){
    console.log('hello');
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter Qualification")

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);

}

function addNewPDField(){
    console.log('hello');
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("pdField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter Your Project")

    let pdOb=document.getElementById("pd");
    let pdAddButtonOb=document.getElementById("pdAddButton");

    pdOb.insertBefore(newNode,pdAddButtonOb);

}

function generateCV(){
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;

    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    let wes=document.getElementsByClassName("weField");
    let str="";

    for(let e of wes)
    {
        str=str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;

    let aqs=document.getElementsByClassName("eqField");
    let str1="";

    for(let e of aqs)
    {
        str1+= `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    let pds=document.getElementsByClassName("pdField");
    let str2="";

    for(let e of pds)
    {
        str2+= `<li> ${e.value} </li>`;
    }
    document.getElementById("pdT").innerHTML=str2;

    let file=document.getElementById("imgField").files[0];

    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onloadend=function(){
        document.getElementById("imgTemplate").src=reader.result;
    };

    document.getElementById("imgTemplate").src=reader.result;

    document.getElementById("cv-form").style.display='none';
    document.getElementById("cv-template").style.display='block';
}

function printCV(){
    window.print();
}

function main(){
    window.open("index.html");
    
}
