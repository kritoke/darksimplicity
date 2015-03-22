# Dark Simplicity

Dark Simplicity is a minimalist oriented theme with a dark color scheme for [Hugo](http://gohugo.io/).  

## Supports the following built-in functions from Hugo:

* Menus, either add menu = "top" in the page parameters or add the proper parameters for each menu entry in your config.toml.
* Pagination for posts type.
* Taxonomy in the form of tags.

## Supports the following parameters:
* copyright, it supports safeHtml, so you can use HTML without problems.  Defaults to &copy; CurrentYear. All rights reserved.
* description, puts a tagline like this: |sample tag line
* google_analytics_id, put your google analytics id if you use it.
* disqus_shortname, put your shortname for your disqus account if you use it.

## Notable Features
* Utilizes Sass and Susy for Generating the CSS and Grid. Includes the original SASS files so you can make modifications using the variables for easily changing colors used.
* Uses some Google fonts.
* Minimalist look and feel.
* Supports Google Analytics.
* Supports Disqus Comments.

Example Configuration (config.toml):

contentdir = "content"
layoutdir = "layouts"
publishdir = "public"
builddrafts = false
canonifyurls = true
baseurl=""
theme="darksimplicity"
title="Dark Simplicity"
author="administrator"
languageCode = "en-us"

[taxonomies]
  tag = "tags"

[params]
  description = "A Dark Minimalist Theme Built Using Sass/Susy for Hugo."
  copyright="&copy; 2015 Matt Rhone. All rights reserved."
  google_analytics_id="XX-XXXXXXXX-X"
  disqus_shortname="sitename"

[[menu.top]]
  name = "About"
  pre = ""
  weight = -110
  identifier = "about"
  url = "/about/"
[[menu.top]]
  name = "Twitter"
  pre = ""
  weight = -100
  url = "http://www.twitter.com/Username"
[[menu.top]]
  name = "RSS"
  pre = ""
  weight = -90
  url = "index.xml"
