$(document).ready(function() {
  // Make navbar tabs active
  $('a[href="' + this.location.pathname + '"]').parent().addClass('active');
});
