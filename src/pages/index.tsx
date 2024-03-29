import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import headerImage from './crackedworld.webp';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const headerStyle = {
      backgroundImage: `url(${headerImage})`
  }

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={headerStyle}>
      <div className={clsx('container', styles.heroContainer)}>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle hero--primary', styles.heroSubtitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Welcome to the Aetherion Cradle
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        Home
      </main>
    </Layout>
  );
}
