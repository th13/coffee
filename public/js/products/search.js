$(function () {
  $('#search').click(function() {
    console.log($('#searchName').val());
    $.ajax({
        type: 'post',
        url: '/products/search',
        data: JSON.stringify({
          name: $('#searchName').val()
        }),
        contentType: 'application/json',
        success: function(res) {
          if (res.success === true) {
            console.log('found a result');
            window.location = '/products/' + res.id;
          } else {
            return console.log(res.error);
          }
        },
        error: function() {
          $('#searchName').parent().addClass('has-error');
          $('#search').addClass('btn-danger');
          $('#searchNotFound').text('Unable to find product with that name.');
          return console.log('error l2');
        }
      });
  });
});
