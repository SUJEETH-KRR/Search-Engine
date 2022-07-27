let main = document.getElementById('main');
let name1;
let res;
let result;
let data;
let time = document.getElementById('timeline');

async function FindMe(e)
{
    e.preventDefault();
    name1 = document.getElementById('inp').value;
    res= await fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyA5U7lnFOgfm2xP7j7H5HSZvyH9oF4kMjE&cx=8d59952f3963391e6&q='+name1);
    result = await res.json();
    data = result.items;
    
    while(main.hasChildNodes())
    {
        main.removeChild(main.firstChild);
    }

    data.map(n => {
        let div = document.createElement('div');
        div.innerHTML = `<div class='my-div'><a href = ${n.link}>${n.title}</a><br /> ${n.htmlSnippet}</div>`
        
        main.appendChild(div);

    })

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // console.log(name1,time);
    let arr1 = [];
    arr1.push(name1,time);

    const previousResults = JSON.parse(localStorage.getItem("search")) || [];
    localStorage.setItem("search", JSON.stringify([...previousResults,  name1 ]));
}

let a = document.getElementById('inp')

function myFunction() {
    a.value = ""
    main.innerHTML="";
}

// let Username = document.getElementById('username');

// Username.addEventListener('onmouseover', (e) => {
//     Username.innerText = user.displayName;
//     Username.style.display = "block";
// })

