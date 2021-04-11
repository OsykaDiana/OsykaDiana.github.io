function golin() {
	var x = 0
	var a =  Number(document.getElementById('a').value);
	var b =  Number(document.getElementById('b').value);
	x=(-b)/a;
	if (x == Infinity || x == -Infinity) (x = "Безліч розв'язків")
	else if (x != Number) {x=0}
	rez.innerHTML = x;
}
function gosqrt() {
	var x1 = 0;
	var x2 = 0;
	var a =  Number(document.getElementById('a').value);
	var b =  Number(document.getElementById('b').value);
	var c =  Number(document.getElementById('c').value);
	var d = b**2 - 4*a*c;
	if (d < 0) {rez.innerHTML = "Рівняння не має коренів"}

	else if (d == 0) {
				x1 = -b/(2*a);
				rez.innerHTML = x1;
			if (x1 == Infinity || x1 == -Infinity ) {
				rez.innerHTML =  "Безліч розв'язків"
			}
			//else if (x1 == NaN) {rez.innerHTML ="<font size=31> Ми не можемо розв'язязати це</font>"}
	}
	else if (d > 0) {
				x1 = Math.round((-b+d**0.5)/(2*a)*100)/100;
				x2 = Math.round((-b-d**0.5)/(2*a)*100)/100;
				rez.innerHTML = x1 +';' + x2+ ";";
			if (x1 == Infinity || x1 == -Infinity ||x2 == Infinity || x2 == -Infinity  ) {
				rez.innerHTML =  "Безліч розв'язків"
			}

			//else if (x1 == NaN || x2 == NaN ) {rez.innerHTML ="<font size=31> Ми не можемо розв'язязати це</font>"}
	}

}
