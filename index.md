---
layout: project_page
permalink: /
title: Endogenous Reprompting: Self-Evolving Cognitive Alignment for Unified Multimodal Models
authors: Zhenchen Tang<sup>1,2</sup>, Songlin Yang<sup>3</sup>, Zichuan Wang<sup>1,2</sup>, Bo Peng<sup>1*</sup>, Yang Li<sup>1,2</sup>, Beibei Dong<sup>1,2</sup>, Jing Dong<sup>1*</sup>
affiliations:
    1 New Laboratory of Pattern Recognition, Institute of Automation, Chinese Academy of Sciences <br>
    2 School of Artificial Intelligence, University of Chinese Academy of Sciences <br>
    3 MMLab@HKUST, The Hong Kong University of Science and Technology <br>
paper: https://arxiv.org/pdf/xxx.pdf
code: https://github.com/2kxx/SEER
---

<!-- ===================== Abstract ===================== -->

<div class="columns is-centered">
  <div class="column is-four-fifths">

    <h2 class="has-text-centered">Abstract</h2>

    <div class="content has-text-justified">
Unified Multimodal Models (UMMs) exhibit strong understanding, yet this capability often fails to effectively guide generation. We attribute this to a <b>Cognitive Gap</b>: the model lacks the ability to translate its understanding into actionable guidance for improving generation. To bridge this gap, we propose <b>Endogenous Reprompting</b>, a mechanism that elevates understanding from passive encoding to explicit generative reasoning by translating human intent into self-aligned descriptors during generation.

We introduce <b>SEER</b> (Self-Evolving Evaluator and Reprompter), a two-stage endogenous training framework using only 300 samples from a compact proxy task, Visual Instruction Elaboration. First, Reinforcement Learning with Verifiable Rewards (RLVR) activates latent evaluation capabilities via curriculum learning, producing a high-fidelity endogenous reward. Second, Reinforcement Learning with Model-rewarded Thinking (RLMT) leverages this signal to optimize generative reasoning. Experiments show that SEER consistently improves evaluation accuracy, reprompting efficiency, and generation quality, without sacrificing general multimodal capabilities.
    </div>

  </div>
</div>

<br>

<!-- ===================== Cognitive Gap ===================== -->

<h2 class="has-text-centered">Cognitive Gap</h2>

<div class="has-text-centered">
  <img src="/static/image/fig1.jpg" style="max-width: 85%; height: auto;">
  <p class="has-text-grey is-size-7">
Illustration of the Cognitive Gap between understanding and generation in UMMs.
  </p>
</div>

<br><br>

<!-- ===================== Framework ===================== -->

<h2 class="has-text-centered">Framework</h2>

<!-- Overall pipeline -->
<div class="has-text-centered">
  <img src="/static/image/fig2.jpg" style="max-width: 90%; height: auto;">
  <p class="has-text-grey is-size-7">
Overall framework of SEER with an endogenous evaluation–reprompting loop.
  </p>
</div>

<br>

<!-- Two-stage layout -->
<div class="columns is-centered is-vcentered">

  <div class="column is-6 has-text-centered">
    <img src="/static/image/fig3.jpg" style="max-width: 100%; height: auto;">
    <p class="has-text-grey is-size-7">
(a) Stage 1: RLVR activates latent evaluation ability.
    </p>
  </div>

  <div class="column is-6 has-text-centered">
    <img src="/static/image/fig4.jpg" style="max-width: 100%; height: auto;">
    <p class="has-text-grey is-size-7">
(b) Stage 2: RLMT optimizes generative reasoning.
    </p>
  </div>

</div>

<br><br>

<!-- ===================== Qualitative Results ===================== -->

<h2 class="has-text-centered">Qualitative Results</h2>

<div class="has-text-centered">
  <img src="/static/image/fig5.jpg" style="max-width: 95%; height: auto;">
  <p class="has-text-grey is-size-7">
Qualitative comparisons with state-of-the-art baselines under visual instruction following.
  </p>
</div>

<br><br>
