#!/usr/bin/env bash

rm placeholders.json
echo { >> placeholders.json

for d in ./raw_images/a/; do
  d=${d#./raw_images/}
  mkdir ./public/$d
  index=0
  echo "\"${d%/}\"": >> placeholders.json
  echo [ >> placeholders.json
  for f in ./raw_images/$d*.jpeg; do
    # index=${f#./$d}
    # index=${nf%.jpeg}

    output_path=./public/$d$index

    read width height < <(identify -format "%w %h" $f)
    if (( height > width )); then
      # magick $f -gravity center -crop 3744x2496+0+0 +repage -resize 5x5% -quality 10 -blur 0x2 -define webp:method=6 ./public/${nf}_placeholder_v.webp
      magick $f -gravity center -crop 100%x44.44444444%+0+0 +repage -resize 562x374 -quality 60 -define webp:method=6 ${output_path}_preview_v.webp
      echo "vertical image $f"
    else
      echo ""
    fi

    magick $f -resize 5x5% -quality 10 -blur 0x2 -define webp:method=6 ${output_path}_placeholder.webp
    magick $f -resize 15x15% -quality 60 -define webp:method=6 ${output_path}_preview.webp
    magick $f -quality 80 -define webp:method=6 ${output_path}_full.webp

    base64_placeholder=$(base64 -i ${output_path}_placeholder.webp)
    base64_placeholder="data:image/webp;base64,"$base64_placeholder

    echo "\"$base64_placeholder\"," >> placeholders.json

    index=$((index+1))
  done
  echo ], >> placeholders.json
done

echo } >> placeholders.json

prettier -w placeholders.json
