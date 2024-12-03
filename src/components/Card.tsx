interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-primary rounded-lg shadow-md p-6 hover:scale-105 transition-transform">
      <h2 className="text-highlight text-lg font-bold">{title}</h2>
      <p className="text-accent mt-2">{description}</p>
    </div>
  );
};

export default Card;
