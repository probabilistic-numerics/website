---
layout: page
permalink: /research/
title: Research
description: Selected publications in all areas of probabilistic numerics, in reversed chronological order. Select topics to restrict the list.
nav: true
weight: 20
---

<style>
  .tag-filter { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.75rem; }
  .tag-chip {
    border: 1px solid var(--global-theme-color);
    background: transparent;
    color: var(--global-theme-color);
    border-radius: 1rem;
    padding: 0.15rem 0.75rem;
    font-size: 0.85rem;
    cursor: pointer;
  }
  .tag-chip.active { background: var(--global-theme-color); color: var(--global-bg-color); }
  .tag-status { font-size: 0.85rem; color: var(--global-text-color-light); margin-bottom: 1rem; }
  .publications { margin-top: 1rem; }
  .publications h2.bibliography { margin-top: 1.25rem; margin-bottom: 0.75rem; }
  .publications ol.bibliography li {
    border-bottom: 1px solid color-mix(in srgb, var(--global-text-color) 8%, transparent);
    padding-bottom: 0.75rem;
    margin-bottom: 0.75rem;
  }
  .publications ol.bibliography li:last-child { border-bottom: none; }
  .tag-description { margin-bottom: 1rem; }
  .publications .paper-tag {
    font-size: 0.7rem;
    color: var(--global-theme-color);
    background: color-mix(in srgb, var(--global-theme-color) 10%, transparent);
    border-radius: 0.75rem;
    padding: 0.1rem 0.5rem;
    margin-right: 0.25rem;
    text-decoration: none;
    transition: background 0.15s ease;
  }
  .publications .paper-tag::before { content: "#"; }
  .publications .paper-tag:hover {
    background: color-mix(in srgb, var(--global-theme-color) 20%, transparent);
    text-decoration: none;
  }
</style>

<div class="tag-filter">
  <button type="button" class="tag-chip" data-tag="">All</button>
  {% for t in site.data.research_tags %}
  <button type="button" class="tag-chip" data-tag="{{ t.id }}">{{ t.label }}</button>
  {% endfor %}
</div>
<div class="tag-status"></div>
{% for t in site.data.research_tags %}{% if t.description %}
<p class="tag-description" data-tag="{{ t.id }}" hidden>{{ t.description }}</p>
{% endif %}{% endfor %}

<div class="publications">
{% bibliography --file papers %}
</div>

<script>
(function () {
  var chips = document.querySelectorAll('.tag-chip');
  var rows = document.querySelectorAll('.publications .row[data-tags]');
  var lists = document.querySelectorAll('.publications ol.bibliography');
  var descriptions = document.querySelectorAll('.tag-description');
  var status = document.querySelector('.tag-status');
  var selected = new Set();

  var rowTags = new Map();
  rows.forEach(function (row) {
    rowTags.set(row, row.dataset.tags.split(',').map(function (t) { return t.trim(); }));
  });

  function apply() {
    var shown = 0;
    rows.forEach(function (row) {
      var visible = selected.size === 0 || rowTags.get(row).some(function (t) { return selected.has(t); });
      // each row sits in its own <li>
      row.closest('li').hidden = !visible;
      if (visible) shown++;
    });
    // hide year headings whose list is empty
    lists.forEach(function (ol) {
      var empty = !ol.querySelector('li:not([hidden])');
      ol.hidden = empty;
      var heading = ol.previousElementSibling;
      if (heading && /^H\d$/.test(heading.tagName)) heading.hidden = empty;
    });
    chips.forEach(function (chip) {
      var tag = chip.dataset.tag;
      chip.classList.toggle('active', tag ? selected.has(tag) : selected.size === 0);
    });
    descriptions.forEach(function (d) {
      d.hidden = !(selected.size === 1 && selected.has(d.dataset.tag));
    });
    status.textContent = shown + ' of ' + rows.length + ' papers';

    var url = new URL(window.location);
    if (selected.size) url.searchParams.set('tags', Array.from(selected).join(','));
    else url.searchParams.delete('tags');
    history.replaceState(null, '', url);
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var tag = chip.dataset.tag;
      if (!tag) selected.clear();
      else if (selected.has(tag)) selected.delete(tag);
      else selected.add(tag);
      apply();
    });
  });

  // tag links on individual papers select only that tag
  document.querySelectorAll('.publications .paper-tag').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      selected = new Set([link.dataset.tag]);
      apply();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  var initial = new URLSearchParams(window.location.search).get('tags');
  if (initial) initial.split(',').forEach(function (t) { if (t.trim()) selected.add(t.trim()); });
  apply();
})();
</script>
