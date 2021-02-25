import { Injectable } from '@angular/core';
import { ApiService } from "../api.services";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

   

   constructor( private _apiService: ApiService ) {
      
   }

   public listarUsuarios(){
       return this._apiService.getMethod(environment.urlport,environment.obtenerUsuarios)
   }

    public registrarUsuario(usuario){             
        return this._apiService.postMethod(environment.urlport,environment.registrarUsuario,usuario);
    }    

    public editarUsuario(usuario){     
        return this._apiService.patchMethod(environment.urlport,environment.editarUsuario,usuario);
    }

    public eliminarUsuario(idUsuario){     
        return this._apiService.deleteMethod(environment.urlport,environment.borrarUsuarios +"/"+ idUsuario);        
    }
}
