import { Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "./button";
import { Badge } from "./badge";

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 2999,
    originalPrice: 4999,
    rating: 4.5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&crop=center",
    discount: 40,
    isWishlisted: false
  },
  {
    id: 2,
    name: "Cotton T-Shirt Pack of 3",
    price: 1599,
    originalPrice: 2499,
    rating: 4.2,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop&crop=center",
    discount: 36,
    isWishlisted: true
  },
  {
    id: 3,
    name: "Smart Fitness Tracker",
    price: 3499,
    originalPrice: 5999,
    rating: 4.7,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=300&h=300&fit=crop&crop=center",
    discount: 42,
    isWishlisted: false
  },
  {
    id: 4,
    name: "Premium Coffee Beans 1kg",
    price: 899,
    originalPrice: 1299,
    rating: 4.3,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop&crop=center",
    discount: 31,
    isWishlisted: false
  }
];

export const ProductGrid = () => {
  return (
    <div className="px-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">Recommended for You</h2>
        <Button variant="ghost" className="text-primary text-sm">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {products.map((product) => (
          <div key={product.id} className="product-card p-3 group">
            <div className="relative mb-3">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-32 object-cover rounded-lg"
              />
              
              {product.discount && (
                <Badge className="absolute top-2 left-2 bg-secondary text-white text-xs">
                  -{product.discount}%
                </Badge>
              )}
              
              <Button
                variant="ghost"
                size="icon"
                className={`absolute top-2 right-2 w-8 h-8 ${
                  product.isWishlisted 
                    ? 'text-secondary bg-white shadow-sm' 
                    : 'text-muted-foreground bg-white/80 hover:bg-white'
                }`}
              >
                <Heart className={`w-4 h-4 ${product.isWishlisted ? 'fill-current' : ''}`} />
              </Button>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-sm text-foreground line-clamp-2 leading-tight">
                {product.name}
              </h3>
              
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-warning text-warning" />
                <span className="text-xs text-muted-foreground">
                  {product.rating} ({product.reviews})
                </span>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="price-text text-base">
                    Rs. {product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-muted-foreground text-xs line-through">
                      Rs. {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>

              <Button 
                size="sm" 
                className="w-full bg-gradient-primary hover:bg-primary/90 text-white shadow-sm group-hover:shadow-glow transition-all duration-300"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};