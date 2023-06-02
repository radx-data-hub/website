import { getPageData } from "utils/api"
import { getGlobalData } from "utils/api"
import Layout from "@/components/layout"
import Seo from "@/components/elements/seo"
import { useRouter } from "next/router"
import Markdown from "react-markdown"
import { NihCard } from "../../components/nih-card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faRightToBracket as LearnMoreIcon,
  faKey as AccessIcon
} from "@fortawesome/free-solid-svg-icons"
import { ListGroup } from 'react-bootstrap'
import CustomLink from '../../components/elements/custom-link'

export default function LatestUpdatePage({ sections, metadata, global }) {
  // Get the path to determine what content to show on the dynamic page
  // We are using the title of the Latest Update to create the path for the page
  const router = useRouter()
  // We are removing /latest-updates/ from the path name and just keeping the title
  const pagePath = router.asPath.slice(16)

  // Merge default site SEO settings with page specific SEO settings
  if (metadata.shareImage?.data == null) {
    delete metadata.shareImage
  }
  const metadataWithDefaults = {
    ...global.attributes.metadata,
    ...metadata,
  }

  // Get the correct update by matching the path to the title of the update
  const updates = sections.filter((section) => {
    return section.__typename === "ComponentSectionsLatestUpdates"
  })

  let latestUpdate = updates[0].updateInfo.find(
    (update) => update.title.replace(/\s/g, "") === pagePath
  )

  let d = new Date(latestUpdate.publishedDate)

  return (
    <Layout global={global}>
      {/* Add meta tags for SEO*/}
      <Seo metadata={metadataWithDefaults} />
      {/* Display content sections */}

      <section className="container mt-6">
        <div style={{ display: 'flex', gap: '2rem' }}>
          <NihCard title="This is Test Card #1" seamlessHeader>
            Commodo in velit adipisicing cupidatat Lorem mollit excepteur.
            Qui id sunt consectetur exercitation excepteur velit dolore ad
            velit cupidatat eu eiusmod. Incididunt nisi proident veniam nisi.
            Quis eiusmod eu nulla magna sunt dolor ex nostrud nostrud nisi
            do est ullamco id.
          </NihCard>
          <NihCard
            title="This is Test Card #2"
            titleIcon={<FontAwesomeIcon icon={AccessIcon} />}
            seamlessHeader
          >
            Commodo in velit adipisicing cupidatat Lorem mollit excepteur.
            Qui id sunt consectetur exercitation excepteur velit dolore ad
            velit cupidatat eu eiusmod. Incididunt nisi proident veniam nisi.
            Quis eiusmod eu nulla magna sunt dolor ex nostrud nostrud nisi
            do est ullamco id.
          </NihCard>
          <NihCard
            title="This is Test Card #3"
            titleIcon={ <FontAwesomeIcon icon={LearnMoreIcon} width="6x" /> }
            titleUrl="https://example.com/"
          >
            Commodo in velit adipisicing cupidatat Lorem mollit excepteur.
            Qui id sunt consectetur exercitation excepteur velit dolore ad
            velit cupidatat eu eiusmod. Incididunt nisi proident veniam nisi.
            Quis eiusmod eu nulla magna sunt dolor ex nostrud nostrud nisi
            do est ullamco id.
          </NihCard>
        </div>
        
        <br />
        <br />

        <NihCard title="Triple-wide Card" style={{ width: '100%'}}>
          <ListGroup horizontal>
            <div style={{ flex: 1, padding: '0 0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CustomLink link={{ url: "/explore" }}>Explore RADx Data</CustomLink>
            </div>
            <svg width="2" height="60"><line x1="1" y1="0" x2="1" y2="60" stroke="#00496e" strokeWidth="2"/></svg>
            <div style={{ flex: 1, padding: '0 0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CustomLink link={{ url: "/launch" }}>Launch the RADx Data Hub</CustomLink>
            </div>
            <svg width="2" height="60"><line x1="1" y1="0" x2="1" y2="60" stroke="#00496e" strokeWidth="2"/></svg>
            <div style={{ flex: 1, padding: '0 0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CustomLink link={{ url: "/docs" }}>Read the Documentation</CustomLink>
            </div>
          </ListGroup>
        </NihCard>

        <hr />

        <h1 className="mt-[48px] mb-[8px] text-3xl text-aquaBlue font-bold">
          {latestUpdate.title}
        </h1>
        <hr className="text-orange border-t-[2px] border-orange mb-2"></hr>
        <p className="mb-4">
          Published on{" "}
          <span>
            {d.toLocaleString("default", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </p>
        <div className="mb-8 text-lg">
          <Markdown linkTarget="_blank" className="rich-text-additions">
            {latestUpdate.body}
          </Markdown>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const pageData = await getPageData({
    slug: "latest-updates",
    locale: "en",
    preview: false,
  })

  const globalLocale = await getGlobalData("en")

  // We have the required page data, pass it to the page component
  const { contentSections, metadata, localizations, slug } = pageData.attributes

  return {
    props: {
      sections: contentSections,
      metadata,
      global: globalLocale.data,
    },
  }
}

export async function getStaticPaths() {
  const pageData = await getPageData({
    slug: "latest-updates",
    locale: "en",
    preview: false,
  })

  // We have the required page data, pass it to the page component
  const { contentSections } = pageData.attributes
  const updates = contentSections.filter((section) => {
    return section.__typename === "ComponentSectionsLatestUpdates"
  })

  const paths = updates[0].updateInfo.map((section) => {
    let str = section.title.replace(/\s/g, "")
    return {
      params: {
        title: str,
        locale: "en",
      },
    }
  })

  return {
    paths,
    fallback: true,
  }
}
