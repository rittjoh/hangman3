Template.Header.helpers({
		
});

  Template.Header.events({

    'submit #login' : function(e, t){
      e.preventDefault();
      // retrieve the input field values
      var username = t.find('#username').value
      var password = t.find('#password').value;
      var playerid = '';  


        Meteor.loginWithPassword(username, password, function(err){
        if (err){

            Accounts.createUser({
				username : username,
				password : password,
				profile  : {
				    //publicly visible fields like firstname goes here
				}
			});

			Meteor.loginWithPassword(username, password);
			$('#login').hide();
        }
        else{

        }


      });
      
         return false; 
      }
  });
