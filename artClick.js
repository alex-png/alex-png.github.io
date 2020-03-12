
const terra = `
<div id="modal" class="modal" onClick="modalClick()">
        <span class="close" "onClick="modalClick()"> X </span>
        <h1>FindMyBeer</h1>
        <span id="left"  class="slide-arrow" style="font-size: xx-large;position:absolute; top: 8em; left: .5em;"><</span>
        <span id="right" class="slide-arrow" style="font-size: xx-large;position:absolute; top: 8em; right: .5em;">></span>
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
