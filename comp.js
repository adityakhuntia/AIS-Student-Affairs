console.log("You have entered Comp Space");

const sheetID = '1hE4nQltQCLaY92d1KHHngOA3By9rzlMlYnWknqm1GgM';
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName = 'datareq';
const query = encodeURIComponent('Select *');
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const data = [];
//document.addEventListener('DOMContentLoaded',init);//

window.onload = function init(){
    console.log('ready');
    fetch(url)
    .then(res => res.text())
    .then(rep => {
        const jsData = JSON.parse(rep.substring(47).slice(0,-2));
        var main = jsData.table.rows
        console.log(Object.keys(main).length)

        for(let i=1;i<Object.keys(main).length;i++){
            
            var course =document.getElementById("crs_"+String(i));
            var title = document.getElementById("ttl_"+String(i));
            var desc = document.getElementById("dec_"+String(i));
            var level = document.getElementById("lev_"+String(i));
            course.style.display = "inline-flex";

            title.innerHTML=(main[String(i)]["c"]["0"]["v"]);
            desc.innerHTML=(main[String(i)]["c"]["1"]["v"]);
            level.innerHTML=(main[String(i)]["c"]["2"]["v"])+"<br>"+(main[String(i)]["c"]["5"]["v"]);
        }
        //console.log(main["1"]["c"]["0"]["v"])
    })



    /*(for(let i=1;i<Object.keys(main).length;i++){
        console.log(i)
    }*/
}
















/*window.onload = function getdata (){
    console.log ("You have clicked button click handeler");
    const xhr = new XMLHttpRequest();
    xhr.open('GET','test.txt', true);
    xhr.send();
}*/

/*let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonclickhandeler)
function buttonclickhandeler () {
    console.log ("You have clicked button click handeler");

    const xhr = new XMLHttpRequest();
    //xhr.open('GET','test.txt', true);//

    //POST REQ//

    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');


    // What to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On progress');
    }


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){

            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log("We are done!");*/
