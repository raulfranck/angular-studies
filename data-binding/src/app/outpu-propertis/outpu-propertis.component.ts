import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
/* import { EventEmitter } from 'events'; */

@Component({
  selector: 'contador',
  templateUrl: './outpu-propertis.component.html',
  styleUrls: ['./outpu-propertis.component.css']
})
export class OutpuPropertisComponent implements OnInit {

  @Input() valor: number = 0

  @Output() mudouValor = new EventEmitter()

  incrementa() {
    this.valor++
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa() {
    this.valor--
    this.mudouValor.emit({novoValor: this.valor})
  }

  constructor() { }

  ngOnInit() {
  }

}
