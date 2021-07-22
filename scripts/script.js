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
const in6 = document.querySelector('.input-6').value;

res1 = in6.length;
sym1.innerHTML = "Всего " + res1 + " знаков"

function dropdown(val) {
  var y = document.getElementsByClassName('header__title');
  var aNode = y[0].innerHTML = val + ' <span class="caret"></span>'; 
}

function dropdown2(value) {
  var x = document.getElementsByClassName('p1');
  var aNode = x[0].innerHTML = value + ' <span class="caret2"></span>'; 
}

const interval = setInterval(function() {
  const in6 = document.querySelector('.input-6').value;
  res1 = in6.length;
  sym1.innerHTML = "Всего " + res1 + " знаков"
}, 100);



const sy2 = document.querySelector('.symbols-2');
const i7 = document.querySelector('.in-7').value;

res2 = i7.length;
sy2.innerHTML = "Всего " + res2 + " знаков"

const interval1 = setInterval(function() {
  const i7 = document.querySelector('.in-7').value;
  res2 = i7.length;
  sy2.innerHTML = "Всего " + res2 + " знаков"
}, 100);



$(function () {
  $('[data-toggle="tooltip"]').tooltip({
    delay: { "show": 200, "hide": 10 }
  })
})
