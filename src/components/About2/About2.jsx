import React from "react";
import "./About2.css";
import OnlyHead from "../OnlyHead/OnlyHead";
import Footer from "../Footer/Footer";
import CounterApp from "../CounterApp/CounterApp";
import CounterApp2 from "../CounterApp2/CounterApp2";
import TeamSection from "../TeamSection/TeamSection";
import BlogSite from "../Blogsite/BlogSite";
import et1 from "../../assets/et1.jpg";
import et2 from "../../assets/et2.jpg";

const About2 = () => {
    return (
        <div>
            <OnlyHead />
            <div className="aboutus-container">
                {/* Top Section */}
                <section className="aboutus-intro">
                    <div className="aboutus-text">
                        <h4 className="aboutus-subtitle">ABOUT US</h4>
                        <h1 className="aboutus-title">
                            Reliable, Affordable, and Efficient Home Maintenance
                            Services for Repairs, Renovations, and Upkeep
                        </h1>
                        <p className="aboutus-description">
                            With a team of skilled professionals, we ensure
                            reliable, efficient, and affordable services
                            tailored to keep your home in top condition. Whether
                            it’s a quick repair, a major renovation, or regular
                            upkeep, MakanCare is your one-stop solution for a
                            hassle-free home maintenance experience.
                        </p>
                    </div>
                    <div className="aboutus-image">
                        <img src={et1} alt="Cart" />
                        <p className="aboutus-caption">
                            On a mission to remove the complexity of application
                            development on Kubernetes
                        </p>
                    </div>
                </section>

                {/* Partner Logos */}
                <section className="aboutus-partners">
                    <p>
                        We come from a wide range of global technology leaders
                        and fast-paced startups.
                    </p>
                    <div className="aboutus-logos">
                        <span>Google</span>
                        <span>Uber</span>
                        <span>incident.io</span>
                        <span>Duffel</span>
                        <span>Tradeshift</span>
                        <span>Relysys</span>
                        <span>Playable</span>
                    </div>
                </section>

                {/* Why We Started */}
                <section className="aboutus-why">
                    <div className="aboutus-why-text">
                        <h2>Why we started Makan Care</h2>
                        <p>
                            At MakanCare, we started with a simple mission—to
                            make home maintenance easy, reliable, and
                            hassle-free. We understand that finding skilled and
                            trustworthy professionals for household repairs and
                            services can be frustrating, time-consuming, and
                            often expensive. Many homeowners struggle with
                            last-minute emergencies, inconsistent service
                            quality, and unreliable technicians. Seeing this
                            gap, we decided to create a one-stop solution where
                            people can access high-quality, affordable, and
                            professional home care services with just a few
                            clicks. Our goal is to eliminate the stress of home
                            maintenance by connecting homeowners with skilled
                            experts who provide efficient, timely, and top-notch
                            service.
                        </p>
                        <h2>Our Vision</h2>
                        <p>
                            We believe that every home deserves the best
                            care—whether it’s fixing a leaking pipe, installing
                            smart home devices, or deep cleaning for a fresh
                            start. By combining technology with a dedicated team
                            of experts, we aim to simplify home maintenance and
                            create a seamless experience for our customers. With
                            MakanCare, home maintenance is no longer a
                            burden—it’s a service you can trust and rely on. 🚀
                            Would you like to add a personal touch, such as a
                            founding story or inspiration? 
                        </p>
                        <div className="aboutus-metrics">
                            <div>
                                <CounterApp />
                            </div>
                            <div>
                                <CounterApp2 />
                            </div>
                        </div>
                    </div>
                    <div className="aboutus-why-image">
                        <img src={et2} alt="Cart" />
                    </div>
                </section>
            </div>
            <TeamSection />
            <BlogSite />
            <Footer />
        </div>
    );
};

export default About2;
