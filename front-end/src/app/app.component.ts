import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, group, query, animateChild } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger(
      'fadeInOut',
      [
        transition(
          'void => Edit',
          group([
            query(
              ':self',
              animate('300ms 50ms ease-in-out', style({ opacity: 1 }))
            ),
            query(
              '@slideFromRight',
              animateChild()
            ),
            query(
              '@slideFromBottom',
              animateChild()
            ),
            query(
              '@slideFromLeft',
              animateChild()
            )
          ])
        ),
        transition(
          'Edit => void',
          group([
            query(
              ':self',
              animate('300ms 50ms ease-in-out', style({ opacity: 0 }))
            ),
            query(
              '@slideFromRight',
              animateChild()
            ),
            query(
              '@slideFromBottom',
              animateChild()
            ),
            query(
              '@slideFromLeft',
              animateChild()
            )
          ])
        )
      ]
    )
  ]
})

export class AppComponent {

  public mode: string
  public onePagePlugin: string

  constructor() {
    this.mode = 'Show'
    this.onePagePlugin = ''
  }

  setMode(mode :string): void {
    this.mode = mode
    console.log('AppCom:', mode)
  }

  isShow(): boolean {
    return (this.mode === 'Show')
  }

  isEdit(): boolean {
    return (this.mode === 'Edit')
  }

  loadOnePagePlugin(pluginName: string): void {
    this.onePagePlugin = pluginName
  }

  closeOnePagePlugin(): void {
    this.onePagePlugin = ''
  }
}
