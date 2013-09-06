 $(document).ready(function(){
	if(document.URL.indexOf("tumblr.com/reblog/") >= 0){ 
		var submit = document.forms.edit_post.submit();
		setTimeout(submit, 3000 );
	};
 });
 
 // ^ - this not work now, work only in old verion Opera browser 11-12
 // setTimeout('document.getElementById("save_button").click();', 300); // <- this be better but only in opera 11-12
 
