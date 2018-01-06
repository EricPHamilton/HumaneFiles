var numCellsPerRow;

if ($(window).width() < 500) {
   numCellsPerRow = 2;
} else {
   numCellsPerRow = 3;
}

var animal = document.getElementById('animal-type').name;
var url = "https://ws.petango.com/webservices/adoptablesearch/wsAdoptableAnimals.aspx?species=" + animal + "&sex=A&agegroup=All&onhold=A&orderby=ID&colnum=" + numCellsPerRow + "&AuthKey=yoamoe7lahlatlahoe0leqoeqoaswiastouviavlatrlesplut&css=https://rawgit.com/EricPHamilton/HumaneFiles/master/css/adopt-grid.css";

document.getElementById('animal-grid').src = url;