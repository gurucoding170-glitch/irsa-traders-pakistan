import { Search, ShoppingCart, User, Bell } from "lucide-react";
import { Input } from "./input";
import { Button } from "./button";
import { Badge } from "./badge";
import { Link, useNavigate } from "react-router-dom";

interface HeaderProps {
  cartCount?: number;
}

export const Header = ({ cartCount = 0 }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-50 bg-gradient-primary shadow-elegant">
      <div className="flex items-center gap-3 p-4">
        {/* Search Bar */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Search products..." 
            className="pl-10 bg-white/90 border-none shadow-sm"
            onFocus={() => navigate('/search')}
            readOnly
          />
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 relative">
            <Bell className="w-5 h-5" />
            <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 bg-secondary text-xs">
              3
            </Badge>
          </Button>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-secondary text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </Link>
          
          <Link to="/auth">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <User className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};