import { Component, OnInit } from '@angular/core';
import { QuorumService } from '../services/quorum.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Quorum } from '../models/quorum';

@Component({
  selector: 'app-quorum',
  templateUrl: './quorum.page.html',
  styleUrls: ['./quorum.page.scss'],
})
export class QuorumPage implements OnInit {

  loading: boolean = false;
  saveError: boolean = false;
  quorum: Quorum;
  quorums: Quorum[];

  form: FormGroup;

  constructor(
    private quorumService: QuorumService
  ) {
    this.form = new FormGroup({
      apartment: new FormControl('', [Validators.required])
    })
    this.quorum = new Quorum;
    this.quorums = new Array<Quorum>;
  }

  ngOnInit(): void {
    this.getAllData();
  }

  async register() {
    if (this.form.valid) {
      this.loading = true;
      this.quorum.apartment = this.form.get('apartment')?.value;
      const response = this.quorumService.createRegister(this.quorum);
      console.log(response);
    } else {
      this.form.markAllAsTouched();
    }

    this.loading = false;
  }

  async getAllData() {
    await this.quorumService.allQuorum().subscribe(res => {
      this.quorums = res;
    })
  }

}
