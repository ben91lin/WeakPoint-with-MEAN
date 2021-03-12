import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  animations: [
    trigger(
      'toggle',
      [
        state(
          'void',
          style(
            {
              opacity: 0,
              top: '-20rem'
            }
          )
        ),
        state(
          'expand',
          style(
            {
              opacity: 1,
              top: '4rem'
            }
          )
        ),
        transition(
          'void => expand',
          [animate('100ms 50ms ease-in-out')]
        ),
        transition(
          'expand => void',
          [animate('100ms 50ms ease-in-out')]
        )
      ]
    )
  ]
})
export class DropdownComponent implements OnInit {

  public toggle: string
  @Input() mode: string
  @Output() onSwitchMode = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.toggle = 'collapse'
  }

  switchMode() {
    if (this.mode === 'show') {
      this.onSwitchMode.emit('edit')
    } else {
      this.onSwitchMode.emit('show')
    }
    
    console.log('dropdownCom', this.mode)
  }

  switchToggle() :void {
    if ( this.toggle === 'collapse' ) {
      this.toggle = 'expand'
    } else {
      this.toggle = 'collapse'
    }
  }
}
