"use client";

import { useState } from "react";
import Image from "next/image";

export default function LoveLetter() {
    const [opened, setOpened] = useState(false);
    const [hideEnvelope, setHideEnvelope] = useState(false);

    const handleOpen = () => {
        setOpened(true);

        setTimeout(() => {
            setHideEnvelope(true);
        }, 1200);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div
                className={`
                    relative
                    transition-all
                    duration-1000
                    ${opened ? "w-full max-w-5xl" : "w-[320px] sm:w-[500px] aspect-video"}
                `}
            >
                {/* Papel / Carta */}
                <div
                    className={`
                        absolute
                        left-1/2
                        -translate-x-1/2
                        bg-[#f3e6c5]
                        border border-[#d6c39c]
                        shadow-2xl
                        overflow-y-auto

                        transition-all
                        duration-[1800ms]
                        ease-out

                        ${opened
                            ? `
                                top-0
                                w-full
                                
                                rounded-md
                            `
                            : `
                                top-10
                                w-[92%]
                                h-[180px]
                            `
                        }
                    `}
                >
                    <div
                        className={`
                            p-6 md:p-12
                            transition-all
                            duration-1000
                            delay-700
                            ${opened
                                ? "opacity-100"
                                : "opacity-0"
                            }
                        `}
                    >
                        <h2 className="text-2xl sm:text-4xl font-serif text-[#5f2a8a] mb-6">
                            Para Raissa 💜
                        </h2>

                        <p className="text-sm sm:text-base leading-8 text-stone-700">
                            Cariño, <br/>
                            Se você está lendo isso, significa que chegou ao final.
                            Ou talvez não.
                            Porque, se existe uma coisa que nossa história me ensinou, é que os finais nunca foram o nosso forte.
                            Nós sempre fomos melhores em reencontros.
                            Durante muito tempo pensei em como terminar este projeto.
                            E a verdade é que não existe uma forma perfeita.
                            Porque não existe uma quantidade de palavras capaz de carregar tudo o que você significa para mim.
                            Mesmo depois de dezenas de páginas.
                            Mesmo depois de anos.
                            Mesmo depois de uma vida inteira de sentimentos.
                            Mas existe uma coisa que eu precisava que você soubesse.
                            Uma única coisa.
                            Você foi a melhor coisa que já me aconteceu.
                            E não digo isso por causa dos beijos.
                            Não digo isso por causa das cartas.
                            Não digo isso por causa das músicas.
                            Nem por causa das memórias bonitas.
                            Digo isso porque você mudou quem eu sou.
                            Existe uma versão minha que existia antes de você.
                            E existe a versão que existe agora.
                            E entre elas está o caminho que percorremos juntas.
                            Você me viu em dias que eu não sabia como continuar.
                            Você me viu em dias felizes.
                            Você me viu quando eu estava perdida.
                            Você me viu quando eu estava tentando me encontrar.
                            E, sem perceber, me ajudou a encontrar partes de mim que eu não sabia que existiam.
                            Você me ensinou que amor não é apenas intensidade.
                            Também é presença.
                            Também é cuidado.
                            Também é escolher ficar.
                            E talvez seja por isso que, quando penso na palavra "lar", seu rosto sempre aparece primeiro.
                            Porque os lugares mais felizes da minha vida nunca foram lugares.
                            Foram momentos.
                            Momentos ao seu lado.
                            Uma noite de filme.
                            Uma conversa qualquer.
                            Uma receita que não saiu exatamente como planejado.
                            Uma música compartilhada.
                            Uma piada interna.
                            Uma coberta dividida.
                            Uma cenoura.
                            Principalmente a cenoura.
                            Porque até hoje acho injusto que você não saiba o quanto aquele vídeo me fez sorrir.
                            Talvez essa seja uma das coisas mais bonitas sobre você.
                            Você nunca percebe completamente o tamanho da felicidade que entrega aos outros.
                            Nunca percebe o tamanho da luz que carrega.
                            Nunca percebe o quanto é admirável.
                            Mas eu percebo.
                            Sempre percebi.
                            Antes de me apaixonar por você, eu admirei você.
                            E talvez seja por isso que meu amor criou raízes tão profundas.
                            Porque ele não nasceu apenas da paixão.
                            Nasceu do respeito.
                            Da admiração.
                            Do orgulho.
                            Da mulher extraordinária que você é.
                            Você é forte.
                            Mesmo quando acha que não é.
                            Você é bonita.
                            Mesmo quando insiste em discordar.
                            Você é especial.
                            Mesmo quando não percebe.
                            E você é amada.
                            Mais do que qualquer texto conseguiria explicar.
                            Mais do que qualquer carta conseguiria contar.
                            Mais do que qualquer site conseguiria mostrar.
                            Se eu pudesse te dar apenas uma coisa neste mundo...
                            não seria um presente.
                            Seria a possibilidade de se enxergar através dos meus olhos por apenas um minuto.
                            Porque aí você finalmente entenderia.
                            Entenderia por que escrevi tudo isso.
                            Entenderia por que passei anos escolhendo você.
                            Entenderia por que continuo escolhendo.
                            E entenderia por que, de todas as histórias possíveis...
                            a nossa sempre foi a minha favorita.
                            Eu não sei o que o futuro guarda.
                            A vida é estranha.
                            Imprevisível.
                            E nós duas sabemos disso melhor do que ninguém.
                            Mas existe algo que eu sei.
                            Se eu pudesse voltar no tempo...
                            até aquela rua da sua tia.
                            Até aquelas segundas-feiras.
                            Até aquelas duas crianças que não faziam ideia do que o destino estava preparando.
                            Eu escolheria você de novo.
                            Escolheria todas as versões suas.
                            A criança.
                            A adolescente.
                            A amiga.
                            A mulher.
                            Todas.
                            Porque em você não encontrei apenas o amor.
                            Encontrei o significado de viver uma vida inteira mergulhada na imensidão da felicidade.
                            E se alguém me perguntasse qual foi a história mais bonita que já vivi...
                            eu responderia sem pensar.
                            Foi você.
                            Foi nós.
                            E sempre será.
                            Nós. <br /> <br />

                            <span className="font-bold">Com amor, sua Dias. 💜</span>
                        </p>
                    </div>
                </div>

                {/* Envelope */}
                <div
                    className={`
                        absolute
                        inset-0
                        transition-all
                        duration-1000
                        ease-in-out

                        ${hideEnvelope
                            ? "translate-y-40 opacity-0 pointer-events-none"
                            : "translate-y-0 opacity-100"
                        }
                    `}
                >
                    {/* Selo */}
                    <button
                        onClick={handleOpen}
                        className={`
                            absolute
                            left-1/2
                            top-1/2
                            -translate-x-1/2
                            -translate-y-1/2
                            z-40
                            transition-all
                            duration-1000
                            ${opened
                                ? "opacity-0 scale-0 rotate-180"
                                : "opacity-100 scale-100"
                            }
                        `}
                    >
                        <Image
                            src="/seal.png"
                            alt="Selo"
                            width={90}
                            height={90}
                            className="drop-shadow-2xl"
                        />
                    </button>

                    {/* Tampa */}
                    <div
                        className={`
                            absolute
                            inset-0
                            bg-[#c9aa72]
                            z-30
                            transition-all
                            duration-1000
                            origin-top
                            ${opened
                                ? "[clip-path:polygon(50%_0%,100%_0%,0%_0%)]"
                                : "[clip-path:polygon(50%_50%,100%_0%,0%_0%)]"
                            }
                        `}
                    />

                    {/* Lado esquerdo */}
                    <div
                        className="
                            absolute
                            inset-0
                            bg-[#b8945e]
                            z-20
                            [clip-path:polygon(50%_50%,0_0,0_100%)]
                        "
                    />

                    {/* Lado direito */}
                    <div
                        className="
                            absolute
                            inset-0
                            bg-[#c19c65]
                            z-20
                            [clip-path:polygon(50%_50%,100%_0,100%_100%)]
                        "
                    />

                    {/* Parte inferior */}
                    <div
                        className="
                            absolute
                            inset-0
                            bg-[#a8834e]
                            z-10
                            [clip-path:polygon(50%_50%,100%_100%,0_100%)]
                        "
                    />
                </div>
            </div>
        </div>
    );
}