function dice(){
  return math.floor(math.random()*6) +1;
}
$(document).ready(function() {
  $("#roll").click(function(){
    var player1 = dice();
    $("#name1-score").text(num1)
    $("#c0-score").text(total)
    var total=0;
    var player1A= [dice()];

    if(player1 == 1){
      $(".btnhold").show();
      $(".btnroll").hide();
    }else{
      player1A.forEach(function(num){
        total += num;
    });
  }
})

      $("#roll").click(function(){
        var player2 =dice();
        $("#name2-score").text(num2)
        if(player2 == 1){
          $(".btnhold").show();
          $(".btnroll").hide();
        }
      })
