---
layout: "post"
title: "Conversation"
date: "2017-10-11 08:00:00 +/-GMT"
meta: "Design is Conversation"
summary: "Thoughts on the Conversation Model by Dr.Paul Pangaro and Hugh Dubberly"
category: "Articles"
modified :
modifiedReason:
twitterCard: true
tags: "thoughts technology process cybernetics"
permalink : /blog/:title
---

{% include shapes/polygon.html %}

<blockquote>
    <p>Man or machine should matter not. Conversational mechanisms are universal.</p>
    <footer>
       <cite><a href="http://vincentp.me">Vincent Pickering</a></cite>
    </footer>
</blockquote>

Design systems exist to facilitate communication between man and machine. Fulfilling this thought to conclusion dictates that good system design must encompass clear concise conversation with one or multiple participants.

Through code, facilitating machines communicating with machines is easily achievable. A designed system will fail when neglecting the human element. Crafting systems that converse with humans clearly and understand feedback received is the primary goal. To achieve this goal we must first analyse how humans speak to each other.

In “[Designing for Conversation](http://pangaro.com/designing-for-conversation.html)” [Dr. Paul Pangaro](http://www.pangaro.com/) and [Hugh Dubberly](http://www.dubberly.com/about) model[^1] human conversation in to the following components:

{% include diagrams/cybernetics-conversation-model.html %}

They model conversation in to five key areas:

#### 1. [Context](#context)
Upon commencing a conversation with another, first the receiver's context must be understood. Calling a friend on the phone during an important meeting would most likely result in the call being ignored. At that current moment in time the conversation isn't relevant to the receiver. Both participants must share the same context for meaningful conversation to take place.

#### 2. [Shared Language](#shared-language)
Conversation participants must both speak the same language.
This not only equates to a spoken language such as English, French or German. Shared language also encompasses the short hand language that develops with individuals through past experiences. Facets such as a shared sense of humour or position on topics are weaved throughout conversation between individuals with a past history. A complete stranger does not bring with them a shared language, they have yet to create it. As history is created between individuals sharing a conversation, the more efficient their conversations will become.

#### 3. [Exchange or Engagement](#exchange-or-engagement)
Both participants in a conversation must engage in an information exchange or be engaged in what the other person is saying in order for the conversation to be meaningful. If one of the participants is dismissive of what is being said or not paying attention, then the conversation quality degrades or ceases completely.

#### 4. [Agreement](#agreement)
A productive conversation ends with both parties agreeing on the focal point of the conversation, even if that point is to agree to disagree. If both parties cannot agree on a shared consensus then the conversation breaks down.

#### 5. [Action or Transaction](#action-or-transaction)
Every conversation should end by participants deciding between them on an agreed action to move the conversation forward. Each party should understand what action is required from them to achieve the conversation goal.

## Context

<blockquote>
    <p>If we don't understand why, where and how. What hope do we have in solving the problem at all?</p>
    <footer>
       <cite><a href="http://vincentp.me">Vincent Pickering</a></cite>
    </footer>
</blockquote>

A system that wholly embraces the context for which it is intended does not stray (<abbr title="The Point Of A System Is What It Does">POSIWID</abbr>) in to areas that are not its primary use case.

When tasked to create a system, there are many factors to take in to account and consider impact.

### Engagement duration

Research the average length an interaction with the system is expected to take. If the interaction will be prolonged, permit the user to save the engagement and return later. Alternatively, break the engagement down in to smaller transactions.

Engagement duration is related to system complexity. The longer an engagement with the system is prolonged, the greater the number of exchanges between the user and system. Therefore as we increase engagement duration hidden system complexity also rises.

Complexity is not only in the interface of the system or language used. Complexity is also a key part in how the user engages your system.

### Imposed Factors

When a user initiates a system exchange it should be always ready. Under rare circumstance when the system is under-going maintenance or has suffered a fatal error, politely direct the user to a time or date they can return.

The system initiating an information exchange is more problematic. Craft the system to be sensitive to the users context. Attempting to request information for an exchange between 00:00 and 07:00 has a high chance that the user is in bed and will not respond. Similarly, push notifications or emails throughout the users day can be overly antagonistic. Better to allow the user to configure their times when they are available and most likely to respond to a transaction.

Try to save instant notifications for important or time critical information, such as:

- A package has been dispatched.
- A system requesting information before a deadline.
- An emergency situation.

### Familiarity

Upon making friends or meeting new people initial conversations will be light. Personal information may be shared if the participants feel at ease with each other such as their name, partners name, or number of children. Most initial conversations with a new person are about understanding if the person is someone you wish to get to know better and establishing common ground to base that relationship.

Keep initial engagements light with the user. Avoid bombarding them with information and allow them to engage with the system at their own pace.

Just as you may become friends with another person through a series of conversations and shared experiences spanning a period of time, endeavour to create a system that builds a relationship with the user that gets stronger the longer they choose to interact with the system. Relationships are earned through trust and respect so your system should follow these principles.

Context is critical in polite conversation. It is considered rude to ask a person how much they weigh or for sensitive information like their bank account details. If the conversation began in a bank speaking to a teller on the other hand, requesting your bank account details is perfectly acceptable. When designing systems only request information that is acceptable given the circumstances the system is operating within.

### Physical

Physical interaction can be a contextual differentiator if that physical type is largely removed from a desktop device. Users can control systems in a variety of ways such as:

1. Voice and Audio.
2. SMS.
3. E-mail.
4. Mechanical interaction (e.g. switches, buttons).
5. Touch screen.
6. Machine readable written document.
7. QR and bar codes.
8. Physical environment (temperature, humidity).
9. Biometric input (fingerprint, retinal scanner, blood type, facial scanner, breathalyser).
10. None Interaction.
11. Spacial movement (motion control, acceleration etc).
12. Spacial placement (location, elevation, coordinates, orientation).
13. Physical dimensions.

Every new method of interacting with the system changes a users context and affects complexity. Take time to understand a typical workflow for the user and embrace their unique factors to select an input type that will yield the highest quality conversation available.

### External Influences

Users may not be able to control external factors while interacting with the system. Research should be undertaken before designing the system to understand the impacting environmental factors.

Such as:
- Slow network connection
- Internet access
- Acceptable environment noise level
- Restricted mobility
- Restricted system access
- Imposed device selection

Environmental factors will rule out certain interaction types, and inform you on limits when selecting other interaction types.

For example, you would be unlikely to attempt a complex discussion while in a loud room with a colleague, it can be difficult to understand the other participant or be heard yourself. Given this scenario you may choose to only communicate key information in short bursts. Saving a more engaged nuanced conversation for a better time. Likewise you would not build a system with voice interaction as the primary input mechanism for a users who spent their time working on a construction site.

## Shared Language

<blockquote>
    <p>Previous interactions with a system, shape the path of future engagements.</p>
    <footer>
       <cite><a href="http://vincentp.me">Vincent Pickering</a></cite>
    </footer>
</blockquote>

Design systems to reduce future conversation time. Learn preferences for repeat questions and information, reducing complexity and the number of exchanges a system requires.

In terms of the shared language of the system itself we must consider the visual language and ensure interactions are consistent throughout. For instance, if a user clicks on a blue underlined word on a website they would expect to link to another page. Any other action which occurs is unexpected and will begin the breakdown in conversation between the user and system. Attempt to construct a system that embraces consistent user responses to input, and in which, responses are easy to digest and unambiguous. How we indicate responses in our system and communicate them to the user effectively should allow the user to understand what has happened and why.

Where systems are concerned it is relatively easy to make them speak the correct native language, but often context within is lost. If supporting a market foreign to your own, extensively research use of colours, patterns , language use, and specific design tropes. Avoid unfamiliar patterns (even if they seem natural to your usual market) and ensure colours and symbols used are familiar to the regions and not offensive.

When a user attains a determined level of maturity in using a system. Offer keyboard short-cuts, common gesture types and other input mechanisms to reduce conversation time. Allow the user to determine when they wish to use short-cuts as they feel more comfortable engaging with the system.

The more the user engages with the system, the more information we can reuse in other scenarios. As a point when inferring user data, always present the information with an option to change or update it, don't assume. The user may not wish to submit previous data in a given scenario, the data could have changed, or the user may simply wish to review and ensure no errors. Let the user remain in charge of their information and facilitate their wishes in a trouble free manner. A good analogy would be to order goods on behalf of a friend without checking where they would like them delivered or at what time. There could be no one available to collect the order or worse still, they could have moved house.

If the system understands the users place of origin or location resided, a more nuanced way to enrich the experience is to offer regional dialect modifications to language in the system. A small change like this can introduce familiar patterns promoting further trust and understanding from the user.

Give the user options, if possible, for 3<sup>rd</sup> party systems to provide additional information about the user to your system. Allow the user to control what is shared, and the degree of privacy they are comfortable with. Use methods of enriching the users experience and reducing information submitted to multiple applications, rather than a cynical marketing data grab. Respect in relationships is two-way. A loss of respect or any abuse in a relationship will result in a breakdown of communication or complete disengagement.

Earn the users trust and keep it. Don't abuse it.

### Etiquette
Digital systems do not understand etiquette. Rules must be created to dictate the time or place it is considered appropriate to ask for sensitive information. At the point the system needs information it also does not grasp the correct manner and language it should use to obtain the information. Rules are needed to mitigate this problem. A misstep in this area can quickly result in a user ending the session and never returning to the system.

If the system requires information that could be deemed sensitive, consider at what point the information should be requested. In general, only ask for the information at the point it is required and reassure the user it wont be saved or used in any other way unless they grant permission.

Use language appropriate to the user and the situation you are dealing with, don't become overly familiar or use slang.

### Clarity
Humans must be clear in their language during conversation, similarly, a designed system must be able to resolve complex messages in to clear, concise, requests and responses. Furthermore, if the system fails in its clarity, the user must be able to request further information or context to the message.

Designed system's should accommodate patterns in dealing with situations when they have gone awry. If a user repeatedly submits bad form data, stating the same error over and over is a hostile method in dealing with a mis-understanding. A more humanistic approach would incorporate a flexible dialogue system that deals in clarity rather than a 1-1 relationship between request and response. People not only repeat statements but re-phrase a response, or place additional emphasis on the key information being communicated to increase clarity. Some scenarios may require more than one form of response, such as example data or imagery to increase the clarity of the system response or request.

### Behaviour
Humans do not react favourably to unexpected behaviour. Complicating the issue further, acceptable behaviour is predicted based on a changing set of contextual circumstances such as:

- Where the conversation takes place.
- When the conversation takes place.
- Whom the conversation is between.
- The amount of shared history between participants.
- The nature of the conversation.

Design systems to be sensitive to factors before producing a response. A system can know who it is addressing and the time and date the conversation is taking place. If the system is a fixed kiosk, or delivered in another restricted medium this will provide further context as to where the transaction is occurring. Finally the system should have access to all the shared history the user has accrued. Use the data available to inform you on how the system should respond appropriately. For example, if a kiosk was in a museum or library, you would not want loud commanding responses booming out from the device, or personal information read aloud. It would cause embarrassment towards the user, resulting in them terminating the transaction. Better to rely upon on-screen prompts to direct their attention.

## Exchange or Engagement

The interface must facilitate a successful exchange between the user and the system, it must also make allowances for the transaction to be paused while the user attends to another task.

To facilitate a successful exchange or engagement with a user embrace these principals.

1. Clear system requests when information is required.
2. The outcome on sent information should be obvious.
3. Requesting information should be trivial in nature.
4. Exchanges must easily be paused.
5. Paused transaction states must clearly display their current status.

## Agreement

Successful transactions result in the user achieving their goal from the system. The system must also retrieve what it needs from the user during this transaction so that it can facilitate the users direction. If both proponents on this transaction get what they need we can consider this 'agreement'.

The system is working correctly when the user is able to interact with the interface and produce an appropriate response to their action or query. Clearly label user feedback, make it prominent and clear, using unambiguous language so that a user is always aware on the state of their transaction.

An agreement state can be achieved when one of the following criteria are met:

1. The outcome response of the action should be clear when concluded.
2. If further conversations are required, it should be easily linked together and scheduled.
3. It should be clear how to end the conversation in negative agreement, such as cancel or delete.

## Action or Transaction

A good interaction with the system should result in the system and user obtaining the information they require to complete the transaction. Ensure outcomes are clearly labelled in the system and provide a way for the user to retrieve successful transactions at a later date.

Productive conversation is a cornerstone in creating a successful system. Once a high level is achieved, interactions become effortless and second nature on behalf of the user. Facilitating conditions to allow the [flow state](https://www.ted.com/talks/mihaly_csikszentmihalyi_on_flow?utm_campaign=tedspread--b&utm_medium=referral&utm_source=tedcomshare) to occur.

### In Summary

- Context is key. Never loose sight of <abbr title="The Point Of A System Is What It Does">POSIWID</abbr>.
- Respect is a two way street.
- Customer data is an earned privilege not a right.
- The system should embrace the user's needs and circumstances to enrich the conversation.
- Follow the key points of the Conversation Model in all transactions that engage with the user.
- The nature of information submitted by a user is related to their external circumstances at that time.
- If you want your system to be loved. It needs to be follow basic human etiquette and earn respect over time.

<div class="f-mono black f7 ttu" data-type="notes"><span>Notes</span></div>
[^1]: Reference: [http://pangaro.com/presents/Pangaro_IXDA_2017_v5_distro.pdf](http://pangaro.com/presents/Pangaro_IXDA_2017_v5_distro.pdf)
