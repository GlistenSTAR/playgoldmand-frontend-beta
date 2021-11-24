import React from 'react'
import Head from "next/head";

<<<<<<< HEAD:components/common/DefaultHeader.jsx
export default function DefaultHeader(
  { title, description, image }) {
=======
export default function Header(
  { title, description, image }: {
    title?: string,
    description?: string,
    image?: string
  }
): JSX.Element {
>>>>>>> 6a7afd9a1bcf43f7cb404a0fc332063faa4db5a0:components/common/Header.tsx
  return (
    <Head>
      <title>{title}</title>
      <meta id="og-title" property="og:title" content={title} />
      <meta id="og-description" property="og:description" content={description} />
      <meta id="og-image" property="og:image" content={image} />
      <meta id="twitter-title" property="twitter:title" content={title} />
      <meta id="twitter-description" property="twitter:description" content={description} />
      <meta id="twitter-image" property="twitter:image" content={image} />
      <meta name="msapplication-TileColor" content="#1235ba" />
      <meta name="theme-color" content="#1A1A1A" />
      {image && image.includes('.gif') ? <meta content="image/gif" property="og:image:type" /> : ''}
    </Head>
  )
}