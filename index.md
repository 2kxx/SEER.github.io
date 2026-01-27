---
layout: project_page
permalink: /
title: "Endogenous Reprompting: Self-Evolving Cognitive Alignment for Unified Multimodal Models"

authors: "Zhenchen Tang<sup>1,2</sup>, Songlin Yang<sup>3</sup>, Zichuan Wang<sup>1,2</sup>, Bo Peng<sup>1*</sup>, Yang Li<sup>1,2</sup>, Beibei Dong<sup>1,2</sup>, Jing Dong<sup>1*</sup>"

affiliations:
  - "<sup>1</sup> New Laboratory of Pattern Recognition, Institute of Automation, Chinese Academy of Sciences<br>"
  - "<sup>2</sup> School of Artificial Intelligence, University of Chinese Academy of Sciences<br>"
  - "<sup>3</sup> MMLab@HKUST, The Hong Kong University of Science and Technology"

paper: "https://arxiv.org/pdf/xxx.pdf"
code: "https://github.com/2kxx/SEER"
---

<h2 class="has-text-centered">🧠 Abstract</h2>

<div class="columns is-centered">
  <div class="column is-four-fifths">
    <div class="content has-text-justified">

Unified Multimodal Models (UMMs) exhibit strong understanding, yet this capability often fails to effectively guide generation.
We identify this as a <strong>Cognitive Gap</strong>: the model lacks an explicit mechanism to leverage its understanding to improve its own generation process.

To bridge this gap, we propose <strong>Endogenous Reprompting</strong>,, a mechanism that transforms the model’s understanding from a passive encoding process into an explicit generative reasoning step by generating self-aligned descriptors during generation.

To achieve this, we introduce <strong>SEER (Self-Evolving Evaluator and Reprompter)</strong>, a training framework that establishes a two-stage endogenous loop using only 300 samples from a compact proxy task, Visual Instruction Elaboration.
First, <strong>Reinforcement Learning with Verifiable Rewards (RLVR)</strong> activates the model’s latent evaluation ability via curriculum learning, producing a high-fidelity endogenous reward signal.
Second, <strong>Reinforcement Learning with Model-rewarded Thinking (RLMT)</strong> leverages this signal to optimize the generative reasoning policy.

Experiments show that SEER consistently outperforms state-of-the-art baselines in evaluation accuracy, reprompting efficiency, and generation quality, without sacrificing general multimodal capabilities.
    </div>
  </div>
</div>

---

<h2 class="has-text-centered">🧩 Cognitive Gap</h2>

<div class="columns is-centered">
  <div class="column is-three-quarters has-text-centered">
    <img src="{{ site.baseurl }}/static/image/fig1.jpg" style="max-width: 90%; border-radius: 6px;">
    <p class="is-size-7 has-text-grey">
      Figure 1: Illustration of the Cognitive Gap in Unified Multimodal Models.
    </p>
  </div>
</div>

---

<h2 class="has-text-centered">⚙️ SEER Framework</h2>

<div class="columns is-centered">
  <div class="column is-four-fifths has-text-centered">
    <img src="{{ site.baseurl }}/static/image/fig2.jpg" style="max-width: 90%; border-radius: 6px;">
    <p class="is-size-7 has-text-grey">
      Figure 2: Overall framework of SEER.
    </p>
  </div>
</div>

---

<h2 class="has-text-centered">🔁 Endogenous Reprompting Mechanism</h2>

<div class="columns is-centered">

  <div class="column is-half has-text-centered">
    <img src="{{ site.baseurl }}/static/image/fig3.jpg" style="max-width: 90%; border-radius: 6px;">
    <p class="is-size-7 has-text-grey">
      Figure 3: Endogenous evaluation via RLVR.
    </p>
  </div>

  <div class="column is-half has-text-centered">
    <img src="{{ site.baseurl }}/static/image/fig4.jpg" style="max-width: 90%; border-radius: 6px;">
    <p class="is-size-7 has-text-grey">
      Figure 4: Generative reasoning optimization via RLMT.
    </p>
  </div>

</div>

---

<h2 class="has-text-centered">🎯 Qualitative Results</h2>

<div class="columns is-centered">
  <div class="column is-four-fifths has-text-centered">
    <img src="{{ site.baseurl }}/static/image/fig5.jpg" style="max-width: 100%; border-radius: 6px;">
    <p class="is-size-7 has-text-grey">
      Figure 5: Qualitative comparison of generation results.
    </p>
  </div>
</div>
<div class="columns is-centered">
  <div class="column is-four-fifths has-text-centered">
    <img src="{{ site.baseurl }}/static/image/fig6.jpg" style="max-width: 100%; border-radius: 6px;">
    <p class="is-size-7 has-text-grey">
      Figure 6: Qualitative comparison of different reprompters.
    </p>
  </div>
</div>
<div class="columns is-centered">
  <div class="column is-four-fifths has-text-centered">
    <img src="{{ site.baseurl }}/static/image/fig7.jpg" style="max-width: 100%; border-radius: 6px;">
    <p class="is-size-7 has-text-grey">
      Figure 7: Qualitative comparisonof different UMMs.
    </p>
  </div>
</div>
