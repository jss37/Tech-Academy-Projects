function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is the biggest beast from " + character.innerHTML);

}