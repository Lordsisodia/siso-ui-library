/**
 * Generic Product Type
 * Adapted from car.ts to be universal for any rental product
 */

export interface ProductSpec {
  [key: string]: string | number;
}

export interface Product {
  id: string;
  name: string;
  brand?: string;
  image: string;
  dailyRate: number;
  category: string;
  description?: string;
  specs?: ProductSpec;
  available?: boolean;
  featured?: boolean;
  popular?: boolean;
}

// Bike-specific type example
export interface BikeProduct extends Product {
  specs?: {
    type?: string;
    gears?: number;
    frameSize?: string;
    weight?: number;
    suspension?: string;
    brakes?: string;
  };
}

// Car-specific type (original)
export interface CarProduct extends Product {
  specs?: {
    seats?: number;
    doors?: number;
    transmission?: string;
    engine?: string;
    speed?: number;
  };
}

// Equipment-specific type example
export interface EquipmentProduct extends Product {
  specs?: {
    power?: string;
    capacity?: string;
    dimensions?: string;
    weight?: number;
  };
}

export default Product;
