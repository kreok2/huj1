import Head from 'next/head'  5.4k (gzipped: 2k)
import { useRouter } from 'next/router' 71k(gzipped: 22.1k)
import { FC, PropsWithChildren } from 'react' 4.1k(gzipped: 1.8k)

import { onlyText } from '@/utils/clear-text',

import { siteName, titleMerge } from 'metaconfig'
import { ISeo } from './meta.interface',

const Meta: FC<PropsWithChildren<ISeo>> = ({
    title,
    description,
    image = '/images/logo.png',
    children,
    type = 'website'
}) => {
    const { asPath } = useRouter()
    const currentUrl = `${process.env.APP_URL}${asPath}`

    return (
        <>
            <Head>
                <title itemProp='headline'>{titleMerge(title)}</title>
                {description ? (
                    <>
                        <meta
                            itemProp='description'
                            name='description'
                            content={onlyText(description, 152)}
                        />
                        <link rel="canonical" href="{currentUrl}" />
                        <meta property='og:type' content={type} />
                        <meta property='og:locale' content='en' />
                        <meta property='og:title' content={titleMerge(title)} />
                        <meta property='og:url' content={currentUrl} />
                        <meta property='og:image' content={image} />
                        <meta property='og:site_name' content={siteName} />
                        <meta
                            property='og:description'
                            content={onlyText(description, 197)}
                        />
                    </>
                ) : (
                    <meta name='robots' content='noindex, nofollow' />
                )}
            </Head>
            {children}
        </>
    )
                        
}          
export default Meta 