import "./Card.css";

interface ContentItem {
  heading: string;
  paragraph: string;
  link: string;
}

interface CardProps {
  frontImage: string;
  frontText: string;
  backContent: ContentItem | null | undefined;
}

const Card: React.FC<CardProps> = ({ frontImage, frontText, backContent }) => {
  if (!backContent) {
    return null; // or some default content or message
  }
  const frontStyle = {
    backgroundImage: `url(${frontImage})`,
  };
  return (
    <div className='card'>
      <div
        className='card-front bg-cover bg-center text-white rounded-lg'
        style={frontStyle}
      >
        <p className='p-4 bg-black bg-opacity-50 text-base'>{frontText}</p>
      </div>
      <div className='card-back flex flex-col p-4 rounded-lg'>
        <div>
          <h4 className='text-2xl font-bold mb-2'>{backContent?.heading}</h4>
          <p className='mb-4 text-sm'>{backContent?.paragraph}</p>
        </div>
        <a
          href={backContent.link}
          target='_blank'
          className='text-base border border-white rounded px-3 py-2'
        >
          Projects
        </a>
      </div>
    </div>
  );
};

export default Card;
