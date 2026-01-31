export const personalData = {
  name: "Priyansh Gupta",
  role: "AI/ML Engineer | Data Scientist",
  email: "priyanshgupta412@gmail.com",
  phone: "+91 91481 77956",
  location: "Bangalore, India",
  bio: "Computer Science Engineering student specializing in generative AI and advanced machine learning systems. Passionate about pioneering novel solutions in goal-oriented agents and knowledge graphs. Proven ability to translate cutting-edge AI research into scalable, high-impact systems.",
  social: {
    github: "https://github.com/Priyansh295",
    linkedin: "https://www.linkedin.com/in/priyansh-gupta-816089291/",
  },
  skills: [
    { category: "Languages", items: ["Python", "JavaScript", "C++", "SQL", "Java"] },
    { category: "AI/ML", items: ["PyTorch", "TensorFlow", "Transformers", "Mamba", "Diffusion", "NAS", "Meta-Heuristics (GA, PSO)", "RAG", "LangChain", "Gemini API"] },
    { category: "Web", items: ["React.js", "Vue.js", "Node.js", "Express.js", "Next.js", "Tailwind CSS", "MySQL", "PostgreSQL"] },
    { category: "Tools", items: ["Docker", "GCP", "Git", "Kubernetes", "REST APIs"] },
  ],
  experience: [
    {
      role: "AI/ML Engineering Intern",
      company: "Securacy.ai",
      period: "Jan 2026 - Present",
      description: "Architected DFD engine with trust zone modeling edge semantics, migrating graph processing to Python backend. Engineered Vue.js frontend with real-time state management.",
    },
    {
      role: "Teaching Assistant & Developer",
      company: "PES University",
      period: "Jan 2024 - Present",
      description: "Built full-stack AI lab portal (React/Node) serving 200+ students. Designed interactive ML modules translating complex AI concepts, increasing lab completion rates by 45%.",
    },
  ],
  education: [
    {
      degree: "B.Tech in CS (AI/ML Specialization)",
      institution: "PES University",
      period: "2022 - 2026",
      score: "CGPA: 8.0/10",
    },
    {
      degree: "Senior Secondary Education",
      institution: "Trisha PU College",
      period: "2020 - 2022",
      score: "80%",
    },
  ],
  projects: [
    // --- RESEARCH PAPERS ---
    {
      title: "WaveMamba",
      category: "Research",
      tech: ["PyTorch", "Mamba", "Wavelets", "Python"],
      description: "Novel architecture combining State Space Models with Wavelet transforms for blind image inpainting.",
      github: "https://github.com/Priyansh295/Omni_MetaH",
      demo: "",
      details: {
        status: "Submitted to ICML 2026 (Under Review)",
        problem: "Blind image inpainting requires restoring corrupted images without knowing the corruption mask, which is computationally expensive for Transformers.",
        solution: "Wavelet-Guided Selective State Space Model (WG-SSM) modulates Mamba's selection parameters using wavelet-derived frequency priors. Low-frequency coefficients preserve structure, while high-frequency ones preserve texture.",
        features: [
          "Frequency-Aware Loss for structural/textural fidelity",
          "Meta-heuristic controller (GA, PSO, Bayesian Opt) for hyperparameter optimization",
          "O(N) complexity vs O(N²) in Transformers"
        ],
        results: [
          "PSNR ≈ 30.2 dB in just 20,000 iterations",
          "40% inference latency reduction vs. pure transformers",
          "Tested on 30,000 images (CelebA-HQ, Paris Street View, Places2)"
        ]
      }
    },
    {
      title: "Temporal GNNs",
      category: "Research",
      tech: ["GNNs", "Continual Learning", "Python"],
      description: "Adaptive Memory Consolidation framework to mitigate catastrophic forgetting in dynamic graphs.",
      github: "",
      demo: "",
      details: {
        status: "Accepted in KAIS Journal (Under Review)",
        authors: "V. Palled, Y. Gawhale, Priyansh Gupta, B. Das",
        problem: "Temporal GNNs 'forget' older patterns when trained on new data streams (catastrophic forgetting).",
        solution: "Adaptive Memory Consolidation (AMC) framework that introduces novel memory consolidation techniques for continual learning.",
        results: [
          "91.2% accuracy on Reddit Hyperlink Network dataset",
          "19.5 percentage point improvement over Experience Replay baseline"
        ]
      }
    },
    {
      title: "Misinformation Detection",
      category: "Research",
      tech: ["LLaMA 2", "Snorkel", "Weak Supervision"],
      description: "Pipeline generating weak labels using LLaMA 2 + Snorkel to detect fake news with minimal labeled data.",
      github: "",
      demo: "",
      details: {
        status: "Published at ICTIS 2025, Bangkok",
        authors: "Y. Gawhale, Priyansh Gupta, V. Palled, B. Das",
        problem: "Detecting misinformation typically requires expensive, large-scale manual labeling.",
        solution: "A pipeline of weak supervisions using LLaMA 2 and Snorkel to programmatically generate labels and train a robust classifier.",
        results: [
          "25 percentage point F1-macro improvement (0.71 vs 0.46) over fine-tuned RoBERTa",
          "Superior cross-domain robustness"
        ]
      }
    },
    {
      title: "Vision KANs",
      category: "Research",
      tech: ["PyTorch", "KANs", "CNNs"],
      description: "Comparative study exploring Kolmogorov-Arnold Networks (KAN) for computer vision tasks.",
      github: "",
      demo: "",
      details: {
        status: "Published at ICoCAT 2025",
        problem: "Exploring if the new Kolmogorov-Arnold representation theorem can replace MLPs in vision models.",
        solution: "Integrated KAN layers into standard vision architectures to benchmark performance against traditional CNNs/MLPs.",
        results: [
          "80.4% accuracy on vision benchmarks",
          "Improved VGG-16 accuracy by 4.3%"
        ]
      }
    },

    // --- PROJECTS ---
    {
      title: "AgriChat",
      category: "AI/ML",
      tech: ["Python", "LangChain", "GPT-3.5", "GCP", "React", "Gemini API"],
      description: "Production RAG chatbot for farmers achieving 95% accuracy in plant disease detection.",
      github: "https://github.com/Priyansh295/AgriChat",
      demo: "",
      details: {
        status: "Deployed",
        problem: "Farmers need accessible, accurate answers to agriculture questions from diverse and scattered datasets.",
        solution: "Multimodal RAG chatbot using LangChain pipelines to integrate GPT-3.5 and Gemini. Deployed on GCP with secure authentication.",
        results: [
          "95% query accuracy",
          "60% reduction in response time",
          "40+ crop species covered"
        ]
      }
    },
    {
      title: "AutoCommerce Manager",
      category: "Web Dev",
      tech: ["React.js", "Node.js", "MySQL", "Docker", "Express.js"],
      description: "Full-stack inventory system with ACID transactions, RBAC, and containerized deployment.",
      github: "https://github.com/Priyansh295/retail-managments-system",
      demo: "",
      details: {
        problem: "Retail systems often lack robust concurrency handling and role management.",
        solution: "E-commerce platform with RBAC (3+ tiers), ACID-compliant transaction management, and strategic schema indexing.",
        results: [
          "500+ concurrent inventory operations supported",
          "35% faster order processing",
          "40% reduced database load"
        ]
      }
    },
    {
      title: "AI Article Summarizer",
      category: "Web/AI Integration",
      tech: ["JavaScript", "Chrome API", "Gemini API"],
      description: "Chrome extension extracting and summarizing long-form content with multi-level reports.",
      github: "https://github.com/Priyansh295/ESNAI-Article-Summarizer",
      demo: "",
      details: {
        status: "Published to Chrome Web Store",
        problem: "Users struggle to digest long-form content quickly and effectively directly in the browser.",
        solution: "Chrome extension using Gemini API for intelligent parsing and summarization, with graceful fallback for incomplete sources.",
        results: [
          "100+ active users",
          "99% service reliability"
        ]
      }
    },
  ],
};
