import React from 'react'
import FeatureHero from '../component/features/FeatureHero'
import ProblemSolution from '../component/features/callTracking/ProblemSolution'
import CallAttribution from '../component/features/callTracking/CallAttribution'
import DynamicNumberInsertion from '../component/features/callTracking/DynamicNumberInsertion'
import CallAnalytics from '../component/features/callTracking/CallAnalytics'
import CallIntelligence from '../component/features/callTracking/CallIntelligence'
import Features from '../component/features/callTracking/Features'
import CallRouting from '../component/features/callTracking/CallRouting'
import Integrations from '../component/features/callTracking/Integrations'
import BusinessOutcomes from '../component/features/callTracking/BusinessOutcomes'
import FinalCTA from '../component/features/callTracking/FinalCTA'

const CallTrackingPage = () => {
  return (
    <>
        <FeatureHero text="Call Tracking"
         heading={
            <>
                Call Tracking {" "}
                <span className="text-blue-600 dark:text-blue-400">Software</span>
            </>
         }
        />
        <ProblemSolution/>
        <CallAttribution/>
        <DynamicNumberInsertion/>
        <CallAnalytics/>
        <CallIntelligence/>
        <Features/>
        <CallRouting/>
        <Integrations/>
        <BusinessOutcomes/>
        <FinalCTA/>
    </>
  )
}

export default CallTrackingPage