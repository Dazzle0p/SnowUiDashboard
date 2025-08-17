import logoImage from "../../assets/logo.png";

function Logo() {
  return (
    <div className="overflow-hidden">
      <img
        src={logoImage}
        alt="snow ui logo"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default Logo; 