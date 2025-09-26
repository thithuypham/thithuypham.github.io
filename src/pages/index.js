import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
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
              <h1 className="hero__title">Thuy Pham</h1>
              <p className="hero__subtitle">
                {siteConfig.tagline}
              </p>
              <p className={styles.heroDescription}>
              Hi, I’m a researcher who enjoys turning chaotic real-world data into something that looks like it makes sense :)).
              I also spend a lot of time convincing algorithms (and sometimes reviewers) that I know what I’m doing hmmm.<br /><br />
              {/* Data is as messy as the world itself—if you know, you know—and I’m just here trying to structure queries about it in the most naive way possible.<br /><br /> */}
              This site is where I share what I’ve learned so far—tech stuff, life stuff, and all the funny mistakes in between—both the technical and not-so-technical bits, served with a dash of curiosity, chaos, and charm.
              </p>
              <div className={styles.buttons}>
                <Link
                  className="button button--primary button--lg"
                  to="/about">
                  About
                </Link>
                <Link
                  className="button button--primary button--lg"
                  to="/publications">
                  Research
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Academic portfolio of Thuy Pham - M.Sc. student researching multimedia engineering, computer vision, and image processing">
      <HomepageHeader />
    </Layout>
  );
} 