import React from 'react'
import FeatureHero from '../component/features/FeatureHero'
import TrackingSection from '../component/features/aiInsight/TrackingSection'
import AIInsightsSection from '../component/features/aiInsight/AIInsightsSection'
import AnalyticsSection from '../component/features/aiInsight/AnalyticsSection'
import BenefitsSection from '../component/features/aiInsight/BenefitsSection'
import AICTASection from '../component/features/aiInsight/AICTASection'

const AiInsightPage = () => {
  return (
    <>
      <FeatureHero
        text="Ai Insight"
        heading={
            <>
                AI Powered{" "}
                <span className="text-blue-600 dark:text-blue-400">Insight</span>
            </>
         }
      />
      <TrackingSection/>
      <AIInsightsSection/>
      <AnalyticsSection/>
      <BenefitsSection/>
      <AICTASection/>
    </>
  )
}

export default AiInsightPage
