import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

import {TourService} from '../tour.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private tourService:TourService,private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      startAndEnd: ['', Validators.required],
      season: ['', [Validators.required]],      
      numberDaysAndNights: ['', [Validators.required]],
      difficulty: ['', [Validators.required]],
      image:['',Validators.required]
    })
  }

  get f() {
    return this.form.controls;
  }

  create() {
   const token= localStorage.getItem('token')
   console.log(token);
    this.tourService.postCreate(this.form.value).subscribe(data=>{
      console.log(data);
       this.router.navigate(['home'])
    },err=>{
      console.log(err);
    })
  }

}
