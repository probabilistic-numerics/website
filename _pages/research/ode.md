---
layout: page
permalink: /research/ode/
title: Ordinary Differential Equations
description:
---

To avoid a frequent initial confusion for new readers, it may be helpful to
point out that there are two common ways in which probabilistic methods are
used in combination with ordinary differential equations: The "classic" problem
of numerics is to infer the solution to an initial value problem given access
to the differential equation. Below, we term this problem <a
href="#solving-odes">"solving ODEs"</a>. The reverse problem, in some sense, has
also found interest in machine learning: inferring a differential equation from
(noisy) observations of trajectories that are assumed to be governed by this
ODE. Below, this is listed under <a href="#inferring-odes">"inferring ODEs"</a>.

### Solving ODEs

<div class="publications">
{% bibliography --file ODEs %}
</div>

### Inferring ODEs

<div class="publications">
{% bibliography --file ODE_from_path %}
</div>
