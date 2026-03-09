'use client';

import React, { useEffect, useId, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import superheroWideOrange from './superhero_Logo_guide_o-C.png';
import superheroWideGreen from './superhero_Logo_guide_g-C.png';
import superheroStackOrange from './superhero_Logo_guide_o-B.png';
import superheroStackGreen from './superhero_Logo_guide_g-B.png';
import './future-crafters-landing-v2.css';

const coreFields = [
  {
    id: 'ai',
    label: 'AI',
    title: 'AI',
    description:
      'Our proprietary AI unifies market data and user behavior to deliver optimized user experiences.',
    
  },
  {
    id: 'quant',
    label: 'Quant',
    title: 'Quant',
    description:
      'We translate logic and strategy into systems, building a repeatable strategic framework.',
    chip: '',
  },
  {
    id: 'blockchain',
    label: 'Blockchain',
    title: 'Blockchain',
    description:
      'We build blockchain systems that integrate on-chain data with digital assets.',
    chip: '',
  },
  {
    id: 'web3',
    label: 'Web3',
    title: 'Web3',
    description:
      'We enable users to directly own and manage their data through blockchain and digital asset technologies.',
    chip: '',
  },
];

const statCards = [
  { value: 'AI', label: 'Intelligence-first decision making' },
  { value: 'Quant', label: 'Systematic research architecture' },
  { value: 'Chain', label: 'On-chain market context' },
  { value: 'Web3', label: 'Readable product experience' },
];

const architectureSteps = [
  {
    step: '01',
    title: 'Sense',
    description: 'We consolidate market data, on-chain flow, and user context into refined real-time signals.',
  },
  {
    step: '02',
    title: 'Model',
    description: 'We combine AI and quantitative frameworks to structure prediction, classification, and execution priorities.',
  },
  {
    step: '03',
    title: 'Execute',
    description: 'We connect trading, reporting, dashboards, and product experiences through a unified execution layer.',
  },
  {
    step: '04',
    title: 'Scale',
    description: 'We establish a repeatable operating model through automation, monitoring, and scalable UI systems.',
  },
];

const heroMarquee = [
  '',
  ' ',
  ' ',
  '',
  ' ',
  ' ',
];

const heroMarqueeLoop = Array.from({ length: 4 }, () => heroMarquee).flat();

const heroTags = [
  'AI',
  'Quant',
  'Blockchain',
  'Web3',
];

const platformMetrics = [
  { label: 'AI', value: 'Unified AI' },
  { label: 'Quant', value: 'Customizable Logic' },
  { label: 'Block Chain', value: 'cryptocurrency' },
  { label: 'Web3', value: 'Web3 based service' },
];

const surfaceReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const resolveAsset = (asset) => (typeof asset === 'string' ? asset : asset?.src || '');

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function useFastPointerGlow() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;

    const flush = () => {
      root.style.setProperty('--fc-pointer-x', `${pointerX}px`);
      root.style.setProperty('--fc-pointer-y', `${pointerY}px`);
      raf = 0;
    };

    const update = (clientX, clientY) => {
      pointerX = clientX;
      pointerY = clientY;
      if (!raf) raf = window.requestAnimationFrame(flush);
    };

    const onPointerMove = (event) => {
      update(event.clientX, event.clientY);
    };

    const onWindowBlur = () => {
      update(window.innerWidth / 2, window.innerHeight / 2);
    };

    flush();
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('blur', onWindowBlur);

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('blur', onWindowBlur);
    };
  }, []);
}

