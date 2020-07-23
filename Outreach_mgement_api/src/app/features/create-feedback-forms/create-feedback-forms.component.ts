import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-feedback-forms',
  templateUrl: './create-feedback-forms.component.html',
  styleUrls: ['./create-feedback-forms.component.scss']
})
export class CreateFeedbackFormsComponent implements OnInit {

  title = 'my-app';
  addForm: FormGroup;

  rows: FormArray;
  itemForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.addForm = this.fb.group({
      items: [null, Validators.required],
      items_value: ['no', Validators.required]
    });

    this.rows = this.fb.array([]);

  }

  ngOnInit() {
    this.addForm.addControl('rows', this.rows);
  }

  onAddRow() {
    this.rows.push(this.createItemFormGroup());
  }

  onRemoveRow(rowIndex: number) {
    this.rows.removeAt(rowIndex);
  }

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      name: null,
      description: null
    });
  }
}


