import { useGlobalContext } from "./context";
import phone from "./images/phone.svg";
import hero from "./images/hero.svg";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="" onMouseOver={closeSubmenu}>
      <div className="px-8 flex flex-1 flex-wrap justify-around items-center gap-4">
        <div className="sm:w-2/5">
          <h2 className="text-4xl font-bold font-sans">
            Lorem ipsum dolor, sit amet consectetur
          </h2>
          <p className="mt-8 leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            necessitatibus, quae in eveniet consequuntur dignissimos a, dolorum
            amet neque atque asperiores esse blanditiis. Recusandae corporis
            officiis nostrum facilis aut ratione numquam similique voluptatem
            quas. Quibusdam esse temporibus iusto laudantium mollitia!
          </p>
        </div>
        <div>
          <img src={phone} alt="phone image" />
        </div>
      </div>
      <div className="absolute top-0 left-0 -z-10 bg-cover bg-center">
        <img src={hero} alt="background image" />
      </div>
    </section>
  );
};

export default Hero;
