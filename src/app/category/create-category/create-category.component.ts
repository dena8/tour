import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../core/service/category.service'

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
    })
  }

  get f() {
    return this.form.controls;
  }

  createCategory() {
    if (this.form.invalid) { return; }
    this.categoryService.createCategory(this.form.value).subscribe(data => {
      this.form.reset()
    }, err => {
      console.log("ERROR", err);
    })
  }

}
