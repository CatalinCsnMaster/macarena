import React from 'react';
import Page from '@/components/page';
import { NextSeo } from 'next-seo';
import Footer from '@/components/footer';
import { tw } from 'twind/css';
import ContactHero from '@/constants/svg/contact_hero.svg';
import Card from '@/components/card';
import PForm from '@/components/form';

const contactDetails = [
  {
    image: `https://colins9.sg-host.com/wp-content/uploads//2021/05/Group-217.svg`,
    title: `Email Us`,
    excerpt: `Send us your questions via email and our team will get back to you shortly.`,
    linkText: `Leave a message`,
    linkUrl: `/`,
  },
  {
    image: `https://colins9.sg-host.com/wp-content/uploads//2021/05/location.svg`,
    title: `Drop In`,
    excerpt: `Get directions to our office.`,
    linkText: `Get directions`,
    linkUrl: `/`,
  },
  {
    image: `https://colins9.sg-host.com/wp-content/uploads//2021/05/call.svg`,
    title: `Call Us`,
    excerpt: `Call us directly if your query requires an immediate response`,
    linkText: `Call us`,
    linkUrl: `/`,
  },
];

export default function contact() {
  return (
    <Page>
      <NextSeo title="Papionne Software Agency" description="Software Development Company" />
      <main>
        <section className={tw(`max-w-6xl mx-auto overflow-hidden`)}>
          <div className={tw(`text-center relative top-28 text-gray-800`)}>
            <h1 className={tw(`text-4xl font-bold`)}>We’re here to help</h1>
            <p className={tw(`max-w-lg mx-auto text-2xl font-light`)}>
              Contact us if you have any questions about our company or products.
            </p>
          </div>
          <ContactHero />
        </section>
        <div className={tw(`max-w-6xl mx-auto mb-10 flex flex-col lg:flex-row justify-between`)}>
          {contactDetails.map((contactDetail) => (
            <Card
              image={contactDetail.image}
              title={contactDetail.title}
              excerpt={contactDetail.excerpt}
              linkText={contactDetail.linkText}
              linkUrl={contactDetail.linkUrl}
            />
          ))}
        </div>
        <section className={tw(`my-10`)}>
          <PForm />
        </section>
      </main>
      <Footer />
    </Page>
  );
}
