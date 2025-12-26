import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
    image: "/modern-ecommerce-interface.png",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "https://nextjs-commerce-demo.vercel.app",
    githubUrl: "https://github.com/vercel/commerce",
  },
  {
    title: "Yoruba Text Classification Model",
    description:
      "A machine learning-powered system designed to classify Yoruba news articles into five categories: Politics, Sports, Entertainment, Health, and Business.",
    image: "/yoruba.JPG",
    tech: ["Python", "Scikit-learn", "Tailwind CSS", "TF-IDF", "Next.js"],
    liveUrl: "https://yoruba-news-classifier.vercel.app",
    githubUrl: "https://github.com/yogeshojha/react-kanban-board",
  },
  {
    title: "University Surveillance & Guidance System",
    description:
      "A comprehensive web-based platform. It features administrative oversight for security and a student dashboard for navigation and communication",
    image: "/surveilance.JPG",
    tech: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS"],
    liveUrl: "https://guidance.rf.gd/BOUESTI-SmartCollege",
    githubUrl: "https://github.com/iamstevendao/vue-weather-app",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing creative work with smooth animations and optimized performance.",
    image: "/creative-portfolio-website.png",
    tech: ["Gatsby", "GraphQL", "Contentful", "GSAP"],
    liveUrl: "https://gatsby-portfolio-demo.netlify.app",
    githubUrl: "https://github.com/LekoArts/gatsby-starter-portfolio-cara",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-accent text-white text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-accent hover:bg-accent/90" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
