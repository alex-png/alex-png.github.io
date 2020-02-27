function scrollToElement() {
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
    }else{
        debugger
    }
}


const modal = `<!DOCTYPE html>
<html class="no-js">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Turret+Road&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="stylesheet.css">
</head>

<body>
    <div class="modal">
        <h1>FindMyBeer</h1>

        <!-- <div class="videoWrapper">
            <iframe src="https://www.youtube.com/embed/ABAshHF-Z70" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </div> -->

        <p style="font-size: x-large; padding-left: 4em; padding-right: 4em;">Welcome to FindMyBeer! This is the first phase of my fifth and final project at The Flatiron School. This app
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
    <script src="" async defer></script>
</body>

</html>`

