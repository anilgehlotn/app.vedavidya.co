#!/usr/bin/env python3
"""Builds the app from src/.

  index.html            the installable app (full HTML document, PWA tags, service worker)
  <preview path>        optional: page content only, for the claude.ai preview

Usage: python3 build.py [preview_output_path]
"""
import sys, pathlib
root = pathlib.Path(__file__).parent
tpl = (root / "src/app.html").read_text()
data = (root / "src/data.js").read_text()
content = tpl.replace("/*__DATA__*/", data)

head, body = content.split('<div id="device">', 1)
body = '<div id="device">' + body

pwa_head = """<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Veda Vidya student app: reports, academics, attendance, daily practice and AI tutor.">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Veda Vidya">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="format-detection" content="telephone=no">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" type="image/png" sizes="192x192" href="icons/icon-192.png">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<style>[hidden]{display:none!important}body{margin:0}img{max-width:100%}</style>
"""
sw = """<script>
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
</script>
"""
full = f"<!doctype html>\n<html lang=\"en\">\n<head>\n{pwa_head}{head.strip()}\n</head>\n<body>\n{body.strip()}\n{sw}</body>\n</html>\n"
(root / "index.html").write_text(full)
print("wrote index.html")
if len(sys.argv) > 1:
    pathlib.Path(sys.argv[1]).write_text(content)
    print("wrote", sys.argv[1])
