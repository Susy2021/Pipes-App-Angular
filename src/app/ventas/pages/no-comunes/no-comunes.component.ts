import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nSelect
  nombre: string = 'Susy';
  genero: string = 'femenino';

  invitacionMapa = {

    'masculino' : 'invitarlo',
    'femenino'  : 'invitarla',
  }

  //i18nPlural
  clientes : string[] = [ 'Maria' , 'Pedro' , 'Juan' , 'Martín', 'Claudia'];
  clientesMapa = {
    '=0' : 'no tenemos ningún cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    '=2' : 'tenemos dos clientes esperando.',
    'other' : 'tenemos # clientes esperando.'
  }

  cambiarCliente () {
    this.nombre = 'Guillermo';
    this.genero = 'masculino';
  }

  borrarClientes () {
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre   : 'Susy',
    edad     : 35,
    direccion: 'Argentina',

  }

  //Json Pipe
  heroes = [
    {
      nombre : 'Superman',
      vuela  : true ,
    },
    {
      nombre : 'Robin',
      vuela  : false ,
    },
    {
      nombre : 'Aquaman',
      vuela  : false ,
    },
  ]

  //Async Pipes
  miObservable = interval(5000) //0,1,2,3,4,5,6,7,8,9,10

  valorPromesa = new Promise ( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos Data de Promesa');
    }, 3500 );
  });

}
