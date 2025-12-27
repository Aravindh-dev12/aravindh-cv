import { Icons } from "@/components/icons";
import { Globe, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aravindh",
  url: "https://portfolio.aravindh.online",
  description: "i build digital experiences that tell a story.",
  summary:
    "I love building apps that just work, mixing full stack development with Machine Learning.I learn by building, breaking, and rebuilding, stacking small wins along the way. For me, the fun is in the process making things that actually work and feel right.I enjoy turning ideas into real systems and finding creative ways to solve problems.Every project is a chance to learn something new and push my skills further.",
  avatarUrl: "/madara.jpg",

  // Skills updated to include ML / LLM tooling you added
  skills: [
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "Prisma",
    "MongoDB",
    "Postgres",
    "Redis",
    "Docker",
    "Azure",
    "AWS",
    "WebSocket",
    "WebRTC",
    // ML / LLM
    "PyTorch",
    "Hugging Face",
    "LoRA / PEFT",
    "FAISS",
    "Gradio",
    "Scikit-learn",
    "Pandas",
    "Matplotlib",
    "Transformers",
    "Jupyter-Notebook",
    "PostgreSQL"
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],

  contact: {
    email: "aravindh1653@gmail.com",
    tel: "+91 6379580068",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Aravindh-dev12",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aravindhanb/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@aravindh1653",
        icon: Icons.medium,
        navbar: true,
      },      
      email: {
        name: "Send Email",
        url: "aravindh1653@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Perspectiv Labs",
      href: "https://www.perspectiv.in/",
      badges: [],
      location: "Bengaluru,Karnataka",
      title: "Software Development Engineer",
      logoUrl: "/perspectiv_logo.svg",
      start: "July 2024",
      end: "Present",
    },
    {
      company: "Softapper Tech Solutions",
      href: "https://www.linkedin.com/company/softapper/",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/softapper.jpg",
      start: "May 2024",
      end: "June 2024",
    },
    {
      company: "Freelancer",
      href: "",
      badges: [],
      location: "Remote",
      title: "AI & ML developer",
      logoUrl: "/download.png",
      start: "Sep 2025",
      end: "Present",
    },
  ],

  education: [
    {
      school: "Chettinad College Of Engineering And Technology",
      degree: "Bachelor's Degree in Computer Science Engineering",
      start: "2020",
      end: "2024",
    },
  ],

  projects: [

      {
        title: "Codic",
        href: "https://github.com/Aravindh-dev12/Codic-AI-Coding-Terminal.git",
        dates: "Jan 2025 - Mar 2025",
        active: true,
        description:
          "Built an AI coding terminal: custom shell that builds and edits projects from natural language, integrated with LLM APIs.",
        technologies: ["Python", "Shell", "Docker", "Regex", "Gemini-API"],
        links: [
          {
            type: "Website",
            href: "",
            icon: <Globe className="size-3" />,
          },
        ],
        image: "/promptly.png",
      },
      {
        title: "Reperto AI",
        href: "https://github.com/Aravindh-dev12/Reperto-AI---AI-Medical-LLM.git",
        active: true,
        description:
          "Developed Reperto AI, a clinical case-taking assistant for doctors that interprets patient complaints in natural language (English/Hinglish/local languages). Provides real-time rubric suggestions, guides follow-up questions with Smart Proforma, and performs local repertory calculations to rank remedies—enhancing efficiency without prescribing directly.",
        technologies: ["React Native", "Python", "Local AI Models", "NLP", "Secure Backend APIs", "Offline-first Architecture"],
        links: [
          {
            type: "Website",
            href: "",
            icon: <Globe className="size-3" />,
          },
        ],
        image: "/promptly.png",
      },      
      {
        title: "Detecting Prompt Injections (Binary Classifier)",
        href: "https://github.com/Aravindh-dev12/Detecting-Prompt-Injections-with-Fine-Tuned-Transformer-LLMs-main.git",
        active: true,
        description:
          "Fine-tuned transformer classifiers (RoBERTa / XLNet) to detect malicious prompt injections. Pipeline included data curation, augmentation, hyperparameter sweeps, and robust evaluation (Accuracy / Precision / Recall / F1).",
        technologies: ["Python", "RoBERTa", "XLNet", "PyTorch", "Hugging Face Datasets"],
        links: [
          {
            type: "Website",
            href: "https://huggingface.co/spaces/Aravindhan11/prompt-injections/tree/main",
            icon: <Globe className="size-3" />,
          },
        ],
        image: "/promptly.png",
      },
      {
        title: "AI App Generator — Codie",
        href: "https://github.com/Aravindh-dev12/codie-ai.git",
        active: false,
        description:
          "Codie converts natural-language product descriptions into production-ready web projects with templates, one-click deployments, and real-time collaboration for fast prototyping.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "OpenAI API"],
        links: [
          {
            type: "Website",
            href: "https://codie-ai-xsin.onrender.com/",
            icon: <Globe className="size-3" />,
          },
        ],
        image: "/promptly.png",
      },
      {
        title: "AI-Powered Market Intelligence System",
        href: "https://github.com/Aravindh-dev12/AI_Market_Intelligence.git",
        active: true,
        description:
          "Built an AI-driven market intelligence system for mobile apps and D2C campaigns: ingests multi-source datasets, generates structured insights with GPT-4, and outputs funnel metrics, ad creatives and SEO suggestions.",
        technologies: ["Python", "OpenAI GPT-4", "RapidAPI", "Data Processing", "Markdown Reporting"],
        links: [
          {
            type: "Website",
            href: "https://huggingface.co/spaces/Aravindhan11/AI-Powered-Market-Intelligence",
            icon: <Globe className="size-3" />,
          },
        ],
        image: "/promptly.png",
      },
      {
        title: "Hallucination-Resistant LLM",
        href: "https://github.com/Aravindh-dev12/hallucination_resistant_llm_with_searx_scrapy_retrieval_and_verifier.git",
        active: true,
        description:
          "Implemented a hallucination-resistant language model reducing factual errors by combining external knowledge retrieval with self-verification. Used LoRA/PEFT fine-tuning for domain adaptation to deliver grounded responses in high-stakes domains.",
        technologies: ["Python", "LoRA / PEFT", "FAISS", "Gradio", "Transformers", "Jupyter-Notebook"],
        links: [
          {
            type: "Website",
            href: "https://huggingface.co/spaces/Aravindhan11/hallucination_resistant_llm_with_searx_scrapy_retrieval_and_verifier_ensemble",
            icon: <Globe className="size-3" />,
          },
        ],
        image: "/promptly.png",
      },
      {
        title: "Interview Assistant AI",
        href: "https://github.com/Aravindh-dev12/Bluepilot-Interview-Copilot.git",
        active: true,
        description:
          "Real-time interview assistant: listens to questions, generates candidate answers, and speaks them back using Web Speech API to simulate live interviews.",
        technologies: ["React", "Node.js", "Anthropic API", "Web Speech API", "Tailwind CSS"],
        links: [
          {
            type: "Website",
            href: "",
            icon: <Globe className="size-3" />,
          },
        ],
        image: "/promptly.png",
      },
     
    ],

    blogs: [
      {
        title: "Introduction to Large Language Models and Their Future Scope",
        excerpt: "Modeling human language at a large scale is an extremely complex and resource-intensive task, requiring advances in mathematics, computer science, and data engineering. The development of language models and modern Large Language Models (LLMs) is the result of decades of research and experimentation. Early language models were limited to predicting the probability of a single word based on simple statistical methods, while today’s large language models can generate and analyze entire sentences, paragraphs, and even full documents with remarkable coherence",
        href: "https://medium.com/@aravindh1653/introduction-to-large-language-models-and-their-future-scope-35269fbdd076",
        image: "/llm.jpg",
        tags: ["LLM", "Neural Networks", "Artificial Intelligence"],
        date: "2025-12-26",
      },
      {
        title: "ReACT AI Agents:Smarter AI Through Reasoning and Action",
        excerpt: "Large Language Models(LLM) represent big leap from earlier AI models but it still has limitations in fully mimicking certain aspects of human intelligence, one important area where they fall behind is reasoning and self-improvement — qualities humans naturally exhibit before reaching a conclusion.To overcome this issue the concept of AI agents can be helpful particularly LLM agents. Various groups are now developing what the next generation of AI applications will look like, with an increased usage of compound AI systems like Retrieval-Augmented Generation (RAG).",
        href: "https://medium.com/@aravindh1653/react-ai-agents-smarter-ai-through-reasoning-and-action-1b4f59744ce8",
        image: "/React.gif",
        tags: ["RAG", "React", "LLM agents"],
        date: "2025-12-27",
      },
    ],
    testimonials: [
      {
        image: "/IMG_8619.jpeg",
        rotation: -5,
        position: { top: "0", left: "0" },
        size: { width: "380px", height: "500px" }, // increased
        zIndex: 3,
      },
      {
        image: "/IMG_8621.jpeg",
        rotation: -4,
        position: { top: "800px", left: "0px" }, // maintain spacing
        size: { width: "800px", height: "240px" }, // increased
        zIndex: 8,
      },
      {
        image: "/IMG_8624.jpeg",
        rotation: 4,
        position: { top: "600px", left: "170px" }, // adjusted for bigger top cards
        size: { width: "480px", height: "140px" }, // increased
        zIndex: 2,
      },
    ],
    
    
} as const;
