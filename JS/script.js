document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instance = M.FloatingActionButton.init(elems, {
    direction: 'left',
    hoverEnabled: false
    });
    instance.open();
    instance.close();
    instance.destroy();
});




document.addEventListener('DOMContentLoaded', function() {
    var date = document.querySelectorAll('.datepicker');
    var instance = M.Datepicker.init(date, {defaultDate:null, autoClose: true});
    instance.open();
    instance.close();
    instance.destroy();
});


$(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
});