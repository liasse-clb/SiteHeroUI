"use client";

import Particles from "@/components/Particles";
import { useState } from "react";
import { Button } from "@heroui/react";
import DefaultLayout from "@/layouts/default";
import SplitText from "../components/SplitText";

export default function IndexPage() {
  const [showContent, setShowContent] = useState(false);

  return (
    <DefaultLayout>
      <section className="dark flex flex-col items-center justify-center gap-4">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-start">
          {/* Fundo */}
          <Particles
            particleColors={["#ffffff"]}
            particleCount={70}
            particleSpread={5}
            speed={0.1}
            particleBaseSize={35}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />

          {/* Conteúdo */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
            <div className="max-w-xl text-center">
              <SplitText
                text="A História Que Mudou Minha Vida"
                className="font-serif text-2xl font-semibold"
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
                  <p className="text-sm mb-3">
                    Algumas pessoas entram na nossa vida.
                    <br />
                    Outras se tornam parte dela.
                  </p>

                  <Button>
                    Começar
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}