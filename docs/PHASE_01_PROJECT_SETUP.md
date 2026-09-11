# Mentor OS

## Phase 1 — Project Setup & Initial Architecture

---

# Objective

This phase establishes the foundational project structure for Mentor OS.

Goals:

* Initialize source control
* Create frontend and backend applications
* Define scalable folder architecture
* Prepare AI and automation layers
* Create a clean foundation for future implementation

---

# Step 1 — Create Root Project

### Command

```bash
mkdir mentor-os
cd mentor-os
```

### Purpose

Creates the main project directory that will contain:

* Frontend application
* Backend services
* Documentation
* Git repository

Expected structure:

```text
mentor-os/
```

---

# Step 2 — Initialize Git Repository

### Command

```bash
git init
```

### Purpose

Creates a local Git repository.

Benefits:

* Version control
* Branch management
* Team collaboration
* Deployment integration

Verify:

```bash
git status
```

Expected:

```text
On branch master/main
No commits yet
```

---

# Step 3 — Create Main Branch

### Command

```bash
git branch -M main
```

### Purpose

Renames the default branch to:

```text
main
```

This aligns with modern GitHub standards.

Verify:

```bash
git branch
```

Expected:

```text
* main
```

---

# Step 4 — Create Base Project Directories

### Command

```bash
mkdir apps
mkdir backend
mkdir docs
```

### Purpose

Separates major project responsibilities.

```text
apps     → Frontend applications
backend  → APIs, AI, Automation
docs     → Architecture & documentation
```

Expected structure:

```text
mentor-os
│
├── apps
├── backend
└── docs
```

---

# Step 5 — Create Frontend Application

Move into apps directory:

```bash
cd apps
```

Create Next.js application:

```bash
npx create-next-app@latest web --typescript --eslint --app
```

### Configuration

Select:

```text
TypeScript?      Yes
ESLint?          Yes
Tailwind?        Yes
src directory?   Yes
App Router?      Yes
Turbopack?       Yes
```

### Purpose

Creates the production frontend application.

Technology stack:

```text
Next.js
TypeScript
TailwindCSS
App Router
ESLint
Turbopack
```

Expected structure:

```text
apps
└── web
```

Return to root:

```bash
cd ..
```

---

# Step 6 — Create Backend Application

Move into backend:

```bash
cd backend
```

Initialize package:

```bash
npm init -y
```

### Purpose

Creates:

```text
package.json
```

which manages:

* dependencies
* scripts
* versions

---

# Step 7 — Install Backend Dependencies

### Runtime Dependencies

```bash
npm install express cors dotenv
```

### Why

| Package | Purpose                        |
| ------- | ------------------------------ |
| express | REST API Server                |
| cors    | Frontend-Backend Communication |
| dotenv  | Environment Variables          |

---

### Development Dependencies

```bash
npm install -D typescript ts-node-dev @types/node @types/express
```

### Why

| Package        | Purpose            |
| -------------- | ------------------ |
| typescript     | Type Safety        |
| ts-node-dev    | Development Server |
| @types/node    | Node Typings       |
| @types/express | Express Typings    |

---

# Step 8 — Create TypeScript Configuration

### Command

```bash
npx tsc --init
```

### Purpose

Creates:

```text
tsconfig.json
```

This controls:

* TypeScript compilation
* Path aliases
* Build settings

Return to root:

```bash
cd ..
```

---

# Phase 2 — Frontend Architecture

Move into:

```bash
cd apps/web/src
```

---

# Shared Layer

### Commands

```bash
mkdir shared
mkdir shared/ui
mkdir shared/hooks
mkdir shared/services
mkdir shared/utils
mkdir shared/types
mkdir shared/constants
```

### Purpose

Reusable application-wide resources.

```text
ui         → Common components
hooks      → Shared hooks
services   → API clients
utils      → Helpers
types      → Shared interfaces
constants  → Global constants
```

---

# Layout Layer

### Command

```bash
mkdir layouts
```

### Purpose

Application layouts:

```text
Dashboard Layout
Auth Layout
Admin Layout
```

---

# Features Layer

### Command

```bash
mkdir features
```

### Purpose

Domain-driven frontend architecture.

Each business module lives independently.

---

# Create Feature Modules

### Commands

```bash
mkdir features/auth

mkdir features/student
mkdir features/mentor
mkdir features/admin

mkdir features/assignments
mkdir features/submissions
mkdir features/progress

mkdir features/notifications

mkdir features/ai-insights
```

