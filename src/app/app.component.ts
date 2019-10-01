// import { Component, OnInit } from '@angular/core';
// import { Validators, FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit{
//   registerForm:FormGroup;
//   constructor(private fb:FormBuilder){}
//   ngOnInit(){
//     this.registerForm=this.fb.group({
//       firstName:['',Validators.required],
//       lastName:['',Validators.required],
//       email:['',[Validators.required,Validators.email]],
//       password:['',[Validators.required,Validators.minLength(6)]]
//     });
//   }
//   get f(){
//     return this.registerForm.controls;
//   }
//   onSubmit(){
//     if(this.registerForm.invalid){
//       return;
//     }
//     alert('success')
//     this.registerForm.reset();
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit {
    registerForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
        this.registerForm.reset();
    }
    
}
