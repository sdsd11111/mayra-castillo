import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = "Ing. Mayra Castillo - Contadora Profesional",
    description = "Servicios profesionales de contabilidad, asesoría tributaria, comercio exterior y formalización de negocios en Loja, Ecuador.",
    image = "/Logo.jpg",
    url = "https://ingmayracastillo.com",
    type = "website"
}) => {
    const fullUrl = url.startsWith('http') ? url : `https://ingmayracastillo.com${url}`;
    const fullImage = image.startsWith('http') ? image : `https://ingmayracastillo.com${image}`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Open Graph Meta Tags */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content="es_EC" />
            <meta property="og:site_name" content="Ing. Mayra Castillo" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />
        </Helmet>
    );
};

export default SEO;
