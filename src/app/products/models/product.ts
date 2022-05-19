export class Model {
  id !:number;
}

export class Product extends Model{
  ProductName!: string;
  ProductDescription!: string;
  ProductPrice!: number;

  constructor(ProductName: string, ProductDescription: string, ProductPrice: number) {
    super();
    this.ProductName = ProductName;
    this.ProductDescription = ProductDescription;
    this.ProductPrice = ProductPrice;
  }
}



