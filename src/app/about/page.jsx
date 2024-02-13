import Heading from "@/src/components/Heading";
import "@/public/styles/about.scss";
import ContactForm from "@/src/components/ContactForm";
import AnimatedElement from "@/src/components/AnimatedElement";

export const metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <Heading>About Us:</Heading>

      <div className="about-content font-exo2">
        <AnimatedElement>
          <p>
            Welcome to Crypto Digest, a premier online platform dedicated to
            providing you with the latest news, insights, and analyses in the
            cryptocurrency world. At Crypto Digest, our passion for digital
            currencies and blockchain technology drives us to deliver
            up-to-the-minute news and comprehensive market analyses. We aim to
            empower investors, traders, and enthusiasts by offering a deep dive
            into the dynamics of cryptocurrencies.
          </p>

          <h2>Mission Statement</h2>
          <p>
            Crypto Digest is committed to being your most trusted source for
            cryptocurrency news. Our mission is to offer timely, accurate, and
            relevant information to help you stay ahead in the ever-evolving
            crypto landscape. Whether you're a seasoned investor or new to the
            world of digital currencies, we strive to provide content that
            enhances your understanding and supports your decisions in the
            crypto market.
          </p>

          <h2>Contact Us</h2>
          <p>
          Got a tip, a question, or interested in advertising with us? We're eager to hear from you. Connect with us at{" "}
            <a href="mailto:contact@cryptodigest.space">
              contact@cryptodigest.space
            </a>
            .
          </p>
        </AnimatedElement>

        <AnimatedElement>
          <ContactForm />
        </AnimatedElement>
      </div>
    </>
  );
}
