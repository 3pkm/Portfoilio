export const experienceData = [
  {
    milestone: "MILESTONE 01 • QUANTYC AI (ENTERPRISE AI)",
    title: "AI / Machine Learning Engineering Intern",
    subtitle: "Document AI, LLM Evaluations & Automated PII Redaction",
    period: "Jan 2025 – June 2025",
    periodColor: "bg-secondary-fixed text-on-secondary-fixed",
    location: "Remote, Indonesia",
    points: [
      {
        bold: "Intelligent Document Processing:",
        text: "Built production extraction pipelines for financial documents using Azure Document Intelligence; leveraged prebuilt layouts, custom Neural & Template models, and polygon-based bounding boxes to optimize OCR accuracy."
      },
      {
        bold: "LLM Engineering & Benchmarking:",
        text: "Evaluated multi-format OCR pipelines leveraging GPT-4o via Azure AI Foundry and Claude 3.5/3.7 Sonnet via Amazon Bedrock, establishing Claude 3.7 as the production benchmark for unstructured data extraction."
      },
      {
        bold: "50% Operational Cost Cut:",
        text: "Architected an asynchronous batch extraction workflow utilizing Anthropic Batch API, cutting LLM token overhead by 50% while maintaining zero degradation in extraction fidelity."
      },
      {
        bold: "Automated PII Redaction Engine:",
        text: "Engineered a privacy engine using Microsoft Presidio and spaCy NLP; developed scripts to detect, encrypt, or visually blur PII across structured/unstructured PDFs and scanned records."
      }
    ],
    stack: [
      { name: "Python 3.11", highlight: false },
      { name: "Claude 3.7 Sonnet", highlight: true, color: "bg-secondary-fixed text-on-secondary-fixed font-bold" },
      { name: "Azure AI Foundry", highlight: false },
      { name: "Amazon Bedrock", highlight: false },
      { name: "Presidio", highlight: true, color: "bg-tertiary-fixed text-on-tertiary-fixed font-bold" },
      { name: "spaCy", highlight: false }
    ]
  },
  {
    milestone: "MILESTONE 02 • MIT WORLD PEACE UNIVERSITY",
    title: "Student Placement Representative",
    subtitle: "Corporate Outreach, Drive Logistics & Candidate Mentorship",
    period: "Sep 2024 – Present",
    periodColor: "bg-tertiary-fixed text-on-tertiary-fixed",
    location: "Pune, Maharashtra",
    points: [
      {
        bold: "Corporate Recruitment Coordination:",
        text: "Serving as official department liaison between tech recruiters and student candidates for full-time and internship placement drives."
      },
      {
        bold: "Drive Operations & Scheduling:",
        text: "Managing campus placement drive logistics, test lab environments, technical interview scheduling, and candidate verification."
      },
      {
        bold: "Peer Mentorship & Mock Sessions:",
        text: "Mentoring junior cohorts in algorithmic problem-solving, data structures, AI/ML fundamentals, and technical resume structuring."
      }
    ],
    stack: [
      { name: "Department Leadership", highlight: false },
      { name: "Campus Recruitment", highlight: true, color: "bg-tertiary-fixed text-on-tertiary-fixed font-bold" },
      { name: "Technical Mentorship", highlight: false },
      { name: "Drive Operations", highlight: false }
    ]
  },
  {
    milestone: "MILESTONE 03 • APPLIED RESEARCH & DIAGNOSTICS",
    title: "Non-Invasive Diagnostics & Vision Systems",
    subtitle: "Multi-Regional Processing & Industrial Inspection",
    period: "2024 – 2025",
    periodColor: "bg-surface-container text-primary",
    location: "Academic & Independent",
    points: [
      {
        bold: "Quad Processing Pipeline:",
        text: "Designed multi-input anatomical diagnostic architecture aggregating palmar pallor, nail bed capillary refill, and conjunctival vascularity."
      },
      {
        bold: "Deep Learning Feature Extraction:",
        text: "Fine-tuned ResNet50 and EfficientNet-B0 backbones for multi-class classification and confidence calibration."
      },
      {
        bold: "Industrial Defect Detection:",
        text: "Built YOLOv8-Seg models capable of high-throughput defect localization with synthetic augmentation pipelines."
      }
    ],
    stack: [
      { name: "PyTorch", highlight: false },
      { name: "OpenCV", highlight: true, color: "bg-secondary-fixed text-on-secondary-fixed font-bold" },
      { name: "YOLOv8-Seg", highlight: false },
      { name: "FastAPI", highlight: false }
    ]
  }
];
