import { useEffect, useState } from 'react';
import { Sword, Map, Flame } from 'lucide-react';

// Ember Particles Component
function EmberParticles() {
  const [particles] = useState(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      bottom: `${Math.random() * 20}%`,
      animationDelay: `${Math.random() * 8}s`,
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="ember-particle"
          style={{
            left: particle.left,
            bottom: particle.bottom,
            animationDelay: particle.animationDelay,
          }}
        />
      ))}
    </div>
  );
}

// Ornamental Divider Component
function Divider() {
  return (
    <div className="ornamental-divider">
      <span className="diamond" />
    </div>
  );
}

// Hero Section
function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(180deg,
          rgba(10, 8, 6, 0.7) 0%,
          rgba(17, 14, 10, 0.5) 40%,
          rgba(10, 8, 6, 0.8) 100%
        ), url('https://images.unsplash.com/photo-1533130061792-64b345e4fc8b?w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <EmberParticles />

      {/* Atmospheric Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, rgba(10, 8, 6, 0.6) 70%, rgba(10, 8, 6, 0.95) 100%)`,
        }}
      />

      {/* Content */}
      <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto ${loaded ? 'fade-in-up' : 'opacity-0'}`}>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 gold-gradient"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          DARK SOULS III
        </h1>

        <p
          className="text-xl sm:text-2xl mb-12"
          style={{
            color: 'var(--text-light)',
            fontFamily: 'Crimson Text, serif',
            fontStyle: 'italic',
            lineHeight: '1.5',
          }}
        >
          Огонь угасает. Свяжешь ли ты его — или позволишь наступить веку тьмы?
        </p>

        <button className="cta-button">
          ПРИГОТОВЬСЯ УМЕРЕТЬ
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 floating">
        <div
          className="w-6 h-10 border-2 rounded-full flex justify-center pt-2"
          style={{ borderColor: 'rgba(201, 168, 76, 0.4)' }}
        >
          <div className="w-1 h-2 bg-gold rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
        </div>
      </div>
    </section>
  );
}

// Lore Section
function LoreSection() {
  return (
    <section id="lore" className="py-24 px-6 parchment-bg">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">МИР ЛОТРИКА</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="image-overlay rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1494507862728-61477b9bb4bc?w=1200&q=80"
              alt="Тёмные руины"
              className="w-full h-80 object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1a1008, #0a0806)';
              }}
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-lg mb-6" style={{ color: 'var(--text)', fontFamily: 'Crimson Text, serif' }}>
              Лотрик — королевство на краю гибели. Первое Пламя, дающее жизнь богам и людям, медленно угасает.
              Нежить вновь заполняет мир, а пепел великих героев поднимается из могил.
            </p>

            <Divider />

            <p className="text-lg mb-6" style={{ color: 'var(--text)', fontFamily: 'Crimson Text, serif' }}>
              Ты — Пепельный, избранный из мёртвых. Твоя задача — разыскать Повелителей Пепла, вернуть их на троны
              и либо связать Пламя своей душой, либо позволить тьме воцариться навсегда.
            </p>

            <p className="text-lg" style={{ color: 'var(--text)', fontFamily: 'Crimson Text, serif' }}>
              Каждый костёр — маленький островок надежды в мире, где смерть стала обыденностью.
              Ты будешь умирать снова и снова — но каждый раз возвращаться.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Boss Card Component
interface BossCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

function BossCard({ name, description, imageUrl }: BossCardProps) {
  return (
    <div className="boss-card rounded-sm">
      <div className="image-overlay">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-48 object-cover"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1a1008, #0a0806)';
          }}
        />
      </div>
      <div className="p-6">
        <h3
          className="text-xl mb-4"
          style={{ fontFamily: 'Cinzel, serif', color: 'var(--gold)' }}
        >
          {name}
        </h3>
        <p
          className="text-base"
          style={{ color: 'var(--text)', fontFamily: 'Crimson Text, serif' }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

// Characters Section
function CharactersSection() {
  const bosses = [
    {
      name: "Стражи Бездны",
      description: "Легион воинов, связавших себя клятвой. Их движения резки и стремительны — они танцуют со смертью.",
      imageUrl: "https://images.unsplash.com/photo-1578632767156-20c4d91a5d0c?w=600&q=80"
    },
    {
      name: "Олдрик, Пожиратель Богов",
      description: "Святой, ставший чудовищем. Он поглощал богов, чтобы видеть сны о тёмном море под пепельными небесами.",
      imageUrl: "https://images.unsplash.com/photo-1509247577836-1f3a2a1d98c5?w=600&q=80"
    },
    {
      name: "Йорм Великан",
      description: "Король, ставший тюремщиком. Он запер себя среди преступников, неся стражу в одиночестве и скорби.",
      imageUrl: "https://images.unsplash.com/photo-1518709766631-3bf07f1948d9?w=600&q=80"
    },
    {
      name: "Лотрик, Младший Принц",
      description: "Наследник, отвергнувший своё предназначение. Хрупкий телом, но опасный магией — он выбрал отчаяние вместо долга.",
      imageUrl: "https://images.unsplash.com/photo-1534447678489-17f8a3a17cc3?w=600&q=80"
    }
  ];

  return (
    <section
      id="characters"
      className="py-24 px-6"
      style={{
        background: `linear-gradient(180deg,
          var(--bg-primary) 0%,
          var(--bg-secondary) 50%,
          var(--bg-primary) 100%
        )`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">ПОВЕЛИТЕЛИ ПЕПЛА</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bosses.map((boss, index) => (
            <BossCard key={index} {...boss} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Feature Block Component
interface FeatureBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureBlock({ icon, title, description }: FeatureBlockProps) {
  return (
    <div className="feature-block p-8">
      <div className="flex items-center gap-4 mb-4">
        <div
          className="p-3 rounded-full"
          style={{
            backgroundColor: 'rgba(194, 68, 15, 0.2)',
            color: 'var(--ember-light)'
          }}
        >
          {icon}
        </div>
        <h3
          className="text-xl"
          style={{ fontFamily: 'Cinzel, serif', color: 'var(--gold)' }}
        >
          {title}
        </h3>
      </div>
      <p
        className="text-lg"
        style={{ color: 'var(--text)', fontFamily: 'Crimson Text, serif' }}
      >
        {description}
      </p>
    </div>
  );
}

// Gameplay Section
function GameplaySection() {
  return (
    <section
      id="gameplay"
      className="py-24 px-6 relative"
      style={{
        background: `linear-gradient(180deg,
          var(--bg-secondary) 0%,
          var(--bg-tertiary) 50%,
          var(--bg-secondary) 100%
        )`,
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">ВСТРЕТЬ ТЬМУ</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureBlock
            icon={<Sword size={28} />}
            title="БОЙ"
            description="Точный, жестокий и невероятно rewarding. Каждый удар имеет вес и последствия."
          />
          <FeatureBlock
            icon={<Map size={28} />}
            title="ИССЛЕДОВАНИЕ"
            description="От готических башен до гнилых болот — весь мир является твоей могилой."
          />
          <FeatureBlock
            icon={<Flame size={28} />}
            title="КОСТРЫ"
            description="Редкие моменты тепла в беспощадном мире. Отдыхай — но никогда не расслабляйся."
          />
        </div>

        {/* Gameplay Image */}
        <div className="image-overlay rounded-sm overflow-hidden max-w-3xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1578662996442-480f04995c4a?w=1200&q=80"
            alt="Атмосферный бой"
            className="w-full h-64 sm:h-80 object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1a1008, #0a0806)';
            }}
          />
        </div>
      </div>
    </section>
  );
}

// Trailer Section
function TrailerSection() {
  return (
    <section id="trailer" className="py-24 px-6 parchment-bg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title">ОФИЦИАЛЬНЫЙ ТРЕЙЛЕР</h2>

        <p
          className="text-lg mb-12 max-w-2xl mx-auto"
          style={{ color: 'var(--text)', fontFamily: 'Crimson Text, serif' }}
        >
          Официальный трейлер Dark Souls III от Bandai Namco. Огонь угасает — и эпоха тьмы начинается.
        </p>

        <Divider />

        {/* YouTube Embed - Opening Cinematic Trailer */}
        <div className="video-container rounded-sm overflow-hidden max-w-3xl mx-auto">
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/_zDZYrIUgKE?rel=0&modestbranding=1"
            title="Dark Souls III — Opening Cinematic Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ border: '1px solid rgba(201,168,76,0.3)', borderRadius: '8px' }}
          />
        </div>
      </div>
    </section>
  );
}

// Footer Section
function Footer() {
  return (
    <footer
      className="py-16 px-6 relative"
      style={{
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, #080604 100%)',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Decorative ember glow at top */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--ember), transparent)',
          opacity: 0.6,
        }}
      />

      <div className="max-w-4xl mx-auto text-center">
        {/* Ember Icon */}
        <div className="flex justify-center mb-6">
          <div
            className="w-4 h-4 rounded-full floating"
            style={{
              background: 'radial-gradient(circle, var(--ember-light) 0%, var(--ember) 50%, #5a2506 100%)',
              boxShadow: '0 0 20px var(--ember), 0 0 40px rgba(194, 68, 15, 0.5)',
            }}
          />
        </div>

        <h3
          className="text-2xl mb-4 gold-gradient"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          DARK SOULS III
        </h3>

        <p
          className="text-sm mb-6"
          style={{ color: 'var(--text)', fontFamily: 'Crimson Text, serif' }}
        >
          &copy; 2016 FromSoftware, Inc. / BANDAI NAMCO Entertainment
        </p>

        <Divider />

        <p
          className="text-xs mt-6"
          style={{ color: 'rgba(184, 169, 154, 0.6)', fontFamily: 'Crimson Text, serif' }}
        >
          Фан-сайт. Не связан с FromSoftware официально.
        </p>

        <p
          className="text-xs mt-2"
          style={{ color: 'rgba(184, 169, 154, 0.4)', fontFamily: 'Crimson Text, serif', fontStyle: 'italic' }}
        >
          "Да направит тебя пламя."
        </p>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <HeroSection />
      <LoreSection />
      <CharactersSection />
      <GameplaySection />
      <TrailerSection />
      <Footer />
    </div>
  );
}

export default App;
