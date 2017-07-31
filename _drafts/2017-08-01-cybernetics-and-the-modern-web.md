---
layout: "post"
title: "Cybernetics And The Modern Web"
date: "2017-08-01 10:00:00 +/-GMT"
meta: "An overview of modern Cybernetics and the web"
summary: "To build great user experiences we must understand how to communicate effectively"
category: "Cybernetics"
---

<blockquote>
    <p>Design in all forms is transaction facilitation</p>
    <footer>
       <cite><a href="http://vincentp.me">Vincent Pickering</a></cite>
    </footer>
</blockquote>

Crafting usable, transparent interfaces for websites and software is forged in the facilitation of a shared dialogue between the user and the system.

To build great user experiences we must understand how to communicate effectively.

Lucky for us, smarter minds have already done the hard work. We only need embrace it and apply to our matters.

## History

Popularised by the American Mathematician and Philosopher Norbert Wiener in 1948, the inter-disciplinary field of Cybernetics[^1] defines itself as: ***“The study of systems, such as mechanical, physical, biological, cognitive, and social systems”***.

## The Information River

Cyberneticians view the world through the flow of information, communication channels and its organisation.

Generally it is applied when the system incorporates a closed signalling loop. In essence, where action by the system generates some change in its environment, resulting in a change to the system in some manner, triggering a system change. This is sometimes referred to as a "circular causal" relationship.

Cybernetics is only concerned with modelling the systems. It does not care about “how” or “why” (that is left to the field of User Experience Design where we are concerned).

Norbert Wiener focused on the relationship between message and response as a key element of Cybernetics, whether in humans or machines:

<blockquote>
    <p>When I communicate with another person, I impart a message to him, and when he communicates back with me he returns a related message which contains information primarily accessible to him and not to me… </p>
    <p>When I give an order to a machine, the situation is not essentially different from that which arises when I give an order to a person.</p>
    <p>In other words, as far as my consciousness goes I am aware of the order that has gone out and of the signal of compliance that has come back.</p>
    <p>To me personally, the fact that the signal in its intermediate stages has gone through a machine rather than through a person is irrelevant and does not in any case greatly change my relation to the signal.</p>
    <p>Thus the theory of control in engineering, whether human or animal or mechanical, is a chapter in the theory of messages.</p>
    <footer>
       <cite><a href="https://en.wikipedia.org/wiki/Norbert_Wiener">Taken from “The Human Use of Human Beings: Cybernetics and Society” - By Norbert Wiener</a></cite>
    </footer>
</blockquote>

Such an overarching field as Cybernetics encompasses many areas. Primarily, in our field of designing usable systems, we are most concerned with the modelling of messaging, understanding the flow of information and control theory.

**INSERT THERMOSTAT DIAGRAM HERE **

The most basic example of a circular causal relationship is a thermostat. The thermostat has one purpose; to maintain its temperature at a pre-determined setting. When an external influence alters the temperature of the room the thermostat will either turn on and increase the temperature or turn off to reduce the temperature until it's predetermined setting is achieved.

The result after output from the controlling system is fed back into the controller, informing its next action. This behaviour endlessly loops checking if the thermostat value is not correct and applying its logic in an inversely proportional manner to readdress the balance.

**INSERT FORM DIAGRAM HERE **

A close analogy from a web point of view is a web form. The form will endlessly default to false, looping back to update the UI states, until the criteria is met. Once met, the system signal success and returns to its original state.

This basic behaviour is called a “closed signalling loop” and is the foundation for [Control Theory](https://en.wikipedia.org/wiki/Control_theory).

### Requisite Variety

<blockquote>
    <p>Variety is a concept inseparable from that of ‘information’.</p>
    <footer>
        <cite><a href="https://firstlaw.wordpress.com/2011/10/18/ashbys-law/">William Ross Ashby</a></cite>
    </footer>
</blockquote>

Cyberneticians consider variety as an alternative way to think about information. Variety describes the number of potential states a system can take. If all possible states in a system are known, complete knowledge of its behaviour is secured.

Uncertainty occurs when all possible states are not known. The term “Requisite Variety” is used in Cybernetics which means “Required Information”. When this term is used it implies there is a required amount of quantifiable information necessary for a task.

<blockquote>
    <p>If a system is to be stable, the number of states of its control mechanism must be greater than or equal to the number of states in the system being controlled.</p>
    <footer>
        <cite><a href="https://en.wikipedia.org/wiki/W._Ross_Ashby">William Ross Ashby</a></cite>
    </footer>
</blockquote>

This is known as “The Law Of Requisite Variety” or “Ashby’s Law”. It is considered “The First Law Of Cybernetics”.

Ashby’s Law implies that the degree of control over a system is proportional to the amount of information available. You cannot control what you do not understand and the control you exert over a system must compensate for all output the system can attain.

Consider projects you have worked upon "go live" only later to discover:

- Dead end user flows.
- States with unstyled components.
- Logic with undetermined outcomes.
- Duplication in user patterns with differing outcomes (e.g. resetting passwords, or creating accounts by multiple different methods).

The team building these projects were not in control of their system nor did they understand the outcomes it could produce.

When complete control of the system is not secured; exerting control and modifying behaviour (such as modified states of components or outputs) will produce unknown-able outcomes.

Component libraries, user flows and team communication provide information we need to assert a measure of control over the systems we create, but they are not the whole picture. In a later post I will explore this in greater depth.

### Viable System Model

**INSERT VSM DIAGRAM HERE **

Stafford Beer.

A typical flow may be achronistic to a typical monolith architecture, where by the Viable System Model is closer to microservices architecture.

A viable system is any system organised in such a way as to meet the demands of surviving in the changing environment. One of the prime features of systems that survive is that they are adaptable

### In Summary

- Consider the flow of information through your site or application.
- The user/machine dialogue is a shared experience and should be no different to communicating with another human.
- Our system should adapt to prevent failure.
- You cannot control what you do not understand.
- Understand Variety in your application.

Cybernetics is a vast topic. I have tried to touch on a few key points to demonstrate cross-pollination and shared goals. In further articles, we will investigate the topic in greater depth.

[^1]: [Cybernetics](https://en.wikipedia.org/wiki/Cybernetics) pre dates the internet, terminators, cyborgs or anything like that. It is from the Greek word kybernētēs which means "steersman".
