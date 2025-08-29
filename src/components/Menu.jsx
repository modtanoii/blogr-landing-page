import open from "/src/assets/images/icon-hamburger.svg";
import close from "/src/assets/images/icon-close.svg";

const Menu = ({isOpen, setIsOpen}) => {
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
        {isOpen ? <img src={close} alt="" /> : <img src={open} alt="" />}
      </button>
    </>
  );
};
export default Menu;
