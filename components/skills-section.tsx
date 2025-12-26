import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "JavaScript/TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "PHP", level: 80 }, // Skill from University Surveillance project 
      { name: "MySQL/PostgreSQL", level: 85 }, // Database skills [cite: 2, 29]
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Python", level: 85 }, // Primary language for ML [cite: 6, 29]
      { name: "Scikit-learn", level: 80 }, // Used in Yoruba Classifier & Diabetes model 
      { name: "NLP/TF-IDF", level: 82 }, // Core of the Yoruba Text project
      { name: "Data Cleaning", level: 85 }, // Essential ML skill 
      { name: "Pandas/NumPy", level: 78 }, // Data manipulation libraries 
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Jupyter Notebook", level: 80 }, // ML environment 
      { name: "REST APIs", level: 88 },
      { name: "Vercel/Netlify", level: 85 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Skills & Technologies</h2>
          
          {/* Updated grid to lg:grid-cols-4 to accommodate the new Machine Learning card */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-fit">
                <CardHeader>
                  <CardTitle className="text-xl text-center text-accent">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}