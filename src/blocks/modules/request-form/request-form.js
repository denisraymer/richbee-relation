import $ from 'jquery';
import Swal from 'sweetalert2';

function validateUsername(username) {
    const emailAddressPattern = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
    return emailAddressPattern.test(username);
}

$('#subscription-request').on('click', function () {
    Swal.fire({
        title: 'Enter your username',
        input: 'text',
        inputPlaceholder: 'Username',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'To send',
        showLoaderOnConfirm: true,
        preConfirm: (username) => {
            return validateUsername(username)
        }
    }).then((result) => {
        if (result.value) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: true,
                timer: 8000,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: `Subscribed`
            }).then(r => r)
        }
    })
});

