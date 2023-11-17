function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
    }

    function slice_Method() {
        var Sentence = "All work and no play makes Johnny a dull boy.";
        var Section = Sentence.slice(27,33);
        document.getElementById("Slice").innerHTML = Section;

    }

    function upper_Method() {
        let text = "Hello World!";
        let result = text.toUpperCase();
        document.getElementById("upper").innerHTML = result;
    }

    function search_Method() {
        let text = "Mr. Blue has a blue house"
        let position = text.search("blue");
        document.getElementById("search").innerHTML = position;  
    } 
    function string_Method() {
        var x = 182;
        document.getElementById("Numbers_to_string").innerHTML = x.toString();
        }

        function precision_Method() {
            var x = 12938.3012987376112;
            document.getElementbyId("Precision").innerHTML =x.toPrecision(10);
        }

        function fixed_Method() {
            let num = 5.56789;
            let n = num.toFixed();
            document.getElementById("fixed").innerHTML = n;
        }

        function value_Method() {
            let text = new String("Hello World!");
            let result = text.valueOf();
            document.getElementById("value").innerHTML = result;
        }