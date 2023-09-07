import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
// import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();
  categories: string[] | undefined;
  categoriesSubscription: Subscription | undefined;

  constructor() {
    this.categories = ['shoes', 'sport']
  }

  ngOnInit(): void {
    // // this.categoriesSubscription = this.storeService
    //   .getAllCategories()
    //   .subscribe((response: Array<string>) => {
    //     this.categories = response;
    //   });
  }

  onShowCategory(category: string): void {
    // console.log("filters component showCategory", category)
    this.showCategory.next(category);
  }
}
