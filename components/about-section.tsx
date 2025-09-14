import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/professional-developer-portrait.png"
                alt="Femi-Makinsun Praise - Full Stack Developer"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in web development started with a curiosity about how websites work, and it has evolved into
                a career focused on building scalable, accessible, and performant web applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a full stack developer based in Lagos, Nigeria, I'm passionate about creating digital solutions that
                make a real impact. I specialize in modern web technologies and have a keen eye for both user experience
                and robust backend architecture.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </Card>
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
