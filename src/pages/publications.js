import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';

// Publication data parsed from BibTeX
const publicationsData = [
  {
    id: 'pham2025physics',
    title: 'Physics-driven prior learning-based deep unrolling for underwater image enhancement',
    authors: ['Thuy Thi Pham', 'Truong Thanh Nhat Mai', 'Hansung Yu', 'Chul Lee'],
    venue: 'Engineering Applications of Artificial Intelligence',
    venueShort: 'EAAI',
    year: '2025',
    type: 'journal',
    month: 'Sep.',
    publisher: 'Elsevier',
    status: 'accepted',
    links: {
      paper: '#',
      code: 'https://github.com/thithuypham/BLUE-Net/tree/main'
    }
  },
  {
    id: 'pham2025dual',
    title: 'Dual-channel prior-based deep unfolding with contrastive learning for underwater image enhancement',
    authors: ['Thuy Thi Pham', 'Truong Thanh Nhat Mai', 'Hansung Yu', 'Chul Lee'],
    venue: 'Journal of Visual Communication and Image Representation',
    venueShort: 'JVCI',
    year: '2025',
    type: 'journal',
    pages: '104500',
    publisher: 'Elsevier',
    links: {
      paper: 'https://www.sciencedirect.com/science/article/pii/S1047320325001142',
      code: 'https://github.com/thithuypham/Dual-CLUE'
    }
  },
  {
    id: 'park2024image',
    title: 'Image Enhancement Based on Histogram-Guided Multiple Transformation Function Estimation',
    authors: ['Jaemin Park', 'An Gia Vien', 'Thuy Thi Pham', 'Hanul Kim', 'Chul Lee'],
    venue: 'IEEE Transactions on Consumer Electronics',
    venueShort: 'IEEE TCE',
    year: '2024',
    type: 'journal',
    publisher: 'IEEE',
    links: {
      paper: 'https://ieeexplore.ieee.org/abstract/document/10707348/',
      code: 'https://github.com/PJaemin/HG-MTFE'
    }
  },
  {
    id: 'thuy2023icip',
    title: 'Deep unfolding network with physics-based priors for underwater image enhancement',
    authors: ['Thuy Thi Pham', 'Truong Thanh Nhat Mai', 'Chul Lee'],
    venue: 'IEEE International Conference on Image Processing (ICIP)',
    venueShort: 'ICIP',
    year: '2023',
    type: 'conference',
    month: 'Oct.',
    links: {
      paper: 'https://ieeexplore.ieee.org/abstract/document/10222014/',
      code: 'https://github.com/thithuypham/BLUE-Net/tree/main/ICIP%20Code'
    }
  },
  {
    id: 'thuy2023apsipa',
    title: 'Deep unfolded underwater image enhancement based on extreme channels prior',
    authors: ['Thuy Thi Pham', 'Truong Thanh Nhat Mai', 'Chul Lee'],
    venue: 'Proc. APSIPA Annual Summit and Conference (ASC)',
    venueShort: 'APSIPA',
    year: '2023',
    type: 'conference',
    month: 'Oct./Nov.',
    links: {
      paper: 'https://ieeexplore.ieee.org/abstract/document/10317356/',
      code: '#'
    }
  },
  {
    id: 'pham2023model',
    title: 'Model-driven deep unfolding approach to underwater image enhancement',
    authors: ['Thuy Thi Pham', 'Truong Thanh Nhat Mai', 'Chul Lee'],
    venue: 'International Workshop on Advanced Imaging Technology (IWAIT) 2023',
    venueShort: 'IWAIT',
    year: '2023',
    type: 'conference',
    volume: '12592',
    pages: '1259202',
    organization: 'SPIE',
    links: {
      paper: 'https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12592/1259202/Model-driven-deep-unfolding-approach-to-underwater-image-enhancement/10.1117/12.2666202.short',
      code: '#'
    }
  },
  {
    id: 'park2023multiple',
    title: 'Multiple transformation function estimation for image enhancement',
    authors: ['Jaemin Park', 'An Gia Vien', 'Minhee Cha', 'Thuy Thi Pham', 'Hanul Kim', 'Chul Lee'],
    venue: 'Journal of Visual Communication and Image Representation',
    venueShort: 'JVCI',
    year: '2023',
    type: 'journal',
    pages: '103863',
    publisher: 'Elsevier',
    links: {
      paper: 'https://www.sciencedirect.com/science/article/abs/pii/S104732032300113X',
      code: 'https://github.com/PJaemin/MTFE'
    }
  },
  {
    id: 'pham2020vietnamese',
    title: 'Vietnamese punctuation prediction using deep neural networks',
    authors: ['Thuy Thi Pham', 'Nhu Nguyen', 'Quang Pham', 'Han Cao', 'Binh Nguyen'],
    venue: 'SOFSEM 2020: Theory and Practice of Computer Science',
    venueShort: 'SOFSEM',
    year: '2020',
    type: 'conference',
    pages: '388--400',
    organization: 'Springer',
    links: {
      paper: 'https://link.springer.com/chapter/10.1007/978-3-030-38919-2_32',
      code: 'https://github.com/thithuypham/vn-punctuation-prediction'
    }
  },
  {
    id: 'fujita2020atgw',
    title: 'ATGW: A Machine Learning Framework for Automation Testing in Game Woody',
    authors: ['Thuy Thi Pham', 'Tien Dang', 'Nhu Nguyen', 'Van Thao Ha', 'Binh Nguyen'],
    venue: 'Knowledge Innovation Through Intelligent Software Methodologies, Tools and Techniques (SoMeT_20)',
    venueShort: 'SoMeT',
    year: '2020',
    type: 'conference',
    volume: '327',
    pages: '413',
    organization: 'IOS Press',
    links: {
      paper: 'https://ebooks.iospress.nl/doi/10.3233/FAIA200586',
      code: '#'
    }
  },
  {
    id: 'nguyen2020malware',
    title: 'Malware detection using system logs',
    authors: ['Nhu T Nguyen', 'Thuy Thi Pham', 'Tien X Dang', 'Minh-Son Dao', 'Duc-Tien Dang-Nguyen', 'Cathal Gurrin', 'Binh T Nguyen'],
    venue: 'Proceedings of the 2020 on Intelligent Cross-Data Analysis and Retrieval Workshop',
    venueShort: 'ICDAR',
    year: '2020',
    type: 'conference',
    pages: '9--14',
    links: {
      paper: 'https://dl.acm.org/doi/abs/10.1145/3379174.3392318',
      code: '#'
    }
  },
  {
    id: 'pham2020early',
    title: 'Early unsafety detection in autonomous vehicles',
    authors: ['Thuy Thi Pham', 'Tien Dang', 'Nhu Nguyen', 'Thao Ha', 'Binh T Nguyen'],
    venue: 'Computational Collective Intelligence: 12th International Conference, ICCCI 2020',
    venueShort: 'ICCCI',
    year: '2020',
    type: 'conference',
    pages: '415--426',
    organization: 'Springer',
    links: {
      paper: 'https://link.springer.com/chapter/10.1007/978-3-030-63007-2_32',
      code: '#'
    }
  }
];

