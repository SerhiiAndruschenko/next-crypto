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
      <div style={{backgroundImage: `url(${review.image}`}} className="article-head flex flex-col gap-x-9 justify-between items-center mb-9 sm:flex-row">
        <div className="w-full">

          <Heading>{review.title}</Heading>
          <AnimatedElement>
            <p className="italic font-exo2 pb-3">{review.date}</p>
            <ShareLinkButton />
          </AnimatedElement>
        </div>
      </div>

      <AnimatedElement>
        <article
          dangerouslySetInnerHTML={{ __html: review.body }}
          className="w-full font-exo2 prose prose-slate max-w-none"
        />
      </AnimatedElement>
    </>
  );
}
