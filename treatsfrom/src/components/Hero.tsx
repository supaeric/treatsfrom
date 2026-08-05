"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { liveCountries, countries } from "@/content/countries";

/**
 * HERO VIDEO — how to swap in your footage
 *
 * 1. Export two files and put them in /public/media:
 *      hero.mp4   (H.264, 1080x1920 portrait, ~6-10s loop, no audio)
 *      hero.webm  (VP9, same source — smaller, served first where supported)
 *    Also export hero-poster.jpg (first frame, ~120KB, same dimensions).
 * 2. Set HERO_VIDEO to true below.
 *
 * Keep the file under 3MB. Everything is muted, looped, inline and
 * lazy-decoded, and the poster paints instantly so LCP never waits on video.
 * Users with "reduce motion" enabled see the poster only.
 */
const HERO_VIDEO = false;
const POSTER = "/media/hero-poster.jpg";

export default function Hero() {
  const destinations = (liveCountries.length ? liveCountries : countries).map(
    (c) => ({ name: c.name, accent: c.accent, accentInk: c.accentInk })
  );
  const [i, setI] = useState(0);
  const [motionOk, setMotionOk] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMotionOk(!mq.matches);
    const onChange = () => setMotionOk(!mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!motionOk || destinations.length < 2) return;
    const t = window.setInterval(
      () => setI((v) => (v + 1) % destinations.length),
      2800
    );
    return () => window.clearInterval(t);
  }, [motionOk, destinations.length]);

  const current = destinations[i] ?? destinations[0];

  return (
    <section className="relative isolate overflow-hidden border-b-2 border-ink">
      <div className="absolute inset-0 -z-10">
        {HERO_VIDEO && motionOk ? (
          <video
            className="h-full w-full object-cover"
            poster={POSTER}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
          >
            <source src="/media/hero.webm" type="video/webm" />
            <source src="/media/hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <div
            aria-hidden
            className="h-full w-full"
            style={{
              background:
                "radial-gradient(120% 90% at 20% 0%, #EDE5D6 0%, #F5F0E6 45%, #E4D9C2 100%)",
            }}
          />
        )}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(245,240,230,0.62) 0%, rgba(245,240,230,0.86) 55%, rgba(245,240,230,0.97) 100%)",
          }}
        />
      </div>

      <div className="shell py-20 sm:py-28 lg:py-36">
        <p className="label text-muted">
          Imported in bulk · Packed in Ohio · Shipped in 2-4 days
        </p>

        <h1 className="display mt-5 text-[clamp(2.9rem,13vw,7.5rem)]">
          Treats From{" "}
          <span
            key={current.name}
            className="stamp stamp-in"
            style={
              {
                "--accent": current.accent,
                "--accent-ink": current.accentInk,
              } as React.CSSProperties
            }
          >
            {current.name}
          </span>
        </h1>

        <p className="mt-7 max-w-xl text-lg text-muted sm:text-xl">
          The snacks you grew up with, without the six-week wait or the customs
          form. We fly them in by the pallet and post them from Ohio.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/treats-from/south-africa" className="btn btn-primary">
            Shop South Africa
          </Link>
          <Link href="/how-it-works" className="btn btn-ghost">
            How it works
          </Link>
        </div>

        <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
          {[
            ["2-4 days", "Typical US delivery"],
            ["$30+", "Ships free in the US"],
            ["4 months", "Minimum shelf life"],
          ].map(([value, label]) => (
            <div key={label} className="border-t-2 border-ink pt-3">
              <dt className="display text-2xl sm:text-3xl">{value}</dt>
              <dd className="label mt-1 text-muted">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
