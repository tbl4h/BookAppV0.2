import { AlertService } from 'src/app/_services/alert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BookApp';

  constructor(public alertService: AlertService) {

  }

  ngOnInit(): void {
    this.alertService.onAlert();
  }

}
