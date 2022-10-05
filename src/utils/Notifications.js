import Swal from "sweetalert2"

/* import 'sweetalert2/src/sweetalert2.scss'
 *///Nofiticacion lateral

export function Toasty (type , message){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: type,
        title: message
    })
}


//Modal 
function Modal(type , message, title){
    Swal.fire(
        title,
        message,
        type
    )
}

export default Modal;
