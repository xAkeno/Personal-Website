
function show(){
    document.getElementById('input-box').style.height = "10rem";
    const elements = document.getElementsByClassName('click');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
    const dali = document.getElementsByClassName('above');
    for (let i = 0; i < elements.length; i++) {
        dali[i].style.display = "flex";
        dali[i].style.flexDirection = "column";
    }
}
const name = document.getElementById('name');
function hide(){
    const elements = document.getElementsByClassName('guest');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
    const elements2 = document.getElementsByClassName('post');
    for (let i = 0; i < elements2.length; i++) {
        elements2[i].style.display = "block";
    }

    document.getElementById('guest-name').innerText = name.value;
}
async function op(){
    const name = document.getElementById('name').value;
    const comment = document.getElementById('words').value;
    const jsonObject = {};
    const data = new FormData();

    data.append("name", name);
    data.append("comment",comment);

    data.forEach((value, key) => {
        jsonObject[key] = value; // Assign the key-value pairs to the object
    });

    const json = JSON.stringify(jsonObject);
    const g = await fetch("http://localhost:8080/upload",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    }).then(dataa => dataa.json)
    .then(out => alert("successfully commented") )
    .catch(err => console.log(err))
    window.location.reload()
}
/*
                <div class="box">
                    <div>
                        <img src="/image/chrome.png" alt="profile pic">
                        <p>Clark kent B. Raguhos<br>July 5 2005</p>
                        <span>
                            <img src="/image/arrow-up.png" alt="Like" style="height: 40px;">
                        </span>
                    </div>
                    <p>Hello, test test test</p>
                </div>
*/
loadcomment();
async function loadcomment() {
    
    fetch('http://localhost:8080/result')
    .then(function(response){
        return response.json();
    })
    .then(function(comments){
        let holder = document.querySelector('.comment');
        let output = "";
        for(let value of comments){
            output += `
                <div class="box">
                    <div>
                        <img src="/image/guest.jpg" alt="profile pic">
                        <p>${value.name}<br>${value.date}</p>
                        <span>
                            <img src="/image/arrow-up.png" alt="Like" style="height: 40px;">
                        </span>
                    </div>
                    <p>${value.comment}</p>
                </div>
            `;
        }
        holder.innerHTML = output;
    })
}
function displayDescri(){document.getElementById('exampleDescritionID').style.display = "block";}