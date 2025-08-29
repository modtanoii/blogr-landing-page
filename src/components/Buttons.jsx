const Buttons = () => {
  return (
    <>
      <div>
        <ul className='flex flex-col items-center justify-center md:text-white md:flex-row'>
          <li className='my-[10px] md:m-0'>
            <button>Login</button>
          </li>
          <li className='my-[10px] md:m-0'>
            <button>Sign Up</button>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Buttons;
