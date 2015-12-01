$(function () {
	$('#confirmAdd').click(function() {
    $.ajax({
				type: 'post',
				url: '/plantations/new',
				data: JSON.stringify({
          plantationID: $('#plantationID').val(),
          contactCP: $('#contactCP').val(),
          name: $('#name').val(),
          addressCP: $('#addressCP').val(),
          companyID: $('#companyID').val()
        }),
				contentType: 'application/json',
				success: function(res) {
					if (res.success === true) {
						console.log('successfully added! ' + $('#plantationID').val());
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
