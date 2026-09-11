import aboutImg1 from '../assets/images/aboutImg1.jpeg'
import aboutImg2 from '../assets/images/aboutImg2.jpeg'
import aboutImg3 from '../assets/images/aboutImg3.jpeg'
import Title from '../component/ui/Title'

export const aboutCardData = [
     {
    id: 1,
    imageSrc: aboutImg1,
    category: "Tracking",
    title: "Track Call",
    linkTo: "/features/call-tracking"
  },
  {
    id: 2,
    imageSrc: aboutImg2,
    category: "AI",
    title: "AI-Powered Insights",
    linkTo: "/features/ai-insights",
  },
  {
    id: 3,
    imageSrc: aboutImg3,
    category: "Performance",
    title: "Workflow Automation",
    linkTo: "/features/automation",
  },
]

{/* <Route path="/features/call-tracking" element={<CallTracking />} />
<Route path="/features/ai-insights" element={<AIInsights />} />
<Route path="/features/automation" element={<WorkflowAutomation />} /> */}