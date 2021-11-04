import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Store} from '@ngrx/store';
import {createCategory} from '../../+store/global/action'

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,private store:Store) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });    
  }

  get f() {
    return this.form.controls;
  }

  createCategory() {
    if (this.form.invalid) { return; }
    this.store.dispatch(createCategory(this.form.value));
    this.form.reset(); 
  }

}
