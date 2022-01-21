export class ProductCatalog {
  items?: Array<Product>;
  meta: any
}

export class Product {
  id: number = 0;
  availability: boolean = false;
  company: string = "";
  title: string = "";
  image: string = "";
  rating: ProductRating = new ProductRating();
  price: number = 0;
  badge: ProductBadge = new ProductBadge();
}

export class ProductRating {
  value: number = 0;
  reviews: number = 0;
}

export class ProductBadge {
  color: string = "";
  text: string = "";
}
