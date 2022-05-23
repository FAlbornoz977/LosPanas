function mostrar(){
    Swal.fire({
        title: 'Procedimiento completado',
        text: 'Se ha enviado un link a tu correo para poder restablecer la contraseña.',
        icon:'success',
        confirmButtonText:'Terminado',
        confirmButtonColor: '#e2aa1b',
        allowEnterKey:false,
        allowEscapeKey:false,
        allowOutsideClick:false,
        stopKeydownPropagation:false


    }
    ).then((result)=>{
        if(result.isConfirmed){
            window.location.replace("login.html")
        }
    })
    
}

function mostrar1(){
    Swal.fire({
        title: '¿Estas Seguro de enviar a revision la noticia?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Enviar',
        denyButtonText: `Seguir Editando`,
        confirmButtonColor: '#e2aa1b',
        allowEnterKey:false,
        allowEscapeKey:false,
        allowOutsideClick:false,
        stopKeydownPropagation:false


    }
    ).then((result)=>{
        
        if (result.isConfirmed) {
            Swal.fire({title:'Enviado!', text:'', icon:'success', confirmButtonColor: '#e2aa1b',}).then((result)=>{if(result.isConfirmed){
                window.location.replace("index-log.html")
            }})
          } else if (result.isDenied) {
            Swal.fire('No se Envio la noticia a revision', '', 'info')
          }
          
    })
    
}

function mostrar2(){
    Swal.fire({
        title: 'Mensaje Enviado Correctamente',
        text: 'Obtendra una respuesta en su correo lo antes posible.',
        icon:'success',
        confirmButtonText:'Ok',
        confirmButtonColor: '#e2aa1b',
        allowEnterKey:false,
        allowEscapeKey:false,
        allowOutsideClick:false,
        stopKeydownPropagation:false


    }
    ).then((result)=>{
        if(result.isConfirmed){
            window.location.replace("index.html")
        }
    })
    
}

function validarS(){
    Swal.fire({
        title: 'Noticia Validada',
        text: 'Esta noticia sera publicada en unos minutos',
        icon:'success',
        confirmButtonText:'Terminar',
        confirmButtonColor: '#e2aa1b',
        allowEnterKey:false,
        allowEscapeKey:false,
        allowOutsideClick:false,
        stopKeydownPropagation:false


    }
    ).then((result)=>{
        if(result.isConfirmed){
            window.location.replace("validar1.html")
        }
    })
    
}

function validarN(){
    Swal.fire({
        title: 'Noticia Rechazada',
        text: 'Se ha enviado un correo al reportero indicando el motivo del rechazo.',
        icon:'error',
        confirmButtonText:'Terminado',
        confirmButtonColor: '#e2aa1b',
        allowEnterKey:false,
        allowEscapeKey:false,
        allowOutsideClick:false,
        stopKeydownPropagation:false


    }
    ).then((result)=>{
        if(result.isConfirmed){
            window.location.replace("validar1.html")
        }
    })
    
}

