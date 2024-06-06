import forsale from '../../assets/for-sale.png'
import arrowup from '../../assets/arrow-up.png'
const Features = () => {
  return (
    <section className="py-20">
      <div className=' ml-[500px] mb-[200px]'>
        <img className='w-[538px] h-[796px] md:w-[796px] md:h-[538px]' src={forsale}/>
      </div>
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-24">Real Estate-Focused Digital Mastery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="ml-[180px]">
           <img className='w-[507.12px] h-[342px] 'src={arrowup}/>
          </div>
          <div className="bg-white mr-[100px]">
            <h3 className="font-bold text-2xl mb-1 text-left">Unlock the Potential of Digital Real</h3>
            <h3 className="font-bold text-2xl mb-4 text-left"> Estate Excellence</h3>
            <p className='text-left mr-32'>At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the intricacies of property marketing. Our range of specialized services is meticulously designed to catapult your brand's success in the ever-evolving digital property market.</p>
            <button className="bg-blue-600 text-white font-bold mt-8 px-20 py-2.5 rounded-full flex items-start">Get started</button>          
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
