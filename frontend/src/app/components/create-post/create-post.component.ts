import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
  IonContent,
  IonItem,
  IonInput
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonButtons,
    IonContent,
    IonItem,
    IonInput
  ]
})
export class CreatePostComponent  implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    tags: new FormControl('')
  });

  constructor(
    private modalController: ModalController
  ) {}

  ngOnInit() {
  }
  cancel() {
    return this.modalController.dismiss(null, 'cancel');
  }

  confirm() {
    // return this.modalController.dismiss(this.name, 'confirm');
  }

}
