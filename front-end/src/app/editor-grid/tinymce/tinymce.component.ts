import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.css']
})
export class TinymceComponent implements OnInit {

  public title: string

  constructor() {
    this.title = ''
  }

  ngOnInit(): void {
    this.title = 'New Title.'
  }

}
