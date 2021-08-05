import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';
import BrandsSection from '@/components/brands-section';

export default function Home() {
  return (
    <Page>
      <NextSeo title="Papionne Software Agency" description="Software Development Company" />
      <Header />
      <main>
        <FeatureSection />
        <BrandsSection />
        <ListSection />
        <CasesSection />
        <PricingTable />
      </main>
      <Footer />
    </Page>
  );
}
