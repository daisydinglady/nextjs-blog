import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getStoredPostsData } from '../lib/posts';
import Date from '../components/date';


export async function getStaticProps() {
  const allPostsData = getStoredPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Learn how to build a personal website using Next.js</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.Les's start with the <Link href="/posts/first-post">first-post</Link>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => {
            console.log("date:" , date)
            return (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            )
          })}
        </ul>
      </section>
    </Layout>
  );
}
