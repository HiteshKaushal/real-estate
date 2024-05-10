import project1 from './images/project-1.jpg';
import project2 from './images/project-2.jpg';
import project3 from './images/project-3.jpg';
const Portifilo = ()=>{

    return (
        <section id="portifilo" className="portifilo section-padding">
            <div className="container">
         
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-center pb-5">
                        <h2>Our Projects</h2>
                        <p>Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit. Repellendus, 
                        </p>
                     
                
                    </div>
                </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-4">
                        <div className="card text-center bg-white pb-2">
                            <div className="card-body text-dark">
                           <div className="img-area mb-4">
                            <img src={project1} alt="" className="img-fluid" />
                           </div>
                           <h3 className="card-title">Solid Building</h3>
                           <p className="lead para">Lorem, ipsum dolor sit amet consectetur 
                           adipisicing elit. Ut placeat mollitia repellendus suscipit 
                           voluptatum quae praesentium, commodi quidem necessitatibus 
                          </p>
                          <button className="btn bg-warning text">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-4">
                        <div className="card text-center bg-white pb-2">
                            <div className="card-body text-dark">
                           <div className="img-area mb-4">
                            <img src={project2} alt="" className="img-fluid" />
                           </div>
                           <h3 className="card-title">Great Architecture</h3>
                           <p className="lead para">Lorem, ipsum dolor sit amet consectetur 
                           adipisicing elit. Ut placeat mollitia repellendus suscipit 
                           voluptatum quae praesentium, commodi quidem necessitatibus 
                          </p>
                          <button className="btn bg-warning text">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-4">
                        <div className="card text-center bg-white pb-2">
                            <div className="card-body text-dark">
                           <div className="img-area mb-4">
                            <img src={project3} alt="" className="img-fluid" />
                           </div>
                           <h3 className="card-title">Modern Design</h3>
                           <p className="lead para">Lorem, ipsum dolor sit amet consectetur 
                           adipisicing elit. Ut placeat mollitia repellendus suscipit 
                           voluptatum quae praesentium, commodi quidem necessitatibus 
                          </p>
                          <button className="btn bg-warning text">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
export default Portifilo;