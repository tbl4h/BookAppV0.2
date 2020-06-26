import { AlertService } from 'src/app/_services/alert.service';
import { AlertComponent } from './../alert/alert.component';
import { ForkService } from '../../_services/fork.service';
import { Fork } from '../../_models/fork.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fork-list',
  templateUrl: './fork-list.component.html',
  styleUrls: ['./fork-list.component.css'],
  providers: [AlertService]
})
export class ForkListComponent implements OnInit {

  forks: Fork[];

  constructor(private forkService: ForkService, private alertSevice: AlertService) { }

  ngOnInit() {
    this.forkService.getForks().subscribe(data => {
      this.forks = data.map(e => {
        console.log(e.payload.doc.id + '\n Data: ');
        console.log(e.payload.doc.data() as Fork);
        let tmpFork = {
          ...(e.payload.doc.data() as object),
        } as Fork;
        tmpFork.id = e.payload.doc.id;
        return tmpFork;
      });
    });
  }

  create(fork: Fork) {
    this.forkService.createFork(fork);
  }

  update(fork: Fork) {
    console.log(fork);
  }

  delete(id: string) {
    this.forkService.deleteFork(id);
    this.alertSevice.success('Fork ' + id + 'was deleted !', { autoClose: true });
  }

}
