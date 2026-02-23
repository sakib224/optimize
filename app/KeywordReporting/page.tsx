import AdvancedMetrics from "@/components/KeywordReporting/AdvancedMetrics";
import OptimizationEngine from "@/components/KeywordReporting/OptimizationEngine";
import PerformanceTracking from "@/components/KeywordReporting/PerformanceTracking";


export default function KeywordReportingPage() {
  return (
    <div>
      <PerformanceTracking />
      <OptimizationEngine />
      <AdvancedMetrics />
    </div>
  );
}
