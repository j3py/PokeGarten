$('#teamButton').click(function() {
    // return randList();
    return getTeam();
});

$('#wildButton').click(function() {
    var randNum = Math.floor((Math.random() * 719) + 2);
    return getWild(randNum);
});

// function randList (teamList) {
//     for (var i = 0; i < 6; i++) {
//         var teamList = [];
//         var randNum = Math.floor((Math.random() * 719) + 2);
//         teamList.push(randNum);
//     };
// };

function getTeam () {
    for (var i = 0; i < 6; i++) { 
        var randNum = Math.floor((Math.random() * 719) + 2);
        $.ajax({
            url: "http://pokeapi.co/api/v1/sprite/" + randNum + "/",
            type: "GET",
            dataType: "jsonp",
            success: function(data) {
                console.log(data);
                var spriteUrl = 'http://pokeapi.co/' + data.image;
                $('#pokemon').add("<img class='pokemon' src=" + spriteUrl + "/>");
            }
        });
        $.ajax({
            url: "http://pokeapi.co/api/v1/pokemon/" + randNum + "/",
            type: "GET",
            dataType: "jsonp",
            success: function(data) {
                console.log(data);
                var pokeName = data.name;
                $('#pokemon').add("<p>" + pokeName + "</p>")
                var pokeId = data.national_id;
                $('#pokemon').add("<p>" + pokeId + "</p>")
            }
        });
    };
};

function getWild (randNum) {
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

