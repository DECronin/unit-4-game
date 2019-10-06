var compNumber = Math.floor(Math.random() * 83 + 46);
var guessCount = 0;
var elements = [];

$("#computer-random").text(compNumber);

for (var i = 0; i < 4; i++) {
    elements[i] = Math.floor(Math.random() * 25);
    var imageElement = $("<img>");
    imageElement.addClass("element-image");
    imageElement.attr("data-elementstrength", elements[i]);
    $("#element").append(imageelement);
}
//imageelement.attr("url", "")
//elements[0 - 3] assign images;

$(".element-image").on("click", function () {
    var elementStrength = ($(this).attr("data-elementstrength"));
    elementStrength = parseInt(elementStrength);
    guessCount += elementStrength;

    alert("Working! " + guessCount);
    console.log(guessCount);

    if (guessCount === compNumber) {
        alert("You win!");
    }

    else if (guessCount >= compNumber) {
        alert("You lose!!");
    }

});

        //NewRound / restart button
        //wins
        //loses
        //rules
        //total score instead of alerts
