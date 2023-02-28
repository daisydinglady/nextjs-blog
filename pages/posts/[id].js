import Head from "next/head";
import Link from "next/link";
import utilsStyles from "../../styles/utils.module.css";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    console.log('postData------', params.id);
    return {
        props: {
            postData,
        }
    };

}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    console.log('paths------', paths);
    return {
        paths,
        fallback: false,
    }
}

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title> {postData.title} </title>
            </Head>

            <article>
                <h1 className={utilsStyles.headingXl}>{postData.title}</h1>
                <div className={utilsStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </article>
        </Layout>
    );
}