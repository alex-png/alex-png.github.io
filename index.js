const burger = document.getElementById("burger"); //menu icon on navbar
const sideNavBar = document.getElementById("sideNavBar");


let sideNavBarOpen = false;
let clickedSection = "";
let modal = document.getElementById("myModal");
let portfolio = document.getElementById("portfolio-page");
const roles = ["developer", "freelancer", "problem solver"];

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

burger.addEventListener("click", function () {
  sideNavBarOpen = !sideNavBarOpen; //
  extendOrCollapseWidth(sideNavBarOpen, sideNavBar);
});

sideNavBar.addEventListener("click", function () {
  let target = event.target;
  if (target.className === "nav-img") {
    target = target.parentElement;
  }
  if (target.className === "sideNavBar-section") {
    if (clickedSection) {
      clickedSection.style.background = "";
      clickedSection = target;
      clickedSection.style.background = "steelblue";
      sideNavBarOpen = !sideNavBarOpen; //
      extendOrCollapseWidth(sideNavBarOpen, sideNavBar);
    } else {
      clickedSection = target;
      console.log(clickedSection);
      clickedSection.style.background = "steelblue";
      sideNavBarOpen = !sideNavBarOpen; //
      extendOrCollapseWidth(sideNavBarOpen, sideNavBar);
    }
  }
});

portfolio.addEventListener("click", function () {
  let target = event.target;
  if (target.id === "findmybeer") {
    window.open(
      "https://www.youtube.com/watch?v=W17TblhF8UI&ab_channel=IcelandSymphonyOrchestra",
      "_blank"
    );
  } else if (target.id === "mobflix") {
    window.open(
      "https://www.youtube.com/watch?v=W17TblhF8UI&ab_channel=IcelandSymphonyOrchestra",
      "_blank"
    );
  } else if (target.id === "nilclassdestroyer") {
    window.open(
      "https://www.youtube.com/watch?v=W17TblhF8UI&ab_channel=IcelandSymphonyOrchestra",
      "_blank"
    );
  }
});
