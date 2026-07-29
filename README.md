# Suraksha Saathi AI 

Suraksha Saathi AI is your AI Guardian for safe digital banking in every Indian language. It helps first-time digital banking users detect scam calls, fake UPI requests, phishing, and loan scams.

This repository contains the prototype code built for **The Maverick Effect Challenge**.

## 🏗️ Architecture

Our solution is divided into a rapid cloud-backed MVP (this repository) and an Edge AI production roadmap.
1. **Frontend**: React + Vite (Simulating a premium mobile app interface)
2. **Backend Engine**: n8n Workflow automation connected to Google Gemini API (Simulating the AI Risk Assessment Engine).

## 🚀 How to Run the Frontend Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173` in your browser.

## 🧠 How to Run the AI Backend (n8n)

We have built a fully functional backend using n8n to instantly analyze voice transcripts for scam patterns.

1. Open your n8n instance.
2. Click **Import from File** and select `n8n_scam_detection_workflow.json` included in this repository.
3. Open the **Gemini API** node and insert your API key.
4. Activate the Webhook, copy the Production URL, and paste it into `src/App.jsx` on line 108.
5. The React app will now make live API calls to your n8n backend to assess fraud risk!

## ✨ Features Demonstrated in this MVP
- **Fake UPI Detector**: Visually intercepts deceptive "Collect Requests", clearly distinguishing "PAY" from "RECEIVE".
- **AI Scam Call Simulator**: Simulates an incoming call, transcribes text, and sends it to the AI Risk Engine to flag manipulation tactics (like fake OTP requests).
