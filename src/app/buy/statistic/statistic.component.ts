import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BuyService } from '../../core/service/buy.service';
import {ILog} from '../../core/model/log';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  
  logs$:Observable<ILog[]>
  massage:string;


  constructor(private buyService: BuyService) { }

  ngOnInit(): void {
    this.logs$= this.buyService.getLogs();    
  }

  seeStack(i){   
    this.logs$.subscribe(l=> new alert(l[i].stacktrace));   
  }

}
