import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  @Input() searchOptions: any[];
  @Output() searchRequest: EventEmitter<any> = new EventEmitter();

  searchForm: FormGroup ;
  itemArray: FormArray;

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      searchOptions: this.formBuilder.array([])
    });
  }

  ngOnInit() {
    this.itemArray = this.searchForm.get('searchOptions') as FormArray;
    for (const searchOption of this.searchOptions) {
      this.itemArray.push(this.formItem(searchOption));
    }
  }

  formItem(item): FormGroup {
    if (item.type === 'NUMBER') {
      return this.formBuilder.group({
        label: [item.label],
        type: [item.type],
        value: [item.value, Validators.pattern('^[0-9]*')],
        fieldName: [item.fieldName],
        options: [item.options]
      });
    } else {
      return this.formBuilder.group({
        label: [item.label],
        type: [item.type],
        value: [item.value],
        fieldName: [item.fieldName],
        options: [item.options]
      });
    }

  }

  search() {
    if (this.searchForm.valid) {
      this.searchRequest.emit(this.searchForm.value);
    }
  }


}
