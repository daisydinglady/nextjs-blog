import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>


            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() => {
                    window.fbAsyncInit = function () {
                        FB.init({
                            appId: '751077489957918',
                            autoLogAppEvents: true,
                            xfbml: true,
                            version: 'v16.0'
                        })
                    }
                    console.log(`script loaded correctly, window.B has been populated`, window.FB)
                }

                }
            />

            <h1 onClick={() => {
                FB.ui({
                    method: 'share',
                    href: 'https://developers.facebook.com/'
                },
                    function (response) { console.log('Facebook Response: ', response) });
            }}>First Post</h1>

            <h2>
                <Link href="/">◀︎ Back HomePage</Link>
            </h2>

            <img src="/images/profile.jpg" alt="my image" />

        </Layout>
    );

}