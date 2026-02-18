function Projects () {
    function ProjectCard ({ title, description, link, language }) {
        return (
            <div className="ProjectCard">
                <p><strong>{title}</strong></p>
                <p>{language}</p>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        );
    }

    return (
        <section id="Projects">
            <div className="ProjectsArea">
                <h2>Projects</h2>
                <ProjectCard 
                    title="Elite Star Router" 
                    description="program that can open csv file and filter it as user wants it to be displayed" 
                    link="https://github.com/Beolpluusor/eliteStarRouter" 
                    language="Python"
                />
                <ProjectCard 
                    title="Project AA V2" 
                    description="a small project of making react website that has frontend and backend, its a small Arcade website with 2 games and a hall-of-fame page" 
                    link="https://github.com/Beolpluusor/projectaa-v2" 
                    language="React, Node.js, Express"
                />
            </div>
        </section>
    );
}

export default Projects;