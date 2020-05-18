import { Component, OnInit } from '@angular/core';
import { PhoneType } from '../reactive-form/phoneType';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  public readonly phoneType: PhoneType[] = [
    { type: 'Mobil', number: '' },
    { type: 'Fijo', number: '' },
  ];

  constructor(private fb: FormBuilder) {}

  /* public usuarioOld: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl(''),
    correo: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
    ]),
    telefono: new FormGroup({
      type: new FormControl(''),
      number: new FormControl(''),
    }),
  }); */

  public usuario = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellido: [''],
    correo: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
      ],
    ],
    telefono: this.fb.group({
      type: [''],
      number: [''],
    }),
  });

  ngOnInit(): void {
    console.log(this.usuario);
  }
  SaveData() {
    console.log(this.usuario.value);
    this.usuario.reset();
  }
}
