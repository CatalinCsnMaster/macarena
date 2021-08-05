import React from 'react';
import { tw, css } from 'twind/css';
import Netlify from '@/constants/svg/netlify.svg';
import Nike from '@/constants/svg/nike.svg';
import Figma from '@/constants/svg/figma.svg';
import Aws from '@/constants/svg/aws.svg';

const brandsSectionStyle = css``;

export default function BrandsSection() {
  return (
    <div className={tw(brandsSectionStyle, `flex justify-center w-full bg-papionne`)}>
      <div className={tw(`mt-4 w-full`)}>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <Aws className={tw(`m-12 mb-8`)} width={120} />
          <Netlify className={tw(`m-12`)} width={140} />
          <Nike className={tw(`m-12`)} width={140} />
          <Figma className={tw(`m-12`)} width={140} />
        </div>
      </div>
    </div>
  );
}
