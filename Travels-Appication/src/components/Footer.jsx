
function Footer() {
  return (
    <div className="bg-black px-4 py-8 md:px-12 lg:px-36">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col space-y-5 text-white mb-8 md:mb-0">
          <h1 className="font-bold text-2xl md:text-3xl">Quick links</h1>
          <div className="text-lg md:text-xl space-y-3">
            <p>FAQ</p>
            <p>Terms of use</p>
            <p>Privacy Policy</p>
            <p>Refund policy</p>
            <p>Feedback</p>
            <p>Review</p>
          </div>    
        </div>
        
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col space-y-5 text-white mb-8 md:mb-0">
          <h1 className="font-bold text-2xl md:text-3xl">Company</h1>
          <div className="text-lg md:text-xl space-y-3">
            <p>About</p>
            <p>Testimonials</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col space-y-5 text-white mb-8 md:mb-0">
          <h1 className="font-bold text-2xl md:text-3xl">Office</h1>
          <div className="text-lg md:text-xl space-y-3"> 
            <p>AB Tower, #148, abcdef<br/>
            Baracks Roads, Purasawalkulam,<br />
            Chennai, TamilNadu-600 007.</p>
            <p>Customercare@trackedin.com</p>
            <p>9894853821</p>
          </div>   
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col space-y-5 text-white mb-8 md:mb-0">
          <h1 className="font-bold text-2xl md:text-3xl">Subscribe</h1>
          <div className="text-lg md:text-xl space-y-3">
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
