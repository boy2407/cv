#!/bin/bash
# Render cv.html (or the file given as $2) to a 1-page A4 PDF in the CV folder and save a preview screenshot.
set -e
DIR="$(cd "$(dirname "$0")" && pwd)"
OUT_DIR="$(cd "$DIR/../../.." && pwd)"
NAME="${1:-B24_JavaBackend_NguyenTrongNghia.pdf}"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
SRC="${2:-cv.html}"
SHOT="${TMPDIR:-/tmp}/cv-preview-${SRC%.html}.png"

"$CHROME" --headless --disable-gpu --no-pdf-header-footer --virtual-time-budget=5000 \
  --print-to-pdf="$OUT_DIR/$NAME" "file://$DIR/$SRC" 2>/dev/null
"$CHROME" --headless --screenshot="$SHOT" --window-size=794,1123 "file://$DIR/$SRC" 2>/dev/null

sleep 1
PAGES=$(mdls -raw -name kMDItemNumberOfPages "$OUT_DIR/$NAME")
echo "PDF: $OUT_DIR/$NAME"
echo "Pages: $PAGES"
echo "Preview: $SHOT"
[ "$PAGES" = "1" ] || echo "WARNING: CV is longer than 1 page - shorten content."
