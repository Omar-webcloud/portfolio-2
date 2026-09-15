import { Certifications } from "./components/certifications"
import { Contact } from "./components/contact"
import { Education } from "./components/education"
import { Experiences } from "./components/experiences"
import { GitHubContributions } from "./components/github-contributions"
import { Hello } from "./components/hello"
import { Overview } from "./components/overview"
import { ProfileHeader } from "./components/profile-header"
import { Projects } from "./components/projects"
import { ScrollToTop } from "./components/scroll-to-top"
import { SiteFooter } from "./components/site-footer"
import { SiteHeader } from "./components/site-header"
import { SocialLinks } from "./components/social-links"
import { Stack } from "./components/stack"
import { Writing } from "./components/writing"
import { StripeDivider } from "./components/ui/panel"

export default function App() {
  return (
    <div className="group/layout relative isolate">
      <SiteHeader />

      <main className="max-w-screen overflow-x-clip px-2">
        <div className="mx-auto md:max-w-3xl">
          <ProfileHeader />
          <StripeDivider />

          <Overview />
          <SocialLinks />
          <GitHubContributions />
          <StripeDivider />

          <Hello />
          <StripeDivider />

          <Stack />
          <StripeDivider />

          <Experiences />
          <StripeDivider />

          <Projects />
          <StripeDivider />

          <Writing />
          <StripeDivider />

          <Education />
          <Certifications />
          <StripeDivider />

          <Contact />
        </div>
      </main>

      <SiteFooter />

      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-50"
        aria-hidden
      >
        <div className="h-(--fade-bottom-height) bg-linear-to-b from-transparent to-background backdrop-blur-[1px]" />
      </div>

      <ScrollToTop />
    </div>
  )
}
