$(document).ready(function () {

        var compNumber = Math.floor(Math.random() * 83 + 46);
        var elements = [];
        var wins = 0;
        var loses = 0;
        var elementStrength = 0;
        var user = 0;
                
        for (var i = 0; i < 4; i++) {
                elements[i] = Math.floor(Math.random() * 25 + 7);
                var imageElement = $("<img>");
                imageElement.addClass("element-image");
                imageElement.attr('id', 'img' + i);
                imageElement.attr("css", 'img' + i);
                imageElement.attr("data-elementstrength", elements[i]);
                $("#element").append(imageElement);
        }

        function newRound() {
                 compNumber = Math.floor(Math.random() * 83 + 46);
                 user = 0;
                 elementStrength = 0;
                 for (var i = 0; i < 4; i++) {
                        elements[i] = Math.floor(Math.random() * 25 + 7);
                 }
                 display();
        };

        function compare() {
                if (user === compNumber) {
                        wins++;
                        alert("You've Won! New Round Begins");
                        newRound();
                }

                else if (user >= compNumber) {
                        loses++;
                        alert("You've lost! New Round Begins")
                        newRound();
                } 
        }

        function display(){
                $("#computer-random").text(compNumber);
                $("#user").text(user);
                $("#wins").text(wins);
                $("#loses").text(loses);
        }

        $(".element-image").on("click", function () {
                elementStrength = ($(this).attr("data-elementstrength"));
                elementStrength = parseInt(elementStrength);
                user += elementStrength;
                display();
                compare();
        });

        $("#restart").on("click", function(){
                alert("Begin New Round!");
                newRound();
                display();
        });

        display();
});