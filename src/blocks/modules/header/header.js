import $ from 'jquery';
import Swal from 'sweetalert2';

function validateEmail(email) {
    const emailAddressPattern = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
    return !emailAddressPattern.test(email);
}

// Event for checking email address
$('#checking-mail').on('click', function (event) {
    event.preventDefault();
    const userEmailValue = this.form.userEmail.value;

    if (userEmailValue.length === 0) {
        Swal.fire({
            title: 'Внимание',
            text: 'Поле обязательно для заполнения',
            icon: 'warning',
            confirmButtonText: 'Закрыть'
        }).then(r => r);
    } else if (validateEmail(userEmailValue)) {
        Swal.fire({
            title: 'Ошибка',
            text: 'E-mail адрес не верный',
            icon: 'error',
            confirmButtonText: 'Закрыть'
        }).then(r => r);
    } else if (userEmailValue.length > 4) {
        Swal.fire({
            title: 'Отлично',
            text: 'Мы пришлем инструкции на почту',
            icon: 'success',
            confirmButtonText: 'Закрыть'
        }).then(r => r);
    }
});
