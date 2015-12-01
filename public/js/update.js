$(function () {
  $('.update').click(function() {
    console.log($(this).attr('data-id'));
    var id = $(this).attr('data-id');
    var name = $(this).attr('data-name');
    var phone = $(this).attr('data-phone');
    var address = $(this).attr('data-address');
    var companyID = $(this).attr('data-companyID');

    $('#updateID').text(id);
    $('#updatePlantationID').val(id);
    $('#updateContactCP').val(phone);
    $('#updateName').val(name);
    $('#updateAddressCP').val(address);
    $('#updateCompanyID').val(companyID);
  });

  $('#confirmUpdate').click(function() {
    var id = $('#updateID').text();

    $.ajax({
				type: 'post',
				url: '/plantations/' + id + '/update',
				data: JSON.stringify({
          plantationID: parseInt($('#updatePlantationID').val()),
          contactCP: $('#updateContactCP').val(),
          name: $('#updateName').val(),
          addressCP: $('#updateAddressCP').val(),
          companyID: parseInt($('#updateCompanyID').val())
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
