import { useState } from "react"
import NihNavbar from "./elements/nih-navbar"
import NIHFooter from "./elements/nih-footer"
import Footer from "./elements/footer"
import NotificationBanner from "./elements/notification-banner"

const NihLayout = ({ children, global, pageContext }) => {
  const { navbar, footer, notificationBanner } = global.attributes

  const [bannerIsShown, setBannerIsShown] = useState(true)
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Aligned to the top */}
      <div className="flex-1">
        {notificationBanner && bannerIsShown && (
          <NotificationBanner
            data={notificationBanner}
            closeSelf={() => setBannerIsShown(false)}
          />
        )}
        <NihNavbar navbar={navbar} pageContext={pageContext} />
        <div>{children}</div>
      </div>
      {/* Aligned to the bottom */}
      <NIHFooter footer={footer} />
    </div>
  )
}

export default NihLayout