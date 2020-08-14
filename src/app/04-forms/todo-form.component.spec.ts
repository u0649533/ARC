import { TodoFormComponent } from './todo-form.component'; 
import {FormBuilder, Validators} from '@angular/forms';

describe('TodoFormComponent', () =>{

  var component: TodoFormComponent;
  beforeEach(()=>{
    component = new TodoFormComponent(new FormBuilder());
  })
  it('should create a form with 2 controls', () => {
    expect(component.form.contains('name')).toBe(true);
    expect(component.form.contains('email')).toBe(true);
  });

  it('should make the name control required', () => {
    let control = component.form.get('name');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
});