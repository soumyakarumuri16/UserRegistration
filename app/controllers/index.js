//Code that will be executed when any character is entered in the 'First Name' textfield
$.txtFirstName.addEventListener('change', function(e){
    if (e.source.value.match(/[^a-zA-Z ]/g)) {
	   e.source.value = e.source.value.replace(/[^a-zA-Z ]/g, '');
	   $.lblErrFirstName.visible = true;
	   $.lblErrFirstName.text = "**Only alphabets are allowed in this field!!";
	}
});

//Code that will be executed when any character is entered in the 'Last Name' textfield 
$.txtLastName.addEventListener('change', function(e){
    if (e.source.value.match(/[^a-zA-Z ]/g)) {
	   e.source.value = e.source.value.replace(/[^a-zA-Z ]/g, '');
	   $.lblErrLastName.visible = true;
	   $.lblErrLastName.text = "**Only alphabets are allowed in this field!!";
	}
});

//Code that gets executed when the 'Submit' button is tapped.
function submitUserDetails(e) {
	var flag = true;
	if($.txtFirstName.value == "" || $.txtFirstName.value == null || $.txtFirstName.value == undefined) {
		$.lblErrFirstName.visible = true;
		$.lblErrFirstName.text = "**Please enter First Name!!";
		$.view1.backgroundColor = "red";
		flag = false;
	}
	
	if($.txtLastName.value == "" || $.txtLastName.value == null || $.txtLastName.value == undefined) {
		$.lblErrLastName.visible = true;
		$.lblErrLastName.text = "**Please enter Last Name!!";
		$.view2.backgroundColor = "red";
		flag = false;
	}
	
	if($.txtUsername.value == "" || $.txtUsername.value == null || $.txtUsername.value == undefined) {
		$.lblErrUsername.visible = true;
		$.lblErrUsername.text = "**Please enter Username!!";
		$.view3.backgroundColor = "red";
		flag = false;
	}
	
	if($.txtPassword.value == "" || $.txtPassword.value == null || $.txtPassword.value == undefined) {
		$.lblErrPassword.visible = true;
		$.lblErrPassword.text = "**Please enter Password!!";
		$.view4.backgroundColor = "red";
		flag = false;
	}
	
	if($.txtConfirmPassword.value == "" || $.txtConfirmPassword.value == null || $.txtConfirmPassword.value == undefined) {
		$.lblErrConfirmPassword.visible = true;
		$.lblErrConfirmPassword.text = "**Please Re-enter the Password!!";
		$.view5.backgroundColor = "red";
		flag = false;
	}
	
	if(flag) {
		$.lblErrFirstName.visible = false;
		$.lblErrLastName.visible = false;
		$.lblErrUsername.visible = false;
		$.lblErrPassword.visible = false;
		$.lblErrConfirmPassword.visible = false;
		
		$.view1.backgroundColor = "#555657";
		$.view2.backgroundColor = "#555657";
		$.view3.backgroundColor = "#555657";
		$.view4.backgroundColor = "#555657";
		$.view5.backgroundColor = "#555657";
		
		if($.txtPassword.value === $.txtConfirmPassword.value) {
			$.activityIndicator.show();
			var client = Ti.Network.createHTTPClient({
			     onload : function(e) {
			     	$.activityIndicator.hide();
			        showAlertDialog("You have been registered successfully");
			     },
			     onerror : function(e) {
			     	$.activityIndicator.hide();
			        showAlertDialog("Sorry,unable to register you now.Please try again later!!");
			     },
			     timeout : 5000  
			 });
			 client.open("GET", "http://www.appcelerator.com");
			 client.send();
		}else {
			showAlertDialog("Password and Confirm Password doesn't match.Please re-enter again.");
		}
		
	}
}

//Custom function to display alert dialog to the user 
function showAlertDialog(message){
	var dialog = Ti.UI.createAlertDialog({
	    message: message,
	    ok: 'Ok',
	    title: 'Hello User!!'
	});
	dialog.show();
}

$.index.open();
