import PropTypes from "prop-types";
import { linkPropTypes, mediaPropTypes } from "utils/types";
import NextImage from "./image";
import CustomLink from "./custom-link";
import ButtonLink from "./button-link";

const Footer = ({ footer }) => {
  return (
    <footer className="pt-6 bg-coralBlue">
      <div className="container flex flex-col lg:flex-row lg:justify-between">
        <div>
          {footer.logo && (
            <NextImage width="120" height="33" media={footer.logo} />
          )}
          <div className="text-sm text-white">
            <div>{footer.smallText}</div>
          </div>
        </div>
        <nav className="border-l-2 border-white  mb-6 pl-12 flex flex-wrap flex-row lg:gap-20 items-start lg:justify-end ">
          {footer.columns.map((footerColumn) => (
            <div
              key={footerColumn.id}
              className="mt-10 lg:mt-0 w-6/12 lg:w-auto"
            >{console.log(footerColumn.links)}
              <ul className="flex flex-nowrap">
                {footerColumn.links.map((link) => (
                  <li
                    key={link.id}
                    className="pl-6"
                  >
                    <ButtonLink compact={true} appearance={"dark"} button={link} link={link}>{link.text}</ButtonLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="bg-green py-2" />
    </footer>
  );
};

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
};

export default Footer;
