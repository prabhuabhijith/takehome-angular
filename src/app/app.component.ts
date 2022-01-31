import { Component } from '@angular/core';
  
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    public categories = [{name: '', timestamp: 0, todo:[{}]}]
    public todoItems = [];
    public selectedCategory;
    public newTask;
    public newCategory;

    public addCategory() {
        if (this.newCategory == '') {
        }
        else {
            this.categories.push({name: this.newCategory, timestamp: new Date().getTime(), todo: [{}]})
            this.newCategory = '';
        }
    }


    public addToList() {
      if (this.newTask == '') {
      }
      else {
          this.selectedCategory.todo.push({name: this.newTask, completed: false});
          this.newTask = '';
      }
  }

  public deleteTask(index) {
      this.selectedCategory.todo.splice(index, 1);
  }

  public setCategory(category) {
    this.selectedCategory = this.categories.find((x) => x.timestamp === category.timestamp);
  }

  public completeTask(index){
    this.selectedCategory.todo[index].completed = !this.selectedCategory.todo[index].completed;
  }
}