import HeroSection from "@/components/HeroSection";
import ReceiptSection from "@/components/ReceiptSection";
import DashboardSection from "@/components/DashboardSection";
import ComparisonSection from "@/components/ComparisonSection";
import ExodusSection from "@/components/ExodusSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
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
