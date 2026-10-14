---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am currently a fourth-year Ph.D. candidate in the Institute of Artificial Intelligence and Robotics at Xi'an Jiaotong University ([IAIR](https://iair.xjtu.edu.cn/index.htm), [XJTU](https://www.xjtu.edu.cn/)). From September 2023 to September 2026, my doctoral advisor was Prof. [Le Wang](https://gr.xjtu.edu.cn/web/lewang). Since October 2026, my doctoral advisor has been Prof. [Sanping Zhou](https://gr.xjtu.edu.cn/web/spzhou). I also collaborate closely with Prof. [Gang Hua](https://www.ganghua.org/) and Prof. [Wei Tang](https://www.cs.uic.edu/~tangw/).
Previously, I earned my B.Eng. in Control Science and Engineering from Jilin University.

My research interests focus on Agentic Robot Reinforcement Learning, Robotic Manipulation, Vision-Language-Action (VLA) Models, and World Models. I welcome inquiries about potential collaboration in these areas.


<span class='anchor' id='news'></span>

# 🔥 News
- 2026.09: 📄 Our new preprints [CogWAM](https://arxiv.org/abs/2609.37721) and [ReWAM](https://arxiv.org/abs/2609.38163) are now available on arXiv.
- 2026.08: 🎉 SAMPO++ (Action-Controlled Scale-Wise Flow Matching) was accepted by TPAMI.
- 2026.07: 🎉 Flow2Act was accepted by TPAMI.
- 2026.06: 🎉 Two papers were accepted to ECCV 2026.
- 2025.09: 🎉 Two papers were accepted to NeurIPS 2025.
- 2025.06: 🎉 PDFactor was selected for an **oral** presentation.  
- 2025.03: 🎉 Two papers were accepted to CVPR 2025.
- 2023.06: 🎓 Graduated from Jilin University.


<span class='anchor' id='selected-publications'></span>

# 📝 Selected Publications 

<div class="paper-box paper-compact">
  <div class="paper-box-text">
    <div class="paper-title-line">
      <h3 title="CogWAM: Aligning Semantic Cognition with World Action Modeling via Event-Driven Interfaces">CogWAM: Aligning Semantic Cognition with World Action Modeling via Event-Driven Interfaces</h3>
      <span class="venue">arXiv 2026</span>
    </div>
    <div class="paper-meta-line">
      <div class="authors" title="Sen Wang , Liu Liu, Xinjiang Wang, Zequn Chen, Haoyi Jiang, Taojun Ding, Tingyang Xiao, Zhizhong Su, Jie Wang, Sanping Zhou"><strong>Sen Wang</strong>, Liu Liu, Xinjiang Wang, Zequn Chen, Haoyi Jiang, Taojun Ding, Tingyang Xiao, Zhizhong Su, Jie Wang, Sanping Zhou</div>
      <div class="links">
        <a href="https://horizonrobotics.github.io/CogWAM/" class="btn-accent"><i class="fas fa-project-diagram"></i> Project</a>
        <a href="https://arxiv.org/abs/2609.37721" class="btn-accent"><i class="fas fa-file-alt"></i> Paper</a>
        <a href="https://github.com/HorizonRobotics/CogWAM" class="btn-accent"><i class="fab fa-github"></i> Code</a>
        <a href="#work-demos" class="btn-accent"><i class="fas fa-play-circle"></i> Video</a>
      </div>
    </div>
  </div>
  <div class="paper-preview" aria-hidden="true">
    <img src="https://horizonrobotics.github.io/CogWAM/assets/figures/fig2.png" alt="" loading="lazy" decoding="async">
  </div>
  <details class="paper-mobile-preview">
    <summary>Preview figure</summary>
    <img src="https://horizonrobotics.github.io/CogWAM/assets/figures/fig2.png" alt="CogWAM figure preview" loading="lazy" decoding="async">
  </details>
</div>

<div class="paper-box paper-compact">
  <div class="paper-box-text">
    <div class="paper-title-line">
      <h3 title="Action-Controlled Scale-Wise Flow Matching for Embodied World Models">Action-Controlled Scale-Wise Flow Matching for Embodied World Models</h3>
      <span class="venue">TPAMI 2026</span>
    </div>
    <div class="paper-meta-line">
      <div class="authors" title="Sen Wang* , Sanping Zhou, Huaiyi Dong, Kun Xia, Gang Hua, Le Wang"><strong>Sen Wang*</strong>, Sanping Zhou, Huaiyi Dong, Kun Xia, Gang Hua, Le Wang</div>
      <div class="links">
        <a href="https://sanmumumu.github.io/SAMPO_plus_plus/" class="btn-accent"><i class="fas fa-project-diagram"></i> Project</a>
        <a href="https://sanmumumu.github.io/SAMPO_plus_plus/assets/docs/SAMPO++_preview.pdf" class="btn-accent"><i class="fas fa-file-alt"></i> Paper</a>
        <a href="https://github.com/SanMumumu/SAMPO_plus_plus" class="btn-accent"><i class="fab fa-github"></i> Code</a>
      </div>
    </div>
  </div>
  <div class="paper-preview" aria-hidden="true">
    <img src="https://sanmumumu.github.io/SAMPO_plus_plus/assets/figures/fig2.webp" alt="" loading="lazy" decoding="async">
  </div>
  <details class="paper-mobile-preview">
    <summary>Preview figure</summary>
    <img src="https://sanmumumu.github.io/SAMPO_plus_plus/assets/figures/fig2.webp" alt="Action-Controlled Scale-Wise Flow Matching for Embodied World Models figure preview" loading="lazy" decoding="async">
  </details>
</div>
<div class="paper-box paper-compact">
  <div class="paper-box-text">
    <div class="paper-title-line">
      <h3 title="Integrating Agglomerative Perception with One-step Action Generation for Robotic Manipulation">Integrating Agglomerative Perception with One-step Action Generation for Robotic Manipulation</h3>
      <span class="venue">TPAMI 2026</span>
    </div>
    <div class="paper-meta-line">
      <div class="authors" title="Sen Wang* , Le Wang, Hongcheng Huo, Sanping Zhou, Kun Xia, Gang Hua"><strong>Sen Wang*</strong>, Le Wang, Hongcheng Huo, Sanping Zhou, Kun Xia, Gang Hua</div>
      <div class="links">
        <a href="https://sanmumumu.github.io/Flow2Act/" class="btn-accent"><i class="fas fa-project-diagram"></i> Project</a>
        <a href="https://sanmumumu.github.io/Flow2Act/static/pdfs/paper.pdf" class="btn-accent"><i class="fas fa-file-alt"></i> Paper</a>
      </div>
    </div>
  </div>
  <div class="paper-preview" aria-hidden="true">
    <img src="{{ '/images/2026Flow2Act.jpg' | relative_url }}" alt="" loading="lazy" decoding="async">
  </div>
  <details class="paper-mobile-preview">
    <summary>Preview figure</summary>
    <img src="{{ '/images/2026Flow2Act.jpg' | relative_url }}" alt="Integrating Agglomerative Perception with One-step Action Generation for Robotic Manipulat figure preview" loading="lazy" decoding="async">
  </details>
</div>
<div class="paper-box paper-compact">
  <div class="paper-box-text">
    <div class="paper-title-line">
      <h3 title="Efficient Camera Pose Augmentation for View Generalization in Robotic Policy Learning">Efficient Camera Pose Augmentation for View Generalization in Robotic Policy Learning</h3>
      <span class="venue">ECCV 2026</span>
    </div>
    <div class="paper-meta-line">
      <div class="authors" title="Sen Wang* , Huaiyi Dong, Jingyi Tian, Jiayi Li, Zhuo Yang, Tongtong Cao, Anlin Chen, Shuang Wu, Le Wang, Sanping Zhou"><strong>Sen Wang*</strong>, Huaiyi Dong, Jingyi Tian, Jiayi Li, Zhuo Yang, Tongtong Cao, Anlin Chen, Shuang Wu, Le Wang, Sanping Zhou</div>
      <div class="links">
        <a href="https://arxiv.org/abs/2603.29192" class="btn-accent"><i class="fas fa-file-alt"></i> Paper</a>
        <a href="https://github.com/SanMumumu/GenSplat" class="btn-accent"><i class="fab fa-github"></i> Code</a>
      </div>
    </div>
  </div>
  <div class="paper-preview" aria-hidden="true">
    <img src="{{ '/images/2026GenSplat.png' | relative_url }}" alt="" loading="lazy" decoding="async">
  </div>
  <details class="paper-mobile-preview">
    <summary>Preview figure</summary>
    <img src="{{ '/images/2026GenSplat.png' | relative_url }}" alt="Efficient Camera Pose Augmentation for View Generalization in Robotic Policy Learning figure preview" loading="lazy" decoding="async">
  </details>
</div>
<div class="paper-box paper-compact">
  <div class="paper-box-text">
    <div class="paper-title-line">
      <h3 title="SAMPO: Scale-wise Autoregression with Motion Prompt for Generative World Models">SAMPO: Scale-wise Autoregression with Motion Prompt for Generative World Models</h3>
      <span class="venue">NeurIPS 2025</span>
    </div>
    <div class="paper-meta-line">
      <div class="authors" title="Sen Wang* , Jingyi Tian, Le Wang†, Zhimin Liao, Jiayi Li, Huaiyi Dong, Kun Xia, Sanping Zhou, Wei Tang, Gang Hua"><strong>Sen Wang*</strong>, Jingyi Tian, Le Wang†, Zhimin Liao, Jiayi Li, Huaiyi Dong, Kun Xia, Sanping Zhou, Wei Tang, Gang Hua</div>
      <div class="links">
        <a href="https://sanmumumu.github.io/SAMPO/" class="btn-accent"><i class="fas fa-project-diagram"></i> Project</a>
        <a href="https://arxiv.org/abs/2509.15536" class="btn-accent"><i class="fas fa-file-alt"></i> Paper</a>
        <a href="https://github.com/SanMumumu/SAMPO" class="btn-accent"><i class="fab fa-github"></i> Code</a>
      </div>
    </div>
  </div>
  <div class="paper-preview" aria-hidden="true">
    <img src="{{ '/images/2025SAMPO.png' | relative_url }}" alt="" loading="lazy" decoding="async">
  </div>
  <details class="paper-mobile-preview">
    <summary>Preview figure</summary>
    <img src="{{ '/images/2025SAMPO.png' | relative_url }}" alt="SAMPO figure preview" loading="lazy" decoding="async">
  </details>
</div>
<div class="paper-box paper-compact">
  <div class="paper-box-text">
    <div class="paper-title-line">
      <h3 title="FlowRAM: Grounding Flow Matching Policy with Region-Aware Mamba Framework for Robotic Manipulation">FlowRAM: Grounding Flow Matching Policy with Region-Aware Mamba Framework for Robotic Manipulation</h3>
      <span class="venue">CVPR 2025</span>
    </div>
    <div class="paper-meta-line">
      <div class="authors" title="Sen Wang* , Le Wang†, Sanping Zhou, Jingyi Tian, Jiayi Li, Haowen Sun, Wei Tang"><strong>Sen Wang*</strong>, Le Wang†, Sanping Zhou, Jingyi Tian, Jiayi Li, Haowen Sun, Wei Tang</div>
      <div class="links">
        <a href="https://sanmumumu.github.io/FlowRAM/" class="btn-accent"><i class="fas fa-project-diagram"></i> Project</a>
        <a href="https://openaccess.thecvf.com/content/CVPR2025/papers/Wang_FlowRAM_Grounding_Flow_Matching_Policy_with_Region-Aware_Mamba_Framework_for_CVPR_2025_paper.pdf" class="btn-accent"><i class="fas fa-file-alt"></i> Paper</a>
        <a href="https://github.com/SanMumumu/FlowRAM" class="btn-accent"><i class="fab fa-github"></i> Code</a>
      </div>
    </div>
  </div>
  <div class="paper-preview" aria-hidden="true">
    <img src="{{ '/images/2025FlowRAM.png' | relative_url }}" alt="" loading="lazy" decoding="async">
  </div>
  <details class="paper-mobile-preview">
    <summary>Preview figure</summary>
    <img src="{{ '/images/2025FlowRAM.png' | relative_url }}" alt="FlowRAM figure preview" loading="lazy" decoding="async">
  </details>
</div>

# 📝 Collaboration Papers

<div class="paper-box paper-compact">
  <div class="paper-box-text">
    <div class="paper-title-line">
      <h3 title="ReWAM: Rethinking Representations for World-Action Modeling">ReWAM: Rethinking Representations for World-Action Modeling</h3>
      <span class="venue">arXiv 2026</span>
    </div>
    <div class="paper-meta-line">
      <div class="authors" title="Haoyi Jiang, Liu Liu, Xinjiang Wang, Zhihao Sun, Zequn Chen, Sen Wang , Xinjie Wang, Xia Chen, Jingfeng Yao, Weiheng Zhao, Shanglin Yuan, Zhizhong Su, Wei Sui, Wenyu Liu, Xinggang Wang">Haoyi Jiang, Liu Liu, Xinjiang Wang, Zhihao Sun, Zequn Chen, <strong>Sen Wang</strong>, Xinjie Wang, Xia Chen, Jingfeng Yao, Weiheng Zhao, Shanglin Yuan, Zhizhong Su, Wei Sui, Wenyu Liu, Xinggang Wang</div>
      <div class="links">
        <a href="https://arxiv.org/abs/2609.38163" class="btn-accent"><i class="fas fa-file-alt"></i> Paper</a>
        <a href="https://github.com/hustvl/ReWAM" class="btn-accent"><i class="fab fa-github"></i> Repository</a>
      </div>
    </div>
  </div>
  <div class="paper-preview" aria-hidden="true">
    <img src="{{ '/images/2026ReWAM.png' | relative_url }}" alt="" loading="lazy" decoding="async">
  </div>
  <details class="paper-mobile-preview">
    <summary>Preview figure</summary>
    <img src="{{ '/images/2026ReWAM.png' | relative_url }}" alt="ReWAM figure preview" loading="lazy" decoding="async">
  </details>
</div>

<div class="paper-box paper-compact">
  <div class="paper-box-text">
    <div class="paper-title-line">
      <h3 title="RAGrasp: A Retrieval-Augmented Framework with Diversity-Aware Modeling for Dexterous Grasp Generation">RAGrasp: A Retrieval-Augmented Framework with Diversity-Aware Modeling for Dexterous Grasp Generation</h3>
      <span class="venue">ECCV 2026</span>
    </div>
    <div class="paper-meta-line">
      <div class="authors" title="Zhuo Yang, Sanping Zhou†, Sen Wang* , Jingyi Tian, Jiayi Li, Gang Hua, Le Wang">Zhuo Yang, Sanping Zhou†, <strong>Sen Wang*</strong>, Jingyi Tian, Jiayi Li, Gang Hua, Le Wang</div>
      <div class="links">
        <a href="https://link.springer.com/chapter/10.1007/978-3-032-37356-4_3" class="btn-accent"><i class="fas fa-file-alt"></i> Paper</a>
        <a href="https://media.eventhosts.cc/Conferences/ECCV2026/pdfs/1642.pdf" class="btn-accent"><i class="fas fa-file-pdf"></i> PDF</a>
      </div>
    </div>
  </div>
  <div class="paper-preview" aria-hidden="true">
    <img src="{{ '/images/2026RAGrasp.png' | relative_url }}" alt="" loading="lazy" decoding="async">
  </div>
  <details class="paper-mobile-preview">
    <summary>Preview figure</summary>
    <img src="{{ '/images/2026RAGrasp.png' | relative_url }}" alt="RAGrasp figure preview" loading="lazy" decoding="async">
  </details>
</div>
<div class="paper-box paper-compact">
  <div class="paper-box-text">
    <div class="paper-title-line">
      <h3 title="DynaRend: Learning 3D Dynamics via Masked Future Rendering for Robotic Manipulation">DynaRend: Learning 3D Dynamics via Masked Future Rendering for Robotic Manipulation</h3>
      <span class="venue">NeurIPS 2025</span>
    </div>
    <div class="paper-meta-line">
      <div class="authors" title="Jingyi Tian, Le Wang†, Sanping Zhou, Sen Wang* , Jiayi Li, Hua Gang">Jingyi Tian, Le Wang†, Sanping Zhou, <strong>Sen Wang*</strong>, Jiayi Li, Hua Gang</div>
      <div class="links">
        <a href="https://arxiv.org/pdf/2510.24261" class="btn-accent"><i class="fas fa-file-alt"></i> Paper</a>
      </div>
    </div>
  </div>
  <div class="paper-preview" aria-hidden="true">
    <img src="{{ '/images/2025DynaRend.png' | relative_url }}" alt="" loading="lazy" decoding="async">
  </div>
  <details class="paper-mobile-preview">
    <summary>Preview figure</summary>
    <img src="{{ '/images/2025DynaRend.png' | relative_url }}" alt="DynaRend figure preview" loading="lazy" decoding="async">
  </details>
</div>
<div class="paper-box paper-compact">
  <div class="paper-box-text">
    <div class="paper-title-line">
      <h3 title="PDFactor: Learning Tri-Perspective View Policy Diffusion Field for Multi-Task Robotic Manipulation">PDFactor: Learning Tri-Perspective View Policy Diffusion Field for Multi-Task Robotic Manipulation</h3>
      <span class="venue">CVPR 2025</span>
    </div>
    <div class="paper-meta-line">
      <div class="authors" title="Jingyi Tian, Le Wang†, Sanping Zhou, Sen Wang* , Jiayi Li, Haowen Sun, Wei Tang">Jingyi Tian, Le Wang†, Sanping Zhou, <strong>Sen Wang*</strong>, Jiayi Li, Haowen Sun, Wei Tang</div>
      <div class="links">
        <a href="https://openaccess.thecvf.com/content/CVPR2025/papers/Tian_PDFactor_Learning_Tri-Perspective_View_Policy_Diffusion_Field_for_Multi-Task_Robotic_CVPR_2025_paper.pdf" class="btn-accent"><i class="fas fa-file-alt"></i> Paper</a>
      </div>
    </div>
  </div>
  <div class="paper-preview" aria-hidden="true">
    <img src="{{ '/images/2025PDFactor.png' | relative_url }}" alt="" loading="lazy" decoding="async">
  </div>
  <details class="paper-mobile-preview">
    <summary>Preview figure</summary>
    <img src="{{ '/images/2025PDFactor.png' | relative_url }}" alt="PDFactor figure preview" loading="lazy" decoding="async">
  </details>
</div>


<span class='anchor' id='honors-awards'></span>

# 🏅 Honors & Awards
- *2025.11*, Second Prize in the Artificial Intelligence+ Special Competition, 19th Challenge Cup National College Students' Extracurricular Academic Science and Technology Works Competition [**(Cert.)**](../images/挑战杯国赛二等奖.pdf)
- *2025.10*, *2024.10*, Academic Scholarship, XJTU
- *2025.06*, First Prize in the 15th Challenge Cup Shaanxi Province College Students' Extracurricular Academic Science and Technology Works Competition [**(Cert.)**](../images/挑战杯省赛一等奖.jpg)
- *2024.06*, Runner-up in the 5th Embodied AI Workshop, CVPR [**(Cert.)**](../images/2024_Award_cvprws.png)
- *2023.10*, Freshman Scholarship, XJTU
- *2023.06*, Outstanding Graduates Student, JLU
- *2022.12, 2021.12*, National Encouragement Scholarship, MOE of PRC


<span class='anchor' id='invited-talks'></span>

# 💬 Invited Talks & Community Services
- **Reviewer:** CVPR 2026, ECCV 2026
- *2025.06.15*, Give an oral presentation on *Embodied Computer Vision* in Nashville at CVPR 25 conference. \|[**(Slide)**](https://cvpr.thecvf.com/media/cvpr-2025/Slides/35335.pdf) \| [**(Video)**](https://youtu.be/Y3P9wKyzLcM)


<span class='anchor' id='internships'></span>

# 💻 Internships
<div class="internship-list">
  <a class="internship-card" href="https://www.horizon.auto/">
    <div class="internship-card__logo internship-card__logo--accent">
      <img src="{{ '/files/Horizon.png' | relative_url }}" alt="Horizon Robotics logo">
    </div>
    <div class="internship-card__content">
      <div class="internship-card__meta">2026.04 - present</div>
      <h3>Horizon Robotics Lab</h3>
      <p>China</p>
    </div>
  </a>
  <a class="internship-card" href="https://noahlab.com.hk/#/home">
    <div class="internship-card__logo internship-card__logo--light">
      <img src="{{ '/files/Noah.png' | relative_url }}" alt="Noah's Ark Lab logo">
    </div>
    <div class="internship-card__content">
      <div class="internship-card__meta">2025.03 - 2026.03</div>
      <h3>Noah's Ark Lab</h3>
      <p>China</p>
    </div>
  </a>
</div>


<span class='anchor' id='work-demos'></span>

# 🎞️ Work Demos
<div class="video-slider">
  <div class="slides">
    <!-- Slide 1: CogWAM method overview, hosted on the official project site -->
    <div class="slide">
      <video controls playsinline preload="metadata"
             poster="https://horizonrobotics.github.io/CogWAM/assets/figures/fig1.png"
             aria-label="CogWAM method overview video">
        <source src="https://horizonrobotics.github.io/CogWAM/assets/videos/method_overview.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
      <div class="video-slide-caption">
        <strong>CogWAM</strong> — Event-Driven Semantic Cognition
        · <a href="https://horizonrobotics.github.io/CogWAM/">Project</a>
        · <a href="https://arxiv.org/abs/2609.37721">Paper</a>
      </div>
    </div>
    <!-- Slide 2: existing local mp4 -->
    <div class="slide">
      <video controls playsinline preload="metadata">
        <source src="{{ '../videos/model_description.mp4' | relative_url }}" type="video/mp4">
      </video>
    </div>
    <!-- Slide 3: GenSplat ECCV 2026 presentation -->
    <div class="slide">
      <iframe
        class="fitvidsignore"
        width="640"
        height="360"
        src="https://www.youtube.com/embed/UDx4k6q2bGA?feature=oembed"
        title="GenSplat: Efficient Camera Pose Augmentation for View Generalization in Robotic Policy Learning"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
      </iframe>
    </div>
  </div>

  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<div class="dots">
  <span onclick="currentSlide(1)"></span>
  <span onclick="currentSlide(2)"></span>
  <span onclick="currentSlide(3)"></span>
</div>

<style>
.video-slider { position: relative; max-width: 640px; margin: 1rem auto; }
.video-slide-caption { padding: 7px 10px; text-align: center; font-size: .86em; }
.video-slide-caption a { text-decoration: underline; }
.slide { display: none; }
iframe, video { width: 100%; height: auto; aspect-ratio: 16/9; border: none; }
.prev, .next {
  position: absolute; top: 50%; transform: translateY(-50%);
  padding: 6px 10px; background: rgba(0,0,0,.5); color:#fff; cursor:pointer;
}
.next { right: 0; }
.dots { text-align:center; margin-top:6px; }
.dots span { display:inline-block; width:10px; height:10px;
  background:#bbb; border-radius:50%; margin:0 3px; cursor:pointer; }
.dots span.active { background:#717171; }
</style>

<script>
let slideIndex=1; showSlides(slideIndex);
function plusSlides(n){ showSlides(slideIndex+=n); }
function currentSlide(n){ showSlides(slideIndex=n); }
function showSlides(n){
  const slides=document.querySelectorAll('.slide');
  const dots=document.querySelectorAll('.dots span');
  if(n>slides.length) slideIndex=1;
  if(n<1) slideIndex=slides.length;
  slides.forEach(s=>s.style.display="none");
  dots.forEach(d=>d.classList.remove("active"));
  slides[slideIndex-1].style.display="block";
  dots[slideIndex-1].classList.add("active");
}
</script>


<span class='anchor' id='educations'></span>

# 📖 Educations
- *2023.09 - present*, Ph.D. student, College of Artificial Intelligence, [Xi'an Jiaotong University](https://www.xjtu.edu.cn/), 
- *2019.09 - 2023.06*, B.S., Control Science and Engineering, [Jilin University](https://www.jlu.edu.cn/)
