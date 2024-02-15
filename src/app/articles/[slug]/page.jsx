import Heading from "@/src/components/Heading";
import { getReview, getSlugs } from "@/lib/reviews";
import ShareLinkButton from "@/src/components/ShareLinkButton";
import Link from "next/link";
import AnimatedElement from "@/src/components/AnimatedElement";

// export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  const slugs = await getSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

export default async function ReviewPage({ params: { slug } }) {
  const review = await getReview(slug);

  return (
    <>


      <AnimatedElement>
        <div style={{backgroundImage: `url(${review.image}`}} className="article-hero">
          <h2 className="font-orbitron">{review.date}</h2>
          <h1 className="font-orbitron">{review.title}</h1>
          <ShareLinkButton />
        </div>
      </AnimatedElement>

      <AnimatedElement>
        <article
          dangerouslySetInnerHTML={{ __html: review.body }}
          className="w-full font-exo2 prose prose-slate max-w-none"
        />
      </AnimatedElement>
    </>
  );
}
