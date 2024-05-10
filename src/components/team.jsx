import team1 from './images/team-1.jpg';
import team2 from './images/team-2.jpg';
import team3 from './images/team-3.jpg';
import team4 from './images/team-4.jpg';
const Team =()=>{
    return(
    <section id="team" className="team section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-center pb-5">
                        <h2>Our Team</h2>
                        <p>Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit. Repellendus, 
                        </p>
                     
                
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                        <div className="card text-center">
                            <div className="card-body">
                          <img src={team1} alt="" className="img-fluid rounded-circle"/>
                        <h3 className="card-title py">Jack Wilson</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consecteturadipisicing elit. Repellendus,</p>
                           <p className="socials">
                         <i className="bi bi-twitter text-dark mx-1"></i>
                         <i className="bi bi-facebook text-dark mx-1"></i>
                         <i className="bi bi-linkedin text-dark mx-1"></i>
                         <i className="bi bi-instagram text-dark mx-1"></i>

                           </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card text-center">
                            <div className="card-body">
                          <img src={team2} alt="" className="img-fluid rounded-circle"/>
                        <h3 className="card-title py">James Lee</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consecteturadipisicing elit. Repellendus,</p>
                           <p className="socials">
                         <i className="bi bi-twitter text-dark mx-1"></i>
                         <i className="bi bi-facebook text-dark mx-1"></i>
                         <i className="bi bi-linkedin text-dark mx-1"></i>
                         <i className="bi bi-instagram text-dark mx-1"></i>

                           </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card text-center">
                            <div className="card-body">
                          <img src={team3} alt="" className="img-fluid rounded-circle"/>
                        <h3 className="card-title py">Margrot </h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consecteturadipisicing elit. Repellendus,</p>
                           <p className="socials">
                         <i className="bi bi-twitter text-dark mx-1"></i>
                         <i className="bi bi-facebook text-dark mx-1"></i>
                         <i className="bi bi-linkedin text-dark mx-1"></i>
                         <i className="bi bi-instagram text-dark mx-1"></i>

                           </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card text-center">
                            <div className="card-body">
                          <img src={team4} alt="" className="img-fluid rounded-circle"/>
                        <h3 className="card-title py">James Perry</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consecteturadipisicing elit. Repellendus,</p>
                           <p className="socials">
                         <i className="bi bi-twitter text-dark mx-1"></i>
                         <i className="bi bi-facebook text-dark mx-1"></i>
                         <i className="bi bi-linkedin text-dark mx-1"></i>
                         <i className="bi bi-instagram text-dark mx-1"></i>

                           </p>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    </section>
    
    );

}
export default Team;