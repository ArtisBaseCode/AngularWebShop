import {
	Component,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
} from "@angular/core";
import { Subscription } from "rxjs";
import { Product } from "src/app/models/product.model";
import { StoreService } from "src/app/services/store.service";
// import { StoreService } from 'src/app/services/store.service';

@Component({
	selector: "app-filters",
	templateUrl: "./filters.component.html",
})
export class FiltersComponent implements OnInit, OnDestroy {
	@Output() showCategory = new EventEmitter<string>();
	categories: string[] | undefined;
	categoriesSubscription: Subscription | undefined;

	constructor(private storeService: StoreService) {
		this.categories = ["shoes", "sport"];
	}

	ngOnInit(): void {
		this.categoriesSubscription = this.storeService
			.getAllCategories()
			.subscribe((response) => {
				this.categories = response;
			});
	}
	ngOnDestroy(): void {
		if (this.categoriesSubscription) {
			this.categoriesSubscription.unsubscribe();
		}
	}
	onShowCategory(category: string): void {
		// console.log("filters component showCategory", category)
		this.showCategory.next(category);
	}
}
