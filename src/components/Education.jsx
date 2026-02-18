function Education () {

    function EduCard ({ institution, degree, graduationDate }) {
        return (
            <div className="EduCard">
                <p><strong>{institution}</strong></p>
                <p>{degree}, {graduationDate}</p>
            </div>
        );
    }

    return (
        <section id="Education">
            <div className="EducationArea">
                <h2>Education</h2>
                <EduCard 
                    institution="Riveria - programming" 
                    degree="Programmer specialist" 
                    graduationDate="2025 - >" 
                />

                <EduCard 
                    institution="Riveria - forestry" 
                    degree="Forestry worker / Forest service Producer" 
                    graduationDate="2022 - 2025" 
                />

                <EduCard 
                    institution="Vocational School, Nurmes - Information Technology" 
                    degree="Vocational Qualification in Information and Communications Technology (ICT)" 
                    graduationDate="2005 - 2008" 
                />
            </div>
        </section>
    );
}
export default Education;