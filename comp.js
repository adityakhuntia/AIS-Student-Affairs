console.log("You have entered Comp Space");


let fetchBtn = document.getElementById('fetchBtn');
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

    console.log("We are done!");

}

