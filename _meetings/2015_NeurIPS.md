---
layout: meeting

title: Probabilistic Integration
event: Neural Information Processing Systems (NeurIPS)
location: Montréal, Canada
organizers: [["Philipp", "Hennig"], ["Michael", "Osborne"]]

date: 2015-12-07
date_end: 2015-12-12

summary: 

link: https://nips.cc/Conferences/2015
img: /assets/img/meetings/2015_NeurIPS.jpg
img_caption: "Montréal by David Iliff (CC-BY-2.5)"

url_code:
url_pdf:
url_slides:
url_video:
---

This workshop will be hosted by [NIPS](https://nips.cc/Conferences/2015), a large annual machine learning and computational neuroscience conference.

Integration is the central numerical operation required for Bayesian machine learning (in the form of marginalization and conditioning). Sampling algorithms still abound in this area, although it has long been known that Monte Carlo methods are fundamentally sub-optimal. The challenges for the development of better performing integration methods are mostly algorithmic. Moreover, recent algorithms have begun to outperform MCMC and its siblings, in wall-clock time, on realistic problems from machine learning.

The workshop will review the existing, by now quite strong, theoretical case against the use of random numbers for integration, discuss recent algorithmic developments, relationships between conceptual approaches, and highlight central research challenges going forward.

Among the questions to be addressed by the workshop are

* How fast can a practical integral estimate on a deterministic function converge (polynomially, super-polynomially, not just “better than $$\sqrt{n}$$”)?
* How are these rates related, precisely, to prior assumptions about the integrand, and to the design rules of the integrator?
* To which degree can the source code of an integration problem be parsed to choose informative priors?
* Are random numbers necessary and helpful for efficient multivariate integration, or are they a conceptual crutch that cause inefficiencies?
* What are the practical challenges in the design of efficient multivariate integration methods that use such prior information?

The workshop builds upon the growing field of Probabilistic Numerics, for which probabilistic integration is a core component.

## Schedule

The workshop will be held on Friday, 11 December in room 512a.

* 09:00-09:10: [Opening Remarks](http://imgc-cn.artprintimages.com/images/P-473-488-90/60/6056/IC9D100Z/posters/matthew-diffee-your-honor-if-it-please-the-court-i-d-like-to-deliver-my-opening-comment-new-yorker-cartoon.jpg)
* 09:10-09:40: [Christian Robert](https://www.ceremade.dauphine.fr/~xian/) <a href="../../_static/pdf/meetings/NIPS2015/talks/CPRobert.pdf">(slides)</a>
* 09:40-10:00: [François-Xavier Briol](http://www2.warwick.ac.uk/fac/sci/statistics/staff/research_students/briol/) <a href="../../_static/pdf/meetings/NIPS2015/talks/NIPSworkshop_fxbriol">(slides)</a>
* 10.00-10.30: *Coffee break*
* 10:30-11:00: [Arthur Gretton](http://www.gatsby.ucl.ac.uk/~gretton/) <a href="../../_static/pdf/meetings/NIPS2015/talks/nips15_regression">(slides)</a>
* 11:00-11:30: [Roman Garnett](http://cse.wustl.edu/people/Pages/faculty-bio.aspx?faculty=109) <a href="../../_static/pdf/meetings/NIPS2015/talks/roman_talk">(slides)</a>
* 11:30-11:45: [George Papamakarios](http://homepages.inf.ed.ac.uk/s1459647/) & [Iain Murray,](http://homepages.inf.ed.ac.uk/imurray2/) <a href="../../_static/pdf/meetings/NIPS2015/talks/distilling_intractable_models_slides">(slides)</a>
* 11:45-12:00: [Jan-Peter Calliess,](http://www.robots.ox.ac.uk/~jan/) <a href="../../_static/pdf/meetings/NIPS2015/talks/talkjcNIPS15">(slides)</a>
* 12:00-14:30: *Lunch break*
* 14:30-15:00: [Francis Bach](http://www.di.ens.fr/~fbach/) <a href="../../_static/pdf/meetings/NIPS2015/talks/fbach_nips_2015_quadrature">(slides)</a>
* 15:00-15:30: [David Duvenaud](http://people.seas.harvard.edu/~dduvenaud/) <a href="../../_static/pdf/meetings/NIPS2015/talks/prob-int-workshop">(slides)</a>
* 15:30-16:00: [Max Welling](https://www.ics.uci.edu/~welling/) <a href="../../_static/pdf/meetings/NIPS2015/talks/OMC_NIPS2015_WellingMeeds">(slides)</a>
* 16:00-16:30: *Coffee Break*
* 16:30-17.30: Panel discussion

## Accepted Papers

* Jan-Peter Calliess: <a href="../../_static/pdf/meetings/NIPS2015/papers/jcalliess_NIPS15.pdf">Bayesian Lipschitz Constant Estimation and Quadrature</a>
* George Papamakarios & Iain Murray: <a href="../../_static/pdf/meetings/NIPS2015/papers/distilling_intractable_generative_models_camera_ready.pdf">Distilling Intractable Generative Models</a>

<!-- ## Call for Papers

### Important dates

* Submission deadline: 18:00 GMT, 16 October 2015 (**deadline extended**)
* Notification of acceptance: 5 November 2015

### Topics of interest

* Bayesian quadrature
* Quadrature rules
* Kernel herding
* Quasi Monte Carlo
* Convergence diagnostics for MCMC

We welcome contributions from theoretical treatments, empirical studies, and applications, of the above. The list is not exhaustive, and we also welcome submissions that draw upon highly related topics.

### Submission instructions

Submissions should be in the NIPS 2015 format, with a maximum of 4 pages (excluding references). Accepted papers will be made available online at the workshop website, and will be presented in a spotlight talk at the workshop itself, but the workshop proceedings can be considered non-archival. Explicitly: shorter versions of relevant papers submitted or published elsewhere are encouraged. Submissions need not be anonymous.

Please mail pdf submissions to <probnum@gmail.com>. -->