function PublicationCard({ publication }) {
  const formatAuthors = (authors) => {
    const makeBoldIfThuy = (author) => {
      return author === 'Thuy Thi Pham' ? 
        <strong key={author}>{author}</strong> : 
        <span key={author}>{author}</span>;
    };

    if (authors.length === 1) {
      return makeBoldIfThuy(authors[0]);
    }
    
    if (authors.length === 2) {
      return (
        <>
          {makeBoldIfThuy(authors[0])} and {makeBoldIfThuy(authors[1])}
        </>
      );
    }
    
    return (
      <>
        {authors.slice(0, -1).map((author, index) => (
          <span key={index}>
            {makeBoldIfThuy(author)}
            {index < authors.length - 2 ? ', ' : ''}
          </span>
        ))}
        , and {makeBoldIfThuy(authors[authors.length - 1])}
      </>
    );
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'journal':
        return '📄';
      case 'conference':
        return '📋';
      default:
        return '📄';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'journal':
        return 'journal';
      case 'conference':
        return 'conference';
      default:
        return 'publication';
    }
  };

  return (
    <div className="publication-card">
      <div className="publication-header">
        <div className="publication-header-left">
          <span className={`publication-type ${publication.type}`}>
            {getTypeIcon(publication.type)} {getTypeLabel(publication.type)}
          </span>
          <span className="venue-badge">
            {publication.venueShort}
          </span>
          {publication.status && (
            <span className="status-badge accepted">
              🚀 {publication.status}
            </span>
          )}
        </div>
        <span className="publication-year">{publication.year}</span>
      </div>
      
      <h3 className="publication-title">{publication.title}</h3>
      
      <p className="publication-authors">
        {formatAuthors(publication.authors)}
      </p>
      
      <div className="publication-venue">
        <span className="venue-name">{publication.venue}</span>
        {publication.pages && <span className="publication-pages">pp. {publication.pages}</span>}
        {publication.volume && <span className="publication-volume">vol. {publication.volume}</span>}
      </div>
      
      {(publication.publisher || publication.organization) && (
        <div className="publication-publisher">
          {publication.publisher || publication.organization}
        </div>
      )}

      {/* Publication Links */}
      <div className="publication-links">
        <a href={publication.links.paper} className="publication-link paper-link">
          📄 PAPER
        </a>
        {publication.links.code && publication.links.code !== '#' && (
          <a href={publication.links.code} className="publication-link code-link">
            💻 CODE
          </a>
        )}
      </div>
    </div>
  );
}

