let a = [
    {
        username: "Tulga",
        password: "tulga1234"
    },
    {
        username: "Tugsuu",
        password: "tugsuu1234"
    }
];

let p = [
    {
        player: "TJ",
        role: "Leftside Hitter",
    },
    {
        player: "Shijir",
        role: "Leftside Hitter",
    },
    {
        player: "Bat-Uchral",
        role: "Setter",
    },
    {
        player: "Ermuun",
        role: "Setter",
    },
    {
        player: "Badmaarag",
        role: "Leftside Hitter",
    },
    {
        player: "Erkhem",
        role: "Setter",
    },
    {
        player: "Bulgaa",
        role: "Rightside Hitter",
    },
    {
        player: "Tulga",
        role: "Leftside Hitter",
    },
    {
        player: "Chinguun",
        role: "Leftside Hitter",
    },
    {
        player: "Tuvshin",
        role: "Libero",
    },
    {
        player: "Sanduijav",
        role: "Setter",
    },
    {
        player: "Tugs-Erdene",
        role: "Middle Blocker",
    },
    {
        player: "Bilguun",
        role: "Libero",
    },
    {
        player: "Zolboo",
        role: "Libero",
    },
]

document.getElementById("vbr").addEventListener('click', function (){
    window.scrollTo(0, 0);
})

document.getElementById("vbp").addEventListener('click', function (){
    window.scrollTo(0, 1900);
})

document.getElementById("sr").addEventListener('click', function (){
    window.scrollTo(0, 3150);
})

function startranking(){
    let box = "";
    for(let i = 0; i < p.length; i++){
        box += '<div class="lil"><p class="nomer">#' + (i + 1).toString() + '</p><p class="pner">' + p[i].player + '</p><p class="prole">' + p[i].role + "</p></div>";
    }
    document.getElementById("ranking").innerHTML = box;
}

window.onload = startranking;

let cc = 0;
let roles = document.getElementById('roles');
let login = document.getElementById('loginScreen');
let signup = document.getElementById('signupScreen');

document.getElementById('roledrpdwn').addEventListener('click', function (){
    if(cc == 0){
        roles.style.height = "auto";
        roles.style.marginTop = "300px";
        roles.style.visibility = "visible";
        cc = 1;
    }
    else{
        roles.style.height = "0";
        roles.style.marginTop = "300px";
        roles.style.visibility = "hidden";
        cc = 0;
    }
})

let loguser = document.getElementById('logUsername');
let logpass = document.getElementById('logPassword');
function Login(){
    if(loguser.value.length != 0 || logpass.value.length != 0){
        for(let i = 0; i < a.length; i++){
            if(loguser.value == a[i].username && logpass.value === a[i].password){
                login.style.height = "0";
                login.style.visibility = "hidden";
                document.getElementById('alertbox').innerHTML = "You succesfully logged in.";
                document.getElementById('alertbox').style.backgroundColor = "green";
                document.getElementById('alert').style.height = "100vh";
                document.getElementById('userIcon').style.width = "auto"; // logged in
                document.getElementById('userIcon').style.position = "static";
                document.getElementById('User').style.position = "static";
                document.getElementById('User').innerHTML = loguser.value;
                document.getElementById('User').style.width = "auto";
                document.getElementById('signout').style.width = "auto";
                document.getElementById('signout').style.position = "static";
                document.getElementById('login').style.width = "0";
                document.getElementById('login').style.position = "absolute";
                document.getElementById('signup').style.width = "0";
                document.getElementById('signup').style.position = "absolute";
                return;
            }
        }
        document.getElementById('alertbox').innerHTML = "User doesn't exist.";
        document.getElementById('alertbox').style.backgroundColor = "red";
        document.getElementById('alert').style.height = "100vh";
    }
}

let signuser = document.getElementById('signUsername');
let signpass = document.getElementById('signPassword');
let comfirmpass = document.getElementById('confirmPassword')
function Signup(){
    for(let i = 0; i < a.length; i++){
        if(a[i].username == signuser.value){
            document.getElementById('alertbox').innerHTML = "Username is already taken.";
            document.getElementById('alertbox').style.backgroundColor = "red";
            document.getElementById('alert').style.height = "100vh";
            return;
        }
        else if(a[i].password == signpass.value){
            document.getElementById('alertbox').innerHTML = "Password is already taken.";
            document.getElementById('alertbox').style.backgroundColor = "red";
            document.getElementById('alert').style.height = "100vh";
            return;
        }
    }
    if(signpass.value === comfirmpass.value){
        if(signpass.value.length > 6){
            if(signuser.value.length > 2){
                let obj = {
                    username: signuser.value,
                    password: signpass.value
                }
                a.push(obj);
                signup.style.height = "0";
                signup.style.visibility = "hidden";
                document.getElementById('alertbox').innerHTML = "Your account has been succesfully created.";
                document.getElementById('alertbox').style.backgroundColor = "green";
                document.getElementById('alert').style.height = "100vh";
                document.getElementById('userIcon').style.width = "auto"; // logged in
                document.getElementById('userIcon').style.position = "static";
                document.getElementById('User').style.position = "static";
                document.getElementById('User').innerHTML = signuser.value;
                document.getElementById('User').style.width = "auto";
                document.getElementById('signout').style.width = "auto";
                document.getElementById('signout').style.position = "static";
                document.getElementById('login').style.width = "0";
                document.getElementById('login').style.position = "absolute";
                document.getElementById('signup').style.width = "0";
                document.getElementById('signup').style.position = "absolute";
            }
            else{
                document.getElementById('alertbox').innerHTML = "You must create a username that is above 2 characters(including numbers and symbols)";
                document.getElementById('alertbox').style.backgroundColor = "red";
                document.getElementById('alert').style.height = "100vh";
                return;
            }
        }
        else{
            document.getElementById('alertbox').innerHTML = "You must create a strong password. Password shall be above 6 characters(including numbers and symbols).";
            document.getElementById('alertbox').style.backgroundColor = "red";
            document.getElementById('alert').style.height = "100vh";
            return;
        }
    }
    else{
        document.getElementById('alertbox').innerHTML = "Passwords doesn't match.";
        document.getElementById('alertbox').style.backgroundColor = "red";
        document.getElementById('alert').style.height = "100vh";
        return;
    }
}

