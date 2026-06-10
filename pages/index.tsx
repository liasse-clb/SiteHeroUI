"use client";

import Particles from "@/components/Particles";
import { useState } from "react";
import { Button } from "@heroui/react";
import DefaultLayout from "@/layouts/default";
import SplitText from "../components/SplitText";
import AnimatedContent from "@/components/animate";

export default function IndexPage() {
  const [showContent, setShowContent] = useState(false);

  return (
    <DefaultLayout>
      <section className=" dark flex flex-col items-center gap-4">
        <div className="mt-6 z-20 flex flex-col items-center justify-start">
          {/* Fundo */}
          <div className="z-0 absolute">
            <Particles

              particleColors={["#ffffff"]}
              particleCount={150}
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
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-xl text-center">
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
      <section id="historia" className="w-[100%] mt-64 text-center flex flex-col items-center gap-4">

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
          text="Toque no aqui ↓ para melhor experiência :)"
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
          <source src="/audio/musga.mp3" type="audio/mpeg" />
        </audio>
        <p className="text-white font-serif text-sm">Nenhuma delas fazia ideia.</p>
      </section>
    </DefaultLayout>
  );
}