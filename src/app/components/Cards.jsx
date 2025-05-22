
const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden bg-white">
      <div className="relative w-full h-48 overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={imageUrl}
          alt={title}
          loading="lazy"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-3xl mb-2 text-gray-800 text-mono">{title}</div>
        <p className="text-gray-600 text-light text-sm text-serif">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
      </div>
    </div>
  );
};

Card.defaultProps = {
  title: 'Default Card Title',
  description: 'This is a default card description that provides more details about the card content.',
  imageUrl: 'https://via.placeholder.com/400x200',
};

export default Card;
