---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
description: ""
# typ videa: "long" nebo "short"
type_video: "long"
# zobrazit jako doporučené video na titulní stránce?
featured: false
# cesta k miniaturě (uložit do static/thumbnails/)
thumbnail: ""
# přímý odkaz na videosoubor (MP4, WebM) na vlastním hostingu
video_src: ""
# nebo odkaz na iframe embed (alternativa k video_src)
embed_url: ""
# délka videa, např. "12:34"
duration: ""
categories:
  - ""
draft: false
---

Popis videa...
