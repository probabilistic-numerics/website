---
layout: meeting

title: Optimizing the Optimizers
event: Neural Information Processing Systems (NeurIPS)
location: Barcelona, Spain
organizers: [["Maren", "Mahsereci"], ["Alex", "Davies"], ["Philipp", "Hennig"]]

date: 2016-12-10
date_end: 

summary: 

link: https://nips.cc/Conferences/2016
img: /assets/img/meetings/2016_NeurIPS.jpg
img_caption: Barcelona by David Iliff (CC-BY-SA-3.5)

url_code:
url_pdf:
url_slides:
url_video:
---

Optimization problems in machine learning have aspects that make them more challenging than the traditional settings, like stochasticity, and parameters with side-effects (e.g., the batch size and structure). The field has invented many different approaches to deal with these demands. Unfortunately - and intriguingly - this extra functionality seems to invariably necessitate the introduction of tuning parameters: step sizes, decay rates, cycle lengths, batch sampling distributions, and so on. Such parameters are not present, or at least not as prominent, in classic optimization methods. But getting them right is frequently crucial, and necessitates inconvenient human “babysitting”.

Recent work has increasingly tried to eliminate such fiddle factors, typically by statistical estimation. This also includes automatic selection of external parameters like the batch-size or -structure, which have not traditionally been treated as part of the optimization task. Several different strategies have now been proposed, but they are not always compatible with each other, and lack a common framework that would foster both conceptual and algorithmic interoperability. This workshop aims to provide a forum for the nascent community studying automating parameter-tuning in optimization routines.

Among the questions to be addressed by the workshop are:

* Is the prominence of tuning parameters a fundamental feature of stochastic optimization problems? Why do classic optimization methods manage to do well with virtually no free parameters?
* In which precise sense can the "optimization of optimization algorithms" be phrased as an inference / learning problem? 
* Should, and can, parameters be inferred at design-time (by a human), at compile-time (by an external compiler with access to a meta-description of the problem) or run-time (by the algorithm itself)?
* What are generic ways to learn parameters of algorithms, and inherent difficulties for doing so? Is the goal to *specialize* to a particular problem, or to *generalize* over many problems? 


### Schedule

The workshop will be held on Saturday, 10 December, in *Area 2*

| Time | | Event | Material |
| :--------------- | - | :---- | :---- |
| **09:00-09:10** | --- |  *Opening Remarks* | |
| **09:10-09:30** | --- |  [Matt Hoffman (DeepMind)](http://mlg.eng.cam.ac.uk/hoffmanm/) | |
| **09:30-10:00** | --- |  [David Duvenaud (U Toronto)](http://www.cs.toronto.edu/~duvenaud/) | [slides]({{ site.baseurl }}/assets/pdf/meetings/2016_NeurIPS/talks/DavidDuvenaud.pdf) |
| **10:00-10:30** | --- |  [Stephen J Wright (U of Wisconsin)](http://pages.cs.wisc.edu/~swright/) | [slides]({{ site.baseurl }}/assets/pdf/meetings/2016_NeurIPS/talks/StephenWright.pdf) |
| **10.30-11.00** | --- |  *Coffee Break* | |
| **11:00-11:30** | --- |  [Samantha Hansen (Spotify)](https://www.linkedin.com/in/samantha-hansen-a37585105) | [slides]({{ site.baseurl }}/assets/pdf/meetings/2016_NeurIPS/talks/SammyHansen.pptx) |
| **11:30-12:00** | --- |  *Spotlights* | (see below) |
| **12:00-12:45** | --- |  *Poster Session* | |
| **12:45-14:15** | --- |  *Lunch Break* | |
| **14:15-14:40** | --- |  [Matteo Pirotta (Politecnico di Milano)](https://teopir.github.io) | |
| **14:40-15:00** | --- |  [Ameet Talwalkar (UCLA)](http://web.cs.ucla.edu/~ameet/)  | [slides]({{ site.baseurl }}/assets/pdf/meetings/2016_NeurIPS/talks/AmeetTalwalkar.pdf) |
| **15:00-15:30** | --- |  *Coffee Break* | |
| **15:30-15:50** | --- |  [Ali Rahimi (Google)](https://keysduplicated.com/~ali/) | |
| **15:50-16.20** | --- |  [Mark Schmidt (UBC)](http://www.cs.ubc.ca/~schmidtm/) | |
| **16:20-17:00** | --- |  *Panel Discussion* | |


## Accepted Papers 
(in alphabetical order, by first author's surname)

* Ömer Deniz Akyildiz, Víctor Elvira, Jesus Fernandez-Bes, Joaquín Miguez. [*On the Relationship between Online Optimizers and Recursive Filters*]({{ site.baseurl }}/assets/pdf/meetings/2016_NeurIPS/Akyildiz_Elvira_Fernandez-Bes_Miguez.pdf)
* Matt Bonakdarpour and Panagiotis (Panos) Toulis. [*Statistical Perspectives of Stochastic Optimization*]({{ site.baseurl }}/assets/pdf/meetings/2016_NeurIPS/Bonakdarpour_Toulis.pdf)
* Anirban Chaudhuri, David Wolpert, Brendan Tracey. [*Stochastic Optimization and Machine Learning: Cross-Validation for Cross-Entropy Method*]({{ site.baseurl }}/assets/pdf/meetings/2016_NeurIPS/Chaudhuri_Wolpert_Tracey.pdf)
* Kamil Ciosek and Shimon Whiteson. [*Off-Environment RL with Rare Events*]({{ site.baseurl }}/assets/pdf/meetings/2016_NeurIPS/Ciosek_Whiteson.pdf)
* Guilherme França and José Bento. [*Tuning Over-Relaxed ADMM*]({{ site.baseurl }}/assets/pdf/meetings/2016_NeurIPS/Franca_Bento.pdf)
* Tobias Glasmachers. [*Small Stochastic Average Gradient Steps*]({{ site.baseurl }}/assets/pdf/meetings/2016_NeurIPS/Glasmachers.pdf)
* Ke Li and Jitendra Malik. [*Learning to Optimize*]({{ site.baseurl }}/assets/pdf/meetings/2016_NeurIPS/Li_Malik.pdf)
* Ben London. [*Generalization Bounds for Randomized Learning with Application to Stochastic Gradient Descent*]({{ site.baseurl }}/assets/pdf/meetings/2016_NeurIPS/London.pdf)
* Matteo Pirotta and Marcello Restelli. [*Cost-Sensitive Approach for Batch Size Optimization*]({{ site.baseurl }}/assets/pdf/meetings/2016_NeurIPS/Pirotta_Restelli.pdf)

<!-- ## Call for Papers

### Important dates

* Submission deadline: 18:00 GMT, 7 October 2016 (deadline extended)
* Notification of acceptance: 7 November 2016

### Topics of interest

* Parameter adaptation for optimization algorithms
* Stochastic optimization methods 
* Optimization methods adapted for specific applications
* Batch selection methods
* Convergence diagnostics for optimization algorithms

We welcome contributions from theoretical treatments, empirical studies, and applications, of the above. The list is not exhaustive, and we also welcome submissions that draw upon highly related topics.

### Submission instructions

Submissions should be in the (new!) NIPS 2016 format, with a maximum of 4 pages (excluding references). Accepted papers will be made available online at the workshop website, and will be presented in a spotlight talk at the workshop itself, but the workshop proceedings can be considered non-archival. Explicitly: shorter versions of relevant papers submitted or published elsewhere are encouraged. Submissions need not be anonymous. 

Please mail pdf submissions to <mmahsereci@tue.mpg.de>. -->