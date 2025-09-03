import phone from "/src/assets/images/illustration-phones.svg";
import circle from "/src/assets/images/bg-pattern-circles.svg";

const State = () => {
  return (
    <>
      <section className='state py-10 px-5 text-center text-white relative z-10 md:grid md:grid-cols-2 md:text-left xl:px-52'>
        <div>
          <div>
            <div>
              <img src={circle} alt="" className='absolute -top-1/5 h-[500px] w-full md:w-[500px]' />
            </div>
            <div>
              <img src={phone} alt="" className='absolute -top-1/5 h-[500px] w-full md:w-[500px]' />
            </div>
          </div>
          <div className='pt-80 px-5 md:py-20'>
            <h2 className='text-center text-3xl mb-5 lg:text-4xl 2xl:text-5xl text-white md:text-left'>State of the Art Infrastructure</h2>
            <p>
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping your
              site competitive.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default State;
