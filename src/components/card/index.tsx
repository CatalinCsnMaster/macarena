import React from 'react';
import { tw } from 'twind';
import Arrow from '@/constants/svg/arrow.svg';

interface Card {
  image: string;
  title: string;
  excerpt: string;
  linkText: string;
  linkUrl: string;
}

export default function Card({ image, title, excerpt, linkText, linkUrl }: Card) {
  return (
    <div className={tw(`w-80 mx-auto my-2 p-4 border-2 border-gray-300 rounded flex flex-col justify-between`)}>
      <img src={image} alt={title} width={80} />
      <h1 className={tw(`my-2 text-xl font-bold text-gray-700`)}>{title}</h1>
      <p className={tw(`my-2 mb-auto text-xl font-medium text-gray-500`)}>{excerpt}</p>
      <span className={tw(`flex my-2`)}>
        <a href={linkUrl}>{linkText}</a>
        <Arrow width={20} />
      </span>
    </div>
  );
}
