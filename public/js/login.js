$(document).ready(function(){
		var x="112233";
		$("button").click(function(){
		 var y = $("#password").val();
		 if(x==y){
			window.location.assign("/admin");
			return false;
		 }
		 else{
			window.location.assign("/login-fail");
			return false;
		 }
		});
		
});