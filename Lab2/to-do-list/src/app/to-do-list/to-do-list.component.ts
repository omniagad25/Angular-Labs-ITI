import { Component,Input, EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
 
  @Input() listTask: any;
  @Output() sendToParent = new EventEmitter<string>();

  deleteTask(task: string) {
    this.sendToParent.emit(task);
  }

  toggleChecked(task: any) {
    task.checked = !task.checked;
  }
}
