import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";

const Contact = () => {
  return (
    <div>
      <section className="p-3 flex flex-start">
        <Link to="behdad">
          <CiMenuBurger size="2em" color="white" />
        </Link>
      </section>
    </div>
  );
};

export default Contact;
