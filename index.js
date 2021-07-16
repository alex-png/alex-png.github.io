const burger = document.getElementById("burger"); //menu icon on navbar
const sideNavBar = document.getElementById("sideNavBar");

let navItems = document.getElementById('nav-items');
let sideNavBarOpen = false;
let clickedSection = "";
let modal = document.getElementById("myModal");
let portfolio = document.getElementById("portfolio-page");

const roles = ["developer", "freelancer", "problem solver"];
const aboutText = "full stack software developer passionate about building practical and efficient applications. \n\n I am 2x Salesforce certified and experienced in Apex, SOQL, Visualforce, Aura, and React.js"; // \n\n\n_home _portfolio _contact
const homeText = `<p style="text-align: left">
Hello! My name is <span style="color: #52dbe2; font-size:xx-large">Alex Rodriguez</span>
</p>
  
<div>
<p style="text-align: left;color:aquamarine;max-width: fit-content;">
  I am a <span id="desktop-dynamic-role">devel</span> <span id="blinker" class="blinking">|</span>
</p>
</div>
`;
let currentWidthOutput;
let typingAnimatedRunning = false;
let previousWidthOutput;


function runMobileOrDesktop() {
  currentWidthOutput = window.innerWidth;
  if (currentWidthOutput > 719) {
    console.log('currentWidthOutput: ', currentWidthOutput)
    console.log('DESKTOP')
    //is desktop

    

    if (previousWidthOutput < 720) {
      //was previously mobile (which would mean typingAnimatedRunning is true)
      //clearTimeout(runningTimer);
      const roleTextDeskTop = document.getElementById("desktop-dynamic-role"); //changing role following "i am a..."
      animatedText(roleTextDeskTop, roles);

    } else if(typingAnimatedRunning == false) { 
      //is desktop and page just loaded
      const roleTextDeskTop = document.getElementById("desktop-dynamic-role"); //changing role following "i am a..."
      animatedText(roleTextDeskTop, roles);
      typingAnimatedRunning = true;
    }
    
  } else if(currentWidthOutput < 720) {
    console.log('currentWidthOutput: ', currentWidthOutput)
    console.log('MOBILE!')
    //is mobile
    if(previousWidthOutput > 719){
    //was previously desktop so typingAnimatedRunning is true
    //clearTimeout(runningTimer);
    const roleText = document.getElementById("mobile-dynamic-role"); //changing role following "i am a..."
    animatedText(roleText, roles);

    }else if(typingAnimatedRunning == false){
      //is mobile and is first page load
      const roleText = document.getElementById("mobile-dynamic-role"); //changing role following "i am a..."
      animatedText(roleText, roles);
      typingAnimatedRunning = true;

    }
  }

}

window.addEventListener("resize", runMobileOrDesktop);

function handleClick(){
  let roleTextDeskTop = document.getElementById("desktop-dynamic-role"); //this is the changing role following "i am a..."
  let target = event.target.id;

  if(target === 'about-link'){
    blinker.innerText = ' |'
    roleTextDeskTop.remove();
    let aboutSpan = document.createElement('span');
    aboutSpan.id = 'about-text';
    navItems.innerHTML = ''

    blinker.insertAdjacentElement("beforebegin", aboutSpan)
    textType(aboutSpan, aboutText, ()=>{
      let aboutTextEl = document.getElementById('about-text');
      aboutTextEl.innerText = aboutTextEl.innerText.slice(0,189);
      let navStuff = document.createElement('div') 
      navStuff.style = "padding: 0;margin: 0;"; 
      navStuff.innerHTML = `<span id='home-link' style="text-align: left;color:aquamarine;cursor:pointer" onclick="handleClick()" >
        _home
      </span>
      <span id='portfolio-link' style="text-align: left;color:aquamarine;cursor:pointer" onclick="handleClick()" >
        _portfolio
      </span>
      <span id='contact-link' style="text-align: left;color:aquamarine;cursor:pointer" onclick="handleClick()" >
        _contact
      </span>`;
      blinker.insertAdjacentElement("beforebegin", navStuff);
      blinker.innerText = ''
    });
  }else if(target == 'home-link'){
    console.log('HOME');
    let landingPageHTML = document.getElementById('landing-text');
    landingPageHTML.innerHTML = homeText;
    debugger;
    runMobileOrDesktop()
  }else if(target == 'portfolio-link'){
    console.log('PORTFOLIO');
  }else if(target == 'contact-link'){
    let contactForm = document.createElement('div') 
    contactForm.style ="background-color: red;max-width: 25%";
    contactForm.innerHTML = `<p class="body-p">Get in touch with me!</p>
      <form
        id="fs-frm"
        name="simple-contact-form"
        accept-charset="utf-8"
        Referer='alexrodriguez.tech'
        action="https://formspree.io/f/alexrod102797@gmail.com"
        method="post"
      >
        <div class="form">
          <label for="full-name">Full Name</label>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="First and Last"
            required=""
          />
          <label for="email-address">Email Address</label>
          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="email@domain.com"
            required=""
          />
          <label for="message">Message</label>
          <textarea
            rows="5"
            name="message"
            id="message"
            placeholder="Hello Alex,"
            required=""
          ></textarea>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Contact Form Submission"
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    `;
    document.getElementById('landing-text').innerHTML = contactForm.innerHTML;
  
  }else if(target == 'resume-link'){
  }

};
