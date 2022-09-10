import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Collaborate and Manage',
    text: 'Share and create with colleagues. Comment, suggest, manage teams and delegate tasks.',
  },
  {
    title: 'No Code Customization',
    text: 'Write without worrying about having to debug. Customize the format, insert tables and graphs, equations, footnotes and more all without code.',
  },
  {
    title: 'Conversion and Export',
    text: 'Be able to see auto generate LaTeX code of your current document. Export and share, download and publish.',
  },
 
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">With Polytex, write and publish papers faster than before with features that make the experience convenient, collaborative, and efficient.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
