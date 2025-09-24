import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Model-based Deep Learning',
    imageSrc: '/img/research.svg',
    description: (
      <>
        Developing and applying model-based deep learning approaches that combine domain knowledge 
        with neural networks for improved performance and interpretability in multimedia applications.
      </>
    ),
  },
  {
    title: 'Image Processing & Enhancement',
    imageSrc: '/img/data-science.svg',
    description: (
      <>
        Advanced techniques for image enhancement, restoration, and quality improvement using 
        computational methods and deep learning frameworks for multimedia content.
      </>
    ),
  },
  {
    title: 'Computer Vision',
    imageSrc: '/img/collaboration.svg',
    description: (
      <>
        Exploring computer vision methodologies for visual understanding, pattern recognition, 
        and automated analysis of multimedia content across various applications.
      </>
    ),
  },
];

function Feature({imageSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img 
          src={imageSrc} 
          alt={title}
          className={styles.featureSvg} 
          role="img" 
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className={styles.featuresTitle}>Research Focus</h2>
            <p className={styles.featuresSubtitle}>
              Advancing multimedia technology through model-based deep learning, computer vision, and innovative image processing solutions
            </p>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
} 