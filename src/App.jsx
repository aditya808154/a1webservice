import { useState } from 'react'
import { Routes, Route } from 'react-router-dom' 
import './App.css'
import Navbar from './components/common/Navbar'
import Hero from './components/home/Hero/Hero'
import Services from './components/home/Service/Services'
import SoftwareDevelopment from './components/home/Service/SoftwareDevelopment/SoftwareDevelopment'
import ApplicationDevelopment from './components/home/Service/ApplicationDevelopment/ApplicationDevelopment'
import OtherServices from './components/home/Service/OtherServices/OtherServices'
import FAQ from './components/home/Service/FAQ/FAQ'
import Footer from './components/common/Footer'
import AboutSection from './pages/About/AboutSection'
import OnlineCourses from './pages/OnlineCourses/OnlineCourses'
import WebsiteDesign from './pages/WebsiteDesign/WebsiteDesign'
import BlogSection from './pages/BlogSection/BlogSection'
import BlogPostDetail from './pages/BlogSection/BlogPostDetail'
import Sort from './pages/Sort/Sort'
import Software from './pages/Software/Software'
import Contact from './pages/Contact/Contact'
import Online from './components/home/Service/Online/Online'
import Website from './components/home/Service/WebsiteDesign/Website'
import WebsiteAudit from './components/home/DigitalNav/websiteAuto/websiteaudit'
import TechnicalSEO from './components/home/DigitalNav/TechnicalSEO/TechnicalSEO'
import OnPageSEO from './components/home/DigitalNav/OnPageSEO/OnPageSEO'
import EcommerceSEO from './components/home/DigitalNav/EcommerceSEO/EcommerceSEO'
import LocalSEO from './components/home/DigitalNav/Local SEO/LocalSEO'
import InternationalSEO from './components/home/DigitalNav/InternationalSEO/InternationalSEO'
import OffPageSEO from './components/home/DigitalNav/OffPageSEO/OffPageSEO'
import DigitalMarketing from './components/home/DigitalNav/DigitalMarketing/DigitalMarketing'
import ScrollToTop from './components/common/ScrollToTop'
import PreLoader from './components/common/PreLoader'
import WhyChooseUs from './components/home/Service/WhyChooseUs/WhyChooseUs'
import CertificateSection from './components/home/Service/CertificateSection/CertificateSection'
import Testimonials from './components/home/Service/Testimonials/Testimonials'
import ContactHome from './components/home/Service/ContactHome/ContactHome'
import UpcomingCourse from './components/home/Service/UpcomingCourse/UpcomingCourse'
import Read from './components/home/Service/UpcomingCourse/Read'
import ViewAll from './components/home/Service/UpcomingCourse/ViewAll'
import Team from './pages/Team/Team'
import Project from './pages/Project/Project'
import { HelmetProvider, Helmet } from 'react-helmet-async' 

