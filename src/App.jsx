import Layout from "./components/Layout";
import Home from "./sections/Home";
import Overview from "./sections/Overview";
import { SiteProvider } from "./context/SiteContext";
import ResearchDomains from "./sections/ResearchDomains";
import AuthorGuidelines from "./sections/AuthorGuidelines";
import JournalPublication from "./sections/JournalPublication";
import ImportantDates from "./sections/ImportantDates";
import Registration from "./sections/Registration";
import Committee from "./sections/Committee";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Sponsors from "./sections/Sponsors";

export default function App() {
  return (
    <SiteProvider>
      <Layout>
        <div className="min-h-screen bg-white font-poppins">
        <Home />
        <Overview />
        <ResearchDomains />
        <AuthorGuidelines />
        <JournalPublication />
        <ImportantDates />
        <Registration />
        <Committee />
        <About />
        <Contact />
        <Sponsors />
        </div>
      </Layout>
    </SiteProvider>
  );
}
