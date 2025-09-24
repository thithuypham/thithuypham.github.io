import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './index.module.css';

function ProjectsHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className={styles.heroContent}>
              <h1 className="hero__title">Research Projects</h1>
              <p className="hero__subtitle">
                Innovative research projects in machine learning, federated systems, and AI applications
              </p>
              <p className={styles.heroDescription}>
                Translating research into practical systems that solve real-world privacy and collaboration challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const projects = [
  {
    title: "FedHealth: Privacy-Preserving Healthcare Analytics Platform",
    description: "A comprehensive federated learning platform designed specifically for healthcare institutions to collaboratively train ML models while maintaining HIPAA compliance and patient privacy. The system incorporates differential privacy, secure aggregation, and advanced cryptographic techniques.",
    technologies: ["Python", "TensorFlow", "PySyft", "Docker", "Kubernetes", "PostgreSQL"],
    category: "Healthcare AI",
    status: "Active",
    year: "2023-2024",
    funding: "NSF Grant - $150,000",
    links: [
      { label: "GitHub", url: "#", type: "code" },
      { label: "Demo", url: "#", type: "demo" },
      { label: "Paper", url: "#", type: "paper" },
      { label: "Documentation", url: "#", type: "docs" }
    ],
    highlights: [
      "Deployed in 5 major hospitals",
      "Reduced privacy leakage by 95%",
      "Improved model accuracy by 12%"
    ]
  },
  {
    title: "SecureFL: Framework for Secure Federated Learning",
    description: "An open-source framework that provides easy-to-use APIs for implementing secure federated learning with various privacy-preserving techniques. Supports multiple aggregation algorithms, differential privacy mechanisms, and secure multi-party computation protocols.",
    technologies: ["Python", "PyTorch", "Cryptography", "gRPC", "Redis", "MongoDB"],
    category: "Open Source",
    status: "Maintained",
    year: "2022-Present",
    funding: "Google Research Grant",
    links: [
      { label: "GitHub", url: "#", type: "code" },
      { label: "PyPI", url: "#", type: "package" },
      { label: "Docs", url: "#", type: "docs" },
      { label: "Tutorial", url: "#", type: "tutorial" }
    ],
    highlights: [
      "1,200+ GitHub stars",
      "Used by 50+ researchers",
      "Featured in ICML workshop"
    ]
  },
  {
    title: "PrivateVision: Federated Computer Vision for Smart Cities",
    description: "A privacy-preserving computer vision system for smart city applications including traffic monitoring, crowd analysis, and emergency detection. The system uses federated learning to train models across multiple edge devices without centralizing sensitive visual data.",
    technologies: ["Python", "OpenCV", "TensorFlow Lite", "Edge TPU", "MQTT", "InfluxDB"],
    category: "Computer Vision",
    status: "Completed",
    year: "2023",
    funding: "City of Excellence Partnership",
    links: [
      { label: "GitHub", url: "#", type: "code" },
      { label: "Demo Video", url: "#", type: "demo" },
      { label: "Report", url: "#", type: "report" }
    ],
    highlights: [
      "Deployed in 20 city locations",
      "Real-time processing",
      "99.9% uptime"
    ]
  },
  {
    title: "FedFinance: Collaborative Financial Fraud Detection",
    description: "A federated learning system that enables financial institutions to collaboratively detect fraud patterns while keeping transaction data private. Implements advanced anomaly detection algorithms and handles highly imbalanced datasets.",
    technologies: ["Python", "Scikit-learn", "Apache Kafka", "Elasticsearch", "React", "D3.js"],
    category: "Financial Technology",
    status: "Active",
    year: "2024",
    funding: "Industry Partnership",
    links: [
      { label: "Private Repo", url: "#", type: "code" },
      { label: "Dashboard", url: "#", type: "demo" },
      { label: "Case Study", url: "#", type: "paper" }
    ],
    highlights: [
      "15% reduction in false positives",
      "Detected 200+ new fraud patterns",
      "Partnership with 3 major banks"
    ]
  },
  {
    title: "EduFL: Personalized Learning with Federated AI",
    description: "An educational technology platform that uses federated learning to create personalized learning experiences while protecting student privacy. The system adapts to individual learning patterns and provides intelligent tutoring recommendations.",
    technologies: ["Python", "React", "Node.js", "MongoDB", "AWS", "TensorFlow.js"],
    category: "Educational Technology",
    status: "Pilot Phase",
    year: "2024",
    funding: "Department of Education Grant",
    links: [
      { label: "GitHub", url: "#", type: "code" },
      { label: "Live Demo", url: "#", type: "demo" },
      { label: "User Study", url: "#", type: "paper" }
    ],
    highlights: [
      "Tested with 500+ students",
      "20% improvement in learning outcomes",
      "Privacy-compliant design"
    ]
  },
  {
    title: "MedFL: Federated Drug Discovery Platform",
    description: "A collaborative platform for pharmaceutical companies to share insights and accelerate drug discovery while protecting proprietary research data. Uses federated learning for molecular property prediction and drug-target interaction modeling.",
    technologies: ["Python", "RDKit", "PyTorch Geometric", "ChemBL", "PostgreSQL", "FastAPI"],
    category: "Pharmaceutical AI",
    status: "Research Phase",
    year: "2024-2025",
    funding: "NIH SBIR Grant",
    links: [
      { label: "Preprint", url: "#", type: "paper" },
      { label: "Proposal", url: "#", type: "docs" }
    ],
    highlights: [
      "Collaboration with 3 pharma companies",
      "Novel molecular representation learning",
      "Accelerated discovery pipeline"
    ]
  }
];

