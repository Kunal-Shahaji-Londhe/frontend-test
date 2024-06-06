import house from '../../assets/house.png'
const ConversionStrategies = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2"> Driving Property Inquiries to Conversions</h2>
        <p className='mb-24 text-xl font-normal'>Streamlined Strategies for Real Estate Success</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="ml-[180px]">
           <img className='w-[507.12px] h-[342px] 'src={house}/>
          </div>
          <div className="bg-white mr-[100px]">
            <h3 className="font-bold text-2xl mb-1 text-left">Optimized Path to Property Purchase</h3>
            <p className='text-left mr-32'>In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.</p>
            <button className="bg-blue-600 text-white font-bold mt-8 px-20 py-2.5 rounded-full flex items-start">Get started</button>          
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConversionStrategies;
