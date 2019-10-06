$(document).ready(function () {

        var compNumber = Math.floor(Math.random() * 83 + 46);
        var guessCount = 0;
        var elements = [];
        var wins = 0;
        var loses = 0;
        var elementStrength = 0;

        for (var i = 0; i < 4; i++) {
                elements[i] = Math.floor(Math.random() * 25);
                var imageElement = $("<img>");
                imageElement.addClass("element-image");
                imageElement.attr('id', 'img' + i);
                imageElement.attr("css", 'img' + i);
                imageElement.attr("data-elementstrength", elements[0]);
                $("#element").append(imageElement);
        };

        function newRound() {
                 compNumber = Math.floor(Math.random() * 83 + 46);
                 guessCount = 0;
                 elements = [];
                 elementStrength = 0;
        }

        function compare() {
                if (guessCount === compNumber) {
                        wins++;
                        newRound();
                }

                else if (guessCount >= compNumber) {
                        loses++;
                        newRound();
                } 
        }

        function display(){
                $("#computer-random").text(compNumber);
                $("#guess-count").text(guessCount);
                $("#wins").text(wins);
                $("#loses").text(loses);
        }


        $(".element-image").on("click", function () {
                elementStrength = ($(this).attr("data-elementstrength"));
                elementStrength = parseInt(elementStrength);
                guessCount += elementStrength;
                display();
                compare();
        });

        $("#restart").on("click", function(){
                alert("Begin New Round!");
                newRound();
                display();
        });
});