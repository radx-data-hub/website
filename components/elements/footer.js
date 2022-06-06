import PropTypes from "prop-types"
import { linkPropTypes, mediaPropTypes } from "utils/types"
import NextImage from "./image"
import CustomLink from "./custom-link"
import ButtonLink from "./button-link"

const Footer = ({ footer }) => {
  return (
    <footer className="pt-6 bg-coralBlue">
      <div className="container flex flex-col lg:flex-row lg:justify-between">
        <div>
          {footer.logo && (
            <NextImage width="120" height="33" media={footer.logo} />
          )}
          <div className="text-xs text-white font-semibold">
            <div>{footer.smallText}</div>
          </div>
        </div>
        <nav className="lg:border-l-2 border-white mb-6 lg:pl-12 flex flex-wrap flex-row lg:gap-20 items-start lg:justify-end ">
          {footer.columns.map((footerColumn) => (
            <div
              key={footerColumn.id}
              className="mt-10 lg:mt-0 w-6/12 lg:w-auto"
            >
              <ul className="flex flex-nowrap">
                {footerColumn.links.map((link) => (
                  <li key={link.id} className="pr-6">
                    <ButtonLink
                      compact={false}
                      appearance={"dark-footer"}
                      button={link}
                      link={link}
                    >
                      {link.text}
                    </ButtonLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="bg-green py-2" />
    </footer>
  )
}

Footer.propTypes = {
  footer: PropTypes.shape({
    logo: mediaPropTypes.isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        title: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(linkPropTypes),
      })
    ),
    smallText: PropTypes.string.isRequired,
  }),
}

export default Footer
