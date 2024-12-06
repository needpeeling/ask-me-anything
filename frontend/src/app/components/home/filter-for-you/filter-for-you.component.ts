import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
  IonContent,
  IonModal,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';
import { testCategories } from 'src/app/data/test/categories';
import { Category } from 'src/app/types/category';
import { Item, TypeaheadComponent } from '../../templates/typeahead/typeahead.component';
import { testFields } from 'src/app/data/test/fields';
import { Field } from 'src/app/types/field';
import { Country } from 'src/app/types/country';
import { testCountries } from 'src/app/data/test/countries';

@Component({
  selector: 'app-filter-for-you',
  templateUrl: './filter-for-you.component.html',
  styleUrls: ['./filter-for-you.component.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonItem,
    IonList,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonButtons,
    IonContent,
    ReactiveFormsModule,
    FormsModule,
    TypeaheadComponent
  ]
})
export class FilterForYouComponent  implements OnInit {
  isPageReady: WritableSignal<boolean> = signal(false);

  categories: Category[] = testCategories;
  categoryItems: Item[] = this.categories.map(category => ({ value: category.name, text: category.label }));
  selectedCategories: string[] = [];
  selectedCategoriesText = 'All';

  fields: Field[] = testFields;
  fieldItems: Item[] = this.fields.map(field => ({ value: field.name, text: field.label }));
  selectedFields: string[] = [];
  selectedFieldsText = 'All';

  countries: Country[] = testCountries;
  countryItems: Item[] = this.countries.map(country => ({ value: country.name, text: country.label }));
  selectedCountries: string[] = [];
  selectedCountriesText = 'All';

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
    const categories = this.categories.filter(category => this.selectedCategories.includes(category.name));
    const fields = this.fields.filter(field => this.selectedFields.includes(field.name));
    const countries = this.countries.filter(country => this.selectedCountries.includes(country.name));
    return this.modalController.dismiss({ categories, fields, countries }, 'confirm');
  }

  private formatData(data: string[], items: Item[]): string {
    if (data.length === 1) {
      const item = items.find((item) => item.value === data[0]);
      return item?.text || 'unknown';
    }
    return `${data.length} items`;
  }

  categoriesSelectionChanged(categories: string[]) {
    this.selectedCategories = categories;
    this.selectedCategoriesText = this.formatData(this.selectedCategories, this.categoryItems);
  }

  fieldsSelectionChanged(fields: string[]) {
    this.selectedFields = fields;
    this.selectedFieldsText = this.formatData(this.selectedFields, this.fieldItems);
  }

  countriesSelectionChanged(countries: string[]) {
    this.selectedCountries = countries;
    this.selectedCountriesText = this.formatData(this.selectedCountries, this.countryItems);
  }
}