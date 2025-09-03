const Buttons = () => {
  return (
    <>
      <div>
        <ul className='flex flex-col items-center justify-center md:text-white md:flex-row'>
          <li className='my-[10px] md:text-white md:mx-[10px]'>
            <button className='border border-white bg-transparent py-2 px-6 rounded-full'>Login</button>
          </li>
          <li className='my-[10px] md:text-white md:mx-[10px]'>
            <button className='btn-light bg-white py-2 px-4 rounded-full'>Sign Up</button>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Buttons;
