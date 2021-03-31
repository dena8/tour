import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BuyService } from '../../core/service/buy.service';
import { ILog } from '../../core/model/log';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { UserService } from '../../core/service/user.service';
import { GalleryService } from '../../core/service/gallery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  form: FormGroup;
  logs$: Observable<ILog[]>
  massage: string;
  authorities$: Observable<string[]>;
  galleryForm: FormGroup;
  selectedFiles: any;


  constructor(private fb: FormBuilder,
    private buyService: BuyService,
    private userService: UserService,
    private galleryService: GalleryService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      authority: ['', [Validators.required]]
    })
    this.galleryForm = this.fb.group({
      images: [this.fb.array([])],
      description: ['', Validators.required]
    })
    console.log("FORM GALLERY", this.galleryForm.value);
    this.logs$ = this.buyService.getLogs();
    this.authorities$ = this.userService.getAuthorities();
    this.authorities$.subscribe(a => console.log("AUTHORITIES", a))
  }

  get f() {
    return this.form.controls;
  }

  get fg() {
    return this.galleryForm.controls;
  }

  seeStack(i: number) {
    this.logs$.subscribe(l => new alert(l[i].stacktrace));
  }

  changeAuthority() {
    this.userService.updateAuthority(this.form.value).subscribe(() => this.ngOnInit())
  }

  get images(): FormArray {
    return this.galleryForm.get('images') as FormArray;
  };

  onFileChange(event) {
    this.selectedFiles = event.target.files;
  }

  galleryCreate() {
    const formDate = new FormData();
    console.log("THIS FORM VALUE", this.galleryForm.value);
    for (const [k, v] of Object.entries(this.galleryForm.value)) {
      formDate.append(k, v as any);
    }
    for (var i = 0; i < this.selectedFiles.length; i++) {
      formDate.append("images", this.selectedFiles[i]);
    }

    this.galleryService.createGallery(formDate)
      .subscribe(() => this.router.navigate(['sample/gallery']));
  }

}
