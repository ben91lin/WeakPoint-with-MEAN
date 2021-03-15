import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.css'],
})
export class TinymceComponent implements OnInit {

  @Input() mode: string
  public title: string
  public config: Object

  constructor() {
    this.config = {
      base_url: '/tinymce',
      suffix: '.min',
      branding: false,
      menubar: false,
      width: '100%',
      height: '100%',
      plugins: [
        'image',
        'lists advlist',
        'autolink link charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount'
        ],
      toolbar:
          'undo redo | image | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help | code',
      file_picker_types: 'image media',
      image_advtab: true,
    //   file_picker_callback: function(callback :Function, value, meta : Object): void {
    //     // Provide file and text for the link dialog
    //     if (meta.filetype == 'file') {
    //       callback('mypage.html', {text: 'My text'});
    //     }
    
    //     // Provide image and alt text for the image dialog
    //     if (meta.filetype == 'image') {
    //       callback('myimage.jpg', {alt: 'My alt text'});
    //     }
    
    
    //     if (meta.filetype == 'media') {
    //       callback('movie.mp4', {source2: 'alt.ogg', poster: 'image.jpg'});
    //     }
    //   }
    }
  }

  ngOnInit(): void {
    this.title = 'New Title'
  }

  // file_picker_callback(callback, value, meta): void {
  //   // Provide file and text for the link dialog
  //   if (meta.filetype == 'file') {
  //     callback('mypage.html', {text: 'My text'});
  //   }

  //   // Provide image and alt text for the image dialog
  //   if (meta.filetype == 'image') {
  //     callback('myimage.jpg', {alt: 'My alt text'});
  //   }


  //   if (meta.filetype == 'media') {
  //     callback('movie.mp4', {source2: 'alt.ogg', poster: 'image.jpg'});
  //   }
  // }
}
