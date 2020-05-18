import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  usuario: any = {
    nombre: null,
    correo: null,
    pais: '',
    sexo: 'Hombre',
    acepta: false,
  };
  paises = [
    {
      codigo: 'NIC',
      nombre: 'Nicaragua',
    },
    {
      codigo: 'PER',
      nombre: 'Perú',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  SaveData(form: NgForm) {
    console.log('enviando datos...');
    console.log(form);
    console.log(form.value);
    console.log('Usuario: ', this.usuario);
  }
}
