import ScrollReveal from "./BlurText";
import ScrollFloat from "./BlurText";

export default function PrimeiroAdeus() {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };
    return (
        <section>


            <div className="mb-24">
                <ScrollReveal
                    baseOpacity={0.1}
                    enableBlur
                    baseRotation={9}
                    blurStrength={8}
                >
                    Existem histórias que começam com um encontro.
                    
                    A nossa não.
                </ScrollReveal>
            </div>
             <div className="mb-24">
                <ScrollReveal
                    baseOpacity={0.1}
                    enableBlur
                    baseRotation={9}
                    blurStrength={8}
                >   
                    A nossa não.
                </ScrollReveal>
            </div>
            <div className="mb-24">
                <ScrollReveal
                    baseOpacity={0.1}
                    enableBlur
                    baseRotation={9}
                    blurStrength={8}
                >   
                    A nossa começou com três.
                </ScrollReveal>
            </div>
            <div className="mb-24">
                <ScrollReveal
                    baseOpacity={0.1}
                    enableBlur
                    baseRotation={9}
                    blurStrength={8}
                >   
                    O primeiro aconteceu quando éramos crianças demais para entender a importância daquilo.
                </ScrollReveal>
            </div>
            <div className="mb-24">
                <ScrollReveal
                    baseOpacity={0.1}
                    enableBlur
                    baseRotation={9}
                    blurStrength={8}
                >   
                    O primeiro aconteceu quando éramos crianças demais para entender a importância daquilo.
                </ScrollReveal>
            </div>

        </section>
    );
}