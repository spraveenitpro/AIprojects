## AIprojects Monorepo

This repository contains two main applications:

---

### 1. summarizer

**Description:**
The `summarizer` app is a web-based tool that allows users to input or upload text and receive a concise summary. It is built with modern frontend technologies (such as React and Vite) and is designed for ease of use and fast performance.

**AI Model:**
This app uses the Claude Sonnet model for generating text summaries.

**Features:**

- Paste or upload text to be summarized
- Generates a short, clear summary of the input
- User-friendly interface

**Usage:**

1. Start the app (see project instructions in `summarizer/README.md` if available)
2. Enter or upload your text
3. Click the summarize button to receive your summary

---

### 2. market-trend-app

**Description:**
The `market-trend-app` generates a market trend report by scraping or analyzing market data using Puppeteer (a Node.js library for browser automation). It can be used to automate the collection of market insights and generate PDF reports.

**AI Model:**
This app uses the Google Gemini Flash 2.5 model to analyze and generate market trend insights.

**Features:**

- Uses Puppeteer to automate browser tasks
- Collects and analyzes market data
- Generates a PDF report (`market_analysis_report.pdf`)

**Usage:**

1. Install dependencies (`npm install` in the `market-trend-app` directory)
2. Run the app to generate a new market trend report
3. The generated report will be saved as a PDF in the project directory

---

For more details, see the respective subdirectory README files or source code.
