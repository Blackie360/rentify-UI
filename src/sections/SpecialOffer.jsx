import { arrowRight } from "../assets/icons";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
        Embark on a rental house-seeking adventure that revolutionizes your experience with unmatched offers. From premium property selections to remarkable cost savings,
         we provide incomparable value that distinguishes us from the rest.
        </p>
        <p className='mt-6 info-text'>
        Explore a world of opportunities meticulously crafted to satisfy your distinct aspirations, surpassing even the loftiest of expectations. 
        Your venture with us promises nothing less than an extraordinary experience.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Rent Now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
