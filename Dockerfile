FROM ruby

WORKDIR /app

COPY Gemfile* ./

RUN gem install bundler && \
bundle install -j 20
