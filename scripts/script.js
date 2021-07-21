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

$('.item').click(function(){
  $('.item').removeClass('current');
  $(this).addClass('current');
})

$('.item-2').click(function(){
  $('.item-2').removeClass('current');
  $(this).addClass('current');
})

const sym1 = document.querySelector('.symbols-1');
const in1 = document.querySelector('.input-1').value;
const in2 = document.querySelector('.input-2').value;
const in3 = document.querySelector('.input-3').value;
const in4 = document.querySelector('.input-4').value;
const in5 = document.querySelector('.input-5').value;
const in6 = document.querySelector('.input-6').value;
const in7 = document.querySelector('.input-7').value;


sym1.innerHTML = "Всего " + in1.length + " знаков"

document.addEventListener('keydown', ()=>{
  const in1 = document.querySelector('.input-1').value;
  const in2 = document.querySelector('.input-2').value;
  const in3 = document.querySelector('.input-3').value;
  const in4 = document.querySelector('.input-4').value;
  const in5 = document.querySelector('.input-5').value;
  const in6 = document.querySelector('.input-6').value;
  const in7 = document.querySelector('.input-7').value;
  res1 = in1.length + in2.length + in3.length + in4.length + in5.length + in6.length + in7.length;
  sym1.innerHTML = "Всего " + res1 + " знаков"
})


const sy2 = document.querySelector('.symbols-2');
const i1 = document.querySelector('.in-1').value;
const i2 = document.querySelector('.in-2').value;
const i3 = document.querySelector('.in-3').value;
const i4 = document.querySelector('.in-4').value;
const i5 = document.querySelector('.in-5').value;
const i6 = document.querySelector('.in-6').value;
const i7 = document.querySelector('.in-7').value;


sy2.innerHTML = "Всего " + i1.length + " знаков"

document.addEventListener('keydown', ()=>{
  const i1 = document.querySelector('.in-1').value;
  const i2 = document.querySelector('.in-2').value;
  const i3 = document.querySelector('.in-3').value;
  const i4 = document.querySelector('.in-4').value;
  const i5 = document.querySelector('.in-5').value;
  const i6 = document.querySelector('.in-6').value;
  const i7 = document.querySelector('.in-7').value;
  res2 = i1.length + i2.length + i3.length + i4.length + i5.length + i6.length + i7.length;
  sy2.innerHTML = "Всего " + res2 + " знаков"
})