function PublicationsHeader() {
  return (
    <header style={{padding: '6rem 0 4rem', background: 'var(--academic-bg-section)', textAlign: 'center'}}>
      <div className="container">
        <h1 style={{fontSize: '3.5rem', fontWeight: '300', marginBottom: '1rem', color: 'var(--academic-text)', letterSpacing: '-0.02em'}}>
          Publications
        </h1>
        <p style={{fontSize: '1.2rem', color: 'var(--academic-text-light)', fontFamily: 'JetBrains Mono, monospace', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6'}}>
          Peer-reviewed publications spanning model-based deep learning, computer vision, image processing, natural language processing, and machine learning applications
        </p>
      </div>
    </header>
  );
}

function PublicationsFilter({ years, selectedYear, onYearChange, types, selectedType, onTypeChange }) {
  return (
    <div style={{padding: '2rem 0', borderBottom: '1px solid var(--academic-border)'}}>
      <div className="container">
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
            <span style={{fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', color: 'var(--academic-text-light)'}}>
              year:
            </span>
            <select 
              value={selectedYear} 
              onChange={(e) => onYearChange(e.target.value)}
              style={{
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid var(--academic-border)',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.9rem',
                background: 'var(--academic-bg)',
                color: 'var(--academic-text)'
              }}
            >
              <option value="all">all</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          
          <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
            <span style={{fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', color: 'var(--academic-text-light)'}}>
              type:
            </span>
            <select 
              value={selectedType} 
              onChange={(e) => onTypeChange(e.target.value)}
              style={{
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid var(--academic-border)',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.9rem',
                background: 'var(--academic-bg)',
                color: 'var(--academic-text)'
              }}
            >
              <option value="all">all</option>
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Publications() {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  // Get unique years and types for filtering
  const years = [...new Set(publicationsData.map(pub => pub.year))].sort((a, b) => b - a);
  const types = [...new Set(publicationsData.map(pub => pub.type))].sort();

  // Filter publications based on selected criteria
  const filteredPublications = publicationsData.filter(pub => {
    const yearMatch = selectedYear === 'all' || pub.year === selectedYear;
    const typeMatch = selectedType === 'all' || pub.type === selectedType;
    return yearMatch && typeMatch;
  });

  // Group publications by year for display
  const publicationsByYear = filteredPublications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {});

  const sortedYears = Object.keys(publicationsByYear).sort((a, b) => b - a);

  return (
    <Layout
      title="Publications"
      description="Research publications and academic contributions by Thuy Pham in computer vision, image processing, and machine learning."
    >
      <PublicationsHeader />
      
      <PublicationsFilter 
        years={years}
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
        types={types}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
      />

      <main style={{padding: '4rem 0'}}>
        <div className="container">
          {sortedYears.length > 0 ? (
            sortedYears.map(year => (
              <section key={year} style={{marginBottom: '3rem'}}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  color: 'var(--academic-primary)',
                  marginBottom: '2rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '2px solid var(--academic-primary)'
                }}>
                  {year}
                </h2>
                <div style={{display: 'grid', gap: '1.5rem'}}>
                  {publicationsByYear[year].map(publication => (
                    <PublicationCard key={publication.id} publication={publication} />
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div style={{textAlign: 'center', padding: '4rem 0', color: 'var(--academic-text-light)'}}>
              <p style={{fontFamily: 'JetBrains Mono, monospace'}}>no publications found for the selected criteria</p>
            </div>
          )}

          <div style={{marginTop: '4rem', padding: '2rem', background: 'var(--academic-bg-subtle)', borderRadius: '8px', textAlign: 'center'}}>
            <p style={{fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', color: 'var(--academic-text-light)', margin: 0}}>
              📊 total publications: {publicationsData.length} • journals: {publicationsData.filter(p => p.type === 'journal').length} • conferences: {publicationsData.filter(p => p.type === 'conference').length}
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
} 