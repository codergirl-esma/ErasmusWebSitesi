function checkLogin() {
    var isLogin = sessionStorage.getItem("isLogin");

    //var user = sessionStorage.getItem("user");
    //user = user.split(",");

    //var username = user[0];

    if (isLogin == "true") {

        document.getElementById("btn_div").style.display = "none"; 
        // document.getElementById("header_sag").innerHTML =  username + " ";
        document.getElementById("basvuru").style.display = "block";
        
        document.getElementById("logout_Btn").style.display = "block";
    }
    else
    {
        document.getElementById("basvuru").style.display = "none";
    }

}

function logout() {

    var isLogin = sessionStorage.getItem("isLogin");

    isLogin = false;
    window.location = "GirisYap.html";
    sessionStorage.setItem("isLogin", isLogin);
    document.getElementById("logout_Btn").style.display = "none";

    location.reload();
} 


