import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "src/app/shared/services/user-service/user-service.service"

@Component({
  selector: 'app-listarusuario',
  templateUrl: './listarusuario.component.html',
  styleUrls: ['./listarusuario.component.css'],
  providers: [
    UsuarioService, 
 ]
})
export class ListarusuarioComponent implements OnInit {

  UsuarioList:any=[];
  ModalTitle:any;
  ActivateAddEditUserComp:boolean=false;
  user:any;

  constructor(
    private _userService: UsuarioService,

  ) { }

  ngOnInit(): void {
    this.consultarUsuarios();
  }

  consultarUsuarios(){
    this._userService.listarUsuarios().subscribe(data=>{
      this.UsuarioList=data;
    });
  }

  closeClick(){
    this.consultarUsuarios();
  }
  
  agregarClick(){

    this.user={
      id:0,
      firstName:"",
      lastName:"",
      password:"",
      userName:"",      
    }

    this.ModalTitle="Agregar Usuario";
    this.ActivateAddEditUserComp=true;   

  }

  deleteClick(dataItem){
    
    this._userService.eliminarUsuario(dataItem.id).subscribe(data=>{
      console.log(data);
      this.consultarUsuarios();
    });
  }

  editClick(dataItem){
    this.user={
      id:dataItem.id,
      firstName:dataItem.firstName,
      lastName:dataItem.lastName,      
      userName:dataItem.userName,      
      password:dataItem.password,  
    }

    this.ModalTitle="Editar Usuario";
    this.ActivateAddEditUserComp=true;
    


  }

}
