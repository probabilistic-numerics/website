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
    <ul>
      <li><button type="button" class="topic" data-tag=""><span class="label">All</span><span class="count"></span></button></li>
      {% for t in site.data.research_tags %}
      <li{% if t.parent %} class="subtopic" data-parent="{{ t.parent }}"{% endif %}><button type="button" class="topic" data-tag="{{ t.id }}"><span class="label">{{ t.short | default: t.label }}</span><span class="count"></span></button></li>
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
  var subtopics = document.querySelectorAll('.topic-index .subtopic');
  var rows = document.querySelectorAll('.publications .row[data-tags]');
  var lists = document.querySelectorAll('.publications ol.bibliography');
  var selected = new Set();

  var rowTags = new Map();
  rows.forEach(function (row) {
    rowTags.set(row, row.dataset.tags.split(',').map(function (t) { return t.trim(); }));
  });

  var parentOf = {};
  subtopics.forEach(function (li) {
    parentOf[li.querySelector('.topic').dataset.tag] = li.dataset.parent;
  });

  topics.forEach(function (topic) {
    var tag = topic.dataset.tag;
    var n = 0;
    rowTags.forEach(function (tags) { if (!tag || tags.indexOf(tag) !== -1) n++; });
    topic.querySelector('.count').textContent = n;
  });

  function apply() {
    rows.forEach(function (row) {
      var visible = selected.size === 0 || rowTags.get(row).some(function (t) { return selected.has(t); });
      // each row sits in its own <li>
      row.closest('li').hidden = !visible;
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
    // on narrow screens subtopics are only listed while their group is selected
    var openGroups = new Set();
    selected.forEach(function (t) { openGroups.add(parentOf[t] || t); });
    subtopics.forEach(function (li) {
      li.classList.toggle('group-open', openGroups.has(li.dataset.parent));
    });

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
    });
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
