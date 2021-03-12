import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.css'],
})
export class TinymceComponent implements OnInit {

  @Input() mode: string
  public title: string

  constructor() {

  }

  ngOnInit(): void {
    this.title = 'New Title'
  }
}
