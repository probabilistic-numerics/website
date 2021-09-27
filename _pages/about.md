---
layout: about
title: About
permalink: /

banner: /assets/img/logos/pn-logo-dark-txtbelow.svg  # link to banner image relative to root
news: true  # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
---

## Uncertainty in Computation

Mathematical models used to explain and predict the behaviour of complex systems such as immune cells or the climate rely heavily on numerical methods. The exponential growth in available data and computing power has revolutionized the scale of such models. In practice, however, *computational resources are limited*. This introduces uncertainty arising from not running numerical methods to convergence and from observations corrupted by noise.

### Probabilistic Numerics

Probabilistic numerics (PN) aims to quantify uncertainty arising from intractable or incomplete numerical computation and from stochastic input. *This new paradigm treats a numerical problem as one of statistical inference instead.* The probabilistic viewpoint provides a principled way to encode structural knowledge about a problem. By giving an explicit role to uncertainty from all sources, in particular from the computation itself, PN gives rise to new applications beyond the scope of classical methods.

Typical numerical tasks to which PN may be applied include optimization, integration, the solution of ordinary and partial differential equations, and the basic tasks of linear algebra, e.g. solution of linear systems and eigenvalue problems.

<div class="card-deck">
    <div class="card hoverable">
        <a href="./research/linear_algebra" target="_blank">
            <img class="card-img-top" src="assets/img/linear_algebra.png">
            <div class="card-body text-center">
                <p class="card-text">Linear Algebra</p>
            </div>
        </a>
    </div>
    <div class="card hoverable">
        <a href="./research/quadrature" target="_blank">
            <img class="card-img-top" src="assets/img/integration.png">
            <div class="card-body text-center">
                <p class="card-text">Quadrature</p>
            </div>
        </a>
    </div>
    <div class="card hoverable">
        <a href="./research/optimization" target="_blank">
            <img class="card-img-top" src="assets/img/optimization.png">
            <div class="card-body text-center">
                <p class="card-text">Optimization</p>
            </div>
        </a>
    </div>
    <div class="card hoverable">
        <a href="./research/ode" target="_blank">
            <img class="card-img-top" src="assets/img/ode.png">
            <div class="card-body text-center">
                <p class="card-text">ODEs</p>
            </div>
        </a>
    </div>
    <div class="card hoverable">
        <a href="./research/pde" target="_blank">
            <img class="card-img-top" src="assets/img/pde.png">
            <div class="card-body text-center">
                <p class="card-text">PDEs</p>
            </div>
        </a>
    </div>
</div>
<br>

### Value of a Probabilistic Approach

As well as offering an enriched reinterpretation of classical methods, the PN approach has several concrete practical points of value. The probabilistic interpretation of computation

- allows to build customized methods for specific problems with bespoke priors
- formalizes the design of adaptive methods using tools from decision theory
- provides a way of setting parameters of numerical methods via the Bayesian formalism
- expedites the solution of mutually related problems of similar type
- naturally incorporates sources of stochasticity in the computation
- can give structural uncertainty via a probability measure compared to an error estimate

and finally it offers a principled approach of including numerical error in the propagation of uncertainty through chains of computations.
