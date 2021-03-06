import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string ='';

  constructor() { }

  ngOnInit() {
    this.debouncer.subscribe()
  }

  

  buscar(){
    this.onEnter.emit(this.termino);

  }

}
