# KOMOLAFE — Data Science & Applied AI Portfolio

A production-oriented portfolio showcasing end-to-end Data Science, Machine Learning, Applied AI, API, and product engineering work.

Built by **Komolafe Fatai Abiodun**.

> Good models deserve better than dying inside notebooks.

---

## Overview

This portfolio is designed around a simple idea:

**Data Science should not stop at model training.**

The projects here focus on turning analytical and AI workflows into complete systems that can be explored, tested, deployed, and used.

The portfolio currently features two completed production-oriented systems:

- Customer Retention Intelligence Platform
- Enterprise Knowledge Intelligence Platform

Each project includes a full case study, technical architecture, deployed product, and repository access.

---

## Featured Systems

### Customer Retention Intelligence Platform

An end-to-end machine learning decision intelligence system for customer churn prediction and retention analysis.

Key capabilities include:

- CatBoost production classifier
- 0.862 ROC-AUC
- 0.596 F1 score
- 80.4% holdout accuracy
- SHAP explainability
- Individual prediction workflows
- Batch prediction for up to 5,000 customers
- Customer-level retention intelligence
- PDF, CSV, and Excel reporting
- FastAPI backend
- Streamlit application
- SQLite data layer
- Dockerized deployment

Live product:

https://customer-retention-dashboard-82yx.onrender.com/

---

### Enterprise Knowledge Intelligence Platform

An enterprise Retrieval-Augmented Generation and grounded AI system designed for evidence-aware knowledge retrieval and decision support.

The system uses a multi-stage architecture:

```text
Retrieve
   ↓
Rank
   ↓
Evidence Judge
   ↓
Synthesize
   ↓
Verify
```

Key capabilities include:

- Enterprise RAG
- 3 LLM providers
- 3 reasoning routes
- Enterprise Retrieval
- Policy Intelligence
- Hybrid Research
- Evidence judging
- Grounded answer synthesis
- Verification layer
- Provider abstraction
- FastAPI backend deployed on Railway
- Next.js + React frontend deployed on Vercel

Live product:

https://ekip-production-frontend.vercel.app/

---

## Portfolio Experience

The portfolio itself is built as a production-oriented web experience rather than a static project list.

It includes:

- responsive application shell
- light, dark, and system themes
- adaptive navigation
- animated KOMOLAFE brand system
- interactive project case studies
- recruiter-focused quick scan
- résumé landing experience
- command palette
- responsive desktop, laptop, tablet, split-screen, and mobile behavior
- keyboard focus states
- reduced-motion support
- premium interaction and hover system

---

## Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- App Router
- CSS custom properties
- responsive layout systems

### Data Science & Machine Learning

- Python
- Statistics
- Exploratory Data Analysis
- Feature Engineering
- Machine Learning
- CatBoost
- Model Evaluation
- SHAP
- Predictive Analytics

### Applied AI

- Large Language Models
- Retrieval-Augmented Generation
- Multi-provider inference
- Evidence-aware generation
- Grounding
- Verification
- Prompt engineering
- AI application development

### Backend & Systems

- FastAPI
- REST APIs
- SQLite
- Docker
- production-oriented application architecture

### Deployment

- Vercel
- Railway
- Render
- GitHub

---

## Project Structure

```text
fatai-portfolio
│
├── public
│   ├── brand
│   │   ├── komolafe-wordmark.svg
│   │   └── komolafe-wordmark.png
│   │
│   └── Komolafe-Fatai-Abiodun-Resume.pdf
│
├── src
│   ├── app
│   │   ├── about
│   │   ├── contact
│   │   ├── resume
│   │   └── work
│   │
│   └── components
│       ├── brand
│       ├── layout
│       └── navigation
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## Local Development

Clone the repository and install dependencies:

```powershell
npm install
```

Start the development server:

```powershell
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Production Validation

Run linting:

```powershell
npm run lint
```

Run a production build:

```powershell
npm run build
```

Both should pass before deployment.

---

## Main Routes

```text
/
```

Homepage and project overview.

```text
/about
```

Background, technical thinking, and working philosophy.

```text
/resume
```

Interactive résumé landing experience with access to the full PDF.

```text
/contact
```

Contact and opportunity entry point.

```text
/work/customer-retention-intelligence
```

Customer Retention Intelligence Platform case study.

```text
/work/enterprise-knowledge-intelligence
```

Enterprise Knowledge Intelligence Platform case study.

---

## Design Direction

The visual system intentionally avoids looking like a generic developer portfolio.

The site uses:

- a custom geometric KOMOLAFE wordmark
- emerald interaction accents
- restrained motion
- editorial typography
- system-oriented visual language
- technical diagrams and proof points
- responsive interaction patterns

The goal is not to decorate the work.

The goal is to make the work easier to understand.

---

## Engineering Philosophy

My projects generally follow this progression:

```text
Understand the problem
        ↓
Prepare the data
        ↓
Build the model or intelligence layer
        ↓
Evaluate it properly
        ↓
Expose it through an API
        ↓
Build a usable product around it
        ↓
Deploy it
        ↓
Verify that it still works outside the notebook
```

---

## Résumé

The current portfolio résumé is available directly from the site:

```text
/resume
```

The PDF is stored at:

```text
/public/Komolafe-Fatai-Abiodun-Resume.pdf
```

---

## Contact

**Komolafe Fatai Abiodun**

Data Scientist

Lagos, Nigeria  
Open to Remote, Hybrid & Relocation

LinkedIn:

https://www.linkedin.com/in/fataikomolafe

GitHub:

https://github.com/just-Tyy

Portfolio:

https://fa-komolafe.vercel.app

---

## Status

```text
Portfolio          Production-ready
Featured systems   2 completed
Machine Learning   Live
Applied AI         Live
Case studies       Complete
Résumé             Integrated
Responsive design  Complete
Deployment         Vercel
```

---

## Final Note

This portfolio is intentionally built around systems rather than isolated notebooks.

Because training a model is useful.

**Making it survive contact with the real world is better.**
