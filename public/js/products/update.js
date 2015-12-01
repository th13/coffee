$(function () {
  $('.update').click(function() {
    console.log($(this).attr('data-id'));
    var id = $(this).attr('data-id');
    var name = $(this).attr('data-name');
    var roastType = $(this).attr('data-roastType');
    var price = $(this).attr('data-price');

    $('#updateID').text(id);
    $('#updateName').val(name);
    $('#updateRoastType').val(roastType);
    $('#updatePrice').val(price);
  });

  $('#confirmUpdate').click(function() {
    var id = $('#updateID').text();

    $.ajax({
				type: 'post',
				url: '/plantations/' + id + '/update',
				data: JSON.stringify({
          id: $('#updateID').text(),
          name: $('#updateName').val(),
          roastType: $('#updateRoastType').val(),
          price: $('#updatePrice').val(),
        }),
				contentType: 'application/json',
				success: function(res) {
					if (res.success === true) {
						console.log('successfully added! ' + $('#updateID').val());
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
