# Homework: Giphy Dashboard

To keep tabs on our collective social pulse, the news company you work for, DigitalCrafts News Newtork (DNN) is asking you to make a Giphy Dashboard with the Top Ten trending GIFs. Create a new standalone React application with `create-react-app` and develop components for the `GifTrend` component.

## Requirements
1. This widget should work well in any size container like a sidebar, so consider using Flexbox to lay out the individual items.
1. Each GIF should be displayed in a Bootstrap Card.

## Strech Goals
1. When you hover an item, you should be able to "Hide" it or "Like" it.
    1. If you "Hide", the GIF should be removed from the list (this doesn't need to be persistent, it can reset when the browser reloads)
    1. If you "Like", display a heart emoji in the Card or over the GIF.

## Tips
1. You'll need to sign up for a free [Giphy Developer Account](https://developers.giphy.com/)
    1. Select `API` when asked if you want `SDK` or `API`.
1. You'll definitely want to review the documentation for the [Trending API Endpoint](https://developers.giphy.com/docs/api/endpoint#trending).