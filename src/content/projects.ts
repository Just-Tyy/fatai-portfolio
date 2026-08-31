export type ProjectMetric = {
  value: string;
  label: string;
  detail: string;
};

export type ArchitectureNode = {
  id: string;
  label: string;
  eyebrow: string;
  description: string;
};

export type ProjectSection = {
  id: string;
  label: string;
};

export const customerRetentionProject = {
  slug: "customer-retention-intelligence",
  number: "01",
  title: "Customer Retention Intelligence Platform",
  kicker: "Machine Learning Decision Intelligence",
  statement: "Customer churn isn't the problem.",
  substatement: "Knowing who to act on — before they leave — is.",
  summary:
    "An end-to-end customer retention intelligence platform designed to move churn analysis beyond prediction and toward prioritised, explainable retention decisions.",
  metrics: [
    {
      value: "7,000+",
      label: "customer records",
      detail:
        "Customer-level data processed across roughly 50 attributes spanning ingestion, validation, feature engineering and inference.",
    },
    {
      value: "0.862",
      label: "ROC-AUC",
      detail:
        "Holdout discrimination achieved by the CatBoost churn model, alongside 80.4% holdout accuracy and 0.596 F1-score.",
    },
    {
      value: "5,000",
      label: "batch capacity",
      detail:
        "Maximum records supported by the bulk inference workflow in a single batch request.",
    },
  ] satisfies ProjectMetric[],
  architecture: [
    {
      id: "data",
      label: "DATA",
      eyebrow: "01 · INGEST",
      description:
        "Customer data enters a validated analytical pipeline before any modelling or inference is allowed to happen.",
    },
    {
      id: "validation",
      label: "VALIDATE",
      eyebrow: "02 · QUALITY",
      description:
        "Schema, data-type and business-rule checks reduce avoidable inference errors and keep downstream features consistent.",
    },
    {
      id: "features",
      label: "FEATURES",
      eyebrow: "03 · TRANSFORM",
      description:
        "Raw customer attributes are transformed into model-ready features using the same logic across training and production inference.",
    },
    {
      id: "model",
      label: "CATBOOST",
      eyebrow: "04 · PREDICT",
      description:
        "The production classifier estimates churn risk using a model selected and evaluated beyond simple accuracy.",
    },
    {
      id: "explain",
      label: "SHAP",
      eyebrow: "05 · EXPLAIN",
      description:
        "Customer-level SHAP explanations expose the factors driving each prediction instead of returning an unexplained score.",
    },
    {
      id: "decision",
      label: "DECIDE",
      eyebrow: "06 · ACT",
      description:
        "Risk, customer context and revenue exposure are combined into decision-support workflows that help prioritise retention action.",
    },
  ] satisfies ArchitectureNode[],
  sections: [
    { id: "problem", label: "Problem" },
    { id: "approach", label: "Approach" },
    { id: "architecture", label: "Architecture" },
    { id: "performance", label: "Performance" },
    { id: "product", label: "Product" },
    { id: "engineering", label: "Engineering" },
    { id: "results", label: "Results" },
  ] satisfies ProjectSection[],
  underTheHood: {
    overview:
      "The platform predicts churn, explains individual risk and translates model outputs into customer-level retention intelligence.",
    technical: [
      "Validated ETL and preprocessing pipeline",
      "CatBoost classification with structured holdout evaluation",
      "Cross-validation and multiple evaluation metrics",
      "FastAPI inference endpoints",
      "Individual and batch scoring workflows",
      "SHAP-based local explainability",
      "Revenue-at-risk analysis",
      "PDF, CSV and Excel reporting",
      "Docker containerisation",
      "Render deployment",
    ],
  },
  techGroups: [
    ["MODELLING", ["CatBoost", "Scikit-learn", "SHAP"]],
    ["BACKEND", ["Python", "FastAPI", "REST APIs"]],
    ["DATA", ["Pandas", "SQLite", "Validation", "ETL"]],
    ["PRODUCT", ["Streamlit", "Plotly", "Reporting"]],
    ["INFRASTRUCTURE", ["Docker", "Render"]],
  ] as [string, string[]][],
};

