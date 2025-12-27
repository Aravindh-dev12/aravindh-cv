import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import ScrollReveal from "@/components/scroll-reveal";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { Footer } from "@/components/footer";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.01;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-6">
      <section id="hero" className="pt-8">
        <div className="mx-auto w-full max-w-2xl space-y-4">
          <div className="gap-4 flex justify-between items-center">
            <div className="flex-col flex flex-1 space-y-3">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent"
                yOffset={8}
                text={`Sup, ${DATA.name} here`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl text-muted-foreground"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border-2 border-blue-500/30 dark:border-blue-400/40 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-blue-400/20 hover:border-blue-500/60 dark:hover:border-blue-400/60">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <ScrollReveal>
        <section id="about" className="space-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              About
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert leading-relaxed">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-1">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                Education
              </h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}

                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`} logoUrl={""}                />
              </BlurFade>
            ))}
          </div>
        </section>
      </ScrollReveal>
      <ScrollReveal delay={50}>
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-0">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                Work Experience
              </h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                <ResumeCard
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      </ScrollReveal>
      <ScrollReveal delay={100}>
      <section id="projects">
        
        <div className="space-y-8 w-full py-6 w-screen relative left-1/2 -translate-x-1/2">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Stuff I built while the world slept
              </h2>
            </div>
          </BlurFade>

          {/* Increased max width and added horizontal padding */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto px-6 w-[clamp(40%,90vw,1000px)]">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <ProjectCard
                href={DATA.projects[0]?.href}
                title={DATA.projects[0]?.title}
                description={DATA.projects[0]?.description}
                tags={DATA.projects[0]?.technologies}
                image={DATA.projects[0]?.image}
                links={DATA.projects[0]?.links}
              />
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 12 + 0.05}>
              <ProjectCard
                href={DATA.projects[1]?.href}
                title={DATA.projects[1]?.title}
                description={DATA.projects[1]?.description}
                tags={DATA.projects[1]?.technologies}
                image={DATA.projects[1]?.image}
                links={DATA.projects[1]?.links}
              />
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 12 + 0.1}>
              <ProjectCard
                href={DATA.projects[2]?.href}
                title={DATA.projects[2]?.title}
                description={DATA.projects[2]?.description}
                tags={DATA.projects[2]?.technologies}
                image={DATA.projects[2]?.image}
                links={DATA.projects[2]?.links}
              />
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 12 + 0.15}>
              <ProjectCard
                href={DATA.projects[3]?.href}
                title={DATA.projects[3]?.title}
                description={DATA.projects[3]?.description}
                tags={DATA.projects[3]?.technologies}
                image={DATA.projects[3]?.image}
                links={DATA.projects[3]?.links}
              />
            </BlurFade>

            {/* NEW - extra project 5 */}
            <BlurFade delay={BLUR_FADE_DELAY * 12 + 0.2}>
              <ProjectCard
                href={DATA.projects[4]?.href}
                title={DATA.projects[4]?.title}
                description={DATA.projects[4]?.description}
                tags={DATA.projects[4]?.technologies}
                image={DATA.projects[4]?.image}
                links={DATA.projects[4]?.links}
              />
            </BlurFade>

            {/* NEW - extra project 6 */}
            <BlurFade delay={BLUR_FADE_DELAY * 12 + 0.25}>
              <ProjectCard
                href={DATA.projects[5]?.href}
                title={DATA.projects[5]?.title}
                description={DATA.projects[5]?.description}
                tags={DATA.projects[5]?.technologies}
                image={DATA.projects[5]?.image}
                links={DATA.projects[5]?.links}
              />
            </BlurFade>
          </div>
        </div>
      </section>

      </ScrollReveal>
      <ScrollReveal delay={150}>
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold text-center bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                Skills
              </h2>
            </BlurFade>
            <div className="flex flex-wrap gap-2 justify-center">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge variant="subtle" className="hover:scale-105 transition-transform">
                    {skill}
                  </Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
  <section id="blogs">
    <div className="space-y-8 w-full py-6 w-screen relative left-1/2 -translate-x-1/2">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-gray-900 dark:text-white">
            Thoughts I shared with the world
          </h2>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto px-6 w-[clamp(40%,90vw,1000px)]">
        {DATA.blogs.map((blog, idx) => (
          <BlurFade delay={BLUR_FADE_DELAY * 12 + idx * 0.05} key={blog.title}>
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group flex flex-col">
              
              {/* Image with overlay */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Title and excerpt */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-5">
                  {blog.excerpt}
                </p>

                {/* Read Blog button */}
                <a
                  href={blog.href}
                  className="mt-auto inline-block border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 font-medium px-4 py-2 rounded-xl text-center hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 transition-colors"
                >
                  Read Blog
                </a>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  </section>
</ScrollReveal>

      {/* <ScrollReveal delay={175}>
        <section id="testimonials" className="mt-12 mb-12">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 17}>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                  Client Testimonials
                </h2>
                <p className="text-sm text-muted-foreground">What people say about working with me</p>
              </div>
            </BlurFade>
            <div className="relative w-full min-h-[800px] md:min-h-[1200px] max-w-6xl mx-auto px-8">
              {DATA.testimonials.map((testimonial, id) => (
                <BlurFade key={id} delay={BLUR_FADE_DELAY * 19 + id * 0.05}>
                  <TestimonialCard
                    image={testimonial.image}
                    rotation={testimonial.rotation}
                    position={testimonial.position}
                    size={testimonial.size}
                    zIndex={testimonial.zIndex}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
       */}

     
      <ScrollReveal delay={250}>
        <section id="contact" className="pb-12">
          <div className="flex min-h-0 flex-col gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                Connect With Me
              </h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <p className="text-center text-sm text-muted-foreground max-w-md mx-auto">
                Let&apos;s build something great together. Feel free to reach out for collaborations or just a friendly chat.
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="flex flex-wrap gap-4 justify-center items-center mt-6">
                <a
                  href="https://cal.com/aravindhan-b-n2l0be/aravindh-b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold text-sm shadow-md"
                >
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
                  </svg>
                  Schedule a Call
                </a>
              </div>
            </BlurFade>
          </div>
        </section>
      </ScrollReveal>
      <Footer />
    </main>
  );
}