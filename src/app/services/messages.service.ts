import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  messageError(title: string, msg: string){
    Swal.fire({
      title: title,
      text: msg,
      confirmButtonText: 'Ok'
    })
  }
  messageOk(title: string, msg: string){
    Swal.fire({
      title: title,
      text: msg,
      confirmButtonText: 'Ok'
    })
  }
  messageWarning(title: string, msg: string){
    Swal.fire({
      title: title,
      text: msg,
      confirmButtonText: 'Ok'
    })
  }
}
