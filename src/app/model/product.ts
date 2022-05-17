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

  /**
  constructor(
    public id: number,
    public productName: string,
    public productDescription: string,
    public productPrice: number
  ) { }

  getProductName() : string {
    return this.productName;
  }

  setProductName(productName : string) : void {
    this.productName = productName;
  }

  getProductDescription() : string {
    return this.productDescription;
  }

  setProductDescription(productDescription : string) : void {
    this.productDescription = productDescription;
  }

  getProductPrice() : number {
    return this.productPrice;
  }

  setProductPrice(productPrice : number) : void {
    this.productPrice = productPrice;
  }
  */



