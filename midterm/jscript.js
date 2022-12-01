


      // Form validation code will come here.
      function validate() {
      
         if( document.form.name.value == "" ) {
            alert( "Please enter your name!" );
            document.form.name.focus() ;
            return false;
         }
         if( document.form.email.value == "" ) {
            alert( "Please enter your Email!" );
            document.form.email.focus() ;
            return false;
         }
         if( document.form.comments.value == "" ) {
            alert( "Please enter your query!" );
            document.form.comments.focus() ;
            return false;
         }
        return( true );
       
      }
