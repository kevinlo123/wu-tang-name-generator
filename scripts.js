document.getElementById('gen').onclick=function () {
  var random = Math.random()
  var q1 = document.getElementById('q1').value
  var q2 = document.getElementById('q2').value
  var q3 = document.getElementById('q3').value
  var q4 = document.getElementById('q4').value
  var q5 = document.getElementById('q5').value
  var randomLL = Math.floor(Math.random()*90)
  var qs = q1 + q2 + q3 + q4 + q5
  var total = randomLL + qs.length
  console.log(random)
  //generate names
  //generate RZA
  if (total<= 10) {
    document.getElementById('name').innerHTML="Black"
    lastName();
  }
  //generate GZA
  else if (total < 20) {
    document.getElementById('name').innerHTML="Killah"
    lastName();
  }

  //generate Ol' Dirty Bastard
  else if (total< 30) {
    document.getElementById('name').innerHTML="Masta"
    lastName();
  }

  //generate Inspecta Deck
  else if (total< 40) {
    document.getElementById('name').innerHTML="Big"
    lastName();
  }

  //generate Raekwon
  else if (total< 50) {
    document.getElementById('name').innerHTML="Ol Dirty"
    lastName();
  }

  //generate U-God
  else if (total< 60) {
    document.getElementById('name').innerHTML="Doctah"
    lastName();
  }

  //generate Ghostface Killah
  else if (total < 70) {
    document.getElementById('name').innerHTML="Crazy"
    lastName();
  }


  //generate Method Man
  else {
    document.getElementById('name').innerHTML="Angry"
    lastName();
  }
}

function lastName(){
  var random = Math.random()
  if (random > .8) {
    document.getElementById('name2').innerHTML="Shootah"
  }
  else if (random > .7) {
    document.getElementById('name2').innerHTML="Child"
  }
  else if (random > .1) {
    document.getElementById('name2').innerHTML="Warrior"
  }
  else if (random > .2) {
    document.getElementById('name2').innerHTML="Man"
  }
  else if (random > .3) {
    document.getElementById('name2').innerHTML="The Chef"
  }
  else if (random > .4) {
    document.getElementById('name2').innerHTML="Bastard"
  }else {
    document.getElementById('name2').innerHTML="Priest"
  }
}
