import aboutimg from './images/about.jpg';
const About=()=>{

    return(
        <section id="about" className="about section-padding">

            <div className ="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="about-img">
                            <img src={aboutimg}alt="" className="img-fluid"/>
                        </div>                        
                    </div>
                   <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                    <div className="about-text">
                        <h2>We Provide Best Quality<br/>Service Ever</h2>
                        <p className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, eos aut, libero quis ab earum excepturi tempore voluptate rem doloremque eum. Aperiam ut quo doloribus consequuntur porro soluta laboriosam quas?
                        Eius odit magnam quas recusandae hic, animi sit aspernatur suscipit illum dolores cumque necessitatibus itaque eum eaque praesentium, consectetur culpa porro vel assumenda debitis? Eos ullam soluta optio impedit aliquid!
                     </p>
                        <a href="#" className="btn btn-warning">Learn More</a>
                    </div>
                   </div>
                </div>

            </div>
        </section>

    );

}
export default About;