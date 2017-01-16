(function ($) {
  Drupal.behaviors.youtube_embed_faster = {
    attach: function (context, settings) {

      var path = Drupal.settings.youtube_embed_faster.basepath;

      $('.youtube-player').each(function () {
        var idData = $(this).data('id');
        var thumb = 'https://img.youtube.com/vi/'+idData+'/0.jpg';

        $(this).html('<div class="youtube-start" data-id="'+idData+'" ><img src="'+thumb+'"><div class="play"></div></div>');

      });

      $( ".youtube-start" ).on( "click", function() {
        var idData = $(this).data('id');
        $(this).html('<iframe src="https://www.youtube.com/embed/'+idData+'?autoplay=1" allowfullscreen="1" frameborder="0"></iframe>');

      });

    }
  };
}(jQuery));
