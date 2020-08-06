import $ from 'jquery';
import Swal from 'sweetalert2';

// Event for warning
$('#registration').on('click', function () {
    Swal.fire({
        title: 'В разработке',
        text: 'Даты добавления неизвестна',
        icon: 'info',
        confirmButtonText: 'Закрыть',
        footer: '<a href="#">info@richbee-relation.com</a>'
    }).then(r => r);
})
