let checkbox = document.getElementById('checkbox-1');
//console.log(checkbox);
function mail_select_all_checkboxes(){
	let mail_messages = document.getElementById('mail_messages_box');
	let mail_message_bar = mail_messages.getElementsByClassName('select');
	console.log(mail_message_bar);
	mail_message_bar.forEach(check);
	function check(item, index){
		item.getElementsByTagName('input')[0];
	}
}
//mail_select_all_checkboxes();