### Purpose

Business separation.

Benefits:

* Maintainability
* Scalability
* Independent development

---

# Feature Internal Structure

Example:

```bash
mkdir features/student/pages
mkdir features/student/components
mkdir features/student/hooks
mkdir features/student/services
mkdir features/student/types
```

### Purpose

```text
pages       → Screens
components  → UI
hooks       → Logic
services    → API Calls
types       → Interfaces
```

Repeat same structure for:

* mentor
* admin
* assignments
* submissions
* progress
* notifications
* ai-insights

---

# Phase 3 — Backend Architecture

Move into backend source:

```bash
cd ../../../backend
mkdir src
cd src
```

---

# Core Backend Layers

### Commands

```bash
mkdir modules
mkdir ai
mkdir automation
mkdir workers
mkdir shared
mkdir database
mkdir storage
```

### Purpose

| Folder     | Responsibility        |
| ---------- | --------------------- |
| modules    | Business Logic        |
| ai         | AI Engine             |
| automation | Workflow Engine       |
| workers    | Background Processing |
| database   | Database Layer        |
| storage    | File Storage          |
| shared     | Common Utilities      |

---

# Business Modules

### Commands

```bash
mkdir modules/auth

mkdir modules/users

mkdir modules/assignments

mkdir modules/submissions

mkdir modules/feedback

mkdir modules/progress

mkdir modules/notifications
```

### Purpose

Encapsulates business functionality.

Example:

```text
assignments
├── controller
├── service
├── repository
└── routes
```

---

# AI Layer

### Commands

```bash
mkdir ai/providers

mkdir ai/prompts

mkdir ai/evaluators

mkdir ai/generators

mkdir ai/orchestrator

mkdir ai/services
```

### Purpose

```text
providers     → OpenAI/Gemini/etc
prompts       → Prompt Templates
evaluators    → Submission Evaluation
generators    → Content Generation
orchestrator  → AI Flow Control
services      → AI Business Services
```

---

# Automation Layer

### Commands

```bash
mkdir automation/triggers

mkdir automation/processors

mkdir automation/jobs

mkdir automation/schedulers

mkdir automation/rules

mkdir automation/handlers
```

### Purpose

Handles:

* Assignment automation
* Reminder automation
* Evaluation automation
* Workflow execution

---

# Worker Layer

### Commands

```bash
mkdir workers/automation-worker

mkdir workers/ai-worker

mkdir workers/report-worker

mkdir workers/notification-worker
```

### Purpose

Background processing.

Examples:

```text
AI Evaluation
Report Generation
Email Notifications
Scheduled Jobs
```

---

# Database Layer

### Commands

```bash
mkdir database/schema

mkdir database/migrations

mkdir database/seeds
```

### Purpose

```text
schema      → DB Models
migrations  → Versioned Changes
seeds       → Initial Data
```

---

# Shared Layer

### Commands

```bash
mkdir shared/constants

mkdir shared/types

mkdir shared/utils

mkdir shared/events
```

### Purpose

Reusable backend utilities.

---

# Final Architecture

```text
mentor-os
│
├── apps
│   └── web
│
├── backend
│   └── src
│
├── docs
│
└── .git
```

---

# First Commit

Return to project root:

```bash
cd ../../
```

Check status:

```bash
git status
```

Stage files:

```bash
git add .
```

### Purpose

Adds all files to Git tracking.

Commit:

```bash
git commit -m "chore: initialize mentor-os architecture"
```

### Purpose

Creates the first project snapshot.

---

# Connect GitHub Repository

### Add Remote

```bash
git remote add origin <repo-url>
```

Example:

```bash
git remote add origin https://github.com/himalpha-hub/mentor.git
```

### Purpose

Connects local repository with GitHub.

---

# Push Initial Code

```bash
git push -u origin main
```

### Purpose

Uploads project structure to GitHub and sets upstream tracking.

---

# Locked Development Sequence

The architecture is now frozen.

All future implementation must follow this order:

```text
1. Auth
2. Users
3. Student Dashboard
4. Mentor Dashboard
5. Admin Dashboard
6. Assignments
7. Submissions
8. Feedback
9. Progress
10. Events
11. Automation Engine
12. AI Layer
13. Notifications
14. Reports
15. Deployment
```

Following this sequence ensures:

* Stable architecture
* No major refactoring
* AI integration without breaking modules
* Cleaner development lifecycle
* Predictable delivery timeline
