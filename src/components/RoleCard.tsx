
type RoleCardProps = {
  image: any; // or string or StaticImageData
  role: string;
};

const RoleCard: React.FC<RoleCardProps> = ({ image, role }) => {
  return (
    <div className="rounded-lg bg-white border-t-4  shadow-md h-64 w-full max-w-xs mx-auto flex items-center justify-center 
       transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">

      <div className="text-center">
        <img src={image} alt={role} className="w-20 h-20 mx-auto mb-4" />
        <p className="font-bold xl:text-xl text-black">{role}</p>
      </div>
    </div>
  );
};

export default RoleCard;
