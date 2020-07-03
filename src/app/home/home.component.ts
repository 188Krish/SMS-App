import { UserdetailService } from './../service/userdetail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  data: any = [];
  studentdata: any = [];

  constructor(private userinfoService: UserdetailService) { }

  ngOnInit(): void {
    this.userinfoService.getProducts().subscribe((res) => {
      this.data = res;
      this.studentdata = this.data[0].studentdata;
      console.log(this.data[0].studentdata);
    });
  }

}
