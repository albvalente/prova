source "https://rubygems.org"

# Usa la stessa gem impiegata da GitHub Pages in produzione:
# garantisce che il sito appaia online esattamente come in locale.
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-relative-links"
end

# Windows e JRuby non includono i file zoneinfo di default.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", install_if: Gem.win_platform?
