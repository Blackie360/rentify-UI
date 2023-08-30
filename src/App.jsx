import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <Hero />
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>

      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
};

export default App;
