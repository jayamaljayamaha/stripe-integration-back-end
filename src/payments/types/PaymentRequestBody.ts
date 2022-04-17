import { Product } from './Product';

export interface PaymentRequestBody {
  products: Product[];
  currency: string;
}
