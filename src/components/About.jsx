
function About() {
    function WhoAmI() {
        return (
            <div>
                <h2>Greetings</h2>
                <p>
                    my name is Arttu Sonne and Im from Joensuu, age is 43.<br /> 
                </p>
                <h3>something about myself</h3>
                <p>
                    I am a passionate and dedicated individual with a strong interest in technology and software development since my childhood.<br />
                    I have a background in IT from vocational studies and hobbies, which has provided me with a solid foundation in various aspects of technology.<br />
                    currently pursuing my studies in full-stack development at Riveria, where I am gaining hands-on experience in building web applications using modern technologies.<br />
                </p>
            </div>
        )
    }

    function Hobbies() {
        return (
            <div>
                <h3>Hobbies and freetime</h3>
                <p>
                    Science-fiction fan and in my freetime I like to play games on PC / Nintendo. <br />
                    Outside activities are Mountain Biking and small game hunting.
                </p>
            </div>
        )
    }

    function LinksAndOther() {
        return (
            <div>
                <h2>my projects and linkedin links</h2>
                <p>
                    Github <a href="https://github.com/Beolpluusor" target="_blank" rel="noopener noreferrer">Beolpluusor</a><br />
                    Linkedin <a href="https://www.linkedin.com/in/arttu-sonne-40428b294/" target="_blank" rel="noopener noreferrer">Arttu Sonne</a>
                </p>
            </div>
        )
    }

    function Contact() {
        return (
            <div>
                <h2>Contact</h2>
                <p>
                    email: <a href="mailto:arttu.sonne@live.co.uk">arttu.sonne@live.co.uk</a>
                </p>
            </div>
        )
    }
    return (
        <section id="About">
            <h2>Introduction</h2>
            <WhoAmI />
            <Hobbies />
            <LinksAndOther />
            <Contact />
        </section>
    );
}

export default About;