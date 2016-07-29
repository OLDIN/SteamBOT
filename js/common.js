$('#block-tarif, #our-skills, #about, #info').each(function(){
    var _this = this;
    new Waypoint({
        element: this,
        handler: function( pos ) {

            if( $(_this).attr('id') == 'about' || $(_this).attr('id') == 'info' )
                $('#humburger')[pos =='up' ? 'addClass' : 'removeClass']('fa-gray');
            else
                $('#humburger')[pos =='down' ? 'addClass' : 'removeClass']('fa-gray');
                
        }
    });
});

