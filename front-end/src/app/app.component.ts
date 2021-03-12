import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

// import { EditGridComponent } from './edit-grid'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger(
      'fadeInOut',
      [
        state(
          'void',
          style({ opacity: 0 })
        ),
        state(
          'edit',
          style({ opacity: 1 })
        ),
        transition(
          'void => edit',
          [animate('300ms 50ms ease-in-out')]
        ),
        transition(
          'edit => void',
          [animate('300ms 50ms ease-in-out')]
        )
      ]
    )
  ]
})

export class AppComponent {

  public mode: string
  public onePagePlugin: string

  constructor() {
    this.mode = 'show'
    this.onePagePlugin = ''
  }

  setMode(mode :string) : void {
    this.mode = mode
    console.log('AppCon:', mode)
  }

  isShow() :boolean {
    return this.mode === 'show' ? true : false
  }

  isEdit() :boolean {
    return this.mode === 'edit' ? true : false
  }

  loadOnePagePlugin(pluginName: string): void {
    this.onePagePlugin = pluginName
  }

  closeOnePagePlugin(): void {
    this.onePagePlugin = ''
  }
}
