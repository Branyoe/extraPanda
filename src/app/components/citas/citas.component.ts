import { Component, OnInit } from '@angular/core';

interface Citas {
  nombre: string,
  date: string,
  time: string,
  sintomas: string
}

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  citasV: Citas[] = [];
  nombre: string = '';
  date: string = '';
  time: string = '';
  sintomas: string = '';

  

  constructor() {
    this.citasV = JSON.parse(localStorage.getItem("citas") || "[]");
  }

  ngOnInit(): void {
  }

  limpiar(){
    this.nombre = "";
    this.date = "";
    this.time = "";
    this.sintomas = "";
  }

  agendar () {
    this.citasV.push(
      {
        nombre: this.nombre,
        date: this.date,
        time: this.time,
        sintomas: this.sintomas
      }
    );
    localStorage.setItem("citas", JSON.stringify(this.citasV));
    this.limpiar();
  }

  eliminar(pos: number){
    this.citasV.splice(pos, 1);
    localStorage.setItem("citas", JSON.stringify(this.citasV));
  }

}
