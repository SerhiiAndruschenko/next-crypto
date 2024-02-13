import AnimatedElement from "./AnimatedElement";

export default function HomeBanner() {
  return (
    <>
      <AnimatedElement>
        <div className="home-hero">
          <h1 className="font-orbitron">Welcome to Crypto Digest</h1>
          <h2 className="font-orbitron">Breaking News in the World of Cryptocurrency</h2>
        </div>
      </AnimatedElement>
    </>
  );
}
