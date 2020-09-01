$(()=> {
    console.log("Ready")

});
    function ButtonClicked()
    {
       $('#formsubmitbutton').hide();
       $('#formElem').hide();
       $('#buttonreplacement').show(); 
       $('#buttonreplacement').before(this.name); 
    }

    $('.heroName').bind('submit', function () {
        var name = this.name;
      });
    // var FirstLoading = true;
    // function RestoreSubmitButton()
    // {
    //    if( FirstLoading )
    //    {
    //       FirstLoading = false;
    //       return;
    //    }
    //    $('#formsubmitbutton').show();
    //    $('#formElem').show();
    //    $('#buttonreplacement').hide();
    // }
   
    // document.onfocus = RestoreSubmitButton;


