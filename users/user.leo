<?xml version="1.0" encoding="utf-8"?>
<!-- Created by Leo: http://leoeditor.com/leo_toc.html -->
<leo_file xmlns:leo="http://leoeditor.com/namespaces/leo-python-editor/1.1" >
<leo_header file_format="2" tnodes="0" max_tnode_index="0" clone_windows="0"/>
<globals body_outline_ratio="0.5" body_secondary_ratio="0.5">
	<global_window_position top="50" left="50" height="500" width="700"/>
	<global_log_window_position top="0" left="0" height="0" width="0"/>
</globals>
<preferences/>
<find_panel_settings/>
<vnodes>
<v t="leo.20151212173315.1"><vh>@settings</vh>
<v t="leo.20151212173315.2"><vh>@data qt-gui-plugin-style-sheet</vh></v>
<v t="leo.20151212173315.3"><vh>@string initial_split_orientation = horizontal</vh></v>
</v>
<v t="leo.20171104213755.1"><vh>@button www server</vh></v>
<v t="leo.20171105094839.1"><vh>@button ipv6 https server</vh></v>
<v t="amd.20160106095324.1" a="E"><vh>@path ./../</vh>
<v t="leo.20151213173811.1" a="E"><vh>假如要送到 gh-pages 分支, 使用下列按鈕</vh>
<v t="leo.20151212173658.1"><vh>@button remote pelican</vh></v>
</v>
<v t="leo.20151213173830.1" a="E"><vh>假如要在近端檢視, 使用下列按鈕</vh>
<v t="leo.20151213085727.1"><vh>@button local pelican</vh></v>
</v>
<v t="amd.20151215180106.1"><vh>設定與開發</vh>
<v t="amd.20151216151325.1"><vh>@edit index.html</vh></v>
<v t="amd.20151216152209.1"><vh>@edit README.md</vh></v>
<v t="leo.20171105093855.1"><vh>@edit CNAME</vh></v>
<v t="leo.20151213230723.1"><vh>Pelican 設定</vh>
<v t="leo.20151213230957.1"><vh>文章 Date 設定</vh></v>
<v t="leo.20151213230729.1"><vh>使用 summary plugin</vh></v>
</v>
<v t="amd.20151215170117.1"><vh>以下 pelicanconf.py 為近端與遠端的共同設定</vh>
<v t="leo.20151212173725.1"><vh>@edit pelicanconf.py</vh></v>
</v>
<v t="amd.20151215170142.1" a="E"><vh>以下 publishconf.py 為遠端所使用的設定</vh>
<v t="leo.20151212173803.1"><vh>@edit publishconf.py</vh></v>
</v>
<v t="amd.20151215170221.1"><vh>以下 local_publishconf.py 為近端所使用的設定</vh>
<v t="leo.20151213085752.1"><vh>@edit local_publishconf.py</vh></v>
</v>
<v t="amd.20151215121740.1"><vh>@path theme</vh>
<v t="leo.20171105220232.1"><vh>@path attila</vh>
<v t="leo.20171105220325.1"><vh>@path templates</vh>
<v t="leo.20171105220255.1"><vh>@edit base.html</vh></v>
<v t="leo.20171107154220.1"><vh>@edit search.html</vh></v>
<v t="leo.20171107170557.1"><vh>@edit archives.html</vh></v>
<v t="leo.20171107153729.1"><vh>@path partials</vh>
<v t="leo.20171107153746.1"><vh>@edit navigation.html</vh></v>
</v>
</v>
</v>
</v>
<v t="amd.20151215170326.1"><vh>以下在修改或查驗 plugin 目錄下的檔案</vh></v>
<v t="amd.20151215154225.1"><vh>@path plugin</vh>
<v t="amd.20151215154238.1"><vh>@path tipue_search</vh>
<v t="amd.20151215154248.1"><vh>@edit tipue_search.py</vh></v>
</v>
</v>
</v>
</v>
<v t="amd.20151215170350.1"><vh>以下為 content 目錄中的 md 檔案</vh></v>
<v t="amd.20160106094754.1"><vh>@path ./../content/pages</vh>
<v t="amd.20160106094829.1"><vh>chiayicity pages 文章</vh>
<v t="amd.20160106094844.1"><vh>@edit pyslvs_pages_1.md</vh></v>
</v>
</v>
<v t="amd.20151215170031.1" a="E"><vh>@path ./../content</vh>
<v t="amd.20160106093454.1" a="E"><vh>網誌 md 檔案</vh>
<v t="leo.20171105103358.1" a="E"><vh>201711</vh>
<v t="leo.20171107221802.1" a="E"><vh>Pyslvs.com 上線</vh>
<v t="leo.20171107221504.1"><vh>@edit pyslvs_20171115.md</vh></v>
</v>
</v>
</v>
</v>
</vnodes>
<tnodes>
<t tx="amd.20151215121740.1"></t>
<t tx="amd.20151215154225.1"></t>
<t tx="amd.20151215154238.1"></t>
<t tx="amd.20151215170031.1"></t>
<t tx="amd.20151215170117.1"></t>
<t tx="amd.20151215170142.1"></t>
<t tx="amd.20151215170221.1"></t>
<t tx="amd.20151215170326.1"></t>
<t tx="amd.20151215170350.1"></t>
<t tx="amd.20151215180106.1"></t>
<t tx="amd.20160106093454.1"></t>
<t tx="amd.20160106094754.1"></t>
<t tx="amd.20160106094829.1"></t>
<t tx="amd.20160106095324.1"></t>
<t tx="leo.20151212173315.1"></t>
<t tx="leo.20151212173315.2">QTreeWidget {
    /* These apply to the selected item, but not to editing items.*/
    background-color: #ffffec; /* Leo's traditional tree color */
    selection-color: black; /* was white */
    selection-background-color: lightgrey;
    /* font-family: SansSerif; */
    /*font-family: DejaVu Sans Mono;*/
    font-family:YaHei Mono;
    /* 標題字型大小設定 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
 }

/* Headline edit widgets */
QTreeWidget QLineEdit {
    background-color: cornsilk;
    selection-color: white;
    selection-background-color: blue;
    /*font-family: DejaVu Sans Mono;*/    
    font-family:YaHei Mono;
    /* 沒有特別對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The log panes */
QTextEdit {
    background-color: #f2fdff;
    selection-color: red;
    selection-background-color: blue;
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* log font 大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The body pane */
QTextEdit#richTextEdit {
    background-color: #fdf5f5; /* A kind of pink. */
    selection-color: white;
    selection-background-color: red;
    /*font-family: DejaVu Sans Mono;*/
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* 內文字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

QLabel {
    font-family:YaHei Mono;'CherryPy', 'pytz', 'mako', 'beautifulsoup4', 'pymysql', 'peewee'
    /* 下方的 Minibuffer 標題字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

/* Editor labels */
QLineEdit#editorLabel {
    background-color: #ffffec;
    font-family:YaHei Mono;
    /* 沒有直接對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
    border: 2px;
    margin: 2px;
}</t>
<t tx="leo.20151212173315.3">horizontal: body pane to the left
vertical: body pane on the botton</t>
<t tx="leo.20151212173658.1">@language python
import os
os.system("pelican content -o blog -s publishconf.py")
g.es("admin pelican 執行完畢")
</t>
<t tx="leo.20151213085727.1">@language python
import os
os.system("pelican content -o blog -s local_publishconf.py")
g.es("admin pelican 近端執行完畢")
</t>
<t tx="leo.20151213173811.1"></t>
<t tx="leo.20151213173830.1"></t>
<t tx="leo.20151213230723.1"></t>
<t tx="leo.20151213230729.1">利用

&lt;!-- PELICAN_END_SUMMARY --&gt;

來界定 Summary 摘要內容

前提, 必須設定 

PLUGIN_PATHS = ['plugin']

與

PLUGINS = ['liquid_tags.notebook', 'summary']

並且從 https://github.com/getpelican/pelican-plugins

取得 summary plugin</t>
<t tx="leo.20151213230957.1"># 設定網誌以 md 檔案建立的 file system date 為準, 無需自行設定

DEFAULT_DATE = 'fs'</t>
<t tx="leo.20171104213755.1">@language python
import os
import subprocess
import threading
import http.server, ssl

def domake():
    # build directory
    os.chdir("./../")
    server_address = ('localhost', 5443)
    httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)
    httpd.socket = ssl.wrap_socket(httpd.socket,
                                   server_side=True,
                                   certfile='localhost.crt',
                                   keyfile='localhost.key',
                                   ssl_version=ssl.PROTOCOL_TLSv1)
    print(os.getcwd())
    print("5443 https server started")
    httpd.serve_forever()

# 利用執行緒執行 https 伺服器
make = threading.Thread(target=domake)
make.start()</t>
<t tx="leo.20171105094839.1">@language python
import os
import subprocess
import threading
import socket
import http.server, ssl

class HTTPServerV6(http.server.HTTPServer):
    address_family = socket.AF_INET6
  
def domake():
    # build directory
    os.chdir("./../")
    ipv6_address = '::1'
    server_address = (ipv6_address, 6443)
    #httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)
    httpd = HTTPServerV6(server_address, http.server.SimpleHTTPRequestHandler)
    httpd.socket = ssl.wrap_socket(httpd.socket,
                                   server_side=True,
                                   certfile='localhost.crt',
                                   keyfile='localhost.key',
                                   ssl_version=ssl.PROTOCOL_TLSv1)
    print("6443 https server started")
    httpd.serve_forever()

# 利用執行緒執行 https 伺服器
make = threading.Thread(target=domake)
make.start()</t>
<t tx="leo.20171105103358.1"></t>
<t tx="leo.20171105220232.1"></t>
<t tx="leo.20171105220325.1"></t>
<t tx="leo.20171107153729.1"></t>
<t tx="leo.20171107221802.1"></t>
</tnodes>
</leo_file>
