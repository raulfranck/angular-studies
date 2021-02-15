import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-propertis.component.html',
  styleUrls: ['./input-propertis.component.css'],
  inputs: ['nomeCUrso']
})
export class InputPropertisComponent implements OnInit {

  @Input('nome') nomeCurso: string = '';

  constructor() { }

  ngOnInit() {
  }

}
