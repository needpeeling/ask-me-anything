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
  IonInput,
  IonSelect,
  IonSelectOption,
  IonTextarea
} from '@ionic/angular/standalone';
import { Category } from 'src/app/types/category';

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
    IonInput,
    IonSelect,
    IonSelectOption,
    ReactiveFormsModule,
    FormsModule,
    IonTextarea
  ]
})
export class CreatePostComponent  implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    tags: new FormControl(''),
    categories: new FormControl(),
  });
  isPageReady: WritableSignal<boolean> = signal(false);
  categories: Category[] = [
    {
      name: 'ama',
      label: 'Ask Me Anything'
    },
    {
      name: 'coding',
      label: 'Coding'
    },
    {
      name: 'cooking',
      label: 'Cooking'
    },
    {
      name: 'job',
      label: 'Job'
    },
    {
      name: 'lifestyle',
      label: 'Lifestyle'
    }
  ];

  constructor(
    private modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.isPageReady.set(true);
  }

  cancel(): Promise<boolean> {
    return this.modalController.dismiss(null, 'cancel');
  }

  confirm(): Promise<boolean> {
    return this.modalController.dismiss(this.form.value, 'confirm');
  }
}