export const enterpriseKnowledgeProject = {
  slug: "enterprise-knowledge-intelligence",
  number: "02",
  title: "Enterprise Knowledge Intelligence Platform",
  kicker: "Enterprise RAG · Multi-Agent Retrieval · Grounded AI",
  statement: "Companies rarely have an information shortage.",
  substatement:
    "They have an “I know the answer is somewhere in these documents” problem.",
  summary:
    "An enterprise knowledge intelligence system designed to retrieve, rank, reason over, synthesise and verify organisational knowledge rather than treating RAG as a simple prompt-plus-vector-search pattern.",
  metrics: [
    {
      value: "3",
      label: "LLM providers",
      detail:
        "Groq, Google Gemini and Hugging Face are abstracted behind a resilient multi-provider inference architecture.",
    },
    {
      value: "3",
      label: "reasoning routes",
      detail:
        "Enterprise retrieval, policy intelligence and hybrid research workflows follow different retrieval and reasoning paths.",
    },
    {
      value: "1",
      label: "verification layer",
      detail:
        "Evidence judgment, citation canonicalisation and post-generation grounding checks sit between retrieval and the final answer.",
    },
  ] satisfies ProjectMetric[],
  architecture: [
    {
      id: "query",
      label: "QUERY",
      eyebrow: "01 · INPUT",
      description:
        "A user query enters the system and is classified before retrieval starts.",
    },
    {
      id: "route",
      label: "ROUTE",
      eyebrow: "02 · ORCHESTRATE",
      description:
        "The request is routed into enterprise retrieval, policy intelligence or hybrid research depending on intent.",
    },
    {
      id: "retrieve",
      label: "RETRIEVE",
      eyebrow: "03 · EVIDENCE",
      description:
        "Semantic and metadata-aware retrieval surfaces candidate evidence from the relevant knowledge scope.",
    },
    {
      id: "rank",
      label: "RANK",
      eyebrow: "04 · RELEVANCE",
      description:
        "Relevance gating, route-aware ordering and bounded comparison logic reduce noisy context before generation.",
    },
    {
      id: "judge",
      label: "JUDGE",
      eyebrow: "05 · AUTHORITY",
      description:
        "The Evidence Judge evaluates the supporting material and helps determine which excerpts deserve to influence the answer.",
    },
    {
      id: "synthesise",
      label: "SYNTHESISE",
      eyebrow: "06 · GENERATE",
      description:
        "Answer synthesis is intentionally separated from retrieval so reasoning and generation responsibilities remain observable.",
    },
    {
      id: "verify",
      label: "VERIFY",
      eyebrow: "07 · GROUND",
      description:
        "The final response is checked against supporting evidence, with citations canonicalised before the answer is returned.",
    },
  ] satisfies ArchitectureNode[],
  sections: [
    { id: "problem", label: "Problem" },
    { id: "approach", label: "Approach" },
    { id: "architecture", label: "Architecture" },
    { id: "routes", label: "Routes" },
    { id: "verification", label: "Verification" },
    { id: "product", label: "Product" },
    { id: "results", label: "Results" },
  ] satisfies ProjectSection[],
  underTheHood: {
    overview:
      "The system retrieves enterprise knowledge, reasons through specialised workflows and verifies evidence before returning a grounded response.",
    technical: [
      "Document ingestion and metadata enrichment",
      "Sentence-transformer embeddings and vector indexing",
      "Semantic retrieval and relevance gating",
      "Route-aware evidence ordering",
      "Enterprise Retrieval Agent",
      "Policy / Authority Agent",
      "Web Research Agent",
      "Evidence Judge",
      "Answer synthesis and grounding verification",
      "Citation canonicalisation",
      "Groq, Gemini and Hugging Face provider abstraction",
      "Request diagnostics and provider telemetry",
      "Regression benchmarking and cross-provider reliability evaluation",
      "FastAPI backend and typed Next.js frontend",
    ],
  },
  techGroups: [
    ["INTELLIGENCE", ["LangChain", "LangGraph", "Sentence Transformers"]],
    ["PROVIDERS", ["Groq", "Google Gemini", "Hugging Face"]],
    ["RETRIEVAL", ["ChromaDB", "Metadata", "Semantic Search"]],
    ["BACKEND", ["Python", "FastAPI", "PostgreSQL"]],
    ["PRODUCT", ["Next.js", "React", "TypeScript", "Tailwind CSS"]],
  ] as [string, string[]][],
};
