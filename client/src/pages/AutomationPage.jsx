import React from 'react'
import FeatureHero from '../component/features/FeatureHero'
import AutomationOverview from '../component/features/automation/AutomationOverview'
import HowItWorks from '../component/features/automation/HowItWorks'
import SmartAutomation from '../component/features/automation/SmartAutomation'
import AutomationUseCases from '../component/features/automation/AutomationUseCases'
import AutomationBenefits from '../component/features/automation/AutomationBenefits'
import AutomationCTA from '../component/features/automation/AutomationCTA'

const AutomationPage = () => {
  return (
    <>
        <FeatureHero
         text="Automation"
         heading={
            <>
                Workflow{" "}
                <span className="text-blue-600 dark:text-blue-400">Automation</span>
            </>
        }
        />
        <AutomationOverview/>
        <HowItWorks/>
        <SmartAutomation/>
        <AutomationUseCases/>
        <AutomationBenefits/>
        <AutomationCTA/>
    </>
  )
}

export default AutomationPage