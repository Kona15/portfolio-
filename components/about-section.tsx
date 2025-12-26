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
                src="/codenesx.jpeg"
                alt="Femi-Makinsun Praise - Full Stack Developer"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in technology began with a curiosity about how the web works, which has since evolved into a
                 career focused on building scalable web applications and data-driven machine learning solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a Computer Science graduate based in Lagos, I specialize in bridging the gap between robust backend
                 architecture and intelligent data models. Whether I'm building responsive interfaces with React or training 
                 NLP models for indigenous languages, I am passionate about creating digital solutions that make a real impact.
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
