---
---

callback([
{% for post in site.posts reversed | sort: title %}
  {
    "text": "{{post.title | replace:'"','\"'}}",
    "href": "{{site.baseurl}}{{post.url}}"
  } {% unless forloop.last %},{% endunless%}
{% endfor %}
])