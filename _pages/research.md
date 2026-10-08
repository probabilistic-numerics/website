---
layout: page
permalink: /research/
title: Research
description: Selected publications in all areas of probabilistic numerics, in reversed chronological order. Select topics to restrict the list.
nav: true
weight: 20
---

<div class="research-layout">
  <nav class="topic-index" aria-label="Topics">
    <div class="topic-index-title">Topics</div>
    <button type="button" class="topic-toggle" aria-expanded="false" aria-controls="topic-list">
      <span class="topic-toggle-name">All papers</span><span class="topic-toggle-count"></span>
      <svg class="topic-toggle-chevron" width="12" height="8" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>
    </button>
    <ul id="topic-list">
      <li><button type="button" class="topic" data-tag="" data-name="All papers"><span class="label">All</span><span class="count"></span></button></li>
      {% for t in site.data.research_tags %}
      <li{% if t.parent %} class="subtopic" data-parent="{{ t.parent }}"{% endif %}><button type="button" class="topic" data-tag="{{ t.id }}" data-name="{{ t.label }}"><span class="label">{{ t.short | default: t.label }}</span><span class="count"></span></button></li>
      {% endfor %}
    </ul>
  </nav>

  <div class="publications">
  {% bibliography --file papers %}
  </div>
</div>

<script>
(function () {
  var topics = document.querySelectorAll('.topic-index .topic');
  var index = document.querySelector('.topic-index');
  var toggle = index.querySelector('.topic-toggle');
  var rows = document.querySelectorAll('.publications .row[data-tags]');
  var lists = document.querySelectorAll('.publications ol.bibliography');
  var selected = new Set();

  var rowTags = new Map();
  rows.forEach(function (row) {
    rowTags.set(row, row.dataset.tags.split(',').map(function (t) { return t.trim(); }));
  });

  topics.forEach(function (topic) {
    var tag = topic.dataset.tag;
    var n = 0;
    rowTags.forEach(function (tags) { if (!tag || tags.indexOf(tag) !== -1) n++; });
    topic.querySelector('.count').textContent = n;
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
    topics.forEach(function (topic) {
      var tag = topic.dataset.tag;
      var active = tag ? selected.has(tag) : selected.size === 0;
      topic.classList.toggle('active', active);
      topic.setAttribute('aria-pressed', active);
    });
    // the narrow-screen toggle names the current selection
    var current = selected.size === 1 ? index.querySelector('.topic[data-tag="' + Array.from(selected)[0] + '"]')
      : selected.size === 0 ? index.querySelector('.topic[data-tag=""]') : null;
    toggle.querySelector('.topic-toggle-name').textContent = current ? current.dataset.name : 'Several topics';
    toggle.querySelector('.topic-toggle-count').textContent = shown;

    var url = new URL(window.location);
    if (selected.size) url.searchParams.set('tags', Array.from(selected).join(','));
    else url.searchParams.delete('tags');
    history.replaceState(null, '', url);
  }

  var layout = document.querySelector('.research-layout');

  function select(tag) {
    selected = tag ? new Set([tag]) : new Set();
    apply();
    // after filtering from further down, jump back to the start of the list
    var top = layout.getBoundingClientRect().top + window.scrollY - 80;
    if (window.scrollY > top) window.scrollTo({ top: top, behavior: 'smooth' });
  }

  topics.forEach(function (topic) {
    topic.addEventListener('click', function () {
      var tag = topic.dataset.tag;
      // clicking the active topic again returns to the full list
      select(selected.size === 1 && selected.has(tag) ? '' : tag);
      setOpen(false);
    });
  });

  // narrow screens: the toggle expands the topic list in place
  function setOpen(open) {
    index.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  }
  toggle.addEventListener('click', function () {
    setOpen(!index.classList.contains('open'));
  });
  index.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && index.classList.contains('open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  document.querySelectorAll('.publications .paper-tag').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      select(link.dataset.tag);
    });
  });

  var initial = new URLSearchParams(window.location.search).get('tags');
  if (initial) initial.split(',').forEach(function (t) { if (t.trim()) selected.add(t.trim()); });
  apply();
})();
</script>
