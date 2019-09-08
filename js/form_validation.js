////////////////////////////////////////////////////////////////////////////////////////////
//Stefan Grulovic (20150280) - CS306 Final Project
////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
	$("body").hide().fadeIn(1000);
	$("#sub_form").hide().delay(500).slideDown(1000);

	$("#button").click(function () {
		var user_name = $("#user_name").val();
		var birthday = $("#birthday").val();
		var email = $("#email").val();
		var email_re = $("#email_re").val();
		var password = $("#password").val();

		var form_valid = true;
		
		////////////////////////////////////////////////////////////////////////////////////////////
		//USER NAME
		////////////////////////////////////////////////////////////////////////////////////////////
		if (user_name == "") {
			$("#user_name").attr("placeholder", "This field is required!").css("border", "1px solid red");
			$("#user_name").addClass("red_placeholder").css("color", "black");
			$("#user_name").prev().css("background-color","red");

			form_valid = false;
		} else {
			$("#user_name").attr("placeholder", "").css("border", "1px solid rgb(0, 150, 50)");
			$("#user_name").removeClass("red_placeholder").css("color", "rgb(0, 150, 50)");
			$("#user_name").prev().css("background-color","green");
		}
		////////////////////////////////////////////////////////////////////////////////////////////
		//BIRTHDAY
		////////////////////////////////////////////////////////////////////////////////////////////
		if (birthday == "") {
			$("#birthday").attr("placeholder", "This field is required!").css("border", "1px solid red");
			$("#birthday").addClass("red_placeholder").css("color", "black");
			$("#birthday").prev().css("background-color","red");

			form_valid = false;
		} else {
			$("#birthday").attr("placeholder", "").css("border", "1px solid rgb(0, 150, 50)");
			$("#birthday").removeClass("red_placeholder").css("color", "rgb(0, 150, 50)");
			$("#birthday").prev().css("background-color","green");
		}
		////////////////////////////////////////////////////////////////////////////////////////////
		//EMAIL
		////////////////////////////////////////////////////////////////////////////////////////////
		if (email == "") {
			$("#email").attr("placeholder", "This field is required!").css("border", "1px solid red");
			$("#email").addClass("red_placeholder").css("color", "black");
			$("#email").prev().css("background-color","red");

			form_valid = false;
		} else {
			if( !email_validation(email) ){
				$("#email").val(null);
				$("#email").attr("placeholder", "Email not correct!").css("border", "1px solid red");
				$("#email").addClass("red_placeholder").css("color", "black");
				$("#email").prev().css("background-color","red");

				form_valid = false;
			}
			else{
				$("#email").attr("placeholder", "").css("border", "1px solid rgb(0, 150, 50)");
				$("#email").removeClass("red_placeholder").css("color", "rgb(0, 150, 50)");	
				$("#email").prev().css("background-color","green");
			}
			
		}
		////////////////////////////////////////////////////////////////////////////////////////////
		//EMAIL RE-ENTER
		////////////////////////////////////////////////////////////////////////////////////////////
		if (email_re == "") {
			$("#email_re").attr("placeholder", "This field is required!").css("border", "1px solid red");
			$("#email_re").addClass("red_placeholder").css("color", "black");
			$("#email_re").prev().css("background-color","red");

			form_valid = false;
		} else if (email != email_re) {
			$("#email_re").val(null);
			$("#email_re").attr("placeholder", "Email is not equal!").css("border", "1px solid red");
			$("#email_re").addClass("red_placeholder").css("color", "black");
			$("#email_re").prev().css("background-color","red");
			
			form_valid = false;
		} else {
			$("#email_re").attr("placeholder", "").css("border", "1px solid rgb(0, 150, 50)");
			$("#email_re").removeClass("red_placeholder").css("color", "rgb(0, 150, 50)");	
			$("#email_re").prev().css("background-color","green");
		}
		////////////////////////////////////////////////////////////////////////////////////////////
		//PASSWORD
		////////////////////////////////////////////////////////////////////////////////////////////
		if (password == "") {
			$("#password").attr("placeholder", "This field is required!").css("border", "1px solid red");
			$("#password").addClass("red_placeholder").css("color", "black");
			$("#password").prev().css("background-color","red");
			form_valid = false;
		}
		else if( password.length > 8){
			$("#password").val(null);
			$("#password").attr("placeholder", "Password to long...").css("border", "1px solid red");
			$("#password").addClass("red_placeholder").css("color", "black");
			$("#password").prev().css("background-color","red");
			form_valid = false;	
		} 
		else {
			$("#password").attr("placeholder", "").css("border", "1px solid rgb(0, 150, 50)");
			$("#password").removeClass("red_placeholder").css("color", "rgb(0, 150, 50)");	
			$("#password").prev().css("background-color","green");
		}
		////////////////////////////////////////////////////////////////////////////////////////////
		//SUBMIT
		////////////////////////////////////////////////////////////////////////////////////////////
		if(form_valid){
			alert("Thank you for subscribing!");
			$("#sub_form").submit();
		}
		////////////////////////////////////////////////////////////////////////////////////////////
	}); // end click
}); // end ready


////////////////////////////////////////////////////////////////////////////////////////////
//EMAIL VALIDATION FUNCTION
////////////////////////////////////////////////////////////////////////////////////////////
function email_validation(entered_email) {
  var pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
  return pattern.test(entered_email);
}
////////////////////////////////////////////////////////////////////////////////////////////