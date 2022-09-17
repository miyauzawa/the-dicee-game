

function rollDices() {

  const numsA = ["1a", "2a", "3a", "4a", "5a", "6a"];
  const numsB = ["1b", "2b", "3b", "4b", "5b", "6b"];

  reset();
  
  let animation = setInterval(showRamdomDice, 50);
  setTimeout(function(){
    clearInterval(animation);
  }, 1000);

  setTimeout(determineWinner, 1010);

  function showRamdomDice(){
    let dice1 = "images/" + numsA[Math.floor(Math.random() * 6)] + ".jpg";
    let dice2 = "images/" + numsB[Math.floor(Math.random() * 6)] + ".jpg";
    $(".player1").attr("src", dice1);
    $(".player2").attr("src", dice2);
  }

  function determineWinner(){
    let pipStr1 = $(".player1").attr("src").slice(7,9);
    let pipStr2 = $(".player2").attr("src").slice(7,9);
    let pipIndex1 = numsA.indexOf(pipStr1);
    let pipIndex2 = numsB.indexOf(pipStr2);

    if (pipIndex1 > pipIndex2){
      $(".crown1").removeClass("hidden");
    } else if (pipIndex2 > pipIndex1) {
      $(".crown2").removeClass("hidden");
    } else if (pipIndex1 === pipIndex2) {
      $(".draw").removeClass("hidden");
      $(".btn-roll").html("Roll Again");
    }
  }

  function reset(){
    if ($(".crown1").hasClass("hidden")!= true) {
      $(".crown1").addClass("hidden");
    }
    if ($(".crown2").hasClass("hidden")!= true) {
      $(".crown2").addClass("hidden");
    }
    if($(".draw").hasClass("hidden")!= true) {
        $(".draw").addClass("hidden");
        $(".btn-roll").html("Roll the Dices");
    }
  }
}
