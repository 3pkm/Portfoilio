export const fieldNotesData = [
  {
    entry: "ENTRY #001",
    date: "FEBRUARY 2025",
    readTime: "6 MIN READ",
    tagColor: "text-on-tertiary-container",
    title: "Cutting Production LLM Costs by 50% Using Anthropic Batch API & Async Workers",
    description: "How decoupling non-realtime financial document OCR from synchronous HTTP requests reduced token overhead by half while maintaining high extraction fidelity.",
    takeaways: [
      {
        bold: "1. Asynchronous Ingestion SLA:",
        text: "Financial records (e.g. tax schedules, audit statements) do not require <2 second synchronous latency. By placing incoming documents into an S3 staging queue, a Celery worker dispatches batch JSON payloads once per hour to Anthropic's Batch API endpoints."
      },
      {
        bold: "2. 50% Flat Discount Economics:",
        text: "Anthropic guarantees a 24-hour completion turnaround window (median execution observed under 45 minutes) at exactly 50% of standard token pricing ($1.50/M input vs $3.00/M on Sonnet)."
      },
      {
        bold: "3. Resilience & Rate Limits:",
        text: "Synchronous API limits (RPM/TPM) frequently throttle bursty enterprise bulk uploads. Batch queues bypass concurrency thresholds entirely, eliminating expensive exponential backoff retries."
      }
    ]
  },
  {
    entry: "ENTRY #002",
    date: "JANUARY 2025",
    readTime: "8 MIN READ",
    tagColor: "text-on-secondary-container",
    title: "Architecting a Quad-Independent Processing Pipeline for Non-Invasive Anemia Diagnostics",
    description: "A deep dive into multi-region feature extraction combining conjunctival pallor, palm creases, and nail bed pigmentation with ResNet50 and EfficientNet.",
    takeaways: [
      {
        bold: "1. Multi-Anatomical Redundancy:",
        text: "Palmar erythema is influenced by skin tone and ambient temperature, while conjunctival erythema can be confounded by dust or fatigue. Calibrating across 3 distinct body regions dramatically dampens single-site false positives."
      },
      {
        bold: "2. Colorimetry & Lighting Normalization:",
        text: "Raw RGB values drift drastically across phone cameras. We implemented a reference gray-card color balance algorithm with CIELAB color space transformation to isolate genuine hemoglobin absorption signatures."
      },
      {
        bold: "3. Ensembling Strategy:",
        text: "Independent CNN backbones (ResNet50 for texture/vascularity, EfficientNet-B0 for color distribution) feed into a meta-classifier producing calibrated probabilistic hemoglobin estimates alongside dietary risk scores."
      }
    ]
  },
  {
    entry: "ENTRY #003",
    date: "DECEMBER 2024",
    readTime: "5 MIN READ",
    tagColor: "text-on-tertiary-container",
    title: "Building Privacy-First Document AI: Automated PII Masking with Presidio & spaCy",
    description: "Zero-leakage regulatory compliance: implementing bounding-box image redaction and regex/entity encryption prior to sending files to external LLM providers.",
    takeaways: [
      {
        bold: "1. Pre-Ingestion Interception:",
        text: "PII is stripped strictly on-premise or within isolated VPC boundaries before any payload reaches LLM endpoints. Neither cloud weights nor training logs ever witness plain-text customer identifiers."
      },
      {
        bold: "2. Hybrid Pattern & Context Detection:",
        text: "Regex handles deterministic identifiers (PAN, Aadhaar, IBAN, SSN), while spaCy NLP and Microsoft Presidio evaluate surrounding syntactic context to flag names, addresses, and signatory titles."
      },
      {
        bold: "3. Reversible Token Vault:",
        text: "Sensitive entities are mapped to cryptographic surrogates (e.g. <PERSON_01>) stored in an ephemeral Redis token vault. Extracted structured answers are reconstituted post-inference with zero data leakage."
      }
    ]
  }
];
