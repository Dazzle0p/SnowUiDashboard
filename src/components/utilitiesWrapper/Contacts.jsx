import contactImage1 from "../../assets/contact-1.png";
import contactImage2 from "../../assets/contact-2.png";
import contactImage3 from "../../assets/contact-3.png";
import contactImage4 from "../../assets/contact-4.png";
import contactImage5 from "../../assets/contact-5.png";
import contactImage6 from "../../assets/contact-6.png";
import UtilityPanel from "../sharedComponents/UtilityPanel.jsx";

const activitiesList = [
  {
    id: 1,
    image: contactImage1,
    name: "Natali Craig",
  },
  {
    id: 2,
    image: contactImage2,
    name: "Drew Cano",
  },
  {
    id: 3,
    image: contactImage3,
    name: "Andi Lane",
  },
  {
    id: 4,
    image: contactImage4,
    name: "Koray Okumus",
  },
  {
    id: 5,
    image: contactImage5,
    name: "Kate Morison",
  },
  {
    id: 6,
    image: contactImage6,
    name: "Melody Macy",
  },
];

function Contacts() {
  return (
    <UtilityPanel title="Contacts">
      <ul className="space-y-narrow">
        {activitiesList.map((item) => (
          <li key={item.id} className="flex items-center gap-sm">
            <div className="rounded-circle overflow-hidden">
              <img src={item.image} alt="user image" className="object-cover" />
            </div>

            <div className="flex flex-col items-start gap-sm">
              <p className="text-tiny text-start">{item.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </UtilityPanel>
  );
}

export default Contacts;
