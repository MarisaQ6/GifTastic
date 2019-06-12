// giphy API Key
// xaD2pIjIBEGCOoGF2EpNwyLtcY0nY9Ye

// <!-- create garfield button for user to click -->
    $("garfield-buttons").on("click", function(){

        // <!-- queryURL for GIPHY API -->
        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=xaD2pIjIBEGCOoGF2EpNwyLtcY0nY9Ye";

        // <!-- ajax here -->
        $.ajax({
            url: queryURL,
            method: "GET"
        })

        console.log(response)

        // Giphys here

        <div class="container">
            <h1>Garfield Giphys</h1>

            <div id="buttons-view"></div> here

        <form id="garfield-giphy">
            <label for="giphy-input">Garfield Search Here!</label>
            <input type="text" id="giphy-input"></input>

        <input id="add-giphy" type="submit" value="Garfield Search Here!"></input>
        </form>

        

        {/* Trigger buttons */}

        // <!-- creat the states of pause and go -->

        let state = $(this).attr("data-state");

        if(state === 'still'){
            $(this).attr("src",$(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }

        else {
            $(this).attr("src",$(this).attr("data-still"));
            $(this).attr("data-state","still");

        }

        

    })



