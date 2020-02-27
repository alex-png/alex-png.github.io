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
        nav.insertAdjacentHTML("beforeend", modal)
    } else if (event.target.className === "modal" || event.target.className === "close") {
        document.getElementById("modal").remove()
    }
}


const modal = `
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
                </p>
            </div>
    </div>`
