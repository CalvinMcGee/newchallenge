FROM ruby:2.7.4

WORKDIR /app

COPY Gemfile* ./

RUN gem install bundler -v 2.3.26 && \
bundle _2.3.26_ install -j 20
