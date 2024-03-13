import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'From Technical to Tangible',
    Svg: require('@site/static/img/undraw_absorbed_in_re_ymd6.svg').default,
    description: (
      <>
         I turn complex API concepts into documentation that gives developers the knowledge and driection they need, to get value from your developer products."
      </>
    ),
  },
  {
    title: 'Streategy for your DevEx Journey',
    Svg: require('@site/static/img/online-reading.svg').default,
    description: (
      <>
        Good developer experience is a complex mixture of technical, business, and human factors. I help you understand and improve your developer experience by providing holisic undestanding and actionable insights.
      </>
    ),
  },
  {
    title: 'Your All-in-One Developer Portal Specialist',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Whether you need a high level strategy, a detailed review of your current developer portal, code updates to your portal, or somebody to write the docs, I can help you.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
