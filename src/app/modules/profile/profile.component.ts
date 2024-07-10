import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(private http: HttpClient) { }

  changePicture(event: any) {
    const selectedFiles = event.target.files;

    if (selectedFiles) {
      const file: File | null = selectedFiles.item(0);
      if (file) {

        const formData = new FormData();
        formData.append('file', file, file.name);

        this.uploadFile(formData);
      }
    }
  }

  uploadFile(formData: FormData) {
    this.http.post('http://localhost:8080/upload', formData).subscribe(
      response => {
        console.log('Upload successful', response);
      },
      error => {
        console.error('Upload failed', error);
      }
    );
  }

}
