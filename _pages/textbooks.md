---
layout: page
permalink: /textbooks/
title: Textbooks
description: Books providing a self-contained and comprehensive introduction to probabilistic numerics.
nav: true
weight: 100
---

<div class="projects">
  <!-- Display projects without categories -->
    {% assign books = site.textbooks | sort: "importance" %}
    <!-- Generate cards for each project -->
      <div class="container">
        <div class="row row-cols-1">
        {% for project in books %}
          {% include textbooks.html %}
        {% endfor %}
        </div>
      </div>
</div>
