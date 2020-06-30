
<!--
> This material was originally posted [here](http://www.quora.com/What-is-Amazons-approach-to-product-development-and-product-management). It is reproduced here for posterities sake.

There is an approach called "working backwards" that is widely used at Amazon. They work backwards from the customer, rather than starting with an idea for a product and trying to bolt customers onto it. While working backwards can be applied to any specific product decision, using this approach is especially important when developing new products or features.

For new initiatives a product manager typically starts by writing an internal press release announcing the finished product. The target audience for the press release is the new/updated product's customers, which can be retail customers or internal users of a tool or technology. Internal press releases are centered around the customer problem, how current solutions (internal or external) fail, and how the new product will blow away existing solutions.

If the benefits listed don't sound very interesting or exciting to customers, then perhaps they're not (and shouldn't be built). Instead, the product manager should keep iterating on the press release until they've come up with benefits that actually sound like benefits. Iterating on a press release is a lot less expensive than iterating on the product itself (and quicker!).

If the press release is more than a page and a half, it is probably too long. Keep it simple. 3-4 sentences for most paragraphs. Cut out the fat. Don't make it into a spec. You can accompany the press release with a FAQ that answers all of the other business or execution questions so the press release can stay focused on what the customer gets. My rule of thumb is that if the press release is hard to write, then the product is probably going to suck. Keep working at it until the outline for each paragraph flows.

Oh, and I also like to write press-releases in what I call "Oprah-speak" for mainstream consumer products. Imagine you're sitting on Oprah's couch and have just explained the product to her, and then you listen as she explains it to her audience. That's "Oprah-speak", not "Geek-speak".

Once the project moves into development, the press release can be used as a touchstone; a guiding light. The product team can ask themselves, "Are we building what is in the press release?" If they find they're spending time building things that aren't in the press release (overbuilding), they need to ask themselves why. This keeps product development focused on achieving the customer benefits and not building extraneous stuff that takes longer to build, takes resources to maintain, and doesn't provide real customer benefit (at least not enough to warrant inclusion in the press release).
 -->

# Lift Trace #
 Lift Trace is a simple and intuitive progressive overload tracker to track any lift and give you a goal to hit for every week. You can start by setting your baselines on your lifts, then set goals you want to get to. Every time you've improved your baseline, click on your baseline and it will give you next weeks goal and update your new baseline automatically!

 The complete functionality of this App in it's current state was completed in less than 48 hours, so going forward I will be adding features and redesigning it for moblie.

## In Action ##
<!-- TODO: screen capture functionality and upload gif -->
  ![Alt Text](https://thumbs.gfycat.com/GlitteringEsteemedAmericanmarten-size_restricted.gif)

# User Stories #
  I'm accepting any feedback, but here are my current user stories
## Implemented: ##
- As a user, I want to set a baseline lift weight
- As a user, I want to set goals
- As a user, I want to select between weight units
- As a user, I want to delete baselines
- As a user, I want to delete goals
- As a user, I want to see my next goal
- As a user, I want a simple storage of my current best


## Coming Soon: ##
- As a user, I want to use this as a mobile app
- As a user, I want to adjust my next goal weight
- As a user, I want to adjust my next goal rep count
- As a user, I want to edit my baselines
- As a user, I want to edit my goals
- As a user, I want to display my next goal without changing my current

# Stack #






## Front-End ##
Most Styling was done in under 6 hours, I was more focused on function over styling in my short 48 hour timeframe to build this app.

## Back-End ##
This app has it's own dedicated mySQL server to store your goals and baselines.

## Deployment ##
Currently working on deployment

# Coming Soon #
This repo contains my first release. Here's what I'm working on:

- Better, more modern styling
- Mobile App version for Android/IOS
- Account creation
- Graphical chart of progress

# Get started #

Take the following steps to run the app in your localhost, you will need to have the following:
- MySQL should be running on your machine

Seed database schema in command line or your favorite GUI

```
npm install
npm run server-dev
npm run react-dev
```
