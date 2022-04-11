import { Component, Input } from '@angular/core';
import { Empleado } from './modelos/empleados';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crud simple en angular';
  ArrayDeEmpleados: Empleado[] = [
    {id: 1, nombre: "Cachito McSheep", pais: "Escocia" },
    {id: 2, nombre: "Pepe Buonaroppa", pais: "Italia" },
    {id: 3, nombre: "Tincho Gomez", pais: "Argentina" }
  ];
  //de la siguiente forma, el template llama a esta variable, creando un nuevo objeto  Empleado
   empleadoSeleccionado: Empleado = new Empleado();

   agregarOeditar(){
     if(this.empleadoSeleccionado.id === 0){
       this.empleadoSeleccionado.id = this.ArrayDeEmpleados.length + 1;
     this.ArrayDeEmpleados.push(this.empleadoSeleccionado);
     }
     
     this.empleadoSeleccionado = new  Empleado();
   }
   abrirYeditar(empleado: Empleado){
    this.empleadoSeleccionado = empleado;
   }
   borrar(empleadoSeleccionado: Empleado){
     this.ArrayDeEmpleados = this.ArrayDeEmpleados.filter(x => x != this.empleadoSeleccionado)
    this.empleadoSeleccionado = new Empleado;
    }
}
