import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BuyService } from '../../core/service/buy.service';
import {ILog} from '../../core/model/log';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { UserService } from '../../core/service/user.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  
  form:FormGroup;
  logs$:Observable<ILog[]>
  massage:string;
  authorities$: Observable<string[]>;


  constructor(private fb:FormBuilder, private buyService: BuyService, private userService:UserService) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      username:['',Validators.required],
      authority:['',[Validators.required]]
    })
    this.logs$= this.buyService.getLogs();
    this.authorities$= this.userService.getAuthorities(); 
    this.authorities$.subscribe(a=> console.log("AUTHORITIES",a))   
  }

  get f(){
    return this.form.controls;
  }

  seeStack(i:number){   
    this.logs$.subscribe(l=> new alert(l[i].stacktrace));   
  }

  selectAuthority(e){
    console.log("EVENT: ",e);
   console.log("TARGET",e.target.value);
  }

  changeAuthority(){
      // console.log("FORM VALUE", this.form.value);
       this.userService.updateAuthority(this.form.value).subscribe(()=> this.ngOnInit())
  }

}
