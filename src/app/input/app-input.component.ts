import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss']
})
export class AppInputComponent {
  @Input() title: string = '';
  @Input() inputModel: string = '';
  @Output() inputModelChange = new EventEmitter<string>();
}