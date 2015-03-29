(function( $ ) {
  $.fn.contact = function(mandrillApi) {
    var el = $(this);

    el.validate({
      errorElement: 'small',
      rules: {
        name: 'required',
        email: {
          required: true,
          email: true
        },
        text: 'required'
      },
      messages: {
        name: 'Detta fält är obligatoriskt.',
        email: {
          required: 'Detta fält är obligatoriskt.',
          email: 'Vänligen ange en korrekt e-postadress.'
        },
        text: 'Detta fält är obligatoriskt.'
      },
      submitHandler: function(form) {
        var el = $(form),
        el_email = el.find('#email'),
        el_name = el.find('#name'),
        el_text = el.find('#text'),
        email = el_email.val(),
        name = el_name.val(),
        text = el_text.val();

        $.ajax({
          type: 'POST',
          url: 'https://mandrillapp.com/api/1.0/messages/send-template.json',
          data: {
            "key": mandrillApi,
            "template_name": "kontaktformul-r",
            "template_content": [{
              name: 'none',
              content: 'none'
            }],
            "message": {
              "to": [
                {
                  "email": "marcus@newchallenge.se",
                  "name": "Marcus Nyqvist",
                  "type": "to"
                }
              ],
              "headers": {
                "Reply-To": email
              },
              "merge_vars": [
                {
                  "rcpt": "marcus@newchallenge.se",
                  "vars": [
                    {
                      "name": "name",
                      "content": name
                    },
                    {
                      "name": "email",
                      "content": email
                    },
                    {
                      "name": "text",
                      "content": text
                    }
                  ]
                }
              ]
            }
          }
        })
        .done(function() {
          alert('Tack för ditt meddelande!');

          el_email.val('');
          el_name.val('');
          el_text.val('');
        })
        .fail(function() {
          console.log('fail');
        });
      }
    });
  };
}( jQuery ));
