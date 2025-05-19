import { Briefcase, Code, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-24 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer and Lifelong Learner
            </h3>

            <p className="text-muted-foregound">
              As a fresher, I’m currently undergoing a 6-month training program
              in web development I’m actively learning and working on the MERN
              stack (MongoDB, Express.js, React, Node.js) and responsive design.
              This training has helped me build real-world projects, strengthen
              my problem-solving skills, and work both independently and in
              teams. I’m eager to apply this knowledge in a professional
              environment{" "}
            </p>

            <p className="text-muted-foregound">
              I’m a passionate web developer who enjoys building visually
              appealing and highly functional websites. I thrive on working with
              the latest technologies and constantly seek opportunities to learn
              and grow as a developer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button" >
                {" "}
                Get In Touch
              </a>

              <a
                href="/projects/Resume.Rohit.pdf" 
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transistion-colors duration-300" target="_blank"
              >
                {" "}
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary " />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications woth
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary " />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and creating seamless
                    user experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary " />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects on my own from planning to completion,
                    adapting as needed along the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
