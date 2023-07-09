let sum = JSON.parse(localStorage.getItem('ans')) || '';
document.getElementById('calcuAnswer').innerHTML = sum || 0;
let ans;
let calcuAns = document.getElementById('calcuAnswer');

click('one', '1');
click('two', '2');
click('three', '3');
click('four', '4');
click('five', '5');
click('six', '6');
click('seven', '7');
click('eight', '8');
click('nine', '9');
click('zero', '0');

click('dot', '.');
click('add', ' + ');
click('minus', ' - ');
click('multiply', ' * ');
click('divide', ' / ');

function click(idName, num) {
	document.getElementById(idName).onclick = function() {
		sum += num;
		calcuAns.innerHTML = sum;
		console.log(sum);
	}	
}

document.getElementById('total').onclick = function (){
	ans = eval(sum)
	console.log(ans);
	sum = JSON.stringify(ans);
	calcuAns.innerHTML = sum;
	localStorage.setItem('ans', JSON.stringify(ans));
}

document.getElementById('clear').onclick = function (){
	calcuAns.innerHTML = 0;
	sum = '';
	localStorage.removeItem('ans');
}
