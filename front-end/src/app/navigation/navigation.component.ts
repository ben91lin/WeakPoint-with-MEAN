import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

// import { NavItem } from './model/nav-item';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [
    trigger(
      'toggle',
      [
        state(
          'void',
          style(
            {
              opacity: 0,
              bottom: '-20rem'
            }
          )
        ),
        state(
          'expand',
          style(
            {
              opacity: 1,
              bottom: 0
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
export class NavigationComponent implements OnInit {

  @Input() mode: string
  @Output() onSwitchMode = new EventEmitter<string>()
  public toggle: string
  public arrow: string

  constructor() { }

  ngOnInit(): void {
    this.toggle = 'collapse'
    this.arrow = '&#708;'
  }

  switchMode(): void {
    if (this.mode === 'Show') {
      this.onSwitchMode.emit('Edit')
    } else {
      this.onSwitchMode.emit('Show')
    }
    
    console.log('dropdownCom', this.mode)
  }

  switchToggle() :void {
    if ( this.toggle === 'collapse' ) {
      this.toggle = 'expand'
      console.log('navCom', this.toggle)
    } else {
      this.toggle = 'collapse'
      console.log('navCom', this.toggle)
    }
  }

  switchArrow() :void {
    if ( this.arrow === '&#708;' ) {
      this.arrow = '&#709;'
      console.log('navCom', this.arrow)
    } else {
      this.arrow = '&#708;'
      console.log('navCom', this.arrow)
    }
  }

  isEdit() :boolean {
    return (this.mode === 'Edit')
  }

  isExpand() :boolean {
    return (this.toggle === 'expand')
  }
}
