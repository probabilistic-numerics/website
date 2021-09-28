---
layout: meeting

title: Probabilistic Numerics for Differential Equations
event: University of Warwick
location: Warwick, United Kingdom
organizers: [["Philipp", "Hennig"], ["Michael", "Osborne"], ["Chris", "Oates"], ["Mark", "Girolami"]]

date: 2015-04-21
date_end:

summary: >
  Workshop on probabilistic numerical methods for differential equations.

link: http://www2.warwick.ac.uk/fac/sci/statistics/crism/workshops/probnumerics
img:
img_caption:

url_code:
url_pdf:
url_slides:
url_video:
---

Numerical algorithms, such as methods for the numerical solution of integrals and ordinary differential equations, as well as optimization algorithms can be interpreted as estimation rules. They estimate the value of a latent, intractable quantity – the value of an integral, the solution of a differential equation, the location of an extremum – given the result of tractable computations (“observations”, such as function values of the integrand, evaluations of the differential equation, function values of the gradient of an objective). So these methods perform inference, and are accessible to the formal frameworks of probability theory. They are learning machines.

Taking this observation seriously, a probabilistic numerical method is a numerical algorithm that takes in a probability distribution over its inputs, and returns a probability distribution over its output. Recent research shows that it is in fact possible to directly identify existing numerical methods, including some real classics, with specific probabilistic models.

Interpreting numerical methods as learning algorithms offers various benefits. It can offer insight into the algebraic assumptions inherent in existing methods. As a joint framework for methods developed in separate communities, it allows transfer of knowledge among these areas. But the probabilistic formulation also explicitly provides a richer output than simple convergence bounds. If the probability measure returned by a probabilistic method is well-calibrated, it can be used to monitor, propagate and control the quality of computations.