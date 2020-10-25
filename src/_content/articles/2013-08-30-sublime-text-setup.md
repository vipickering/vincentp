---
title: "Sublime Text Set-up"
date: "2013-08-30T00:00:01"
meta:  "My personal set-up for Sublime Text 2"
summary: "My set-up for Sublime Text 2"
permalink: "/blog/sublime-text-set-up/"
tags:
- process
- technology
- tools
- html
---
My personal set-up for [Sublime Text 2](https://www.sublimetext.com "Sublime Text 2").

## Preferences

I have to hot desk a lot and move around. I can't always guarantee I will be on a Mac or PC, so I have stored my preferences on [this Gist](https://gist.github.com/vipickering/6375327).

Some explanation around some of these settings.

This line makes the folders in the sidebar bold. Helpful as a visual cue, even if you rely on Cntrl+p most of the time.

{% highlight yaml %}
  "bold_folder_labels": true,
{% endhighlight %}

I have tried quite a few themes and eventually settled (currently) on the Monokai Extended Theme, it adds support for Markdown which is important to me.

{% highlight yaml %}
  "color_scheme": "Packages/Monokai Extended/Monokai Extended.tmTheme",
{% endhighlight %}

This line draws horizontal rules and is super helpful for visually checking your code indents are correct.

{% highlight yaml %}
  "draw_indent_guides": true,
{% endhighlight %}

We don't want to include white space in code if we can help it, so this line helps us see and address those issues.

{% highlight yaml %}
  "draw_white_space": "selection",
{% endhighlight %}

Andale Mono has been my coding font of choice for many years. It's mono-spaced, easy to read at different sizes and has easy to distinguish characters such as 0 and o.

{% highlight yaml %}
  "font_face": "Andale Mono",
  "font_size": 14.0,
{% endhighlight %}

Highlights the selected line. Great because you never loose your cursor.

{% highlight yaml %}
  "highlight_line": true,
{% endhighlight %}

This highlights a tab orange if it has unsaved content on it. A great visual cue if you tend to hop around files a lot and forget to save.

{% highlight yaml %}
  "highlight_modified_tabs": true,
{% endhighlight %}

I default to a tab size of two spaces. This is because I often have to work in many different coding environments and I want my code to always look well indented. If I used tabs the code can look a mess on another persons machine, depending upon how they have their enviornemnt set up.

{% highlight yaml %}
  "tab_size": 2,
  "translate_tabs_to_spaces": true,
{% endhighlight %}

If you create an opening bracket, these line automatically add the closing bracket.

{% highlight yaml %}
  "match_brackets": true,
  "match_brackets_angle": true,
  "match_brackets_braces": true,
  "match_brackets_content": true,
  "match_brackets_square": true,
{% endhighlight %}

I always find it really helpful when I open my code editor in the morning that what I was working on previously is open and ready to go.

{% highlight yaml %}
  "remember_open_files": true,
  "remember_open_folders": true,
{% endhighlight %}

I like being able to scroll past the end of a file so what I am working on is in the middle of the page, I'm picky like that.
The second line increases the scrolling speed a touch, I am impatient.

{% highlight yaml %}
  "scroll_past_end": true,
  "scroll_speed": 2,
{% endhighlight %}

To update your user preferences to use the elements you like go to:

{% highlight yaml %}
  Preferences -> Settings -> User
{% endhighlight %}

and paste the code from the gist. Remember, your user preferences don't override the defaults so you should never break anything.

## My Installed Packages
[Install Package Control](https://packagecontrol.io), **then add the following:**

-  [AdvancedNewFile](https://github.com/skuroda/Sublime-AdvancedNewFile)
-  [All Autocomplete](https://github.com/alienhard/SublimeAllAutocomplete)
-  [Autoprefixer](https://github.com/sindresorhus/sublime-autoprefixer)
-  [Emmet](https://docs.emmet.io)
-  [Gist](https://github.com/condemil/Gist)
-  [Markdown Preview](https://github.com/revolunet/sublimetext-markdown-preview)
-  [Monokai Extended theme](https://github.com/jonschlinkert/sublime-monokai-extended)
-  [Nettuts+ (Fetch)](https://net.tutsplus.com/articles/news/introducing-nettuts-fetch/)
-  [Sass](https://github.com/mischah/Sublime-Text-2-Settings/tree/master/Sass)
-  [Sidebar Enhancements](https://github.com/titoBouzout/SideBarEnhancements/tree/st3)
-  [Sublime Linter](https://github.com/SublimeLinter/SublimeLinter)
-  [Syntax Highlighting For Sass](https://github.com/P233/Syntax-highlighting-for-Sass)
-  [CSS Comb](https://csscomb.com)
-  [Git Gutter](https://github.com/jisaacks/GitGutter)
-  [Bracket Highlighter](https://github.com/facelessuser/BracketHighlighter)
-  [Function Name Display](https://github.com/akrabat/SublimeFunctionNameDisplay)

## Code Short-cut Reminders (OSX)

Search DOM really quickly: <code>Cntrl+p type "@"</code>

Go to Line number: <code>Cntrl+g is a short cut for typing Cntrl+p -> type ":"</code>


## Code Specific Settings
To set-up a code specific file in sublime open the type of file you want to edit (e.g. for a Stylesheet open a .CSS file) then go to Sublime Text 2 menu: <code>Preferences -> Settings - More -> Syntax Specific - User</code>

This will then be the file for the selected syntax ONLY. Otherwise it defaults to your preferences file.

## Markdown Settings

For Markdown and Multi Markdown files I use the following Gists:

-  [Markdown](https://gist.github.com/vipickering/6672778)
-  [MultiMarkdown](https://gist.github.com/vipickering/6672771)

## Maintaining Code Consistency

My configuration file for CSS Comb is [here](https://gist.github.com/vipickering/6582514). I tend to order my files by most frequently edited properties grouped together near the start and less used near the end. My reasoning for this is that errors are usually spotted very quickly.

## Projects Set-up
Because I can be working on multiple machines with different machine names I don't like to include the project or workspace files in a Git commit, so I exclude them to avoid polluting someone else's set-up.

Projects are super simple to set up there are multiple methods, but my preferred method is to drag the project folder on to the Sublime Text icon in the dock, this should open up the project in the side bar.

I then go to: <code>Project -> Save Project As..</code>

Type a name and save the project files in the root of the project.

To switch projects really fast press: <code>Cntrl+Alt+p</code>

<p class="updateHighlight"><strong>Updated:</strong> 4th September to include code short-cuts, project information and more process information.<br/><strong>Updated:</strong> 23rd October to include additional packages.</p>