function AnimatedLine({ text, delay = 0, accent = false, className = '' }) {
  const words = text.split(' ');

  return (
    <span className={`fcv2-animated-line ${accent ? 'is-accent' : ''} ${className}`}>
      {words.map((word, index) => (
        <span className="fcv2-word-wrap" key={`${word}-${index}`}>
          <motion.span
            className="fcv2-word"
            initial={{ y: '112%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.72,
              delay: delay + index * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function SectionIntro({ eyebrow, title, description }) {
  return (
    <motion.div
      className="fcv2-section-intro"
      variants={surfaceReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      custom={0.05}
    >
      <span className="fcv2-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
}

function FieldIcon({ id }) {
  if (id === 'ai') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.5a3 3 0 0 1 3 3v.34a5.51 5.51 0 0 1 2.7 2.05l.29-.17a3 3 0 1 1 3 5.2l-.29.17A5.55 5.55 0 0 1 21 16a5.5 5.5 0 0 1-5.5 5.5h-7A5.5 5.5 0 0 1 3 16c0-.72.14-1.4.4-2.02l-.29-.17a3 3 0 1 1 3-5.2l.29.17A5.51 5.51 0 0 1 9 6.84V6.5a3 3 0 0 1 3-3Zm0 2a1 1 0 0 0-1 1v1.06l-.63.22a3.5 3.5 0 0 0-1.84 1.5l-.33.58-.58-.33a1 1 0 1 0-1 1.73l.58.33-.22.63A3.5 3.5 0 0 0 5 16a3.5 3.5 0 0 0 3.5 3.5h7A3.5 3.5 0 0 0 19 16c0-.46-.09-.91-.26-1.34l-.22-.63.58-.33a1 1 0 1 0-1-1.73l-.58.33-.33-.58a3.5 3.5 0 0 0-1.84-1.5l-.63-.22V6.5a1 1 0 0 0-1-1Zm-2 6h4a2 2 0 0 1 2 2v2.5h-2V13.5h-4V16H8v-2.5a2 2 0 0 1 2-2Zm-.5 5.5h5v2h-5v-2Z" />
      </svg>
    );
  }

  if (id === 'quant') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19h16v2H2V3h2v16Zm14.12-8.71 1.41 1.42-4.53 4.53-3-3-4.59 4.6-1.42-1.42L12 10.4l3 3 3.12-3.11Z" />
      </svg>
    );
  }

  if (id === 'blockchain') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 2 6.93 4v8L12 18l-6.93-4V6L12 2Zm0 2.31L7.07 7.15v5.7L12 15.69l4.93-2.84v-5.7L12 4.31Zm0 4 3 1.73v3.46l-3 1.73-3-1.73v-3.46l3-1.73Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2c2.8 0 5.2.96 7.22 2.89A9.84 9.84 0 0 1 22 12c0 2.8-.93 5.2-2.78 7.2A9.8 9.8 0 0 1 12 22c-2.8 0-5.2-.93-7.2-2.8A9.81 9.81 0 0 1 2 12c0-2.8.93-5.17 2.8-7.11A9.78 9.78 0 0 1 12 2Zm0 2a7.8 7.8 0 0 0-5.76 2.33A7.77 7.77 0 0 0 4 12c0 2.24.78 4.15 2.34 5.73A7.81 7.81 0 0 0 12 20c2.24 0 4.15-.76 5.74-2.27A7.76 7.76 0 0 0 20 12a7.8 7.8 0 0 0-2.26-5.67A7.83 7.83 0 0 0 12 4Zm-1 2h2v6h6v2h-8V6Z" />
    </svg>
  );
}

function Sparkline({ path, accent = 'orange' }) {
  const gradientId = useId();

  return (
    <svg className="fcv2-sparkline" viewBox="0 0 220 72" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          {accent === 'lime' ? (
            <>
              <stop offset="0%" stopColor="#b7ff00" />
              <stop offset="100%" stopColor="#ff8500" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#ff8500" />
              <stop offset="100%" stopColor="#ffbd69" />
            </>
          )}
        </linearGradient>
      </defs>
      <path className="fcv2-sparkline-base" d="M0 54 H220" />
      <path d={path} fill="none" stroke={`url(#${gradientId})`} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function InteractiveCard({ className = '', children }) {
  const ref = useRef(null);

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition =
      'transform 260ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 180ms ease, border-color 180ms ease';
    el.style.transform = 'perspective(1400px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)';
    el.style.setProperty('--mx', '50%');
    el.style.setProperty('--my', '50%');
  };

  const handlePointerMove = (event) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = clamp((event.clientX - rect.left) / rect.width, 0, 1);
    const py = clamp((event.clientY - rect.top) / rect.height, 0, 1);
    const rotateX = (0.5 - py) * 10;
    const rotateY = (px - 0.5) * 10;

    el.style.setProperty('--mx', `${(px * 100).toFixed(2)}%`);
    el.style.setProperty('--my', `${(py * 100).toFixed(2)}%`);
    el.style.transition = 'transform 36ms linear, box-shadow 180ms ease, border-color 180ms ease';
    el.style.transform = `perspective(1400px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
      2,
    )}deg) translate3d(0, -4px, 0)`;
  };

  return (
    <div
      ref={ref}
      className={`fcv2-card-surface ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      {children}
    </div>
  );
}

function MagneticButton({ href, children, className = '', target, rel, ariaLabel }) {
  const ref = useRef(null);

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition =
      'transform 260ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 180ms ease, border-color 180ms ease';
    el.style.transform = 'translate3d(0, 0, 0)';
    el.style.setProperty('--mx', '50%');
    el.style.setProperty('--my', '50%');
  };

  const handlePointerMove = (event) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const localX = event.clientX - rect.left;
    const localY = event.clientY - rect.top;
    const moveX = clamp((localX - rect.width / 2) * 0.18, -14, 14);
    const moveY = clamp((localY - rect.height / 2) * 0.24, -10, 10);

    el.style.transition = 'transform 36ms linear, box-shadow 180ms ease, border-color 180ms ease';
    el.style.transform = `translate3d(${moveX.toFixed(2)}px, ${moveY.toFixed(2)}px, 0)`;
    el.style.setProperty('--mx', `${((localX / rect.width) * 100).toFixed(2)}%`);
    el.style.setProperty('--my', `${((localY / rect.height) * 100).toFixed(2)}%`);
  };

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={`fcv2-button ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      <span>{children}</span>
    </a>
  );
}

export default function FutureCraftersLanding() {
  useFastPointerGlow();

  const { scrollYProgress } = useScroll();
  const heroStageY = useTransform(scrollYProgress, [0, 0.4], [0, -56]);
  const heroStageRotate = useTransform(scrollYProgress, [0, 0.4], [0, -4]);

  return (
    <div className="fcv2-page">
      <div className="fcv2-grid" aria-hidden="true" />
      <div className="fcv2-noise" aria-hidden="true" />
      <div className="fcv2-pointer-aura" aria-hidden="true" />

      <header className="fcv2-header-wrap">
        <div className="fcv2-shell">
          <nav className="fcv2-header">
            <a href="#top" className="fcv2-brand" aria-label="FutureCrafters home">
              <span className="fcv2-brand-mark">FC</span>
              <span className="fcv2-brand-copy">
                <strong>FutureCrafters</strong>
                <small>AI · Quant · Blockchain · Web3</small>
              </span>
            </a>

            <div className="fcv2-nav-links">
              <a href="#capabilities">Capabilities</a>
              <a href="#superhero">SuperHero</a>
              <MagneticButton href="#superhero" className="fcv2-button-primary fcv2-nav-cta">
                Explore SuperHero
              </MagneticButton>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section id="top" className="fcv2-hero">
          <div className="fcv2-shell fcv2-hero-grid">
            <motion.div
              className="fcv2-hero-copy"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="fcv2-badge">FutureCrafters / Intelligent Capital Studio</span>

              <h1 className="fcv2-hero-title">
                <AnimatedLine text="FutureCrafters" delay={0.08} accent />
                <AnimatedLine text="Next-Generation Asset Management" delay={0.22} className="fcv2-hero-subtitle" />
                <AnimatedLine text="Platform" delay={0.36} className="fcv2-hero-subtitle" />
              </h1>

              <p className="fcv2-hero-description">
                <strong></strong> <span></span>
                <strong> </strong><em></em>
              </p>

              <div className="fcv2-hero-actions">
                <MagneticButton href="#superhero" className="fcv2-button-primary">
                  View SuperHero
                </MagneticButton>
                <MagneticButton href="#capabilities" className="fcv2-button-secondary">
                  View Core Capabilities
                </MagneticButton>
              </div>

              <div className="fcv2-chip-row">
                {heroTags.map((tag) => (
                  <span key={tag} className="fcv2-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div className="fcv2-hero-stage-wrap" style={{ y: heroStageY, rotate: heroStageRotate }}>
              <InteractiveCard className="fcv2-hero-stage">
                <div className="fcv2-stage-top">
                  <div>
                    <span className="fcv2-mini-label">FutureCrafters </span>
                    <h3> </h3>
                  </div>
                  <span className="fcv2-live-pill">summary</span>
                </div>

                <div className="fcv2-stage-grid">
                  <div className="fcv2-orbit-map">
                    <span className="fcv2-orbit-ring fcv2-orbit-ring-1" />
                    <span className="fcv2-orbit-ring fcv2-orbit-ring-2" />
                    <span className="fcv2-orbit-ring fcv2-orbit-ring-3" />
                    <span className="fcv2-orbit-scan" />
                    <div className="fcv2-orbit-core">
                      <small></small>
                      <strong>FutureCrafters</strong>
                      <span>AI · Quant · Blockchain · Web3</span>
                    </div>
                    <span className="fcv2-orbit-tag fcv2-orbit-tag-1"><strong>AI</strong></span>
                    <span className="fcv2-orbit-tag fcv2-orbit-tag-2"><strong>Quant</strong></span>
                    <span className="fcv2-orbit-tag fcv2-orbit-tag-3"><strong>Blockchain</strong></span>
                    <span className="fcv2-orbit-tag fcv2-orbit-tag-4"><strong>Web3</strong></span>
                  </div>

                  
                </div>

                <div className="fcv2-stage-bottom">
                  {[].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </InteractiveCard>
            </motion.div>
          </div>
        </section>

        <section className="fcv2-marquee" aria-label="brand keywords">
          <div className="fcv2-marquee-inner">
            {[0, 1].map((index) => (
              <div className="fcv2-marquee-track" key={index} aria-hidden={index === 1}>
                {heroMarqueeLoop.map((item, i) => (
                  <span key={`${index}-${i}-${item}`}>{item}</span>
                ))}
              </div>
            ))}
          </div>
        </section>

        

        <section className="fcv2-section" id="capabilities">
          <div className="fcv2-shell">
            <SectionIntro
              eyebrow="Core Fields"
              title="FutureCrafters Core Capabilities"
              description=""
            />

            <div className="fcv2-field-grid">
              {coreFields.map((field, index) => (
                <motion.div
                  key={field.id}
                  variants={surfaceReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.18 }}
                  custom={0.08 + index * 0.06}
                >
                  <InteractiveCard className="fcv2-field-card">
                    <div className="fcv2-field-top">
                      <div className="fcv2-field-icon">
                        <FieldIcon id={field.id} />
                      </div>
                      <span className="fcv2-field-label">{field.label}</span>
                    </div>
                    <h3>{field.title}</h3>
                    <p>{field.description}</p>
                    <span className="fcv2-field-chip">{field.chip}</span>
                  </InteractiveCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="fcv2-section" id="superhero">
          <div className="fcv2-shell fcv2-superhero-grid">
            <motion.div
              className="fcv2-superhero-copy"
              variants={surfaceReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              custom={0.08}
            >
              <span className="fcv2-eyebrow">core quant engine</span>
              <h2>
                SuperHero <span></span>
              </h2>
              <p>
                <strong>SuperHero</strong> is FutureCrafters' AI-driven quant service brand built around an <em>AI-powered digital asset trading platform</em>.
              </p>

              <InteractiveCard className="fcv2-link-panel">
                <div>
                  <small>Website</small>
                  <a href="https://superheroquant.com" target="_blank" rel="noreferrer">
                    superheroquant.com
                  </a>
                </div>
                <span className="fcv2-link-badge">AI Crypto Trading Platform</span>
              </InteractiveCard>

              <ul className="fcv2-point-list">
                <li>An algorithm-driven risk management framework designed to navigate unpredictable markets</li>
                <li>Proprietary quantitative strategies fully implemented within a unified automated system</li>
                <li>Precision protective-buffer logic that helps control liquidation risk even in volatile conditions</li>
              </ul>

              <div className="fcv2-hero-actions fcv2-superhero-actions">
                <MagneticButton
                  href="https://superheroquant.com"
                  target="_blank"
                  rel="noreferrer"
                  className="fcv2-button-primary"
                >
                  Visit SuperHero
                </MagneticButton>
                
              </div>
            </motion.div>

            <motion.div
              variants={surfaceReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              custom={0.16}
            >
              <div className="fcv2-superhero-board">
                <InteractiveCard className="fcv2-logo-stage">
                  <div className="fcv2-logo-stage-top">
                    <div>
                      <span className="fcv2-mini-label">SuperHero / Brand Icon</span>
                      <h3></h3>
                    </div>
                    <span className="fcv2-live-pill is-orange">Orange ↔ Signal Green</span>
                  </div>

                  <div className="fcv2-logo-stage-main">
                    <div className="fcv2-logo-glow" />
                    <img
                      src={resolveAsset(superheroWideOrange)}
                      alt="Super Hero logo"
                      className="fcv2-superhero-logo fcv2-superhero-logo-orange"
                    />
                    <img
                      src={resolveAsset(superheroWideGreen)}
                      alt=""
                      aria-hidden="true"
                      className="fcv2-superhero-logo fcv2-superhero-logo-green"
                    />
                  </div>

                  <div className="fcv2-logo-stage-bottom">
                    <span>superheroquant.com</span>
                    <span>AI-Powered Digital Asset Trading Platform</span>
                  </div>
                </InteractiveCard>

                

                
              </div>
            </motion.div>
          </div>
        </section>

        

        <section className="fcv2-section" id="cta">
          <div className="fcv2-shell">
            <motion.div
              variants={surfaceReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.28 }}
              custom={0.1}
            >
              <InteractiveCard className="fcv2-cta-panel">
                <div>
                  <span className="fcv2-eyebrow"></span>
                  <h2>
                    <span className="fcv2-text-accent">FutureCrafters</span>{' '}
                    <span className="fcv2-cta-desc">
                      is evolving into an intelligent asset management platform by combining a proven core trading engine with a proprietary AI engine that becomes stronger over time.
                    </span>
                  </h2>
                  <p>
                    Discover the new FutureCrafters through the SuperHero brand.
                  </p>
                </div>

                <div className="fcv2-cta-actions">
                  <MagneticButton href="#top" className="fcv2-button-primary">
                    Back to Top
                  </MagneticButton>
                  <MagneticButton
                    href="https://superheroquant.com"
                    target="_blank"
                    rel="noreferrer"
                    className="fcv2-button-secondary"
                  >
                    Open SuperHero
                  </MagneticButton>
                </div>
              </InteractiveCard>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="fcv2-footer">
        <div className="fcv2-shell fcv2-footer-inner">
          <div>
            <strong>FutureCrafters</strong>
            <p>AI · Quant · Blockchain · Web3</p>
          </div>
          <a href="https://superheroquant.com" target="_blank" rel="noreferrer">
            SuperHero ↗
          </a>
        </div>
      </footer>
    </div>
  );
}