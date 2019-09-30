let i_close = document.getElementsByClassName('icon-close');
//console.log(i_close);
console.log( i_close[7]);
Array.prototype.call(i_close, pop());
Array.prototype.forEach.call(i_close,function (el){
	//console.log()
	//You was like a father to me!!
	let father = el.parentNode.parentNode.parentNode.parentNode;
	father.style.display = 'none';
	console.log(father);
});
