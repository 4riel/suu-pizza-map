# AI Agents & Assistant Guidelines

> **\U0001F6A8 CRITICAL**: This document establishes standards for AI-assisted development on *Suu Pizza Map*. Read completely before engaging any AI assistance on this project.

## \U0001F4DA Overview

This project is a minimal React + Leaflet map showing pizza spots around the world. Use AI tools to enhance productivity while ensuring the application continues to build and run without errors.

### Philosophy: AI as an Intelligent Partner

- **Augmentation, not replacement**: AI enhances human capabilities rather than replacing critical thinking.
- **Quality over speed**: Maintain high code quality standards regardless of generation method.
- **Transparency**: Document AI usage for team awareness and knowledge sharing.
- **Security first**: Never compromise security for convenience.

## \U0001F3AF AI Agent Types & Use Cases

### 1. Code Generation Agents
Best for boilerplate code, CRUD operations, or utility functions.

### 2. Code Review Agents
Use for security analysis, pattern detection, and optimization suggestions.

### 3. Documentation Agents
Generate API docs, README updates, and architectural documentation.

### 4. Testing Agents
Create unit tests or integration tests to ensure correct functionality.

### 5. Debugging Agents
Analyze logs and stack traces to diagnose issues.

## \U0001F680 Effective Prompt Engineering

Follow the CLEAR framework when prompting AI assistants:

1. **Context** – Provide background information about the task.
2. **Language** – Specify required programming languages and libraries.
3. **Examples** – Include code snippets or data samples when useful.
4. **Action** – Clearly state the desired output or result.
5. **Review** – Check and refine AI responses for accuracy and quality.

## \U0001F4BB Development Workflow

1. Install dependencies with `npm install`.
2. Before committing, run `npm run lint` to check code style.
3. Ensure the project builds successfully with `npm run build`.
4. Only commit once the build completes with no errors.
5. Branches should follow the pattern `feature/{feature-name}`.
6. Adhere to best practices: SOLID, KISS, and DRY principles.
7. Keep files small and modular—split large implementations across
   multiple files when appropriate.

## Commit Style

- Keep commit messages short (50 characters or fewer) but descriptive.
- Use a single commit per logical change.

## Pull Request Instructions

Each PR description must contain:

- **Summary** of the changes made.
- **Testing** section describing which commands were run (`npm run lint`, `npm run build`, etc.) and confirming success.

AI assistants must not stop until the application builds and runs without errors.

### Binary Assets

Binary files such as images must not be committed to the repository. Use remote
URLs or placeholders when necessary.
