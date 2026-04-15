import { useEffect } from 'react';

interface SEOHeadProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    canonical?: string;
}

const SEOHead = ({
    title = "Nirvriksh | Retail Control Architect for Garment Stores India | Stock Control System",
    description = "Garment store stock control system India. Fix stock mismatch in 30 days. Vadodara client recovered Rs 3.2 lakh, reduced mismatch from 17% to 2%. Clothing store inventory management, kapde ki dukaan software, retail consulting India.",
    keywords = "garment store software India, kapde ki dukaan software, clothing store inventory management, stock mismatch garment store, retail control system India, stock control clothing store, garment billing software India, inventory management for garment shop, cloth shop POS system, readymade garment billing software, garment store management system India, stock control software for clothing shop India, variant level billing for garment shop, GST billing with stock tracking garment store, size colour wise inventory garment shop, retail consulting for garment store, garment retail consulting India, done with you retail consulting India, 30 day stock control program for garment store, clothing store profitability consultant India, garment software Vadodara, garment software Surat, garment software Ahmedabad, garment software Delhi, garment software Bangalore, garment software Mumbai, garment software Mysore, garment software Gandhinagar, kapda store software, retail software near me, stock management software for cloth shop, business software for clothing store, how to fix stock loss in clothing store, garment store stock missing problem, cloth shop mein nuksaan kyun hota hai, billing software se stock track nahi hota, kapda store mein cash flow problem, how to reduce stock mismatch in retail store India, why my garment store is not profitable, garment shop mein paise kyun nahi bache rahe, buying galat ho raha hai garment store mein, billing software vs stock control software garment shop, Tally vs garment specific software, is Vyapar enough for garment store, best software for kapde ki dukaan India 2025, kya billing software se stock control ho sakta hai, Nirvriksh RCA, Retail Control Architect",
    ogTitle,
    ogDescription,
    canonical
}: SEOHeadProps) => {
    useEffect(() => {
        // Update title
        document.title = title;

        // Update or create meta tags
        const updateMetaTag = (name: string, content: string, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${name}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }

            element.setAttribute('content', content);
        };

        // Update meta tags
        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);
        updateMetaTag('og:title', ogTitle || title, true);
        updateMetaTag('og:description', ogDescription || description, true);
        updateMetaTag('twitter:title', ogTitle || title);
        updateMetaTag('twitter:description', ogDescription || description);

        // Update canonical link
        if (canonical) {
            let linkElement = document.querySelector('link[rel="canonical"]');
            if (!linkElement) {
                linkElement = document.createElement('link');
                linkElement.setAttribute('rel', 'canonical');
                document.head.appendChild(linkElement);
            }
            linkElement.setAttribute('href', canonical);
        }
    }, [title, description, keywords, ogTitle, ogDescription, canonical]);

    return null;
};

export default SEOHead;
