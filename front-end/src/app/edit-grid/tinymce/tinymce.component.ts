import { Component, OnInit, OnDestroy, Input } from '@angular/core';

declare const tinymce: any;

@Component({
  selector: 'app-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.css'],
})
export class TinymceComponent implements OnInit, OnDestroy {

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
        'code',
        'help',
        'image imagetools',
        'link autolink',
        'lists advlist',
        'media',
        'quickbars',
        'visualblocks',
        'table',
        'textpattern',
        'wordcount'
        ],
      toolbar: 'undo redo | formatselect | bold italic backcolor alignleft aligncenter alignright alignjustify removeformat | bullist numlist outdent indent | table tabledelete | visualblocks media image code | help',
      file_picker_types: 'image media',
      image_advtab: true,
      images_upload_url: 'TODO',
      imagetools_cors_hosts: 'TODO',
      imagetools_proxy: 'TODO',
      default_link_target: '_blank',
      link_assume_external_targets: 'https',
      link_default_protocol: 'https',
      link_quicklink: true,
      visualblocks_default_state: false,
      contenteditable: true,
      audio_template_callback: this.audioTemplateCb,
      // video_template_callback: this.videoTemplateCb,
      file_picker_callback: this.filePickerCb
    }
  }

  ngOnInit(): void {
    this.title = 'New Title'
  }

  ngOnDestroy(): void {
    tinymce.remove(tinymce.activeEditor)
  }

  private audioTemplateCb(file: any): string {
    const mime = file.sourcemime ? `type="${file.sourcemime}"` : '';
    const altSourceMime = file.altsourcemime ? `type="${file.altsourcemime}"` : '';
    const altSource = file.altsource ? `<source src="${file.altsource}" ${altSourceMime}/>\n` : '';

    return `<audio controls>\n<source src="${file.source}" ${mime}/>\n${altSource}</audio>`
  }

  // private videoTemplateCb(file: any): string {
  //   const poster = file.poster ? `poster="${file.poster}"` : '';
  //   const mime = file.sourcemime ? ` type="${file.sourcemime}"` : '';
  //   const altSourceMime = file.altsourcemime ? ` type="${file.altsourcemime}"` : '' ;
  //   const altSource = file.altsource ? `<source src="${file.altsource}" ${altSourceMime} />\n` : '';

  //   return `<video width="${file.width}" height="${file.height}" ${poster} controls="controls">\n<source src="${file.source}" ${mime}/>\n${altSource}</video>`
  // }

  private filePickerCb(cb: any, value: any, meta: any): void {
    const input: HTMLInputElement = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*, audio/*, video/*');

    console.log('filePicker')

    input.onchange = function() {
      console.log('onchange')
      if (!(this instanceof HTMLInputElement)) return
      if (!this.files) return 
    
      const file: any = this.files[0]
      const reader = new FileReader()

      reader.onload = function () {
        console.log('reader onload')
        console.log(reader.result instanceof String)
        if (!reader.result) return
        if (reader.result instanceof ArrayBuffer) return

        var id = 'blobid' + (new Date()).getTime();
        console.log('id')
        var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
        console.log(blobCache)
        var base64 = reader.result.split(',')[1];
        var blobInfo = blobCache.create(id, file, base64);
        blobCache.add(blobInfo);

        cb(blobInfo.blobUri(), { title: file.name });
      };
      reader.readAsDataURL(file);
    };
    
    input.click();
  }
}
