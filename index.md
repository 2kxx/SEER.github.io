---
layout: project_page
permalink: /
title: Endogenous Reprompting: Self-Evolving Cognitive Alignment for Unified Multimodal Models <br>
authors: Zhenchen Tang<sup>1,</sup><sup>2</sup>, Songlin Yang<sup>3</sup>, Zichuan Wang<sup>1,</sup><sup>2</sup>, Bo Peng<sup>1*</sup>, Yang Li<sup>1,</sup><sup>2</sup>, Beibei Dong<sup>1,</sup><sup>2</sup>, Jing Dong<sup>1*</sup>
affiliations:
    1 New Laboratory of Pattern Recognition, Institute of Automation, Chinese Academy of Sciences <br>
    2 School of Artificial Intelligence, University of Chinese Academy of Sciences <br>
    3 MMLab@HKUST, The Hong Kong University of Science and Technology <br>
paper: https://arxiv.org/pdf/xxx.pdf
code: https://github.com/2kxx/SEER
---
<div class="columns is-centered has-text-centered">
    <div class="column is-four-fifths">
        <h2>Abstract</h2>
        <div class="content has-text-justified">
Unified Multimodal Models (UMMs) exhibit strong understanding, yet this capability often fails to effectively guide generation. We attribute this to a Cognitive Gap: the model lacks the understanding of how to enhance its own generation process. To bridge this gap, we propose Endogenous Reprompting, a mechanism that transforms the model’s understanding from a passive encoding process into an explicit generative reasoning step by translating human intent into self-aligned descriptors during generation. To elicit this, we introduce SEER (Self-Evolving Evaluator and Reprompter), a training framework that establishes a two-stage endogenous loop using only 300 samples from a compact proxy task, Visual Instruction Elaboration. First, Reinforcement Learning with Verifiable Rewards (RLVR) activates the model’s latent evaluation ability via curriculum learning, producing a high-fidelity endogenous reward signal. Second, Reinforcement Learning with Model-rewarded Thinking (RLMT) leverages this signal to optimize the generative reasoning policy. Experiments show that SEER consistently outperforms state-of-the-art baselines in evaluation accuracy, reprompting efficiency, and generation quality, without sacrificing general multimodal capabilities.
        </div>
    </div>
</div>


---

## <center> Cognitive Gap
![](/static/image/fig1.jpg)

---

## <center> Framework
![](/static/image/fig2.jpg)
![](/static/image/fig3.jpg)

![](/static/image/fig4.jpg)

---

## <center> Display
![](/static/image/fig5.jpg)
