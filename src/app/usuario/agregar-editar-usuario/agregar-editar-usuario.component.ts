import { Component, OnInit , Input} from '@angular/core';
import { UsuarioService } from "src/app/shared/services/user-service/user-service.service"

@Component({
  selector: 'app-agregar-editar-usuario',
  templateUrl: './agregar-editar-usuario.component.html',
  styleUrls: ['./agregar-editar-usuario.component.css']
})
export class AgregarEditarUsuarioComponent implements OnInit {
  
  @Input() user:any;
  id:any;  
  firstName:any;
  lastName:any;
  password:any;
  userName:any;
  

  constructor(
    private _userService: UsuarioService,

  ) { }


  ngOnInit(): void {
    this.cargarDatosEditar();
  }

  cargarDatosEditar(){
    
    this.id = this.user.id;
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
    this.password = this.user.password;
    this.userName = this.user.userName;
  }
  limpiarFormulario(){
    this.firstName = '';
    this.lastName = '';
    this.password = '';
    this.userName = '';
  }
  agregarUsuario(){
    var val = {
      firstName:this.firstName,
      lastName:this.lastName,
      password:this.password,
      userName:this.userName  
    };

    console.log(val)

    this._userService.registrarUsuario(val).subscribe(res=>{
      alert("Se guardo correctamente");
      this.limpiarFormulario();
      
    });
  }

  
  editarUsuario(){
    
    var val = {
      id : this.id,
      firstName:this.firstName,
      lastName:this.lastName,
      password:this.password,
      userName:this.userName  
    };    
    console.log(val)
    this._userService.editarUsuario(val).subscribe(res=>{
      alert("Se edito el usuario correctamente");
      this.limpiarFormulario();
      
    });

  }


  

}


