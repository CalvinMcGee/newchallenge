#!/bin/sh

docker build -t newchallenge .

docker run -it -v $(pwd):/sources:z -p 4000:4000 -w "/sources" newchallenge \
bundle exec jekyll serve --config _config.yml,_dev.yml --host 0.0.0.0 --port 4000 -w
