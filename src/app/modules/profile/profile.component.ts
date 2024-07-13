import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(private http: HttpClient, private profileServices: ProfileService) { }

  changePicture(event: any) {
    const selectedFiles = event.target.files;

    if (selectedFiles) {
      const file: File | null = selectedFiles.item(0);
      if (file) {

        const formData = new FormData();
        formData.append('file', file, file.name);

        // this.uploadFile(formData);

        this.profileServices.uploadPhoto(formData).subscribe( (resp) => {
          console.log('Upload successful', resp);
      },
      error => {
        console.error('Upload failed', error);
      })
    }
  }
  }

}
