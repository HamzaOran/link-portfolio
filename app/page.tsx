import Image from 'next/image';
import data from '../data.json';
import { FiTwitter } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';

function LinkCard({
  href,
  title,
  framework,
  cssFrame,
  deployImg,
  frameLang,
  database,
}: {
  href: string;
  title: string;
  framework?: string;
  cssFrame?: string;
  deployImg?: string;
  frameLang?: string;
  database?: string;
}) {
  return (
    <a
      target="_blank"
      href={href}
      className="flex items-center p-1 w-full rounded-lg hover:scale-105 transition-all border border-gray-300 mb-3 bg-gray-200  max-w-3xl"
    >
      <div className="flex text-center w-full items-center">
        {framework && (
          <div className="w-10 h-10">
            <Image
              className="rounded-lg"
              alt={title}
              src={framework}
              width={40}
              height={40}
            />
          </div>
        )}
        {cssFrame && (
          <div className="w-10 h-10 ml-2">
            <Image
              className="rounded-lg"
              alt={title}
              src={cssFrame}
              width={40}
              height={40}
            />
          </div>
        )}

        {frameLang && (
          <div className="w-10 h-10 ml-2">
            <Image
              className="rounded-lg"
              alt={title}
              src={frameLang}
              width={40}
              height={40}
            />
          </div>
        )}

        {deployImg && (
          <div className="w-10 h-10 ml-2">
            <Image
              className="rounded-lg"
              alt={title}
              src={deployImg}
              width={40}
              height={40}
            />
          </div>
        )}

        {database && (
          <div className="w-10 h-10 ml-2">
            <Image
              className="rounded-lg"
              alt={title}
              src={database}
              width={40}
              height={40}
            />
          </div>
        )}
        <h2 className="flex justify-center items-center font-bold text-lg w-full text-center text-black -ml-10">
          {title}
        </h2>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full  mx-auto px-8 ">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 text-5xl mb-8 bg-none text-white">
        {data.name}
      </h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}

      <div className="flex gap-6 p-4">
        <div className="hover:scale-125  transition-all">
          <a href="https://github.com/HamzaOran">
            <FiGithub key="github-icon" size={30} style={{ color: '#fff' }} />
          </a>
        </div>
        <div className="hover:scale-125 ">
          <a href="https://twitter.com/muholusk">
            <FiTwitter key="twitter-icon" size={30} style={{ color: '#fff' }} />
          </a>
        </div>
      </div>
    </div>
  );
}
