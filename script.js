const hr1 = document.getElementById('hr1');
const hr2 = document.getElementById('hr2');
const mn1 = document.getElementById('mn1');
const mn2 = document.getElementById('mn2');
const sc1 = document.getElementById('sc1');
const sc2 = document.getElementById('sc2');

const relogio = setInterval(function time(){
	let dateToday = new Date()

	let hr = dateToday.getHours();
	let mn = dateToday.getMinutes();
	let sc = dateToday.getSeconds();

	let hrStr = fixTime(hr)
	let mnStr = fixTime(mn)
	let scStr = fixTime(sc)

	hr1.textContent = hrStr[0];
  hr2.textContent = hrStr[1];
  mn1.textContent = mnStr[0];
  mn2.textContent = mnStr[1];
  sc1.textContent = scStr[0];
  sc2.textContent = scStr[1];

});

function fixTime(time){
	
	return time < 10 ? '0'+time : time.toString()

 