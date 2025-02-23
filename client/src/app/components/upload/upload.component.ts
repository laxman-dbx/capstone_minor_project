import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { DropfileinputComponent } from './dropfileinput/dropfileinput.component';

interface FileEvent {
  files: File[];
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  imports:[CommonModule,DropfileinputComponent]
})
export class UploadComponent {

  onFileChange(event: FileEvent) {
    console.log(event.files);
  }

}
