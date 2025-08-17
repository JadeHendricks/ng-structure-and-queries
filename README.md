# Angular Structure & Queries Playground

This project explores **Angular’s structural directives, template rendering techniques, view queries**, and the **new signal-based APIs**.  
Each concept is demonstrated on its own dedicated page with clear, minimal examples for easy learning.

## 📚 Topics Covered

### 1) Structural & Template Features
- `ng-content` – Content projection into components.
- `ng-container` – Logical grouping without extra DOM.
- `ng-template` – Reusable template blocks.
- `ngTemplateOutlet` – Rendering templates dynamically.

### 2) Classic View Queries
- `ViewChild` – Query a single element/directive from the template.
- `ViewChildren` – Query multiple elements/directives from the template.

### 3) **Signal-Based Queries** (function APIs)
> These return **signals** and stay up-to-date without lifecycle hooks.
- `viewChild()` – Signal of a single view child.
- `viewChildren()` – Signal of multiple view children.
- `contentChild()` – Signal of a single projected (content) child.
- `contentChildren()` – Signal of multiple projected (content) children.
---

## 📂 Project Structure

Each topic has its **own route/page** with:
- A concise explanation of what it does.
- A simple code example.
- A live demonstration in the browser.

Suggested route map:

