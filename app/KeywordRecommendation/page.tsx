import IntelligentKeyword from "@/components/KeywordRecommendation/IntelligentKeyword";
import OptimizeContent from "@/components/KeywordRecommendation/OptimizeContent";
import RealTimeInsigts from "@/components/KeywordRecommendation/RealTimeInsigts";


export default function KeywordRecommendationPage() {
  return (
    <div>
      <IntelligentKeyword />
      <RealTimeInsigts />
      <OptimizeContent />
    </div>
  );
}
