import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'UserDetails';
  status: boolean = false;
  constructor() { }


  clickEvent(){
      this.status = !this.status;       
  }
  ngOnInit() {
  }
}
