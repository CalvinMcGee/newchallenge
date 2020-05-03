#!/bin/sh

docker build -t newchallenge .

docker run --rm -it \
-v $(pwd):/sources:z \
-p 4000:4000 \
-w "/sources" \
-e INSTAGRAM_CONFIG_URL=https://vziovhnlhi.execute-api.eu-north-1.amazonaws.com/production/instagram \
newchallenge \
bundle exec jekyll serve --config _config.yml,_dev.yml --host 0.0.0.0 --port 4000 -w
