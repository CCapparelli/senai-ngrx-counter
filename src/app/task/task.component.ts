import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task';
import { CommonModule } from '@angular/common';
import { MatCard } from '@angular/material/card';


@Component({
  selector: 'app-task',
  imports:[CommonModule, MatCard],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();
}
