import { useRouter } from "next/router"
import Hero from "@/components/sections/hero"
import LargeVideo from "@/components/sections/large-video"
import FeatureColumnsGroup from "@/components/sections/feature-columns-group"
import FeatureRowsGroup from "@/components/sections/feature-rows-group"
import BottomActions from "@/components/sections/bottom-actions"
import TestimonialsGroup from "@/components/sections/testimonials-group"
import RichText from "./sections/rich-text"
import Pricing from "./sections/pricing"
import LeadForm from "./sections/lead-form"
import Slideshow from "./sections/slideshow"
import Partners from "./sections/partners"
import Header from "./sections/header"
import LatestUpdates from "./sections/latest-updates"
import HomePageUpdates from "./sections/homepage-updates"
import Faqs from "./sections/faqs"
import Events from "./sections/events"
import TripleCard from "./sections/triple-card"

// Map Strapi sections to section components
const sectionComponents = {
  ComponentSectionsHero: Hero,
  ComponentSectionsLargeVideo: LargeVideo,
  ComponentSectionsFeatureColumnsGroup: FeatureColumnsGroup,
  ComponentSectionsFeatureRowsGroup: FeatureRowsGroup,
  ComponentSectionsBottomActions: BottomActions,
  ComponentSectionsTestimonialsGroup: TestimonialsGroup,
  ComponentSectionsRichText: RichText,
  ComponentSectionsPricing: Pricing,
  ComponentSectionsLeadForm: LeadForm,
  ComponentSectionsSlideshow: Slideshow,
  ComponentSectionsPartnersComponent: Partners,
  ComponentSectionsHeader: Header,
  ComponentSectionsEvents: Events,
  ComponentSectionsLatestUpdates: LatestUpdates,
  ComponentSectionsFaqs: Faqs,
  ComponentSectionsTripleCard: TripleCard,
}

// Display a section individually
const Section = ({ sectionData, pageContext }) => {
  // Prepare the component
  const SectionComponent = sectionComponents[sectionData.__typename]

  if (!SectionComponent) {
    return null
  }
  // Display the section
  return <SectionComponent data={sectionData} pageContext={pageContext} />
}

const PreviewModeBanner = () => {
  const router = useRouter()
  const exitURL = `/api/exit-preview?redirect=${encodeURIComponent(
    router.asPath
  )}`

  return (
    <div className="py-4 bg-red-600 text-red-100 font-semibold uppercase tracking-wide">
      <div className="container">
        Preview mode is on.{" "}
        <a
          className="underline"
          href={`/api/exit-preview?redirect=${router.asPath}`}
        >
          Turn off
        </a>
      </div>
    </div>
  )
}

// Display the list of sections
const Sections = ({ sections, preview, pageContext }) => {
  return (
    <div className="flex flex-col">
      {/* Show a banner if preview mode is on */}
      {preview && <PreviewModeBanner />}
      {/* Show the actual sections */}
      {sections.map((section) => (
        <Section
          sectionData={section}
          key={`${section.__typename}${section.id}`}
          pageContext={pageContext}
        />
      ))}
    </div>
  )
}

export default Sections
