import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ReceiptSection from "@/components/ReceiptSection";
import DashboardSection from "@/components/DashboardSection";
import ComparisonSection from "@/components/ComparisonSection";
import ExodusSection from "@/components/ExodusSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  useEffect(() => {
    document.title = "Pritzker's Illinois — They Called It Balanced";
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", "Pritzker's Illinois");
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", "Pritzker's Illinois");
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", "They called it balanced. They forgot to show you the tab. An Illinois fiscal investigation.");
    document.querySelector('meta[name="description"]')?.setAttribute("content", "They called it balanced. They forgot to show you the tab. An Illinois fiscal investigation.");
  }, []);

  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <ReceiptSection />
      <DashboardSection />
      <ComparisonSection />
      <ExodusSection />
      <FooterSection />
    </main>
  );
};

export default Index;
