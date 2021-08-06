import { tw } from 'twind/css';

const Header = () => (
  <header className={tw(`bg-papionne min-h-hero justify-around flex flex-row sm:px-0 lg:px-20`)}>
    <div className={tw(`max-w-4xl py-20 px-14 sm:px-6 lg:px-8`)}>
      <div className={tw(`max-w-xl mx-auto`)}>
        <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-4xl text-left leading-snug text-gray-50`)}>
          What&apos;s On Your Mind?
        </h1>
        <p className={tw(`mt-10 text-gray-200 text-left text-xl lg:text-lg`)}>
          Every great idea starts with a single thought. Which leads to an other and another. And then a million more!
          Whether it&apos;s on the beach, at the office or on a walk, MindNode helps you capture all your thoughts and
          turn them into a clear picture of your idea.
        </p>
        <div className={tw(`mt-10 flex justify-left items-left w-full mx-auto`)}>
          <img
            className={tw(`h-auto w-auto`)}
            src="https://www.mindnode.com/static/assets/icons/download_ios.svg"
            alt="logo"
            width={300}
            height={48}
          />
          <span className={tw(`mx-2`)} />
          <img
            className={tw(`h-auto w-auto`)}
            src="https://www.mindnode.com/static/assets/icons/download_mac.svg"
            alt="logo"
            width={300}
            height={48}
          />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
