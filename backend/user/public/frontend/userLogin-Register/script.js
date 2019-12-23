const login = document.getElementById('login');
const signup = document.getElementById('signup');
const loginUsername = document.querySelector('#login_username');
const loginPassword = document.querySelector('#login_password');

const showText = {
  login : {
    header : 'Not yet a member?',
    byline : 'Sign up and discover what we can do for you',
    buttonText: 'Sign up'
  },
  
  signup : {
    header : 'Already a member?',
    byline : 'Sign in and see what\'s new since your last visit',
    buttonText: 'Sign in'    
  }
}
const switchButton = document.getElementById('switch-button');
const switchText =  document.getElementById('switch-text');

switchButton.addEventListener('click', () => {
  login.classList.toggle('hide-view');
  signup.classList.toggle('hide-view');
  login.classList.contains('hide-view') ? changeSwitchText('signup') : changeSwitchText('login')
})

function changeSwitchText(el){
  switchText.children[0].innerText = showText[el].header;
  switchText.children[1].innerText = showText[el].byline;
  switchButton.innerText = showText[el].buttonText;
}


// function checkLoginDetails(){

//     // console.log("HOLA BENCHOD")

//       const params = {
//         username: loginUsername.value,
//         password: loginPassword.value
//       };

//       console.log(params);  
//       const http = new XMLHttpRequest();

      
//       http.open('POST','localhost:3000/login');
//       http.setRequestHeader('Content-type','application/json')
//       console.log(JSON.stringify(params));
//      http.send(JSON.stringify(params));
//       // http.onload = function () {
//       //   // http.response.header("Access-Control-Allow-Origin", "*");
//       //   console.log(http.response);
//       // }
// }

function checkLoginDetails(){


  const params = {
    username: loginUsername.value,
    password: loginPassword.value
  };
var xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:3000/login", true);

//Send the proper header information along with the request
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function() {
  // Call a function when the state changes.
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    // Request finished. Do processing here.
  }
};
console.log(JSON.stringify(params));
     xhr.send(JSON.stringify(params));


}



