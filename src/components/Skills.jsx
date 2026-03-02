
function Skills () {

    function SkillLists() {
        return (
            <div>
                <ul>
                    <li><h3>Proficient in JavaScript, React, Node.js, and Python.</h3></li>
                        <dd>Python Basics: ohjelmoinnin MOOC 2024 (mooc.fi)</dd>
                        <dd>Javascript Basics (riveria course)</dd>
                        <dd>Node.js Basics (riveria course)</dd>
                    <br />
                    <li><h3>IT Background from vocational studies and hobbies</h3></li>
                        <dd>since childhood used computers with English language</dd>
                        <dd>builded every computer I have owned</dd>
                    <br />    
                    <li><h3>Moderate problem-solving and communication skills.</h3></li>
                        <dd>understanding importance of log/print to get code inputs/outputs</dd>
                        <dd>Im very humble person and allways open for new ways to learn from eachothers</dd>
                    <br />
                    <li><h3>Git version control experience</h3></li>
                        <dd>every project I have started is in GitHub</dd>
                    <br />
                    <li><h3>AWS academy basic knowledge</h3></li>  
                        <dd>AWS Academy Cloud Foundations - <a  href="/assets/AWS_Cloud_Foundations_Training.pdf">Training Badge</a></dd>
                        <dd>AWS Academy Generative AI Foundations - <a  href="/assets/AWSAcademy_AI.pdf">Training Badge</a></dd>
                    <br />
                    <li><h3>Linux basics</h3></li>
                        <dd>terminal basics</dd>
                    <br />
                    <li><h3>Windows office Basics</h3></li>
                        <dd>ms word</dd>
                        <dd>ms excel</dd>
                        <dd>ms powerpoint</dd>
                </ul>
            </div>
        )
    }

    return (
        <section id="Skills">
            <div className="SkillsArea">
                <h2>Skills</h2>    
                <SkillLists />
            </div>
        </section>
    );
}

export default Skills;
