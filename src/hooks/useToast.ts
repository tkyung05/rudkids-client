import Swal, { SweetAlertIcon } from 'sweetalert2';

import { PALETTE } from '@/constants/style';

function useAlert() {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
    width: '80rem',
  });

  const onToast = (status: SweetAlertIcon, content: string) => {
    Toast.fire({
      icon: status,
      title: content,
    });
  };

  const onConfirm = (
    title: string,
    content: string,
    confirmButtonText: string,
    cancelButtonText: string,
    showCancelButton: boolean,
    onSuccess: () => void
  ) => {
    Swal.fire({
      title: title,
      text: content,
      position: 'top',
      showCancelButton: showCancelButton,
      confirmButtonColor: PALETTE.BLUE,
      cancelButtonColor: PALETTE.RED,
      background: PALETTE.YELLOW_LIGHT,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
      reverseButtons: true,
    }).then((res) => res.isConfirmed && onSuccess());
  };

  return { onToast, onConfirm };
}

export default useAlert;
