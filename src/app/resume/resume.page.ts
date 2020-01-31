import { Component, OnInit } from '@angular/core';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Base64 } from '@ionic-native/base64/ngx';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
})
export class ResumePage {
  returnpath = '';
  constructor( public filePath: FilePath, public fileChooser: FileChooser, private base64: Base64) {}
  Pickfile() {
    this.fileChooser.open().then((fileuri) => {
      this.filePath.resolveNativePath(fileuri).then((nativepath) => {
      this.base64.encodeFile(nativepath).then((base64string) => {
        alert(base64string);
    })
  })
  })


}
}

