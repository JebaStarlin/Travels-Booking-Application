function Footer() {
  return (
    <div className=" bg-black  justify-between">
        <div className="flex flex-row space-x-20 px-36 py-12 justify-between">
            <div className="flex flex-col space-y-5 text-white">
                <h1 className="font-bold text-3xl ">Quick links</h1>
                <div className="text-xl space-y-5">
                    <p >FAQ</p>
                    <p>Terms of use</p>
                    <p>Privacy Policy</p>
                    <p>Refund policy</p>
                    <p>Feedback</p>
                    <p>Review</p>
                </div>    
            </div>
            
            <div className="flex flex-col space-y-5 text-white">
                <p className="font-bold text-3xl ">Company</p>
                <div className="text-xl space-y-5">
                    <p>About</p>
                    <p>Testimonials</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>
            </div>

            <div className="flex flex-col space-y-5 text-white">
                <p className="font-bold text-3xl ">Office</p>
                    <div className="text-xl space-y-5"> 
                        <p>AB Tower, #148, abcdef<br/>
                        Baracks Roads, Purasawalkulam, <br />
                        Chennai, TamilNadu-600 007.</p>
                        <p>Customercare@trackedin.com</p>
                        <p>9894853821</p>
                    </div>   
            </div>
            <div className="flex flex-col space-y-5 text-white">
                <p className="font-bold text-3xl ">Subscribe</p>
                <div className="text-xl space-y-5">

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
