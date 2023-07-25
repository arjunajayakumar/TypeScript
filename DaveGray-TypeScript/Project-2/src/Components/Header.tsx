import useCart from "../hooks/useCart";
import Nav from "./Nav";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const { totalPrice, totalItems } = useCart();

  const content = (
    <header className="header">
      <div className="header_title">
        <h1>Acme Co.</h1>
        <div>
          <p>Total Items: {totalItems}</p>
          <p>Total Price:{totalPrice}</p>
        </div>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  );

  return content;
};

export default Header;
