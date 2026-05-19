---
layout: project_page
permalink: /
title: "Endogenous Reprompting: Self-Evolving Cognitive Alignment for Unified Multimodal Models"

authors: "Zhenchen Tang<sup>1,2</sup>, Songlin Yang<sup>3</sup>, Zichuan Wang<sup>1,2</sup>, Bo Peng<sup>1*</sup>, Yang Li<sup>1,2</sup>, Beibei Dong<sup>1,2</sup>, Jing Dong<sup>1*</sup>"

affiliations:
  - "<sup>1</sup> New Laboratory of Pattern Recognition, Institute of Automation, Chinese Academy of Sciences"
  - "<sup>2</sup> School of Artificial Intelligence, University of Chinese Academy of Sciences"
  - "<sup>3</sup> MMLab@HKUST, The Hong Kong University of Science and Technology"

paper: "https://arxiv.org/pdf/2601.20305"
code: "https://github.com/2kxx/SEER"
---

<section id="abstract" class="content-section">
  <header class="section-header">
    <h2 class="section-title">Abstract</h2>
    <p class="section-subtitle">Bridging understanding and generation in unified multimodal models</p>
  </header>

  <div class="section-body has-text-justified">
    <p>
      Unified Multimodal Models (UMMs) exhibit strong understanding, yet this capability often fails to effectively guide generation.
      We identify this as a <strong>Cognitive Gap</strong>: the model lacks an explicit mechanism to leverage its understanding to improve its own generation process.
    </p>
    <p>
      To bridge this gap, we propose <strong>Endogenous Reprompting</strong>, a mechanism that transforms the model's understanding from a passive encoding process into an explicit generative reasoning step by generating self-aligned descriptors during generation.
    </p>
    <p>
      To achieve this, we introduce <strong>SEER (Self-Evolving Evaluator and Reprompter)</strong>, a training framework that establishes a two-stage endogenous loop using only 300 samples from a compact proxy task, Visual Instruction Elaboration.
      First, <strong>Reinforcement Learning with Verifiable Rewards (RLVR)</strong> activates the model's latent evaluation ability via curriculum learning, producing a high-fidelity endogenous reward signal.
      Second, <strong>Reinforcement Learning with Model-rewarded Thinking (RLMT)</strong> leverages this signal to optimize the generative reasoning policy.
    </p>
    <p>
      Experiments show that SEER consistently outperforms state-of-the-art baselines in evaluation accuracy, reprompting efficiency, and generation quality, without sacrificing general multimodal capabilities.
    </p>
  </div>

  <div class="highlight-cards">
    <div class="highlight-card">
      <strong>Problem</strong>
      <span>Cognitive Gap — understanding does not guide generation in UMMs</span>
    </div>
    <div class="highlight-card">
      <strong>Method</strong>
      <span>Two-stage RL loop (RLVR + RLMT) on 300 proxy-task samples</span>
    </div>
    <div class="highlight-card">
      <strong>Outcome</strong>
      <span>Better evaluation, reprompting, and generation without hurting general ability</span>
    </div>
  </div>
</section>

<section id="cognitive-gap" class="content-section">
  <header class="section-header">
    <h2 class="section-title">Cognitive Gap</h2>
    <p class="section-subtitle">Why understanding alone is insufficient for high-quality generation</p>
  </header>

  <figure class="figure-card">
    <img src="{{ site.baseurl }}/static/image/fig1.jpg" alt="Illustration of the Cognitive Gap in Unified Multimodal Models">
    <figcaption class="figure-caption">Figure 1: Illustration of the Cognitive Gap in Unified Multimodal Models.</figcaption>
  </figure>
</section>

<section id="framework" class="content-section">
  <header class="section-header">
    <h2 class="section-title">SEER Framework</h2>
    <p class="section-subtitle">Self-Evolving Evaluator and Reprompter with an endogenous training loop</p>
  </header>

  <figure class="figure-card">
    <img src="{{ site.baseurl }}/static/image/fig2.jpg" alt="Overall framework of SEER">
    <figcaption class="figure-caption">Figure 2: Overall framework of SEER.</figcaption>
  </figure>
</section>

<section id="mechanism" class="content-section">
  <header class="section-header">
    <h2 class="section-title">Endogenous Reprompting Mechanism</h2>
    <p class="section-subtitle">RLVR for evaluation and RLMT for generative reasoning</p>
  </header>

  <div class="figure-grid figure-grid--two">
    <figure class="figure-card">
      <img src="{{ site.baseurl }}/static/image/fig3.jpg" alt="Endogenous evaluation via RLVR">
      <figcaption class="figure-caption">Figure 3: Endogenous evaluation via RLVR.</figcaption>
    </figure>
    <figure class="figure-card">
      <img src="{{ site.baseurl }}/static/image/fig4.jpg" alt="Generative reasoning optimization via RLMT">
      <figcaption class="figure-caption">Figure 4: Generative reasoning optimization via RLMT.</figcaption>
    </figure>
  </div>
</section>

<section id="results" class="content-section">
  <header class="section-header">
    <h2 class="section-title">Qualitative Results</h2>
    <p class="section-subtitle">Visual comparisons across reprompters, UMMs, and cognitive alignment</p>
  </header>

  <div class="results-stack">
    <figure class="figure-card">
      <img src="{{ site.baseurl }}/static/image/fig5.jpg" alt="Qualitative comparison of generation results">
      <figcaption class="figure-caption">Figure 5: Qualitative comparison of generation results.</figcaption>
    </figure>
    <figure class="figure-card">
      <img src="{{ site.baseurl }}/static/image/fig6.jpg" alt="Qualitative comparison of different reprompters">
      <figcaption class="figure-caption">Figure 6: Qualitative comparison of different reprompters.</figcaption>
    </figure>
    <figure class="figure-card">
      <img src="{{ site.baseurl }}/static/image/fig7.jpg" alt="Qualitative comparison of different UMMs">
      <figcaption class="figure-caption">Figure 7: Qualitative comparison of different UMMs.</figcaption>
    </figure>
    <figure class="figure-card">
      <img src="{{ site.baseurl }}/static/image/fig8.jpg" alt="Qualitative comparison of cognitive gap">
      <figcaption class="figure-caption">Figure 8: Qualitative comparison of cognitive gap.</figcaption>
    </figure>
  </div>
</section>
