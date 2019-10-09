$(document).ready(function () {

        var compNumber = Math.floor(Math.random() * 83 + 46);
        var elements = [];
        var wins = 0;
        var loses = 0;
        var elementStrength = 0;
        var user = 0;
        var imageElement = [];
        var spells = ["My heart ablaze and shining \
        This love I do send to thee, \
        If you find a place in your heart to love me, \
        By the greatest good, So mote it be.", "Tespara Sepera \
        onpaz eztan, \
        spas tino.", "Bring me quiet, \
        Bring me peace, \
        Ease my dreams, \
        Nightmares cease", "One coin here, one coin there, \
        Prosperity is everywhere, \
        I need some wealth,, \
        Financial health, \
        I just need my share.", "Elements, I call on thee, \
        I ask you to protect and guide me. \
        Water, please guide my path. \
        Fire, protect me with your wrath. \
        Earth, perseverance and strength give to me. \
        Air, speedy travel and communication is what I ask of thee.\
        Water, Fire, Earth, and Air, elements one and all,\
        Let me not stumble, let me not fall.\
        Help, protect, and guide me is what I ask,\
        Kind elements protect me,\
        This is my will, so mote it be!", "The maiden comes to bring us light,\
        The winter dies and all is bright,\
        The frozen ground shall disappear,\
        All shall sprout for Spring is near!", "Wind and Earth now have met and all the Earth is wet.\
        Thankful are our unworthy souls,\
        Let us settle down.\
        Wind and Earth now may parent,\
        So mote it be", "Fesmatos, tribum, ementas asten, nas ex veras, mihan ega petous, varos!"];

        var randomSpell;
        
        for (var i = 0; i < 4; i++) {
                elements[i] = Math.floor(Math.random() * 25 + 7);
                imageElement[i] = $("<img>");
                imageElement[i].addClass("element-image");
                imageElement[i].attr('id', 'img' + i);
                imageElement[i].attr("css", 'img' + i);
                imageElement[i].attr("data-elementstrength", elements[i]);
                $("#element").append(imageElement);
        }

        function shuffle(a) {
                for (let i = a.length - 1; i > 0; i--) {
                  const j = Math.floor(Math.random() * (i + 1));
                  [a[i], a[j]] = [a[j], a[i]];
                }
                return a;
        }

        function newRound() {
                elementStrength = 0;
                for (var i = 0; i < 4; i++) {
                        sessionStorage.clear("data-elementstrenght", imageElement[i]);
                        elements[i] = Math.floor(Math.random() * 25 + 7);
                        imageElement[i].attr("data-elementstrength", elements[i]);
                }
                shuffle(spells);
                randomSpell = spells[Math.floor(Math.random() * spells.length)];
                compNumber = Math.floor(Math.random() * 83 + 46);
                user = 0;
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

        function display() {
                $("#computer-random").text(compNumber);
                $("#user").text(user);
                $("#wins").text(wins);
                $("#loses").text(loses);
                $("#in-depth").text(randomSpell);
        }

        $(".element-image").on("click", function () {
                elementStrength = ($(this).attr("data-elementstrength"));
                elementStrength = parseInt(elementStrength);
                user += elementStrength;
                display();
                compare();
        });

        $("#restart").on("click", function () {
                alert("Begin New Round!");
                newRound();
                display();
        });

        $("#new-game").on("click", function () {
                alert("Begin New Game!");
                wins = 0;
                loses = 0;
                newRound();
                display();
        });
        
        shuffle(spells);
        randomSpell = spells[Math.floor(Math.random() * spells.length)];
        display();
});