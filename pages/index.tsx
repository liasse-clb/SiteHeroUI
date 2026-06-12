"use client";

import Particles from "@/components/Particles";
import { useState } from "react";
import { Button } from "@heroui/react";
import DefaultLayout from "@/layouts/default";
import SplitText from "../components/SplitText";
import Stars from "@/components/stars";
import Section from "@/components/Section";
import Cap1 from "@/components/Cap1";
import Cap2 from "@/components/Cap2";
import Cap3 from "@/components/Cap3";
import Cap4 from "@/components/Cap4";
import Cap5 from "@/components/Cap5";
import Cap6 from "@/components/Cap6";
import Cap7 from "@/components/Cap7";
import Cap8 from "@/components/Cap8";
import Cap9 from "@/components/Cap9";
import Cap10 from "@/components/Cap10";
import Cap11 from "@/components/Cap11";
import Stack from "@/components/Pilha";
import Link from "next/link";

export default function IndexPage() {
  const [showContent, setShowContent] = useState(false);
  const images = [
    "/img1.png",
    "/img2.png",
    "/img3.png",
    "/img4.png",
    "/img5.png",
    "/img6.png"
  ];


  return (
    <DefaultLayout>
      <section className=" dark flex flex-col items-center gap-4">
        <div className="mt-2 z-20 flex flex-col items-center justify-start">
          {/* Fundo */}
          <div className="z-0 absolute">
            <Particles

              particleColors={["#ffffff"]}
              particleCount={90}
              particleSpread={18}
              speed={0.1}
              particleBaseSize={45}
              moveParticlesOnHover
              alphaParticles={false}
              disableRotation={false}
              pixelRatio={1}
            />
          </div>
          {/* Conteúdo */}
          <div className="flex flex-col items-center justify-center h-[100vh]">
            <div className="max-w-xl text-center h-full">
              <SplitText
                text="A História Que Mudou Minha Vida"
                className="text-white font-serif text-2xl font-semibold"
                delay={200}
                duration={1.25}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                onLetterAnimationComplete={() => setShowContent(true)}
              />

              {showContent && (
                <div className="mt-2 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  <p className="text-sm mb-3 text-white">
                    Algumas pessoas entram na nossa vida.
                    <br />
                    Outras se tornam parte dela.
                  </p>

                  <Button
                    onPress={() => {
                      document
                        .getElementById("historia")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}>
                    Começar
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

      </section>
      <section id="historia" className="w-[100%] mt-20 text-center flex flex-col items-center gap-4">

        <SplitText
          text="Quando éramos crianças."
          className="text-white font-serif text-2xl font-semibold"
          delay={120}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          onLetterAnimationComplete={() => setShowContent(true)}
        />
        <img className="rounded-3xl" src="/img3.png" alt="image" />

        <SplitText
          text="Toque aqui ↓ para melhor experiência :)"
          className="text-white font-serif text-sm"
          delay={120}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          onLetterAnimationComplete={() => setShowContent(true)}
        />
        <audio controls>
          <source src="/audio/easy.mp3" type="audio/mpeg" />
        </audio>
        <p className="text-white font-serif text-sm">Nenhuma delas fazia ideia.</p>
        <Stars />
      </section>

      <section className="mb-56">
        <Section />
      </section>
      <section className="mb-56">
        <Cap1 />
      </section>
      <section className="mb-56">
        <Cap2 />
      </section>
      <section className="mb-56">
        <Cap3 />
      </section>
      <section className="mb-56">
        <Cap4 />
      </section>
      <section className="mb-56">
        <Cap5 />
      </section>
      <section className="mb-56">
        <Cap6 />
      </section>
      <section className="mb-56">
        <Cap7 />
      </section>
      <section className="mb-56">
        <Cap8 />
      </section>
      <section className="mb-56">
        <Cap9 />
      </section>
      <section className="mb-56">
        <audio controls >
          <source src="/audio/musga.mp3" type="audio/mpeg" />
        </audio>
        <Cap10 />
      </section>
      <section className="mb-56">
        <Cap11 />
      </section>

      <div style={{ width: 208, height: 208 }} className="flex items-center justify-center m-auto">
        <Stack
          randomRotation={false}
          sensitivity={200}
          sendToBackOnClick={true}
          cards={images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`card-${i + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ))}
          autoplay={false}
          autoplayDelay={3000}
          pauseOnHover={false}
        />
      </div>
      <section className=" dark mt-32 flex flex-col items-center gap-4">
        <p className="text-white font-serif text-sm">Toque aqui ↓</p>
        <Link href="/carta">
          <button
            className="
            px-8 py-4
            rounded-lg
            bg-purple-700
            hover:bg-purple-600
            text-white
            font-semibold
            transition-all
            duration-300
            hover:scale-105
            shadow-lg
          "
          >
            Abrir Carta 💜
          </button>
        </Link>
      </section>
    </DefaultLayout>
  );
}