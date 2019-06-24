import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioHttpService } from './servicios/http/usuario-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tienda-frontend';

  constructor(private readonly _httpClient: HttpClient,
              private readonly _usuarioHttpService: UsuarioHttpService){

  }

  ngOnInit(){
    const usuarioCrear$ = this._usuarioHttpService
      .crear({
        nombre:"Felipe",
        apellido:"Caicedo",
        cedula:'1718137159',
        correo:'eadepto@hotmail.com',
        estaCasado: false,
        username:'adrianeguez',
        sueldo: 120,
        tipoUsuario: 'normal'
      });

    usuarioCrear$
      .subscribe(
        (nuevoUsuario)=>{
          console.log(nuevoUsuario);
        },
        (error)=>{
          console.error(error);
        },
      );




    const url = environment.url + "/Usuario";
    
    // http://localhost:1337/Usuario

    const listaUsuarios$ = this._httpClient.get(url);

    listaUsuarios$
          .subscribe(
            (datos)=>{
              console.log(datos);
            },
            (error)=>{
              console.log(error);
            }
          )
  }



}