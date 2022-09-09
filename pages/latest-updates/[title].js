import { getPageData } from "utils/api";
import { getGlobalData } from "utils/api";
import Layout from "@/components/layout";
import Seo from "@/components/elements/seo";
import { useRouter } from "next/router";
import Markdown from "react-markdown";

export default function LatestUpdatePage({ sections, metadata, global }) {
  // Get the path to determine what content to show on the dynamic page
  // We are using the title of the Latest Update to create the path for the page
  const router = useRouter();
  // We are removing /latest-updates/ from the path name and just keeping the title
  const pagePath = router.asPath.slice(16);

  // Merge default site SEO settings with page specific SEO settings
  if (metadata.shareImage?.data == null) {
    delete metadata.shareImage;
  }
  const metadataWithDefaults = {
    ...global.attributes.metadata,
    ...metadata,
  };

  // Get the correct update by matching the path to the title of the update
  const updates = sections.filter((section) => {
    return section.__typename === "ComponentSectionsLatestUpdates"
  });

  let latestUpdate = updates[0].updateInfo.find(
    (update) => update.title.replace(/\s/g, "") === pagePath
  );

  let d = new Date(latestUpdate.publishedDate);

  return (
    <Layout global={global}>
      {/* Add meta tags for SEO*/}
      <Seo metadata={metadataWithDefaults} />
      {/* Display content sections */}

      <section className="prose-lg  container mt-6">
        <h1>{latestUpdate.title}</h1>
        <p>
          Published on{" "}
          <span>
            {d.toLocaleString("default", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
          </span>
        </p>
        <Markdown linkTarget="_blank" className="rich-text-additions">
          {latestUpdate.body}
        </Markdown>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const pageData = await getPageData({
    slug: "latest-updates",
    locale: "en",
    preview: false,
  });

  const globalLocale = await getGlobalData("en");

  // We have the required page data, pass it to the page component
  const { contentSections, metadata, localizations, slug } =
    pageData.attributes;

  return {
    props: {
      sections: contentSections,
      metadata,
      global: globalLocale.data,
    },
  };
}

export async function getStaticPaths() {
  const pageData = await getPageData({
    slug: "latest-updates",
    locale: "en",
    preview: false,
  });

  // We have the required page data, pass it to the page component
  const { contentSections } = pageData.attributes;
  const updates = contentSections.filter((section) => {
    return section.__typename === "ComponentSectionsLatestUpdates"
  });

  const paths = updates[0].updateInfo.map((section) => {
    let str = section.title.replace(/\s/g, "");
    return {
      params: {
        title: str,
        locale: "en",
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}
