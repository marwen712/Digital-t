import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  constructor( private service:OrderDetailsService) { }
  deviceData:any;

  ngOnInit(): void {
    this.deviceData =this.service.deviceDetails;
  }

}
