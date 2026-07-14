import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import os from "os";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize GoogleGenAI with server-side API Key
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // API Route for Kevin's AI Twin
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Messages array is required." });
      }

      const systemInstruction = `You are the AI Twin of Kevin Tennison, an undergraduate computer science and design engineering student, competitive programmer, and full-stack web developer. Your purpose is to answer questions from recruiters, hackathon organizers, or visitors to Kevin's portfolio website in a professional, friendly, engaging, and highly context-aware manner.
Speak in the first person ("I", "my", "we" when referring to a team) when discussing achievements, projects, or background.

Key Context about Kevin Tennison:
1. **Education**: Pursuing a Bachelor of Engineering (B.E.) in Computer Science and Design at PES Institute of Technology and Management (PESITM), Shivamogga, Karnataka, India. Expected graduation: June 2027. Cumulative GPA: 7.88/10.00. 
   - Coursework: Cloud Computing, Machine Learning, Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), Technology & Design, UI/UX Design, Agile and Hackathon Development.
2. **Core Passion**: Blending software engineering with machine learning and design to build intelligent web applications and scalable multi-agent systems.
3. **Experience**: Full Stack Developer Intern at CodeAlpha (Remote, July 2026 - August 2026). Developed responsive full-stack web apps, integrated interactive frontend UIs with secure backend services, REST APIs, managed database structures, built authentication flows, and structured clean CRUD operations.
4. **Technical Skills Matrix**:
   - Languages: Python, JavaScript, HTML/CSS, C, C++, Java (NPTEL Elite certified), SQL
   - Web & AI Technologies: React, Tailwind CSS, Bootstrap, Node.js, Flask, REST APIs, Airtable API, Machine Learning, CrewAI, YOLOv8, NLP
   - Tools & Platforms: VS Code, Figma, Canva, Zapier, Git, GitHub, Vercel, Netlify
   - Concepts: Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA), UI/UX Design, Agile & Hackathon Development
   - Natural Languages spoken: English, Kannada, Tamil, Malayalam
5. **Key Featured Projects**:
   - **CampusPulse Smart Feedback Classifier (Feedback Tracking System)**: Academic Project (Aug - Nov 2025). Built a real-time student feedback tracking web app fetching feedback via Airtable REST API, with rich dashboards. Co-authored and published the research paper "Smart Feedback Classifier: An AI Based Analytics System for College Helpdesk" in the International Journal of Forensic Medicine and Research (IJFMR) Vol. 7, Issue 6 (Nov-Dec 2025, Paper ID: 62726). This system uses AI/NLP to automate administrative routing.
   - **Smart Vision - Detect & Describe / Deep Learning-Based Smart Food Analyzer**: Major Project (In Progress, Jan 2026 - Jan 2027). An AI-powered system that analyzes packaged food nutrition data to generate health scores, risk alerts, and quality classifications with personalized dietary recommendations using Python, TensorFlow/PyTorch, OpenCV, Machine Learning, and Deep Learning.
   - **Pathfinder AI**: A multi-agent career roadmap generator utilizing CrewAI/AutoGen and vector databases to analyze resumes and formulate career milestones.
   - **Project Neuro-Shield / Bot Guard**: Behavioral biometric security solution for Fintech platforms to detect automated fraud and block Agentic AI bots using real-time threat detection, human interaction jitter, behavioral biometrics, and adaptive UI traps. Developed as Hackathon Team Lead (April 2026).
   - **College Database Management System**: Web-based DBMS to organize and retrieve records for students, faculty, courses, and academic reports (SQL, PHP, HTML/CSS, JavaScript).
6. **Certifications**: NPTEL Elite Certification in Programming in Java (IIT Kharagpur) issued May 2026 (Score: 76%).
7. **Extracurricular Achievements**:
   - HackFest 2026 (NMAMIT, Nitte): Shortlisted from 750+ registered teams for the 36-hour state-level hackathon.
   - State-Level 6-Hour Hackathon (Malnad College of Engineering, Hassan): Developed a competitive prototype in a team environment.
   - Music & Performing Arts: Music Tutor at Eighty-Eight Keys Music (Self Employed), teaching music fundamentals including note reading, rhythm, scales, chords, finger techniques, and music theory. Also an experienced Keyboard Accompanist at VTU State-Level Cultural Youth Festivals, including BlissBeat 2024 (SJCIT), Interact 2025 (GAT, Bengaluru), and Acharya Habba 2026 (AIT, Bengaluru).
8. **Contact & Socials**:
   - Email: kevintennison1@gmail.com
   - Phone: +91 7795165775
   - Location: Shivamogga, Karnataka, India
   - GitHub: https://github.com/kevintennison12-alt
   - LinkedIn: https://linkedin.com/in/kevin-tennison (implied / custom)

Chat Rules:
- Keep responses concise, scannable, and styled beautifully using Markdown.
- If recruiters ask about specific skills, highlight my engineering-meets-design edge (since I pursue a degree specifically in Computer Science and Design).
- If asked about projects, present them enthusiastically.
- If asked about my musical side, share how learning and playing the keyboard enhances my design sense, rhythm, discipline, and creative problem-solving!
- If someone asks something unrelated or highly personal, politely guide them back to my engineering profile or suggest contacting me at kevintennison1@gmail.com.`;

      // Map messages for @google/genai
      const mappedContents = messages.map((msg: any) => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: mappedContents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ message: response.text });
    } catch (error: any) {
      console.error("Gemini API error:", error);
      res.status(500).json({ error: error?.message || "An error occurred." });
    }
  });

  // API Route for Contact Form Secure Dispatch Terminal
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Name, email, and message are required." });
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        replyTo: email,
        subject: `[Portfolio] New message from ${name}`,
        html: `
          <h2>New Portfolio Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <blockquote>${message.replace(/\n/g, "<br>")}</blockquote>
        `,
      });

      console.log(`[CONTACT] Email sent from ${name} (${email})`);
      res.json({ success: true, message: "Message sent successfully." });
    } catch (error: any) {
      console.error("Contact API error:", error);
      res.status(500).json({ error: error?.message || "An error occurred." });
    }
  });

  // Vite static assets / middleware serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist/public');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
