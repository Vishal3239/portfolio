import './Testimonial.css'

export default function Testimonial() {
  return (
    <>
        <div className='testimonial_container1'>
            <div className='testimonial'>
                <h1 className='testimonial_h1'>Testimonials</h1>
                <p className='testimonial_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, libero reprehenderit quas aut, accusamus hic nihil repudiandae consequatur repellat magnam sapiente eos facilis quam iure quis! Facilis, accusamus. Omnis, libero.</p>
            </div>

            <div className="testimonial-container">

                <div className="testimonial-card">
                    <span className='quote'>&ldquo;</span>

                    <p className="testimonial-text">
                        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.
                    </p>

                    <div className="client-info">
                        <img src="/public/vishal.png" className="client-img"/>
                        <span className="client-name">Client Name</span>
                    </div>
                </div>

                <div className="testimonial-card">
                    <span className='quote'>&ldquo;</span>
                    <p className="testimonial-text">
                        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.
                    </p>

                    <div className="client-info">
                        <img src="/public/vishal.png" className="client-img"/>
                        <span className="client-name">Client Name</span>
                    </div>
                </div>

            </div>

            <div className="testimonial-container">

                <div className="testimonial-card">
                    <span className='quote'>&ldquo;</span>

                    <p className="testimonial-text">
                        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.
                    </p>

                    <div className="client-info">
                        <img src="vishal.png" className="client-img"/>
                        <span className="client-name">Client Name</span>
                    </div>
                </div>

                <div className="testimonial-card">
                    <span className='quote'>&ldquo;</span>
                    <p className="testimonial-text">
                        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.
                    </p>

                    <div className="client-info">
                        <img src="vishal.png" className="client-img"/>
                        <span className="client-name">Client Name</span>
                    </div>
                </div>

            </div>
            

        </div>
    </>
            
    );
}

