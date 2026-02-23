import Competetive from "@/components/trendAnalysisSection/Competetive";
import TrendAnalysisBenner from "@/components/trendAnalysisSection/TrendAnalysisBenner";
import TrendDetection from "@/components/trendAnalysisSection/TrendDetection";

export default function TrendAnalysisPage() {
  return (
    <div>
      <TrendAnalysisBenner />
      <TrendDetection />
      <Competetive />
    </div>
  );
}
