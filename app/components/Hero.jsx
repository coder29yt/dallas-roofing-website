"use client";

import Image from "next/image";
import Nav from "./Nav";
import VideoCard from "./VideoCard";
import { useLang } from "./Lang";
import { ArrowUpRight } from "./icons";

export default function Hero() {
  const { t } = useLang();

  let tagIdx = 0;

  return (
    <section id="home" className="hero">
      {/* main house cutout — slow parallax rise */}
      <div className="heroHouseWrap" aria-hidden="true">
        <Image
          src="/images/hero-house.png"
          alt=""
          width={1310}
          height={670}
          priority
          sizes="90vw"
        />
      </div>

      <Nav />

      {/* headline + tagline */}
      <div className="heroRow">
        <h1 className="heroH1">
          {t.h1.map((word, i) => (
            <span className="h1Line" key={word}>
              <span className="w" style={{ animationDelay: `${t.h1Delays[i]}ms` }}>
                {word}
              </span>
            </span>
          ))}
        </h1>

        <p className="heroTag">
          {t.tagline.map((line, li) => (
            <span className="tagLine" key={li}>
              {line.map((word) => {
                const d = t.taglineStart + tagIdx++ * t.taglineStep;
                return (
                  <span className="w wTag" style={{ animationDelay: `${d}ms` }} key={word}>
                    {word}{" "}
                  </span>
                );
              })}
            </span>
          ))}
        </p>
      </div>

      {/* explore link */}
      <div className="exploreRow">
        <a
          href="#services"
          className="explore w"
          style={{ animationDelay: "1.85s", animationDuration: "0.8s" }}
        >
          {t.explore}
          <ArrowUpRight size={18} />
        </a>
      </div>

      {/* bottom-left reel card */}
      <VideoCard />
    </section>
  );
}
