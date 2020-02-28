function handleClick() {
    const about = document.getElementById("About")
    const projects = document.getElementById("projects-section")
    const contact = document.getElementById("Contact")
    const nav = document.getElementsByClassName("nav")[0]
    if (event.target.title === "Learn") {
        console.log(nav.offsetHeight)
        nav.scrollIntoView({ behavior: "smooth", block: "start" })
    } else if (event.target.name === "About") {
        about.scrollIntoView({ behavior: "smooth" })
    } else if (event.target.name === "projects-section") {
        projects.scrollIntoView({ behavior: "smooth", block: "start" })
    } else if (event.target.name === "Contact") {
        console.log(event.target.name)
        contact.scrollIntoView({ behavior: "smooth", block: "start" })
    } else if (event.target.id === "FindMyBeer") {
        nav.insertAdjacentHTML("beforeend", fmbModal)
    } else if (event.target.id === "Mobflix") {
        nav.insertAdjacentHTML("beforeend", mfModal)
    } else if(event.target.id === "NilClass"){
        nav.insertAdjacentHTML("beforeend", ncdModal)
    } else if (event.target.className === "modal" || event.target.className === "close") {
        document.getElementById("modal").remove()
    }
}


const fmbModal = `
    <div id="modal" class="modal" onClick="handleClick()">
            <span class="close" "onClick="handleClick()"> X </span>
            <h1>FindMyBeer</h1>
            <span class="slide-arrow" style="font-size: xx-large;position:absolute; top: 8em; left: .5em;"><</span>
            <span class="slide-arrow" style="font-size: xx-large;position:absolute; top: 8em; right: .5em;">></span>
            <div class="videoWrapper">
                <iframe src="https://www.youtube.com/embed/ABAshHF-Z70" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <div name="text">
                <p style="font-size: large; padding-bottom: 1em;">Welcome to FindMyBeer! This is the first phase of my fifth and final project at The Flatiron School. This app
                aims to provide users with beers that they are likely to enjoy based on initial input and further data
                collection. With each "interested" or "not interested" click, data is parsed in the back end, and once
                enough
                clicks are reached, a new group of recommended beers are sent to the front end.
    
                The following phase will involve making the site more social; with the ability to make friends, events, and
                so
                forth.
    
                The final phase will be entirely dedicated to design.
                <br />
                <a href="https://github.com/alex-png/findmybeer-frontend">Github Frontend</a> |
                <a href="https://github.com/alex-png/findmybeer-backend">Github Backend</a>
                </p>
            </div>
    </div>`

const mfModal = `
<div id="modal" class="modal" onClick="handleClick()">
        <span class="close" "onClick="handleClick()"> X </span>
        <h1>Mobflix</h1>
        <span class="slide-arrow" style="font-size: xx-large;position:absolute; top: 8em; left: .5em;"><</span>
        <span class="slide-arrow" style="font-size: xx-large;position:absolute; top: 8em; right: .5em;">></span>
        <div class="videoWrapper">
            <iframe src="https://www.youtube.com/embed/wyBIJJHdZ7E" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </div>
        <div name="text">
            <p style="font-size: large; padding-bottom: 1em;">Welcome to Mobflix! The goal of this solo project was to familiarize myself with CSS and design, both having been completely foreign to me. 
            I aimed to mimic Netflix's user interface, with my own spin. 
            In lieu of time constraints, I employed AJAX polling in place of web-sockets for the comment section.            
            <br />
            <a href="https://github.com/alex-png/mobflix-frontend">Github Frontend</a> | 
            <a href="https://github.com/alex-png/mobflix--api">Github Backend</a>
            </p>
        </div>
</div>`

const ncdModal = `
<div id="modal" class="modal" onClick="handleClick()">
        <span class="close" "onClick="handleClick()"> X </span>
        <h1>NilClass Destroyer</h1>
        <span class="slide-arrow" style="font-size: xx-large;position:absolute; top: 8em; left: .5em;"><</span>
        <span class="slide-arrow" style="font-size: xx-large;position:absolute; top: 8em; right: .5em;">></span>
        <div class="videoWrapper">
            <iframe src="https://www.youtube.com/embed/65yy2TdaUGo" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </div>
        <div name="text">
            <p style="font-size: large; padding-bottom: 1em;"> 
            Welcome to Nil Class Destroyer! Clear my classmates from the board in this exciting bubble shooter game!
            This was the third project I worked on in The Flatiron School. Working alongside two classmates, this project was meant to hone our newly-learned Javascript skills.
            <br />
            <a href="https://github.com/TheEugeniaKim/nil_class_destroyer_front_end">Github Frontend</a>
            </p>
        </div>
</div>`