function App() {
  const [count, setCount] = useState(0)

  // Home Page ka group
  const HomePage = () => (
      <div>
        <Helmet>
          <title>A1 Web Service | Expert Web Development & SEO Solutions India</title>
          <meta name="description" content="Boost your business with A1 Web Service. Professional web design, software development, and expert SEO services to help you rank higher on Google." />
          <link rel="canonical" href="https://a1webservice.com/" />
        </Helmet>

        <Hero/>
        <UpcomingCourse/>
        <Online/>
        <SoftwareDevelopment/>
        <ApplicationDevelopment/>
        <OtherServices/>
        <WhyChooseUs/>
        <CertificateSection/>
        <FAQ/>
        <Testimonials/>
        <ContactHome/>
      </div>
  )

  return (
    <HelmetProvider> 
    <PreLoader/>
      <Navbar/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/about" element={
          <>
            <Helmet>
              <title>About Us | A1 Web Service - Digital Growth Experts</title>
              <meta name="description" content="Learn more about A1 Web Service. We are dedicated to providing the best web development, software solutions, and SEO strategies for businesses." />
            </Helmet>
            <AboutSection />
          </>
        } />

        <Route path="/website-design" element={
          <>
            <Helmet>
              <title>Professional Website Design Services | A1 Web Service</title>
              <meta name="description" content="Get high-performance, responsive, and visually stunning websites. We specialize in UI/UX and modern web frameworks like React.js." />
            </Helmet>
            <WebsiteDesign />
          </>
        } />

        <Route path="/SEO-Training" element={
          <>
            <Helmet>
              <title>Technical SEO Training & Services | A1 Web Service</title>
              <meta name="description" content="Master Technical SEO with our expert training. We focus on sitemaps, robots.txt, and page speed optimization to boost your rankings." />
            </Helmet>
            <TechnicalSEO />
          </>
        } />

        <Route path="/software-development" element={
          <>
            <Helmet>
              <title>Custom Software Development & Automation | A1 Web Service</title>
              <meta name="description" content="Scale your business with custom CRM, ERP, and automation software. Secure and efficient software solutions tailored to your needs." />
            </Helmet>
            <Software />
          </>
        } />

        <Route path="/Contact" element={
          <>
            <Helmet>
              <title>Contact Us | Get a Free Website Audit | A1 Web Service</title>
              <meta name="description" content="Ready to grow? Contact A1 Web Service for a free consultation and website audit. Let's take your business to the next level." />
            </Helmet>
            <Contact />
          </>
        } />

        {/* Dynamic Blog Routes */}
        {/* Dynamic Blog Routes */}
        <Route path="/blog" element={
          <>
            <Helmet>
              <title>Digital Marketing & Tech Blog | A1 Web Service Updates</title>
              <meta name="description" content="Read latest articles on SEO, Web Development, and Digital Marketing strategies. Stay updated with industry trends and expert tips from A1 Web Service." />
            </Helmet>
            <BlogSection />
          </>
        } />
        
        <Route path="/blog/:id" element={<BlogPostDetail />} />

        {/* All Other Digital Marketing Routes - Set with Unique SEO */}
        <Route path="/Digital-Marketing-Course" element={
          <>
            <Helmet>
              <title>Advanced Digital Marketing Course | A1 Web Service Training</title>
              <meta name="description" content="Join our comprehensive Digital Marketing course. Learn SEO, PPC, Social Media Marketing, and Content Strategy from industry experts in India." />
            </Helmet>
            <DigitalMarketing />
          </>
        } />

        <Route path="/website-audit" element={
          <>
            <Helmet>
              <title>Free Website SEO Audit | Technical Performance Check</title>
              <meta name="description" content="Get a detailed website audit report. We identify technical SEO issues, speed bottlenecks, and ranking opportunities to improve your site's performance." />
            </Helmet>
            <WebsiteAudit />
          </>
        } />

        <Route path="/OnPageSEO" element={
          <>
            <Helmet>
              <title>On-Page SEO Services | Content & Keyword Optimization</title>
              <meta name="description" content="Optimize your website content with our On-Page SEO services. We handle Title tags, Meta descriptions, Header tags, and keyword placement for better rankings." />
            </Helmet>
            <OnPageSEO />
          </>
        } />

        <Route path="/e-commerce-seo" element={
          <>
            <Helmet>
              <title>E-commerce SEO Experts | Boost Online Store Sales</title>
              <meta name="description" content="Specialized SEO for E-commerce websites. Increase product visibility on Google, reduce bounce rates, and drive more organic sales to your online store." />
            </Helmet>
            <EcommerceSEO />
          </>
        } />

        <Route path="/LocalSEO" element={
          <>
            <Helmet>
              <title>Local SEO Services | Dominate Local Search Results</title>
              <meta name="description" content="Grow your local business with our Local SEO strategies. Optimize your Google Business Profile and rank higher for 'near me' searches in your area." />
            </Helmet>
            <LocalSEO />
          </>
        } />

        <Route path="/international-seo" element={
          <>
            <Helmet>
              <title>International SEO Agency | Global Market Expansion</title>
              <meta name="description" content="Scale your business globally with International SEO. We optimize for multi-regional and multi-lingual search results to reach customers worldwide." />
            </Helmet>
            <InternationalSEO />
          </>
        } />

        <Route path="/OffPageSEO" element={
          <>
            <Helmet>
              <title>Off-Page SEO & Link Building | High Authority Backlinks</title>
              <meta name="description" content="Improve your domain authority with expert Off-Page SEO. High-quality link building and brand mentions to establish trust and search engine credibility." />
            </Helmet>
            <OffPageSEO />
          </>
        } />
        {/* Remaining Routes - Pure Audit aur SEO ke saath */}
        
        <Route path="/read/:id" element={
          <>
            <Helmet>
              <title>Read Latest Updates | A1 Web Service News</title>
              <meta name="description" content="Detailed insights and updates on our latest projects and digital marketing trends. Stay informed with A1 Web Service." />
            </Helmet>
            <Read />
          </>
        } />

        <Route path="/view-all" element={
          <>
            <Helmet>
              <title>All Courses & Services | A1 Web Service Portfolio</title>
              <meta name="description" content="Browse our complete list of web development courses, SEO services, and digital growth solutions in one place." />
            </Helmet>
            <ViewAll />
          </>
        } />

        <Route path="/online-courses" element={
          <>
            <Helmet>
              <title>Online Digital Marketing & Development Courses | A1 Web Service</title>
              <meta name="description" content="Enroll in our professional online courses. Learn Web Development, SEO, and Digital Marketing from industry experts at A1 Web Service." />
            </Helmet>
            <OnlineCourses />
          </>
        } />

        <Route path="/Sort" element={
          <>
            <Helmet>
              <title>Service Categories | A1 Web Service Solutions</title>
              <meta name="description" content="Explore categorized digital services. From small business websites to enterprise software solutions." />
            </Helmet>
            <Sort />
          </>
        } />

        <Route path="/Team" element={
          <>
            <Helmet>
              <title>Meet Our Team | Expert Developers & SEO Strategists</title>
              <meta name="description" content="Get to know the experts behind A1 Web Service. Our team of professional developers and marketers is dedicated to your business success." />
            </Helmet>
            <Team />
          </>
        } />

        <Route path="/Project" element={
          <>
            <Helmet>
              <title>Our Portfolio & Projects | A1 Web Service Success Stories</title>
              <meta name="description" content="View our latest work. Successful web development and SEO projects delivered to clients across various industries globally." />
            </Helmet>
            <Project />
          </>
        } />

        <Route path="/digital-marketing" element={
          <>
            <Helmet>
              <title>Full Service Digital Marketing Agency | Grow Your Brand</title>
              <meta name="description" content="Complete digital marketing solutions including PPC, Social Media Marketing, and Content Strategy to skyrocket your online presence." />
            </Helmet>
            <DigitalMarketing />
          </>
        } />

        <Route path="/software" element={
          <>
            <Helmet>
              <title>Custom Software & Business Solutions | A1 Web Service</title>
              <meta name="description" content="High-quality software development services. We build scalable, secure, and user-friendly applications for your business." />
            </Helmet>
            <SoftwareDevelopment />
          </>
        } />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer/>
    </HelmetProvider>
  )
}

export default App