import { Home, Search, ShoppingCart, User, Heart } from "lucide-react";
import { Badge } from "./badge";

interface BottomNavProps {
  activeTab?: string;
  cartCount?: number;
  onTabChange?: (tab: string) => void;
}

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'search', icon: Search, label: 'Search' },
  { id: 'cart', icon: ShoppingCart, label: 'Cart' },
  { id: 'wishlist', icon: Heart, label: 'Wishlist' },
  { id: 'profile', icon: User, label: 'Profile' },
];

export const BottomNav = ({ activeTab = 'home', cartCount = 0, onTabChange }: BottomNavProps) => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-card border-t border-border shadow-elegant z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange?.(item.id)}
              className={`flex flex-col items-center justify-center p-2 min-w-[60px] transition-all duration-300 ${
                isActive 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className="relative">
                <IconComponent className={`w-5 h-5 ${isActive ? 'scale-110' : ''} transition-transform duration-300`} />
                {item.id === 'cart' && cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 bg-secondary text-xs">
                    {cartCount}
                  </Badge>
                )}
              </div>
              <span className={`text-xs mt-1 ${isActive ? 'font-medium' : ''} transition-all duration-300`}>
                {item.label}
              </span>
              {isActive && (
                <div className="w-4 h-0.5 bg-primary rounded-full mt-1 animate-slide-up" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};