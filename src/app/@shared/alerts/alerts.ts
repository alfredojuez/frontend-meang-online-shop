import Swal from 'sweetalert2';

export async function formBasicDialog(
  title: string,
  html: string,
  property: string
) {
  return await Swal.fire({
    title,
    html,
    focusConfirm: false,
    cancelButtonText: 'Cancelar',
    showCancelButton: true,
    preConfirm: () => {
        const value = (document.getElementById('name') as HTMLInputElement).value;
        if (value) {
            return value;
        }
        Swal.showValidationMessage('Tienes que añadir un género para poder almacenarlo');
        return;
    },
  });
}

export function infoDetailsBasic(title: string, html: string, width: number | string) {
    Swal.fire({
        title,
        text: html,
        width: `${ width }px`,
        showCancelButton: true,
        confirmButtonColor: '#6c757d',
        cancelButtonColor: '#dc3545',
        confirmButtonText: '<i class="fas fa-edit"></i> Editar',
        cancelButtonText: '<i class="fas fa-lock"></i> Bloquear'
    }).then((result) => {
      console.log(result);
      if (result.value) {
        console.log('Editar');
      } else if (result.dismiss.toString() === 'cancel') {
        console.log('Bloquear');
      }
    });
}
