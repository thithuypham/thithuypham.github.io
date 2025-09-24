import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './index.module.css';

function AboutHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className={styles.heroContent}>
              <img
                src="/img/profile-placeholder.jpg"
                alt="Thuy Pham"
                className={styles.profileImage}
              />
              <h1 className="hero__title">About</h1>
              <p className="hero__subtitle">
                academic.edu && research.interests
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function EducationTimeline() {
  return (
    <section className={styles.highlights}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className={styles.sectionTitle}>Education</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--10 col--offset-1">
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              
              <div className="cv-item" style={{
                background: 'var(--academic-bg-subtle)',
                border: '1px solid var(--academic-border)',
                borderRadius: 'var(--academic-radius)',
                borderLeft: '4px solid var(--academic-primary)',
                padding: '2rem',
                boxShadow: 'var(--academic-shadow-subtle)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem'}}>
                  <h3 className="cv-item-title" style={{
                    fontSize: '1.375rem',
                    fontWeight: '600',
                    color: 'var(--academic-text)',
                    margin: '0'
                  }}>
                    M.Sc. in Multimedia Engineering
                  </h3>
                  <span className="cv-item-date" style={{
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: 'var(--academic-primary)',
                    fontFamily: 'var(--ifm-font-family-monospace)',
                    backgroundColor: 'rgba(0, 139, 139, 0.1)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    whiteSpace: 'nowrap'
                  }}>
                    2021 - 2024
                  </span>
                </div>
                <p className="cv-item-institution" style={{
                  fontSize: '1.125rem',
                  fontWeight: '500',
                  color: 'var(--academic-text-light)',
                  marginBottom: '0',
                  fontFamily: 'var(--ifm-font-family-monospace)'
                }}>
                  Dongguk University, Seoul, South Korea
                </p>
              </div>

              <div className="cv-item" style={{
                background: 'var(--academic-bg-subtle)',
                border: '1px solid var(--academic-border)',
                borderRadius: 'var(--academic-radius)',
                borderLeft: '4px solid var(--academic-primary)',
                padding: '2rem',
                boxShadow: 'var(--academic-shadow-subtle)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem'}}>
                  <h3 className="cv-item-title" style={{
                    fontSize: '1.375rem',
                    fontWeight: '600',
                    color: 'var(--academic-text)',
                    margin: '0'
                  }}>
                    B.Sc. in Mathematics and Computer Science
                  </h3>
                  <span className="cv-item-date" style={{
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: 'var(--academic-primary)',
                    fontFamily: 'var(--ifm-font-family-monospace)',
                    backgroundColor: 'rgba(0, 139, 139, 0.1)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    whiteSpace: 'nowrap'
                  }}>
                    2015 - 2019
                  </span>
                </div>
                <p className="cv-item-institution" style={{
                  fontSize: '1.125rem',
                  fontWeight: '500',
                  color: 'var(--academic-text-light)',
                  marginBottom: '0',
                  fontFamily: 'var(--ifm-font-family-monospace)'
                }}>
                  VNU-HCM University of Science, Ho Chi Minh City, Vietnam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AwardsSection() {
  const awards = [
    {
      year: "2021",
      title: "SRD Scholarship for International Students",
      institution: "Dongguk University",
      location: "Seoul, Korea",
      type: "scholarship"
    },
    {
      year: "2019", 
      title: "Consolation Prize of the 21st Annual Eureka Scientific Research Students Awards Competition",
      institution: "Ho Chi Minh City",
      location: "Vietnam",
      type: "research-award"
    }
  ];

  return (
    <section className={styles.highlights}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className={styles.sectionTitle}>Awards & Achievements</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--10 col--offset-1">
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              {awards.map((award, index) => (
                <div key={index} className="cv-item" style={{
                  background: 'var(--academic-bg)',
                  border: '1px solid var(--academic-border)',
                  borderRadius: 'var(--academic-radius)',
                  borderLeft: '4px solid #FFD700',
                  padding: '2rem',
                  boxShadow: 'var(--academic-shadow-subtle)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem'}}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: 'var(--academic-text)',
                      margin: '0',
                      lineHeight: '1.3',
                      flex: '1',
                      paddingRight: '1rem'
                    }}>
                      {award.title}
                    </h3>
                    <span style={{
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: '#B8860B',
                      fontFamily: 'var(--ifm-font-family-monospace)',
                      backgroundColor: 'rgba(255, 215, 0, 0.1)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '4px',
                      whiteSpace: 'nowrap'
                    }}>
                      {award.year}
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '1rem',
                    color: 'var(--academic-text-light)',
                    fontFamily: 'var(--ifm-font-family-monospace)'
                  }}>
                    <span style={{fontWeight: '500'}}>{award.institution}</span>
                    <span style={{color: 'var(--academic-text-lighter)'}}>•</span>
                    <span>{award.location}</span>
                  </div>
                  {award.type === 'scholarship' && (
                    <div style={{
                      marginTop: '0.75rem',
                      padding: '0.5rem 0.75rem',
                      background: 'rgba(255, 215, 0, 0.05)',
                      borderRadius: 'var(--academic-radius-sm)',
                      fontSize: '0.9rem',
                      color: 'var(--academic-text-light)',
                      fontStyle: 'italic'
                    }}>
                      🎓 Financial support for international graduate students
                    </div>
                  )}
                  {award.type === 'research-award' && (
                    <div style={{
                      marginTop: '0.75rem',
                      padding: '0.5rem 0.75rem',
                      background: 'rgba(255, 215, 0, 0.05)',
                      borderRadius: 'var(--academic-radius-sm)',
                      fontSize: '0.9rem',
                      color: 'var(--academic-text-light)',
                      fontStyle: 'italic'
                    }}>
                      🏆 Recognition for outstanding undergraduate research
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResearchInterests() {
  const interests = [
    {
      title: "Model-based Deep Learning",
      description: "Combining domain knowledge with neural networks for improved performance and interpretability in multimedia applications.",
      keywords: ["optimization", "signal-processing", "neural-networks"]
    },
    {
      title: "Image Processing",
      description: "Advanced techniques for image enhancement, restoration, and quality improvement using computational methods.",
      keywords: ["enhancement", "restoration", "super-resolution"]
    },
    {
      title: "Computer Vision", 
      description: "Visual understanding, pattern recognition, and automated analysis of multimedia content.",
      keywords: ["detection", "recognition", "analysis"]
    },
    {
      title: "Data Analytics & Engineering",
      description: "Advanced data processing techniques and engineering solutions for extracting insights from complex datasets.",
      keywords: ["data-pipelines", "analytics", "big-data"]
    }
  ];

  return (
    <section style={{padding: '3rem 0', background: 'var(--academic-bg)'}}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className={styles.sectionTitle}>Research Interests</h2>
          </div>
        </div>
        <div className="row">
          {interests.map((interest, index) => (
            <div key={index} className="col col--6" style={{marginBottom: '1.5rem'}}>
              <div className="card" style={{
                background: 'var(--academic-bg)',
                padding: '2rem',
                height: '100%',
                border: '1px solid var(--academic-border)',
                borderRadius: 'var(--academic-radius)',
                boxShadow: 'var(--academic-shadow-subtle)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}>
                <h3 style={{
                  color: 'var(--academic-text)', 
                  marginBottom: '1rem', 
                  fontSize: '1.375rem',
                  fontWeight: '600'
                }}>
                  {interest.title}
                </h3>
                <p style={{
                  color: 'var(--academic-text-light)', 
                  lineHeight: '1.6', 
                  marginBottom: '1.5rem',
                  fontSize: '1rem'
                }}>
                  {interest.description}
                </p>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                  {interest.keywords.map((keyword, keyIndex) => (
                    <span key={keyIndex} className="project-tag">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = {
    languages: [
      { name: "Vietnamese", level: "native" },
      { name: "English", level: "good" },
      { name: "Korean", level: "beginner" }
    ],
    technical: {
      "Programming & Tools": ["Python", "MATLAB", "SQL", "OpenCV", "PyTorch", "TensorFlow", "Keras"],
      "Specializations": ["Computer vision", "natural language processing", "machine learning", "deep learning", "GenAI Tools"],
      "Infrastructure & Analytics": ["Git (version control)", "Looker (data visualization)", "Tableau", "GCP BigQuery (large-scale data analytics)"]
    }
  };

  return (
    <section className={styles.highlights}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className={styles.sectionTitle}>Skills</h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--3">
            <div className="card" style={{
              background: 'var(--academic-bg)',
              padding: '2rem',
              border: '1px solid var(--academic-border)',
              borderRadius: 'var(--academic-radius)',
              boxShadow: 'var(--academic-shadow-subtle)',
              height: '100%',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}>
              <h3 style={{
                color: 'var(--academic-text)', 
                marginBottom: '1rem', 
                fontSize: '1.375rem',
                fontWeight: '600'
              }}>
                Languages
              </h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
                {skills.languages.map((lang, index) => (
                  <div key={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{color: 'var(--academic-text)', fontWeight: '500'}}>{lang.name}</span>
                    <span className="project-tag">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col col--9">
            <div className="card" style={{
              background: 'var(--academic-bg)',
              padding: '2rem',
              border: '1px solid var(--academic-border)',
              borderRadius: 'var(--academic-radius)',
              boxShadow: 'var(--academic-shadow-subtle)',
              height: '100%',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}>
              <h3 style={{
                color: 'var(--academic-text)', 
                marginBottom: '1rem', 
                fontSize: '1.375rem',
                fontWeight: '600'
              }}>
                Technical
              </h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                {Object.entries(skills.technical).map(([category, items], categoryIndex) => (
                  <div key={categoryIndex}>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: 'var(--academic-primary)',
                      marginBottom: '0.5rem',
                      fontFamily: 'var(--ifm-font-family-monospace)'
                    }}>
                      {category}
                    </h4>
                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                      {items.map((skill, index) => (
                        <span key={index} className="project-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function About() {
  return (
    <Layout
      title="About"
      description="Academic background and research interests of Thuy Pham - M.Sc. student in Multimedia Engineering specializing in computer vision and image processing.">
      <AboutHeader />
      <main>
        <EducationTimeline />
        <AwardsSection />
        <ResearchInterests />
        <SkillsSection />
      </main>
    </Layout>
  );
} 