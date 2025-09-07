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
<div class="vs">
  <div class="s active" data-badge="CVPR 2024 WorkShop">
    <span class="badge"></span>
    <video class="v" controls playsinline
           src="{{ '../videos/model_description.mp4' | relative_url }}"></video>
  </div>

  <div class="s" data-badge="Demo · YouTube">
    <span class="badge"></span>
    <iframe class="yt"
      src="https://www.youtube.com/embed/Y3P9wKyzLcM?enablejsapi=1"
      allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>
  </div>

  <button class="nav prev">&#10094;</button>
  <button class="nav next">&#10095;</button>
</div>
<div class="dots"><b></b><b></b></div>

<style>
.vs{position:relative;max-width:880px;margin:1rem auto}
.s{display:none;position:relative}
.s.active{display:block}
video,iframe{width:100%;aspect-ratio:16/9;border:0;display:block}
.nav{position:absolute;top:50%;transform:translateY(-50%);
     background:rgba(0,0,0,.5);color:#fff;border:0;padding:6px 10px;cursor:pointer}
.next{right:0}
.badge{position:absolute;left:10px;top:10px;background:#1f3b8a;color:#fff;
       padding:.22rem .5rem;border-radius:.4rem;font:600 12px/1 system-ui}
.dots{text-align:center;margin-top:6px}
.dots b{display:inline-block;width:8px;height:8px;background:#bbb;border-radius:50%;margin:0 4px;cursor:pointer}
.dots b.on{background:#555}
</style>

<script>
let i=0;
const slides=[...document.querySelectorAll('.vs .s')];
const dots=[...document.querySelectorAll('.dots b')];

slides.forEach(s=>s.querySelector('.badge').textContent=s.dataset.badge||'');

document.querySelectorAll('.yt').forEach(f=>{
  if(!/origin=/.test(f.src))
    f.src+=(f.src.includes('?')?'&':'?')+'origin='+encodeURIComponent(location.origin);
});

function show(k){
  pauseAll();
  slides[i].classList.remove('active'); dots[i].classList.remove('on');
  i=(k+slides.length)%slides.length;
  slides[i].classList.add('active'); dots[i].classList.add('on');
}
function pauseAll(){
  document.querySelectorAll('.v').forEach(v=>v.pause());
  document.querySelectorAll('.yt').forEach(f=>{
    f.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":[]}', '*');
  });
}

document.querySelector('.prev').onclick=()=>show(i-1);
document.querySelector('.next').onclick=()=>show(i+1);
dots.forEach((d,idx)=>d.onclick=()=>show(idx));
dots[0].classList.add('on');
</script>

# 💬 Invited Talks
- *2024.06.15*, Give an oral presentation on *Embodied Computer Vision* in Nashville at CVPR 25 conference. \|[**(Slide)**](https://cvpr.thecvf.com/media/cvpr-2025/Slides/35335.pdf) \| [**(Video)**](https://youtu.be/Y3P9wKyzLcM)


# 💻 Internships
- *2025.02 - present*, in [NOAH'S ARK LAB](https://noahlab.com.hk/#/home), China.