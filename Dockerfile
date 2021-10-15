FROM ruby:2.7.4

WORKDIR /app

COPY Gemfile* ./

RUN gem install bundler && \
bundle install -j 20
