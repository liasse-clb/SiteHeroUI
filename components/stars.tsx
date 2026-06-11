import { FaStar } from "react-icons/fa";
import AnimatedContent from "./animate";

export default function Stars() {
    return (
        <section className="flex flex-col items-center justify-center mt-96 mb-96 w-full">
            <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={3.0}
                ease="power3.out"
                initialOpacity={0.1}
                animateOpacity
                scale={1}
                threshold={0}
                delay={0}
            >
                <div className="mt-">
                    <FaStar className="text-white text-2xl"
                        style={{
                            filter: `
      drop-shadow(0 0 5px #fde047)
      drop-shadow(0 0 10px #fde047)
      drop-shadow(0 0 20px #fde047)
    `
                        }}
                    />
                </div>
            </AnimatedContent>
            
        </section>

    );
}