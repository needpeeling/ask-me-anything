import { Component, OnInit, signal, WritableSignal } from '@angular/core';
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
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    tags: new FormControl(''),
    categories: new FormControl(),
  });
  isPageReady: WritableSignal<boolean> = signal(false);
  postComment!: string;
  postId!: number;
  color!: Color;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) {
    this.postComment = this.navParams.get('postContent');
    this.postId = this.navParams.get('postId');
    this.color = this.navParams.get('color');
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    // this.getUser()
    // .pipe(
    //   tak
    // )
    // this.isPageReady.set(true);
  }

  // getUser(): ;

  cancel(): Promise<boolean> {
    return this.modalController.dismiss(null, 'cancel');
  }

  confirm(): Promise<boolean> {
    return this.modalController.dismiss(this.form.value, 'confirm');
  }
}
