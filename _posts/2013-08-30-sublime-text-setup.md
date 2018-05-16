---
layout: post
title: "Sublime Text Set-up"
date: 2013-08-30 00:00:01 +/-GMT
meta: My personal set-up for Sublime Text 2
summary: My set-up for Sublime Text 2
category: Articles
modified :
modifiedReason:
twitterCard:
---

My personal set-up for [Sublime Text 2](https://www.sublimetext.com "Sublime Text 2"){:rel="external"}.

## Preferences

I have to hot desk a lot and move around. I can't always guarantee I will be on a Mac or PC, so I have stored my preferences on [this Gist](https://gist.github.com/vipickering/6375327){:rel="external"}.

Some explanation around some of these settings.

This line makes the folders in the sidebar bold. Helpful as a visual cue, even if you rely on Cntrl+p most of the time.

{% highlight json %}
  "bold_folder_labels": true,
{% endhighlight %}

I have tried quite a few themes and eventually settled (currently) on the Monokai Extended Theme, it adds support for Markdown which is important to me.

{% highlight json %}
  "color_scheme": "Packages/Monokai Extended/Monokai Extended.tmTheme",
{% endhighlight %}

This line draws horizontal rules and is super helpful for visually checking your code indents are correct.

{% highlight json %}
  "draw_indent_guides": true,
{% endhighlight %}

We don't want to include white space in code if we can help it, so this line helps us see and address those issues.

{% highlight json %}
  "draw_white_space": "selection",
{% endhighlight %}

Andale Mono has been my coding font of choice for many years. It's mono-spaced, easy to read at different sizes and has easy to distinguish characters such as 0 and o.

{% highlight json %}
  "font_face": "Andale Mono",
  "font_size": 14.0,
{% endhighlight %}

Highlights the selected line. Great because you never loose your cursor.

{% highlight json %}
  "highlight_line": true,
{% endhighlight %}

This highlights a tab orange if it has unsaved content on it. A great visual cue if you tend to hop around files a lot and forget to save.

{% highlight json %}
  "highlight_modified_tabs": true,
{% endhighlight %}

I default to a tab size of two spaces. This is because I often have to work in many different coding environments and I want my code to always look well indented. If I used tabs the code can look a mess on another persons machine, depending upon how they have their enviornemnt set up.

{% highlight json %}
  "tab_size": 2,
  "translate_tabs_to_spaces": true,
{% endhighlight %}

If you create an opening bracket, these line automatically add the closing bracket.

{% highlight json %}
  "match_brackets": true,
  "match_brackets_angle": true,
  "match_brackets_braces": true,
  "match_brackets_content": true,
  "match_brackets_square": true,
{% endhighlight %}

I always find it really helpful when I open my code editor in the morning that what I was working on previously is open and ready to go.

{% highlight json %}
  "remember_open_files": true,
  "remember_open_folders": true,
{% endhighlight %}

I like being able to scroll past the end of a file so what I am working on is in the middle of the page, I'm picky like that.
The second line increases the scrolling speed a touch, I am impatient.

{% highlight json %}
  "scroll_past_end": true,
  "scroll_speed": 2,
{% endhighlight %}

To update your user preferences to use the elements you like go to:

{% highlight c %}
  Preferences -> Settings -> User
{% endhighlight %}

and paste the code from the gist. Remember, your user preferences don't override the defaults so you should never break anything.

## My Installed Packages
[Install Package Control](https://packagecontrol.io){:rel="external"}, **then add the following:**

-  [AdvancedNewFile](https://github.com/skuroda/Sublime-AdvancedNewFile){:rel="external"}
-  [All Autocomplete](https://github.com/alienhard/SublimeAllAutocomplete){:rel="external"}
-  [Autoprefixer](https://github.com/sindresorhus/sublime-autoprefixer){:rel="external"}
-  [Emmet](http://docs.emmet.io){:rel="external"}
-  [Gist](https://github.com/condemil/Gist){:rel="external"}
-  [Markdown Preview](https://github.com/revolunet/sublimetext-markdown-preview){:rel="external"}
-  [Monokai Extended theme](https://github.com/jonschlinkert/sublime-monokai-extended){:rel="external"}
-  [Nettuts+ (Fetch)](http://net.tutsplus.com/articles/news/introducing-nettuts-fetch/){:rel="external"}
-  [Sass](https://github.com/mischah/Sublime-Text-2-Settings/tree/master/Sass){:rel="external"}
-  [Sidebar Enhancements](https://github.com/titoBouzout/SideBarEnhancements/tree/st3){:rel="external"}
-  [Sublime Linter](https://github.com/SublimeLinter/SublimeLinter){:rel="external"}
-  [Syntax Highlighting For Sass](https://github.com/P233/Syntax-highlighting-for-Sass){:rel="external"}
-  [CSS Comb](http://csscomb.com){:rel="external"}
-  [Git Gutter](https://github.com/jisaacks/GitGutter){:rel="external"}
-  [Bracket Highlighter](https://github.com/facelessuser/BracketHighlighter){:rel="external"}
-  [Function Name Display](https://github.com/akrabat/SublimeFunctionNameDisplay){:rel="external"}

## Code Short-cut Reminders (OSX)

Search DOM really quickly:

{% highlight c %}
Cntrl+p type "@"
{% endhighlight %}

Go to Line number:

{% highlight c %}
Cntrl+g is a short cut for typing Cntrl+p -> type ":"
{% endhighlight %}

## Code Specific Settings
To set-up a code specific file in sublime open the type of file you want to edit (e.g. for a Stylesheet open a .CSS file) then go to Sublime Text 2 menu:

{% highlight c %}
Preferences -> Settings - More -> Syntax Specific - User
{% endhighlight %}

This will then be the file for the selected syntax ONLY. Otherwise it defaults to your preferences file.

## Markdown Settings

For Markdown and Multi Markdown files I use the following Gists:

-  [Markdown](https://gist.github.com/vipickering/6672778){:rel="external"}
-  [MultiMarkdown](https://gist.github.com/vipickering/6672771){:rel="external"}

## Maintaining Code Consistency

My configuration file for CSS Comb is [here](https://gist.github.com/vipickering/6582514){:rel="external"}. I tend to order my files by most frequently edited properties grouped together near the start and less used near the end. My reasoning for this is that errors are usually spotted very quickly.

## Projects Set-up
Because I can be working on multiple machines with different machine names I don't like to include the project or workspace files in a Git commit, so I exclude them to avoid polluting someone else's set-up.

Projects are super simple to set up there are multiple methods, but my preferred method is to drag the project folder on to the Sublime Text icon in the dock, this should open up the project in the side bar.

I then go to:

{% highlight c %}
Project -> Save Project As..
{% endhighlight %}

Type a name and save the project files in the root of the project.

To switch projects really fast press:

{% highlight c %}
Cntrl+Alt+p
{% endhighlight %}

<p class="updateHighlight"><strong>Updated:</strong> 4th September to include code short-cuts, project information and more process information.<br/><strong>Updated:</strong> 23rd October to include additional packages.</p>



