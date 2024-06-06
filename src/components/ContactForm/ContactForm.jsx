const ContactForm = () => {
  return (
    <section className="bg-gray-50 py-20" id="contact">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">Connect with Our Digital Marketing Experts</h2>
        <p className="text-xl font-normal">Reach Out for Tailored Strategies and Results-Driven Solutions.</p>
        <p className=" text-xl font-normal mb-8"> Let's Elevate Your Online Presence Together.</p>
        <form className="max-w-3xl mx-auto bg-white p-12 shadow rounded-xl ">
          <div className="flex items-center">
          <div className="w-[380px] h-[248px]">
              <div className="mb-4">
                <label className="block text-left mb-2">Name</label>
                <input type="text" placeholder="Name" className="w-full border border-gray-300 p-2 rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2">Phone</label>
                <input type="phone" placeholder="Phone" className="w-full border border-gray-300 p-2 rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2">Email</label>
                <input type="email" placeholder="Email" className="w-full border border-gray-300 p-2 rounded" />
              </div>
          </div>
          <div className="w-[380px] h-[248px] px-8">
            <label className="block text-left mb-2">Message</label>
            <textarea className="w-full h-full border border-gray-300 p-2 rounded" placeholder="Message"rows="4"></textarea>
          </div>
          </div>
         <div className="ml-[20px] mt-[50px]"> <button className="bg-blue-600 text-white text-lg font-bold px-24 py-2.5 rounded-full p-4">Get started</button></div>
        </form>
       
      </div>
    </section>

  );
}

export default ContactForm;
