import { Component} from '@angular/core';
import { UserComponent } from '../user/user.component';
import { CommentsComponent } from '../comments/comments.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [UserComponent,CommentsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  name = 'Marisol García';
  sendMessage = false;
  date = new Date();
  // date = 14;

  greet(){
    alert('Hola!!!');
  }
}
