$(document).ready(function(){
	// user
	$(".home").click(function(){
		$("#ifr").attr("src", "/home")
	});
	$("#img-home").click(function(){
		$("#ifr").attr("src", "/home")
	});
	//slide-subject
	$(".slide-subject").click(function(){
		var id = $(this).parent().attr('data-subject');
		$("#ifr").attr("src", "/slide-subject/" + id);
	});
	$(".exercise-subject").click(function(){
		var id = $(this).parent().attr('data-subject');
		$("#ifr").attr("src", "/exercise-subject/" + id);
	});
	$(".reference-subject").click(function(){
		var id = $(this).parent().attr('data-subject');
		$("#ifr").attr("src", "/reference-subject/" + id);
	});	
	// admin
	
	$(".add-new-subject").click(function(){
		$("#ifr-ad").attr("src", "/add-new-subject")
	});
	$("#subject").click(function(){
		$("#ifr-ad").attr("src", "/manage-subject")
	});
	$("#account").click(function(){
		$("#ifr-ad").attr("src", "/manage-account")
	});
	$("#about").click(function(){
		$("#ifr-ad").attr("src", "/manage-about")
	});
	$("#header-left-home").mouseenter(function(){
		$("#manage").slideDown("slow");
	});
	$("#header-left-home").mouseleave(function(){
		$("#manage").slideUp("slow");
	});
	// home ad
	$(".edit-name").click(function(){
		$(".change-name").slideToggle("slow");
	});
	$(".edit-password").click(function(){
		$(".change-password").slideToggle("slow");
	});
	$(".edit-title").click(function(){
		$(".change-title").slideToggle("slow");
	});
	$(".edit-contact").click(function(){
		$(".change-contact").slideToggle("slow");
		$("#save-about").slideToggle("slow");
	});
	$(".edit-background-img").click(function(){
		$(".change-background-img").slideToggle("slow");
	});
	$(".edit-avatar-img").click(function(){
		$(".change-avatar-img").slideToggle("slow");
	});
	//view
	$(".view-subject").click(function(){
		var id = $(this).attr('data-subject');
		//console.log(id);
		$("#ifr-ad").attr("src", "/view-subject/" + id);
	});
	$(".add-new-slide").click(function(){
		var id = $(this).attr('data-subject');
		$("#ifr-ad").attr("src", "/add-new-slide/" + id);
	});
	$(".add-new-exercise").click(function(){
		var id = $(this).attr('data-subject');
		$("#ifr-ad").attr("src", "/add-new-exercise/" + id);
	});
	$(".add-new-reference").click(function(){
		var id = $(this).attr('data-subject');
		$("#ifr-ad").attr('src', "/add-new-reference/" + id);
	});
	// edit 
	$(".edit-data").click(function(){
		$("#ifr-ad").attr("src", "/edit-data");
	});
	/*---Delete Subject---*/
	$(".delete-data").click(function(){
		confirm("Are you want to delete this subject?");
	});
	$(".delete-cn").click(function(){
		confirm("Are you want to delete this subject?");
	});
	$(".delete-cg").click(function(){
		confirm("Are you want to delete this subject?");
	});	
	/*----------------------------*/
});