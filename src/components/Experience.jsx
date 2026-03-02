function Experience () {

    function ExperienceCard ({ company, position, description, date }) {
        return (
            <div className="ExperienceCard">
                <p><strong>{company}</strong></p>
                <p>{position}, {date}</p>
                <p>{description}</p>
            </div>
        );
    }

    return (
        
        <>

            <section id="Experience">
                <div className="ExperienceArea">
                    <h2>Work Experience</h2>
                    <section id="year-2024">
                        <ExperienceCard 
                            company="Metsäpalvelu ryteikönraivaaja" 
                            position="Forestry worker" 
                            description="Brush saw work and forest planting tasks" 
                            date="2023 - 2024" 
                        />
                    </section>
                    <section id="year-2020">
                        <ExperienceCard 
                            company="Valukumpu" 
                            position="Quality inspector" 
                            description="Quality control and monitoring production line processes and ensuring product standards" 
                            date="2020 - 2023" 
                        />
                    </section>
                    <section id="year-2018">
                        <ExperienceCard 
                            company="Murata Electronics" 
                            position="Processing Operator" 
                            description="Two shift testing and packaging of acceleration and angular velocity sensors" 
                            date="2018 - 2020" 
                        />
                    </section>
                    <section id="year-2017">
                        <ExperienceCard 
                            company="Bearen Oy" 
                            position="nano layer coater and cleaner" 
                            description="installation and cleaning of nano layer in wet rooms" 
                            date="2017 - 2018" 
                        />
                    </section>
                    <section id="year-2015">
                        <ExperienceCard 
                            company="McDonald's - Vantaa" 
                            position="Kitchen worker" 
                            description="kitchen work and customer service" 
                            date="2015 - 2017" 
                        />
                    </section>
                    <section id="year-2013">
                        <ExperienceCard 
                            company="Hesapro Oy" 
                            position="construction Worker" 
                            description="assisting on constcruction sites and performing various tasks as needed" 
                            date="2013 - 2015" 
                        />
                    </section>
                </div>
            </section>
        </>
    );
}       
export default Experience;
