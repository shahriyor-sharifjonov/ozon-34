$('#mySelect2').select2({
  dropdownParent: $('#myModal')
});
$('#mySelect3').select2({
  dropdownParent: $('#myModal2'),
});
$('#mySelect4').select2({
  dropdownParent: $('#myModal3'),
});
$('#mySelect5').select2({
  dropdownParent: $('#myModal4'),
});

$('body').on('shown.bs.modal', '.modal', function() {
  $(this).find('select').each(function() {
    var dropdownParent = $(document.body);
    if ($(this).parents('.modal.in:first').length !== 0)
      dropdownParent = $(this).parents('.modal.in:first');
    $(this).select2({
      dropdownParent: dropdownParent
    });
  });
});