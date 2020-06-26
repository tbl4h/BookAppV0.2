import { Fork } from './../fork.model';
import { ForkService } from './../fork.service';
import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-betting-form',
  templateUrl: './create-betting-form.component.html',
  styleUrls: ['./create-betting-form.component.css']
})
export class CreateBettingFormComponent implements OnInit, OnChanges {

  betingForkForm: FormGroup;
  startingValue: FormControl;
  expectedValue: FormControl;
  minProbability: FormControl;
  minProfit: FormControl;
  formAdvanced: FormControl;
  lp = 0;

  constructor(private forkService: ForkService) { }


  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
    this.onSubscribe();
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  createFormControls() {
    this.startingValue = new FormControl('Starting value',
      [Validators.required, Validators.min(2), Validators.max(100000)]);
    this.expectedValue = new FormControl('Expected value',
      [Validators.required, Validators.min(this.startingValue.value), Validators.max(100000)]);
    this.formAdvanced = new FormControl(false);
    this.minProbability = new FormControl(null,
      [Validators.min(1), Validators.max(100)]);
    this.minProfit = new FormControl(null,
      [Validators.min(1), Validators.max(100)]);
  }

  createForm() {
    this.betingForkForm = new FormGroup({
      requiredField: new FormGroup({
        startingValue: this.startingValue,
        expectedValue: this.expectedValue
      }),
      formAdvanced: this.formAdvanced,
      advancedOptions: new FormGroup({
        minProbability: this.minProbability,
        minProfit: this.minProfit
      }),
    });
    this.betingForkForm.markAsPristine();
  }

  onSubscribe() {
    this.startingValue.valueChanges.subscribe(changed => {
      if (changed) {
        this.betingForkForm.get('requiredField').get('expectedValue').setValidators(
          [Validators.required, Validators.min(this.startingValue.value), Validators.max(100000)]);
        this.betingForkForm.get('requiredField').get('expectedValue').updateValueAndValidity();
      }
    });
    this.expectedValue.valueChanges.subscribe(changed => {
      if (changed) {
        this.betingForkForm.updateValueAndValidity();
      }
    });
    this.formAdvanced.valueChanges.subscribe(checked => {
      if (checked) {
        this.betingForkForm.updateValueAndValidity();
      }
    });
  }

  addFork() {
    let tmpFork: Fork;
    tmpFork = new Fork(
      this.forkService.getId(), this.startingValue.value, this.expectedValue.value, this.minProbability.value, this.minProfit.value
      );
    this.forkService.createFork(tmpFork);
  }
}
