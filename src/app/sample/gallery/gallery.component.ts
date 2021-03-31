import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {IGallery} from '../../core/model/gallery';
import {GalleryService} from '../../core/service/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  gallery$:Observable<IGallery>;

  constructor(private galleryService:GalleryService) { }

  ngOnInit(): void {
    this.gallery$ = this.galleryService.getGallery();
    
  }

}
