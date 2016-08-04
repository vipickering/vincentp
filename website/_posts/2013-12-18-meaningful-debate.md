---
layout: post
title: "Meaningful Debate"
date: 2013-12-18
meta: Thoughts on how to make conferences better and how to begin to have meaningful debate.
---

Recently I read the article [Reinventing The Tech Conference Experience](http://coding.smashingmagazine.com/2013/11/20/reinventing-the-tech-conference-experience/) on Smashing Magazine, and it felt like a classic case of mis-diagnosing a problem.

***Have you ever been to the doctor convinced you had a problem in one part of your body only to be told it is actually originating somewhere else?***

The original article posited the statement that frequently conference participants are unhappy with the event they attended citing:

>  “&hellip;The content or the interaction<br/>could have been better in some way”.

In order to solve this problem the author (Wesley Hales) has created some open source software called [Onslyde](http://onslyde.com/) which allows you to vote in real time as the speaker addresses the audience. Let me be clear, I wholeheartedly appreciate this effort, in-fact my hope, is that my response to this conversation will help re-inform the software perhaps in a direction I haven't considered, or spark more debate and inspire others to tackle this issue in a unique way. The conversation has just begun and we have a lot to talk about.

My rebuttal has a simple premise, I don't believe real-time sentiment tracking is the right way forward, but in order to frame my analysis to the original problem posed by Wesley first we need to to apply some design thinking to what is happening when a speaker is on stage addressing the audience.

Consider the question:

**Does the problem as stated represent the problem we should observe?**

When a speaker addresses the audience, they are starting a 1 to many conversation, so in order to diagnose the problem let's first understand how a conversation works and at what points it breaks down.

There has been a great deal of research done on the conversation model, in particular [Dr Paul Pangaro](http://interactiondesign.sva.edu/people/faculty/paul-pangaro-phd/) has done a [large amount of work](http://vimeo.com/43677920) in this area, de-constructing the effective conversation model in to it's constituent components so that we can understand and write software to have meaningful conversation.

Dr Paul Pangaro uses the acronym **C-L-E-A-T** which is broken down in to these parts:

1.  Context
2.  Shared Language
3.  Exchange or Engagement
4.  Agreement
5.  Action or Transaction

Let's just recap over those:

## Context
When you strike up a conversation you need to understand the receiver's context. If your friend was in a meeting, and you gave them a call they would probably not pick up, because at this precise point in time your conversation isn't applicable to them. Both participants need to share the same context for a meaningful conversation to take place.

## Shared Language
Conversation participants need to both speak the same language. This doesn't just equate to a spoken language like English, French or German, but is also related to the way you think about the world. For example, when you send a message or speak with a friend you already infer some context because you understand their sense of humour or position on the topic to be discussed before beginning the conversation, a complete stranger does not bring with them this shared language so you have to establish a baseline.

## Exchange or Engagement
You have to have an exchange or be engaged in what the other person is saying in order for the conversation to be meaningful. If one of the participants is dismissive of what is being said, or not paying attention then the conversation quality degrades.

## Agreement
A productive conversation ends with you agreeing on something, even if that point is to agree to disagree.

## Action or Transaction
The conversation should end by deciding between the participants on an agreed action.

## Sorry I'm Not That Sentimental

When we break down the 1 to many conversation a speaker initiates like this we can quickly identify that the speaker and the audience share context, but when attendees cite:

>  “&hellip;The content or the interaction<br/>could have been better in some way”.

The conversation has broken down because they do not have a shared language. It is true that we would expect the speaker and audience to share some common language, but it's often the case at speaking events with people from many disciplines not to share the same ability level on a given topic, the larger the audience the greater this is to occur, thus some of the audience immediately feel a disconnect and cannot re-engage with some talks.

While discussing this subject, it seems reasonable to conclude that this is why popular web celebrities are often better received at speaking events. Many of the audience participants are already familiar with "where they are coming from", they have read the speaker's blog, perhaps seen them on web videos or heard them on podcasts. When you attend a conference with this prior knowledge of a speaker you bring your frame of reference with you to the talk.

In this environment the popular speaker has far less work to do in establishing a shared language, hence the audience reaction that it was a more "quality engagement" and the event co-ordinators belief that the celebrity is a "bankable" speaker worth hiring in future. This starts to become a self perpetuating loop that's hard to break which actively dismisses a section of people who may have other valid topics to raise and put forward but rarely get the chance because they are less likely to draw the crowds.

My issue with sentiment tracking is that it has no understanding of the context of a person's response to the question, and no way to frame the question's asked by the speaker that will be received and understood by the audience.

Sentiment tracking responses are boiled down to binary choices. These binary choices are made by the speaker as they construct their talk, so by this very nature they are unintentionally directing the conversation down chosen areas and routes. In essence, they are rounding off the corners and controlling the audience responses so they can reduce the chance of a negative reaction.

This is reducing the quality of the conversation to be had and alienating those who don't respond with the majority. History is littered with great minds that have disagreed on a commonly held belief at the time and been ousted by their peers only to have their opinion gain favour long after death.

If we are to truly have great speaking events, then we should never be openly dismissing others opinions without fair debate first. We should be working hard to establish a great conversation with our peers and find common ground on which to build on. Not boiling down responses to binary options and alienating those who disagree.

## How Do We Make Conferences Great?

So now we have a better understanding of what is happening when we stand and speak in-front of a crowd who can we actually improve the experience?

## Interference On The Line

One of the key reasons why audience members can feel disconnected lands at the feet of the event organisers. It has become quite common these days for events to feature a wide range of speakers from several disciplines. The economic theory behind this is sound. If you cover various topics at your event then you can attract the widest audience, but when I see these events I often question to myself.

>  "Who is this event actually for?"

This often equates to something like: 1 mobile designer, 2 JavaScript gurus, 1 CSS expert, a wireframing advocate and a keynote by someone in an alternative field.

In the last few years, the industry on the web has changed dramatically. When I began as a "Web Designer" in 1999, I was simply expected to "do it all" Design, Typography, Wireframing, HTML, CSS, JS and PHP. These languages have expanded and the understanding within them that most people consider these disciplines completely separate, in fact many of the younger people working on web technologies simply don't know some of these languages or disciplines at all. Every day I hear a new job title, that describes this language and that "thing" but not that other "thing" you might think it does.

If our job landscape is expanding rapidly to such a degree why are we holding conferences where the participants will not be engaged, interested or able to share the same language as the speaker, how can we hope to get meaningful conversation as a result?

Surely it would be better to ensure when creating a conference that it is for a particular goal within a profession or language type?

Selecting a group of speakers around a shared set of problems to solve, will encourage like minded attendees, this massively reduces the issues around a shared language vocabulary, it promotes great thinking in a particular field and focuses the debate on real issues to solve. We can achieve a lot in a short space of time by saying very little. But when we talk about everything at once the problems are too vast and we end up saying nothing at all.

## Not Every Problem Is A Square Peg

The second problem I have identified is the ordinary speaker format. When a speaker gives a talk on a particular viewpoint it is nearly always a fixed time slot of an hour. This works neatly in to a schedule and package to sell to the public, but not every point needs an hour to be raised and framed. It's been my observation over the years that when brief points are raised, at smaller speaker events, say under 30 minutes, that the audience is far quicker to offer opinion and strike up a conversation after the event than an hour long talk. I think this stems from the amount of information needed to digest and form a cohesive response. When information is fed to us in bite sized portions we are able to process it quicker and draw conclusions based on our existing knowledge. It seems imposing such a long period of time causes the speaker not to focus in on the key issues that are important to their point and as a result introduces many ideas in the talk duration where audience members can get lost or fall behind the discussion.

Rapid prototyping has become the standard way to try out ideas and test ideas. It yields positive and negative feedback quickly and in a manageable fashion encouraging all parties to work for the same goal. You might not realise it, but when you engage in rapid prototyping with a client you are actually establishing a conversation with them that follows the **C-L-E-A-T** metaphor, you're having a meaningful conversation.

Smaller bite-sized tasks follow the same principle, get smaller ideas out there and get feedback quicker. Smaller ideas can be easily shaped and expanded in to much greater theories and solutions as more people join the discussion.

## One Talk Is Not A Debate

Following on from the thought that 1 hour long talks are not always the most constructive way to begin a discussion, we also need to consider that many discussions need to be had to arrive at a satisfactory conclusion. Layers of conversation are how humans come to accept things in the world, it's our model for sharing knowledge and agreeing on things, weeding out the bad ideas and seeing what's left standing.

If we want to have meaningful conferences I think we need to:

-  Reduce the number of people involved in the conversation at one time.
-  Ensure those involved understand the context and language of the conversation.
-  Re-consider the length of speaking time versus the issue being raised.
-  Encourage audience participation.
-  Give the speaking day a common goal or theme.

Considering these rules let's begin to discuss original ideas for a different speaking format that could change the way we discuss our industry.

Instead of numerous speakers on a day how about only having two speakers? One in the morning, the other in the afternoon.

The format would involve the speaker giving a talk under 30 minutes on the issue to be discussed that morning. After the talk, participants are split in groups and discuss the issue raised, forming their own group opinion. In the afternoon, the second topic is started.

The point of doing this is to:

1. Try and ensure context by having a singular topic, so those attending will be familiar with the chosen field.
2. Decrease the number of people having a discussion at one time so it becomes quicker to establish quality conversation and reach a conclusion.
3. Rapidly exploring multiple avenues in a brief space of time.

By having many small debates at once, we are generating many outcomes to a problem to test while reducing the problems around the audience loosing context or understanding the shared language.

After the groups opinions are formed, a speaker is elected from each to put forward their group's opinion. Once all the groups opinions have been heard, they will inevitably spark further debate where the attendees can return to their groups and discuss it further and try things out.

The findings of the day can be shared with the wider community online and further discussion or speaking events can be held to continue the debate.

It's time we re-evaluated the current conference scene and began to consider additional formats, let's kick off this conversation and find a more meaningful way of communicating together.