function Signout(){
    document.getElementById('alertbox').innerHTML = "Your account has been succesfully signed out.";
    document.getElementById('alertbox').style.backgroundColor = "green";
    document.getElementById('alert').style.height = "100vh";
    document.getElementById('userIcon').style.width = "0";
    document.getElementById('userIcon').style.position = "absolute";
    document.getElementById('User').style.position = "absolute";
    document.getElementById('User').innerHTML = "";
    document.getElementById('User').style.width = "0";
    document.getElementById('signout').style.width = "0";
    document.getElementById('signout').style.position = "absolute";
    document.getElementById('login').style.width = "auto";
    document.getElementById('login').style.position = "static";
    document.getElementById('signup').style.width = "auto";
    document.getElementById('signup').style.position = "static";
}

document.getElementById('alertbox').addEventListener('click', function (){
    document.getElementById('alert').style.height = "0";
})

document.getElementById('alertbg').addEventListener('click', function (){
    document.getElementById('alert').style.height = "0";
})

document.getElementById('login').addEventListener('click', function (){
    login.style.height = "100vh";
    login.style.visibility = "visible";
})

document.getElementById('signup').addEventListener('click', function (){
    signup.style.height = "100vh";
    signup.style.visibility = "visible";
})

document.getElementById('logx').addEventListener('click', function (){
    login.style.height = "0";
    login.style.visibility = "hidden";
})

document.getElementById('signx').addEventListener('click', function (){
    signup.style.height = "0";
    signup.style.visibility = "hidden";
})

let searchp = document.getElementById("search");
let role = document.getElementById('role');

searchp.addEventListener('input', function (){
    let a = role.innerHTML;
    let c = searchp.value.toLowerCase();
    let box = "";
    if(a == "All"){
        for(let i = 0; i < p.length; i++){
            if(p[i].player.toLowerCase().includes(c) == true){
                box += '<div class="lil"><p class="nomer">#' + (i + 1).toString() + '</p><p class="pner">' + p[i].player + '</p><p class="prole">' + p[i].role + "</p></div>";
            }
        }
        document.getElementById("ranking").innerHTML = box;
    }
    if(a == "Rightside Hitter"){
        let b = 1;
        for(let i = 0; i < p.length; i++){
            if(p[i].role == "Rightside Hitter"){
                if(p[i].player.toLowerCase().includes(c) == true){
                    box += '<div class="lil"><p class="nomer">#' + b.toString() + '</p><p class="pner">' + p[i].player + '</p><p class="prole">Rightside Hitter</p></div>';
                    b++;
                }
            }
        }
        document.getElementById("ranking").innerHTML = box;
    }
    if(a == "Leftside Hitter"){
        let b = 1;
        for(let i = 0; i < p.length; i++){
            if(p[i].role == "Leftside Hitter"){
                if(p[i].player.toLowerCase().includes(c) == true){
                    box += '<div class="lil"><p class="nomer">#' + b.toString() + '</p><p class="pner">' + p[i].player + '</p><p class="prole">Leftside Hitter</p></div>';
                    b++;
                }
            }
        }
        document.getElementById("ranking").innerHTML = box;
    }
    if(a == "Middle Blocker"){
        let b = 1;
        for(let i = 0; i < p.length; i++){
            if(p[i].role == "Middle Blocker"){
                if(p[i].player.toLowerCase().includes(c) == true){
                    box += '<div class="lil"><p class="nomer">#' + b.toString() + '</p><p class="pner">' + p[i].player + '</p><p class="prole">Middle Blocker</p></div>';
                    b++;
                }
            }
        }
        document.getElementById("ranking").innerHTML = box;
    }
    if(a == "Libero"){
        let b = 1;
        for(let i = 0; i < p.length; i++){
            if(p[i].role == "Libero"){
                if(p[i].player.toLowerCase().includes(c) == true){
                    box += '<div class="lil"><p class="nomer">#' + b.toString() + '</p><p class="pner">' + p[i].player + '</p><p class="prole">Libero</p></div>';
                    b++;
                }
            }
        }
        document.getElementById("ranking").innerHTML = box;
    }
    if(a == "Setter"){
        let b = 1;
        for(let i = 0; i < p.length; i++){
            if(p[i].role == "Setter"){
                if(p[i].player.toLowerCase().includes(c) == true){
                    box += '<div class="lil"><p class="nomer">#' + b.toString() + '</p><p class="pner">' + p[i].player + '</p><p class="prole">Setter</p></div>';
                    b++;
                }
            }
        }
        document.getElementById("ranking").innerHTML = box;
    }
    if(box == ""){
        document.getElementById('tansp').style.visibility = "visible";
    }
    else{
        document.getElementById('tansp').style.visibility = "hidden";
    }
    roles.style.height = "0";
    roles.style.marginTop = "0";
    roles.style.visibility = "hidden";
    cc = 0;
})

