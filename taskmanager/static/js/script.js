document.addEventListener('DOMContentLoaded', function () {
    var sidenav = document.querySelectorAll('.sidenav');
    var datepicker = document.querySelectorAll('.datepicker');
    M.Sidenav.init(sidenav);
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"}
    });
    let selects = document.querySelectorAll("select");
    M.FormSelect.init(selects);
});