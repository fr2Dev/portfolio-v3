import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <link
        rel="icon"
        type="image/svg+xml"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%2320123a%22></rect><path fill=%22%2355ffbd%22 d=%22M52.32 76.60L30.48 76.60L30.48 70.12L33.12 69.88Q35.44 69.64 35.44 67.64L35.44 67.64L35.44 30.44L30.88 30.20L30.88 23.40L69.52 23.40L69.52 36.68L61.36 37.24L61.36 34.04Q61.36 32.68 60.96 32.12Q60.56 31.56 59.04 31.56L59.04 31.56L45.20 31.56L45.20 45.72L64.88 45.72L64.88 53.88L45.20 53.88L45.20 69.56L52.32 69.80L52.32 76.60Z%22></path></svg>"
      />
      <meta name="google-site-verification" content="O5sM_JVNNgorcfNInrgu3Nx8UArsxJeV7YRS8lyM-ng" />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <meta name="description" content={description} />
      <meta name="robots" content="index, nofollow" />
      <meta name="author" content={fullname} />
      {/* <!-- Twitter Card data --> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      {/* <!-- Open Graph data --> */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="profile" />
      <meta property="og:url" content={site} />
      <meta property="og:image" content={img} />
      <meta property="og:description" content={description} />
      <meta property="profile:first_name" content={firstname} />
      <meta property="profile:last_name" content={lastname} />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>{title}</title>
      <link rel="canonical" href={site} />
      <script type="application/ld+json">{data}</script>
    </Helmet>
  );
};

const firstname = 'François';
const lastname = 'Degrincourt';
const fullname = `${firstname} ${lastname}`;
const role = 'Front End Developer';
const title = `${firstname} ${lastname} - ${role}`;
const site = 'https://francoisdpro.eu';
const description =
  'I build amazing websites with these techs: React, Typescript, Javascript, jQuery, Sass, Bootstrap, CSS3, HTML5, Git, Adobe XD, Photoshop, SQL, PHP.';
const img = './assets/images/preview-meta.jpg';
const data = JSON.stringify({
  '@context': 'http://schema.org/',
  '@type': 'Person',
  name: fullname,
  jobTitle: role,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bussy-Saint-Georges',
    addressRegion: 'Ile de France',
  },
});

export default SEO;
