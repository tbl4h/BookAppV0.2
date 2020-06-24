import { ForkService } from './../fork.service';
import { Fork } from './../fork.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fork-list',
  templateUrl: './fork-list.component.html',
  styleUrls: ['./fork-list.component.css']
})
export class ForkListComponent implements OnInit {

  forks: Fork[];

  constructor(private forkService: ForkService) { }

  ngOnInit() {
    this.forkService.getForks().subscribe(data => {
      this.forks = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as object
        } as Fork;
      });
    });
  }

  create(fork: Fork) {
    this.forkService.createFork(fork);
  }

  update(fork: Fork) {
    this.forkService.updateFork(fork);
  }

  delete(id: string) {
    this.forkService.deleteFork(id);
  }

}
