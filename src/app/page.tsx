"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

const assetMap = [{ id: 'hero-image', url: 'https://images.pexels.com/photos/34258667/pexels-photo-34258667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A person in a hoodie coding on dual monitors, depicting cybersecurity and hacking themes.' }];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "home" },
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="/logo.svg"
          brandName="SaaSCo"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-pink-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to SaaSCo"
            description="Revolutionize your workflow with our cutting-edge software solutions."
            tag="New"
            imageSrc={assetMap.find(a => a.id === 'hero-image')?.url ?? '/public/images/placeholder.webp'}
            buttons={[
              { text: "Get Started", href: "https://example.com" },
              { text: "Learn More", href: "features" }
            ]}
            className="bg-pink-100 text-gray-900"
          />
        </div>
      </div>
      <div id="features" data-section="features" className="scroll-mt-24 bg-pink-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            title="Features"
            description="Discover what makes our platform unique."
            features={[
              { title: "Analytics", description: "Get insights", imageSrc: "/feature1.jpg" },
              { title: "Collaboration", description: "Work together seamlessly with your team.", imageSrc: "/feature2.jpg" },
              { title: "Customization", description: "Tailor the platform to your needs.", imageSrc: "/feature3.jpg" }
            ]}
            className="bg-pink-100 text-gray-900"
          />
        </div>
      </div>
      <div id="pricing" data-section="pricing" className="scroll-mt-24 bg-pink-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardThree
            title="Choose Your Plan"
            plans={[
              { id: "1", price: "$19/mo", name: "Basic", buttons: [{ text: "Select Plan", href: "signup" }], features: ["Up to 5 users", "10GB storage"] },
              { id: "2", badge: "Most popular plan", price: "$49/mo", name: "Pro", buttons: [{ text: "Select Plan", href: "signup" }], features: ["Up to 20 users", "100GB storage", "24/7 support"] }
            ]}
            className="bg-pink-100 text-gray-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-pink-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Get in Touch"
            title="Contact Us"
            description="Have questions? Our team is here to help."
            inputPlaceholder="Your email address"
            buttonText="Send Message"
            termsText="We respect your privacy."
            className="bg-pink-100 text-gray-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-pink-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              { title: "Product", items: [{ label: "Features", href: "features" }, { label: "Pricing", href: "pricing" }] },
              { title: "Company", items: [{ label: "About Us", href: "about" }, { label: "Contact", href: "contact" }] },
              { title: "Support", items: [{ label: "FAQ", href: "faq" }, { label: "Help Center", href: "help" }] }
            ]}
            copyrightText="© 2025 SaaSCo"
            className="bg-pink-100 text-gray-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}