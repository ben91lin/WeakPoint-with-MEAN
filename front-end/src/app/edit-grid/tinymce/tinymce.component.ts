import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.css'],
  animations: [
    trigger(
      'slideLeft',
      [
        transition(
          ':enter',
          [
            animate(
              '3000ms 50ms ease-in-out',
              style({ right: 0 })
            )
          ]
        ),
        transition(
          ':leave',
          [
            animate(
              '3000ms 50ms ease-in-out',
              style({ right: '80%' })
            )
          ]
        )
      ]
    )
  ]
})
export class TinymceComponent implements OnInit {

  @Input() mode: string
  public title: string

  constructor() {

  }

  ngOnInit(): void {
    this.title = 'New Title'
  }

  isEdit(): boolean {
    if ( this.mode === 'edit' ) {
      return true
    } else {
      return false
    }
  }
}
