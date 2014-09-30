$('#wildButton').click(function() {
    // Create random numbers for function calls
    var randNum = Math.floor((Math.random() * 719) + 2);
    return getWild(randNum);
});

function getWild (randNum) {
    // AJAX GETs random pokemon image from 'sprite'
    $.ajax({
        url: "http://pokeapi.co/api/v1/sprite/" + randNum + "/",
        type: "GET",
        dataType: "jsonp",
        success: function(data) {
            console.log(data);
            var spriteUrl = 'http://pokeapi.co/' + data.image;
            $('#staticRandPokemon').html("<a><img class='bigPoke' src=" + spriteUrl + "/></a>");
            $('#randPokemon').append("<a><img class='pokemon' src=" + spriteUrl + "/></a>");

        }
    });
    // AJAX GETs the same random pokemon's name/id from 'pokemon'
    $.ajax({
        url: "http://pokeapi.co/api/v1/pokemon/" + randNum + "/",
        type: "GET",
        dataType: "jsonp",
        success: function(data) {
            console.log(data);
            var pokeName = data.name;
            $('#randPokemon').append("<a>" + pokeName + " : " + "</a>")
            var pokeId = data.national_id;
            $('#randPokemon').append("<a>" + pokeId + "</a>")
        }
    });
};

