---
layout: page
permalink: /code/
title: Code
description: Software packages implementing probabilistic numerical methods.
nav: true
weight: 30
display_categories: [Python, Julia]
---

<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
    {% for category in page.display_categories %}
      <h2 class="category">{{category}}</h2>
      {% assign categorized_softwarepkgs = site.code | where: "category", category %}
      {% assign sorted_softwarepkgs = categorized_softwarepkgs | sort: "importance" %}
      <!-- Generate cards for each project -->
        <div class="container">
          <div class="row row-cols-1">
          {% for project in sorted_softwarepkgs %}
            {% include code.html %}
          {% endfor %}
          </div>
        </div>
    {% endfor %}

  {% else %}
  <!-- Display projects without categories -->
    {% assign sorted_softwarepkgs = site.code | sort: "importance" %}
    <!-- Generate cards for each project -->
      <div class="container">
        <div class="row row-cols-1">
        {% for project in sorted_softwarepkgs %}
          {% include code.html %}
        {% endfor %}
        </div>
      </div>

  {% endif %}

</div>