function ProjectCard({ project }) {
  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return '#52c41a';
      case 'Completed': return '#1890ff';
      case 'Maintained': return '#722ed1';
      case 'Pilot Phase': return '#fa8c16';
      case 'Research Phase': return '#eb2f96';
      default: return '#666';
    }
  };

  const getLinkIcon = (type) => {
    switch(type) {
      case 'code': return '🔗';
      case 'demo': return '🚀';
      case 'paper': return '📄';
      case 'docs': return '📚';
      case 'tutorial': return '🎓';
      case 'package': return '📦';
      case 'report': return '📊';
      default: return '🔗';
    }
  };

  return (
    <div className="project-card">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem'}}>
        <div>
          <div className="project-title">{project.title}</div>
          <div style={{fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem'}}>
            {project.category} • {project.year}
            {project.funding && (
              <span style={{marginLeft: '10px', fontWeight: 'bold', color: '#1890ff'}}>
                {project.funding}
              </span>
            )}
          </div>
        </div>
        <span style={{
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          backgroundColor: getStatusColor(project.status) + '20',
          color: getStatusColor(project.status)
        }}>
          {project.status}
        </span>
      </div>
      
      <div className="project-description">{project.description}</div>
      
      <div className="project-tags">
        {project.technologies.map((tech, index) => (
          <span key={index} className="project-tag">{tech}</span>
        ))}
      </div>
      
      {project.highlights && (
        <div style={{marginBottom: '1rem'}}>
          <strong>Key Achievements:</strong>
          <ul style={{marginTop: '0.5rem', marginBottom: '0'}}>
            {project.highlights.map((highlight, index) => (
              <li key={index} style={{fontSize: '0.9rem'}}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="publication-links">
        {project.links.map((link, index) => (
          <a key={index} href={link.url} className="publication-link">
            {getLinkIcon(link.type)} {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const activeProjects = projects.filter(p => p.status === 'Active' || p.status === 'Pilot Phase' || p.status === 'Research Phase');
  const completedProjects = projects.filter(p => p.status === 'Completed' || p.status === 'Maintained');

  return (
    <Layout
      title="Projects - Thuy Pham"
      description="Research projects by Thuy Pham including federated learning platforms, privacy-preserving AI systems, and open-source tools.">
      <ProjectsHeader />
      <main>
        {/* Project Statistics */}
        <section className={styles.highlights}>
          <div className="container">
            <div className="row">
              <div className="col col--3">
                <div className={styles.highlightCard} style={{textAlign: 'center'}}>
                  <h3 style={{color: '#1890ff', fontSize: '2.5rem', margin: '0'}}>{projects.length}</h3>
                  <p>Total Projects</p>
                </div>
              </div>
              <div className="col col--3">
                <div className={styles.highlightCard} style={{textAlign: 'center'}}>
                  <h3 style={{color: '#52c41a', fontSize: '2.5rem', margin: '0'}}>{activeProjects.length}</h3>
                  <p>Active Projects</p>
                </div>
              </div>
              <div className="col col--3">
                <div className={styles.highlightCard} style={{textAlign: 'center'}}>
                  <h3 style={{color: '#1890ff', fontSize: '2.5rem', margin: '0'}}>$300K+</h3>
                  <p>Total Funding</p>
                </div>
              </div>
              <div className="col col--3">
                <div className={styles.highlightCard} style={{textAlign: 'center'}}>
                  <h3 style={{color: '#722ed1', fontSize: '2.5rem', margin: '0'}}>8</h3>
                  <p>Collaborations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Active Projects */}
        <section style={{padding: '4rem 0'}}>
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <h2 className={styles.sectionTitle}>Active Projects</h2>
              </div>
            </div>
            <div className="row">
              <div className="col col--12">
                {activeProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Completed Projects */}
        <section className={styles.news}>
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <h2 className={styles.sectionTitle}>Completed Projects</h2>
              </div>
            </div>
            <div className="row">
              <div className="col col--12">
                {completedProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration */}
        <section style={{padding: '4rem 0', textAlign: 'center'}}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <h2 className={styles.sectionTitle}>Interested in Collaboration?</h2>
                <p style={{fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem'}}>
                  I'm always looking for new research collaborations and opportunities to apply 
                  federated learning and privacy-preserving AI to real-world problems. Whether you're 
                  from academia, industry, or government, let's discuss how we can work together.
                </p>
                <div>
                  <Link
                    className="button button--primary button--lg"
                    href="mailto:thuy.pham@university.edu"
                    style={{margin: '0.5rem'}}>
                    Contact Me
                  </Link>
                  <Link
                    className="button button--outline button--lg"
                    to="/about"
                    style={{margin: '0.5rem'}}>
                    Learn More About Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
} 