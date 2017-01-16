CKEDITOR.dialog.add('youtube_faster', function(editor) {
  return {
    title: 'Youtube Faster',
    minWidth: 400,
    minHeight: 100,

    contents: [
      {
        id: 'tab-basic',
        label: 'Basic Settings',
        elements: [
          {
            type: 'text',
            id: 'youtube',
            label: 'Id youtube',
            setup: function(widget) {
              this.setValue(widget.data['data-id']);
            },
            commit: function(widget) {
              widget.setData('data-id', this.getValue());
            },
            validate: CKEDITOR.dialog.validate.notEmpty("Id youtube field cannot be empty.")
          }
        ]
      }
    ]
  };
});
