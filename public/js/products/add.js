$(function () {
  $('#confirmAdd').click(function() {
    $.ajax({
        type: 'post',
        url: '/products/new',
        data: JSON.stringify({
          name: $('#name').val(),
          roastType: $('#roastType').val(),
          price: $('#price').val()
        }),
        contentType: 'application/json',
        success: function(res) {
          if (res.success === true) {
            console.log('successfully added!');
            location.reload();
          } else {
            return console.log(res.error);
          }
        },
        error: function() {
          return console.log('error l2');
        }
      });
  });
});
