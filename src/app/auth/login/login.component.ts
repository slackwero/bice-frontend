import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent {  

  public formSubmitted = false;

  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  
  constructor( private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService ) {}

    login() {

      this.usuarioService.login( this.loginForm.value )
        .subscribe( resp => {  
          
          // Navegar al Dashboard
          this.router.navigateByUrl('/');
  
        }, (err) => {
          // Si sucede un error
          Swal.fire('Error', err.error.msg, 'error' );
        });
  
    }

}
