CKEDITOR.plugins.add('youtube_faster', {
    // This plugin requires the Widgets System defined in the 'widget' plugin.
    requires: 'widget,dialog',

    // Register the icon used for the toolbar button. It must be the same
    // as the name of the widget.
    icons: 'youtube_faster',
		inline: false,
		mask: true,

    afterInit: function(editor) {
      CKEDITOR.addCss(
        '.youtube-player { position: relative;padding-bottom: 56.23%; height: 0;overflow: hidden;max-width: 100%;background: #000;margin: 5px;}'
      );
    },

    // The plugin initialization logic goes inside this method.
    init: function(editor) {
        // Register the editing dialog.
        CKEDITOR.dialog.add('youtube_faster', this.path + 'dialogs/youtube_faster.js');

        // Register the fastmath widget.
        editor.widgets.add('youtube_faster', {
            // Allow all HTML elements, classes, and styles that this widget requires.
            // Read more about the Advanced Content Filter here:
            // * http://docs.ckeditor.com/#!/guide/dev_advanced_content_filter
            // * http://docs.ckeditor.com/#!/guide/plugin_sdk_integration_with_acf
            allowedContent: 'div(!youtube-player);',

            // Minimum HTML which is required by this widget to work.
            requiredContent: 'div(youtube-player)',

            // Define the template of a new Simple Box widget.
            // The template will be used when creating new instances of the Simple Box widget.
            template: '<div class="youtube-player"></div>',

            // Define the label for a widget toolbar button which will be automatically
            // created by the Widgets System. This button will insert a new widget instance
            // created from the template defined above, or will edit selected widget
            // (see second part of this tutorial to learn about editing widgets).
            //
            // Note: In order to be able to translate your widget you should use the
            // editor.lang.simplebox.* property. A string was used directly here to simplify this tutorial.
            button: 'Youtube Faster',

            // Set the widget dialog window name. This enables the automatic widget-dialog binding.
            // This dialog window will be opened when creating a new widget or editing an existing one.
            dialog: 'youtube_faster',

            // Check the elements that need to be converted to widgets.
            //
            // Note: The "element" argument is an instance of http://docs.ckeditor.com/#!/api/CKEDITOR.htmlParser.element
            // so it is not a real DOM element yet. This is caused by the fact that upcasting is performed
            // during data processing which is done on DOM represented by JavaScript objects.
            upcast: function(element) {
                // Return "true" (that element needs to converted to a Simple Box widget)
                // for all <div> elements with a "simplebox" class.
                return element.name == 'div' && element.hasClass('youtube-player');
            },

            // When a widget is being initialized, we need to read the data ("align" and "width")
            // from DOM and set it by using the widget.setData() method.
            // More code which needs to be executed when DOM is available may go here.
            init: function() {
                  var youtubeId = this.element.data('id');
                  this.setData('data-id', youtubeId);
            },

            // Listen on the widget#data event which is fired every time the widget data changes
            // and updates the widget's view.
            // Data may be changed by using the widget.setData() method, which we use in the
            // Simple Box dialog window.
            data: function() {
              if (this.data['data-id']) {
                this.element.data('id', this.data['data-id']);
              }
            },

        });
    }
});

// <div>Icons made by <a href="http://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
