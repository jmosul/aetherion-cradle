import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    img: any;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Giant Stewards',
        img: require('./images/council_256.webp').default,
        description: (
            <>
                Jotunvik is run by Stewards of the Eternal Throne.
                They see themselves as caretakers of Annam's creation, striving to maintain balance and prosperity.
            </>
        ),
    },
    {
        title: 'Commerce',
        img: require('./images/market_256.webp').default,
        description: (
            <>
                The economy reflects the diversity of its inhabitants and their sizes, from colossal pieces of furniture
                and garments for giants to finely crafted items suited for smaller folk.
            </>
        ),
    },
    {
        title: 'Collaboration',
        img: require('./images/balcony_256.webp').default,
        description: (
            <>
                The giants foster a society where all races are valued contributors. Giant-kin, often serve as
                intermediaries, a unique status that allows them to navigate both worlds freely.
            </>
        ),
    }
];

function Feature({title, img, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className={styles.featureContainer}>
                <img className={styles.featureSvg} src={img} role="img"/>
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
