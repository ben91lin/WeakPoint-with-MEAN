import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  @Input() mode:string

  constructor() { }

  ngOnInit(): void {
  }
  
  isShow(): boolean {
    return (this.mode === 'Show') ? true : false
  }
}
