import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userDataForm: FormGroup;  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userDataForm = this.formBuilder.group({
      userFirstName: [''], 
      lastFirstName: [''],
      userEmail: [''],
      userPhoneNumber: [''],
      userProfileImage: ['']
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.userDataForm.get('userFirstName').value);
    // this.userDataForm.setValue('userFirstName')
    this.userDataForm.controls['userFirstName'].setValue(this.userDataForm.get('userFirstName').value);
    console.log(this.userDataForm)

}
}
