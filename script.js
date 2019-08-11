document.ready(function() {

       $('.form').submit(function() {
               $('#res').html(" ");
               callWiki();
              return false;
       });

       $(#search).click(function() {
               $('#res').html(" ");
               callWiki();
       });

       function callWiki(){
         var q = $('#query').value;
         var url = "";
         $.ajax({url: url,
               type: 'POST',
               datatype: 'json',
               success: function(data){
               var data = result.query.pages;
               render(data);
          },

          error: function(err){
            alert("Error in CallWiki");
            console.log(err);
          }
        });
 }

       function render(data){
           var pageUrl = "";
          for(var i in data){
            $('#res').append("");
          }
       }

}
