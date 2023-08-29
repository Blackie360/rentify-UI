
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Homes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Elevate your home living experience with our meticulously curated collection of furnishings. Designed to provide unmatched comfort and style, each piece is carefully crafted to infuse your space with top-tier quality,
         innovative design, and a touch of timeless elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your comfort 
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
  <img
    src='https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'  // Replace this with your image URL
    alt='product detail'
    width={570}
    height={522}
    className='object-contain'
  />
</div>

    </section>
  );
};

export default SuperQuality;
