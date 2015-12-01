$(function () {
	$('.delete').click(function() {
    console.log($(this).attr('data-id'));
    var id = $(this).attr('data-id');

    $('#deleteID').text(id);
  });

  $('#confirmDelete').click(function() {
    var id = $('#deleteID').text();
    $.ajax({
				type: 'post',
				url: '/plantations/' + id + '/delete',
				data: null,
				contentType: 'application/json',
				success: function(res) {
					if (res.success === true) {
						console.log('successfully deleted!');
            location.reload();
					} else {
						return console.log('error!!!');
					}
				},
				error: function() {
					return console.log('error l2');
				}
			});
  });
});
