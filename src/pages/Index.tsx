import { useState } from "react";
import { MobileContainer } from "@/components/ui/mobile-container";
import { SplashScreen } from "@/components/ui/splash-screen";
import { Header } from "@/components/ui/header";
import { BannerCarousel } from "@/components/ui/banner-carousel";
import { CategoryGrid } from "@/components/ui/category-grid";
import { FlashSale } from "@/components/ui/flash-sale";
import { ProductGrid } from "@/components/ui/product-grid";
import { BottomNav } from "@/components/ui/bottom-nav";

const Index = () => {
  const [showSplash, setShowSplash] = useState(() => sessionStorage.getItem('splashDone') !== '1');
  const [activeTab, setActiveTab] = useState('home');
  const [cartCount] = useState(3); // Mock cart count

  if (showSplash) {
    return (
      <SplashScreen
        onComplete={() => {
          sessionStorage.setItem('splashDone', '1');
          setShowSplash(false);
        }}
      />
    );
  }

  return (
    <MobileContainer className="pb-20">
      <Header cartCount={cartCount} />
      
      <main className="animate-fade-in">
        <BannerCarousel />
        <CategoryGrid />
        <FlashSale />
        <ProductGrid />
      </main>

      <BottomNav 
        activeTab={activeTab} 
        cartCount={cartCount}
        onTabChange={setActiveTab}
      />
    </MobileContainer>
  );
};

export default Index;