function changeroles(a){
    let box = "";
    if(a == "All"){
        role.innerHTML = "All";
        for(let i = 0; i < p.length; i++){
            if(p[i].player.toLowerCase().includes(searchp.value.toLowerCase()) == true){
                box += '<div class="lil"><p class="nomer">#' + (i + 1).toString() + '</p><p class="pner">' + p[i].player + '</p><p class="prole">' + p[i].role + "</p></div>";
            }
        }
        document.getElementById("ranking").innerHTML = box;
    }
    if(a == "RH"){
        role.innerHTML = "Rightside Hitter";
        let b = 1;
        for(let i = 0; i < p.length; i++){
            if(p[i].role == "Rightside Hitter"){
                if(p[i].player.toLowerCase().includes(searchp.value.toLowerCase()) == true){
                    box += '<div class="lil"><p class="nomer">#' + b.toString() + '</p><p class="pner">' + p[i].player + '</p><p class="prole">Rightside Hitter</p></div>';
                    b++;
                }
            }
        }
        document.getElementById("ranking").innerHTML = box;
    }
    if(a == "LH"){
        role.innerHTML = "Leftside Hitter";
        let b = 1;
        for(let i = 0; i < p.length; i++){
            if(p[i].role == "Leftside Hitter"){
                if(p[i].player.toLowerCase().includes(searchp.value.toLowerCase()) == true){
                    box += '<div class="lil"><p class="nomer">#' + b.toString() + '</p><p class="pner">' + p[i].player + '</p><p class="prole">Leftside Hitter</p></div>';
                    b++;
                }
            }
        }
        document.getElementById("ranking").innerHTML = box;
    }
    if(a == "MB"){
        role.innerHTML = "Middle Blocker";
        let b = 1;
        for(let i = 0; i < p.length; i++){
            if(p[i].role == "Middle Blocker"){
                if(p[i].player.toLowerCase().includes(searchp.value.toLowerCase()) == true){
                    box += '<div class="lil"><p class="nomer">#' + b.toString() + '</p><p class="pner">' + p[i].player + '</p><p class="prole">Middle Blocker</p></div>';
                    b++;
                }
            }
        }
        document.getElementById("ranking").innerHTML = box;
    }
    if(a == "L"){
        role.innerHTML = "Libero";
        let b = 1;
        for(let i = 0; i < p.length; i++){
            if(p[i].role == "Libero"){
                if(p[i].player.toLowerCase().includes(searchp.value.toLowerCase()) == true){
                    box += '<div class="lil"><p class="nomer">#' + b.toString() + '</p><p class="pner">' + p[i].player + '</p><p class="prole">Libero</p></div>';
                    b++;
                }
            }
        }
        document.getElementById("ranking").innerHTML = box;
    }
    if(a == "S"){
        role.innerHTML = "Setter";
        let b = 1;
        for(let i = 0; i < p.length; i++){
            if(p[i].role == "Setter"){
                if(p[i].player.toLowerCase().includes(searchp.value.toLowerCase()) == true){
                    box += '<div class="lil"><p class="nomer">#' + b.toString() + '</p><p class="pner">' + p[i].player + '</p><p class="prole">Setter</p></div>';
                    b++;
                }
            }
        }
        document.getElementById("ranking").innerHTML = box;
    }
    if(box == ""){
        document.getElementById('tansp').style.visibility = "visible";
    }
    else{
        document.getElementById('tansp').style.visibility = "hidden";
    }
    roles.style.height = "0";
    roles.style.marginTop = "0";
    roles.style.visibility = "hidden";
    cc = 0;
}

document.getElementById("rotate").addEventListener('click', function (){
    let pos1 = document.getElementById("1");
    let pos2 = document.getElementById("2");
    let pos3 = document.getElementById("3");
    let pos4 = document.getElementById("4");
    let pos5 = document.getElementById("5");
    let pos6 = document.getElementById("6");
    let temp = pos6.value;
    pos6.value = pos1.value;
    pos1.value = pos2.value;
    pos2.value = pos3.value;
    pos3.value = pos4.value;
    pos4.value = pos5.value;
    pos5.value = temp;
})

document.getElementById("en").addEventListener('click', function (){
    
})