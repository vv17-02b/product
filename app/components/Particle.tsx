import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className=" absolute inset-0 -z-10 pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 120,
          particles: {
            color: {
               value: ["#202021", "#FFA73D"], // ← два кольори
            },
            shape: {
              type: "polygon", // Використовуємо багатокутник
              options: {
                polygon: {
                  sides: 6 // Робимо саме 6 кутів (шестикутник)
                },
              },
            },
            opacity: {
              value: { min: 0.7, max: 1 }, // Додаємо різну прозорість для об'єму
            },
            size: {
              value: { min: 10, max: 20 }, // Великі солідні фігури
            },
            // Додаємо легке обертання для реалістичності
            rotate: {
              value: 0,
              random: true,
              direction: "clockwise",
              animation: {
                enable: true,
                speed: 2, // Повільне, "дороге" обертання
                sync: false,
              },
            },
            links: {
              enable: true,
              distance: 220, // Довша павутина
              color: "#FFA73D", // Темно-сірий колір зв'язків
              opacity: 0.3, // Тонка, не кричуща павутина
              width: 1,
              triangles: {
                enable: true, // Додає ефект "сітки" між трьома частинками
                opacity: 0.05, // Дуже легке заповнення для реалізму
              },
            },
            move: {
              enable: true,
              speed: 1.5, // Повільний, плавний рух виглядає професійніше
              direction: "none",
              outModes: { default: "out" }, // Частинки плавно виходять і заходять
              random: true,
              straight: false,
            },
            number: {
              density: { enable: true, area: 1000 },
              value: 40, 
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab", // При наведенні "хапає" павутину — дуже стильно
              },
            },
            modes: {
              grab: {
                distance: 300,
                links: { opacity: 0.6 },
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Particle;
