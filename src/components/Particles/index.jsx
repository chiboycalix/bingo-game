import Particles from 'react-tsparticles';

const Particle = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true },
        background: {
          color: {
            value: '#000',
          },
        },
        fpsLimit: 100,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 5,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 10,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 1000,
            },
            value: 120,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'star',
          },
          size: {
            random: true,
            value: 1,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
export default Particle;
