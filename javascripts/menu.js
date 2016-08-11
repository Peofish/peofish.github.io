function menu1 (menu) {
    var menu = document.getElementById(menu);
	test = menu.chil('li');
    for (i = 0; i < test.length; i++) {
	test[i].onclick = function(){
	    if(this.children[0].style.display != "none") {

		this.children[0].style.display = "none";
	    } else {
		this.children[0].style.display = "block";
	    }
	}

    }
}	

function recur(obj)
{
    if( obj.childern != null) {
	alert(obj.children[0]);
    }
}
menu1('menu');

function showObj(obj) {
    
    for (var i in obj) {
	alert(i.index);
    }
}
