import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-edit-grid',
  templateUrl: './edit-grid.component.html',
  styleUrls: ['./edit-grid.component.css'],
  animations: [
    trigger(
      'slideFromRight',
      [
        state(
          'void',
          style({ transform: 'translateX(100%)' })
        ),
        state(
          'edit',
          style({ transform: 'translateX(0)' })
        ),
        transition(
          'void => edit',
            animate('300ms 50ms ease-in-out')
        ),
        transition(
          'edit => void',
            animate('300ms 50ms ease-in-out')
        )
      ]
    ),
    trigger(
      'slideFromBottom',
      [
        state(
          'void',
          style({ transform: 'translateY(100%)' })
        ),
        state(
          'edit',
          style({ transform: 'translateY(0)' })
        ),
        transition(
          'void => edit',
            animate('300ms 50ms ease-in-out')
        ),
        transition(
          'edit => void',
            animate('300ms 50ms ease-in-out')
        )
      ]
    ),
    trigger(
      'slideFromLeft',
      [
        state(
          'void',
          style({ transform: 'translateX(-100%)' })
        ),
        state(
          'edit',
          style({ transform: 'translateX(0)' })
        ),
        transition(
          'void => edit',
            animate('300ms 50ms ease-in-out')
        ),
        transition(
          'edit => void',
            animate('300ms 50ms ease-in-out')
        )
      ]
    )
  ]
})
export class EditGridComponent implements OnInit {

  @Input() mode: string

  constructor() {
  }

  ngOnInit(): void {
  }
  
}
