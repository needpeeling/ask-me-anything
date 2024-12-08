import { Component, OnInit, signal, ViewChild, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
  IonContent,
  IonTextarea,
  NavParams,
  IonCheckbox
} from '@ionic/angular/standalone';
import { finalize } from 'rxjs';
import { UserLogicService } from 'src/app/services/logic/user-logic.service';
import { Color } from 'src/app/types/color';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  standalone: true,
  imports: [
    IonCheckbox, 
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonButtons,
    IonContent,
    ReactiveFormsModule,
    FormsModule,
    IonTextarea
  ]
})
export class CommentComponent  implements OnInit {
  @ViewChild('contentTextarea', {static: false}) contentTextarea!: { setFocus: () => void; };

  isPageReady: WritableSignal<boolean> = signal(false);
  postComment!: string;
  postId!: number;
  color!: Color;
  form: FormGroup = new FormGroup({
    anonymous: new FormControl(),
    content: new FormControl(''),
  });

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private userLogicService: UserLogicService
  ) {
    this.postComment = this.navParams.get('postContent');
    this.postId = this.navParams.get('postId');
    this.color = this.navParams.get('color');
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.userLogicService.getUser()
    .subscribe({
      next: (user) => {
        this.form.get('anonymous')?.patchValue(user.anonymous);
        this.isPageReady.set(true);
        this.setFocusOnContent();
      },
      error: (error) => console.error(error)
    })
  }

  setFocusOnContent(): void {
    setTimeout(() => this.contentTextarea.setFocus(), 0);
  }

  cancel(): Promise<boolean> {
    return this.modalController.dismiss(null, 'cancel');
  }

  confirm(): Promise<boolean> {
    return this.modalController.dismiss(this.form.value, 'confirm');
  }
}
