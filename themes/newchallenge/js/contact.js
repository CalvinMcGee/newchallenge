(function( $ ) {
  $.fn.contact = function() {
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
          url: 'https://formspree.io/marcus@newchallenge.se',
          datatype: 'json',
          data: {
            "_subject": 'E-post från hemsidan från ' + name,
            "_replyto": email,
            "E-postadress": email,
            "Namn": name,
            "Meddelande": text
          }
        })
        .complete(function() {
          alert('Tack för ditt meddelande!');

          el_email.val('');
          el_name.val('');
          el_text.val('');
        })
      }
    });
  };
}( jQuery ));
