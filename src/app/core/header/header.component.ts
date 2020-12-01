import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../constants/global-constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = GlobalConstants.isLogged

  constructor() { }

  ngOnInit(): void {
  }

}
