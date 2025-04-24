export const projects = [
  {
    id: "1",
    title: "Personal Assistant for Blind People",
    excerpt: "Self grooming AI assistant for blind people",
    description:
      "This project presents a comprehensive AI-powered solution aimed at enhancing accessibility and empowerment for visually impaired individuals. It tackles common challenges faced by the community, with a particular focus on self-grooming and environmental perception. At the heart of the project is a dress description feature, which helps users make independent decisions about their attire. Using advanced Visual Question Answering (VQA) models powered by Large Language Models, the system delivers real-time clothing descriptions, boosting users’ confidence and autonomy in their daily routines.\n\nIn addition to dress description, the project integrates several other intelligent features to create a more complete assistive experience. Face identification, built on DeepFace technology, allows for easy recognition of individuals, supporting both social interactions and safety. The object finder, developed using YOLOv5, helps users detect and locate items around them, improving spatial awareness. The scene description module leverages Vision Transformer (ViT) models to generate detailed insights about the user's environment.\n\nBy combining these cutting-edge AI tools, the project aims to support visually impaired users in navigating their world more independently and confidently. It demonstrates the practical impact of modern AI in real-life applications, highlighting its potential to improve the daily lives of those with visual impairments.",
    tech: ["Django", "Transformers", "Yolo v5", "DeepFace", "ViT", "VQA"],
    githubUrl: "https://github.com/jibincb/personal-assistance-updated",
  },
  {
    id: "2",
    title: "HalfDayHire",
    excerpt: "A part-time job hiring platform",
    description:
      "A clean and responsive React website for displaying job listings using Tailwind CSS. This website is designed to show full job details including position, company info, salary, location, and more. This project is incomplete and is intended to be a learning experience for me. The website is built using React and Tailwind CSS.",
    tech: ["React", "Tailwind"],
    githubUrl: "https://github.com/jibincb/halfdayhire",
  },
  {
    id: "3",
    title: "Portfolio Website",
    excerpt: "My personal portfolio website",
    description:
      "This is my personal portfolio website, built using Astro and Tailwind CSS. It showcases my skills, projects, and experience. The website is designed to be responsive and user-friendly, with a clean and modern layout.",
    tech: ["Astro", "Tailwind"],
    githubUrl: "https://github.com/jibincb/jibincbaby",
  },
  {
    id: "4",
    title: "Face recognizer",
    excerpt:
      "Real-time face recognition detection and verification using MTCNN and DeepFace",
    description:
      "This project is a real-time face recognition detection and verification system built using MTCNN and DeepFace. It uses the MTCNN model for face detection and the DeepFace library for face recognition and verification from the known face database. The system is designed to be fast and accurate, making it suitable for real-time applications.",
    tech: ["MTCNN", "DeepFace", "OpenCV"],
    githubUrl: "https://github.com/jibincb/face-identification",
  },
];
