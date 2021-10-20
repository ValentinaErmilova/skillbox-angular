export class Product {
  id: number = 0;
  availability: boolean = false;
  company: string = "";
  title: string = "";
  image: string = "";
  rating: ProductRating = new ProductRating();
  price: ProductPrice = new ProductPrice();
  badge: ProductBadge = new ProductBadge();
}

export class ProductRating {
  value: number = 0;
  reviews: number = 0;
}

export class ProductPrice {
  value: number = 0;
  discount?: number = undefined;
}

export class ProductBadge {
  color: string = "";
  text: string = "";
}
