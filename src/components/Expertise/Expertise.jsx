import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'
import image6 from '../../assets/image6.png'
import image7 from '../../assets/image7.png'
import image8 from '../../assets/image8.png'
const Expertise = () => {
  return (
    <>
    <section className="py-20">
      <div className="text-center mx-[200px]">
        <h2 className="text-2xl font-bold mb-8">Driving Property Inquiries to Conversions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="p-2  rounded w-[621px] h-[463px]">
            <img src={image1} className='w-[190px] h-[190px] mb-4 ml-48'/>
            <h3 className="font-semibold text-xl mb-4">Call-to-Action Optimization</h3>
            <p className='text-xl font-normal'>Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.</p>
          </div>
          <div className="p-2  rounded w-[621px] h-[463px]">
          <img src={image2} className='w-[190px] h-[190px] mb-4 ml-48'/>
            <h3 className="font-semibold text-xl mb-4">Landing Page Efficiency</h3>
            <p className='text-xl font-normal'>Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.</p>
          </div>
          <div className="p-2 rounded w-[621px] h-[463px]">
          <img src={image3} className='w-[190px] h-[190px] mb-4 ml-48'/>
            <h3 className="font-semibold text-xl mb-4">Social Proof Utilization</h3>
            <p className='text-xl font-normal'>Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action</p>
          </div>
          <div className="p-2  rounded w-[621px] h-[463px]">
            <img src={image4} className='w-[190px] h-[190px] mb-4 ml-48'/>
            <h3 className="font-semibold text-xl mb-4">Mobile-Friendly Experience</h3>
            <p className='text-xl font-normal'>With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="text-center mx-[200px]">
        <h2 className="text-2xl font-bold mb-8">Our Expertise in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-2  rounded w-[621px] h-[463px]">
            <img src={image5} className='w-[190px] h-[190px] mb-4 ml-48'/>
            <h3 className="font-semibold text-xl mb-4">Effective CTAs</h3>
            <p className='text-xl font-normal'> See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.</p>
          </div>
          <div className="p-2  rounded w-[621px] h-[463px]">
          <img src={image6} className='w-[190px] h-[190px] mb-4 ml-48'/>
            <h3 className="font-semibold text-xl mb-4">Conversion-Optimized Landing Pages</h3>
            <p className='text-xl font-normal'>Explore a case study where our landing page optimization increased property lead conversion rates by 30%</p>
          </div>
          <div className="p-2  rounded w-[621px] h-[463px]">
          <img src={image7} className='w-[190px] h-[190px] mb-4 ml-48'/>
            <h3 className="font-semibold text-xl mb-4">Trust Building with Social Proof</h3>
            <p className='text-xl font-normal'>Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project</p>
          </div>
          <div className="p-2  rounded w-[621px] h-[463px]">
          <img src={image8} className='w-[190px] h-[190px] mb-4 ml-48'/>
            <h3 className="font-semibold text-xl mb-4">Mobile-First Success:</h3>
            <p className='text-xl font-normal'> Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Expertise;
