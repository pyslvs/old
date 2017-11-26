#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys
sys.path.append(os.curdir)
from pelicanconf import *

# 將所有靜態 html 檔案移到 blog 子目錄
SITEURL = 'http://pyslvs.github.io/blog'
# 此設定用於將資料送到 gh-pages, 因此使用絕對 URL 設定
RELATIVE_URLS = False

THEME = 'theme/attila'
BOOTSTRAP_THEME = 'united'
COLOR_SCHEME_CSS = 'tomorrow_night.css'

FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/%s.atom.xml'

DELETE_OUTPUT_DIRECTORY = True

# Following items are often useful when publishing

DISQUS_SITENAME = "pyslvs.com"
#DISQUS_DISPLAY_COUNTS = True
#GOOGLE_ANALYTICS = ""

# 設定網誌以 md 檔案建立的 file system date 為準, 無需自行設定
DEFAULT_DATE = 'fs'

# 遠端的 code hightlight
#MD_EXTENSIONS = ['fenced_code', 'extra', 'codehilite(linenums=True)']
MARKDOWN = {
    'extension_configs': {
        'markdown.extensions.codehilite': {'css_class': 'highlight'},
        'markdown.extensions.extra': {},
        'markdown.extensions.meta': {},
    },
    'output_format': 'html5',
}

# 若要依照日期存檔呼叫
#ARTICLE_URL = 'posts/{date:%Y}/{date:%m}/{date:%d}/{slug}/'
#ARTICLE_SAVE_AS = 'posts/{date:%Y}/{date:%m}/{date:%d}/{slug}/index.html'
PAGE_URL = 'pages/{slug}/'
PAGE_SAVE_AS = 'pages/{slug}/index.html'
SHOW_ARTICLE_AUTHOR = True