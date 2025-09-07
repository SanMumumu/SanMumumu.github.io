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

I am currently a third-year Ph.D. candidate in the Institute of Artificial Intelligence and Robotics at Xi'an Jiaotong University ([IAIR](https://iair.xjtu.edu.cn/index.htm), [XJTU](https://www.xjtu.edu.cn/)), where I am pursuing my doctoral studies under the guidance of Prof.[Le Wang](https://gr.xjtu.edu.cn/web/lewang). I also collaborate closely with Prof.[Sanping Zhou](https://gr.xjtu.edu.cn/web/spzhou), Prof.[Gang Hua](https://www.ganghua.org/) and Prof.[Wei Tang](https://www.cs.uic.edu/~tangw/).
Previously, I earned my B.Eng. in Control Science and Engineering from Jilin University.


My research interest focus on Robotic Manipulation, with particular emphasis on vision language action model and world model. I welcome any inquiries regarding potential collaboration in these areas.



# 🔥 News
- 2025.06: 🎉 PDFactor was selected for an **oral** presentation.  
- 2025.03: 🎉 Two papers were accepted to CVPR 2025.
- 2023.06: 🎓 Graduated from Jilin University.

# 📝 Selected Publications 

<!-- FlowRAM -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2025</div><img src='../images/2025FlowRAM.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**FlowRAM: Grounding Flow Matching Policy with Region-Aware Mamba Framework for Robotic Manipulation**

**Sen Wang\***, Le Wang†, Sanping Zhou, Jingyi Tian, Jiayi Li, Haowen Sun, Wei Tang

[[**Project**]](https://sanmumumu.github.io/FlowRAM/)&nbsp;
[[**Paper**]](https://openaccess.thecvf.com/content/CVPR2025/papers/Wang_FlowRAM_Grounding_Flow_Matching_Policy_with_Region-Aware_Mamba_Framework_for_CVPR_2025_paper.pdf)&nbsp;
[[**Code**]](https://github.com/SanMumumu/FlowRAM)
</div>
</div>
<!-- FlowRAM -->

<!-- PDFacotr -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2025 ORAL</div><img src='../images/2025PDFactor.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**PDFactor: Learning Tri-Perspective View Policy Diffusion Field for Multi-Task Robotic Manipulation**

Jingyi Tian, Le Wang†, Sanping Zhou, **Sen Wang\***, Jiayi Li, Haowen Sun, Wei Tang

[[**Paper**]](https://openaccess.thecvf.com/content/CVPR2025/papers/Tian_PDFactor_Learning_Tri-Perspective_View_Policy_Diffusion_Field_for_Multi-Task_Robotic_CVPR_2025_paper.pdf)

</div>
</div>
<!-- PDFacotr -->




# 🏅 Honors and Awards
- *2024.10*, Academic Scholarship, XJTU
- *2024.06*, Runner-up in the 5th Embodied AI Workshop, CVPR [**(Cert.)**](../images/2024_Award_cvprws.png)
- *2023.10*, Freshman Scholarship, XJTU
- *2023.06*, Outstanding Graduates Student, JLU
- *2021.12, 2022.12*, National Encouragement Scholarship, MOE of PRC

# 📖 Educations
- *2023.09 - present*, Ph.D. student, College of Artificial Intelligence, [Xi'an Jiaotong University](https://www.xjtu.edu.cn/), 
- *2019.09 - 2023.06*, B.S., Control Science and Engineering, [Jilin University](https://www.jlu.edu.cn/)


# 🎞️ Work Demos

<!-- Video slider start -->
<div class="video-slider">
  <div class="slides">
    <div class="slide">
      <!-- Replace the src with your own embed URL -->
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/Y3P9wKyzLcM" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="slide">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/Y3P9wKyzLcM" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="slide">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/Y3P9wKyzLcM" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<div class="dots-container">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
</div>

<style>
  .video-slider {
    position: relative;
    max-width: 100%;
    margin: 20px auto;
  }
  .video-slider .slides .slide {
    display: none;
  }
  .video-slider .prev,
  .video-slider .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: #000;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }
  .video-slider .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }
  .video-slider .prev:hover,
  .video-slider .next:hover {
    background-color: rgba(0,0,0,0.8);
    color: #fff;
  }
  .dots-container {
    text-align: center;
    margin-top: 10px;
  }
  .dot {
    cursor: pointer;
    height: 10px;
    width: 10px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }
  .active,
  .dot:hover {
    background-color: #717171;
  }
</style>

<script>
  var slideIndex = 1;
  showSlides(slideIndex);
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    var i;
    var slides = document.querySelectorAll('.video-slider .slide');
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
  }
</script>
<!-- Video slider end -->

# 💬 Invited Talks
- *2024.06.15*, Give an oral presentation on *Embodied Computer Vision* in Nashville at CVPR 25 conference. \|[**(Slide)**](https://cvpr.thecvf.com/media/cvpr-2025/Slides/35335.pdf) \| [**(Video)**](https://youtu.be/Y3P9wKyzLcM)


# 💻 Internships
- *2025.02 - present*, in [NOAH'S ARK LAB](https://noahlab.com.hk/#/home), China.