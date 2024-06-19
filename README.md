# GROIW Plugin QuickChart

This is a GROWI scirpt plugin to generate chart/graph by [QuickChart](https://quickchart.io/).

![image](https://github.com/goofmint/growi-plugin-quickchart/assets/5709/c8657985-6757-41d8-96e8-fae357c1f95c)


## Usage

If you want to show the chart/graph on the page, using `quickchart` on code block.

Almost parameters depend on QuickChart API. Please refer to [QuickChart API](https://quickchart.io/documentation/).

And you should set `url` parameter to `https://quickchart.io/chart`.

````markdown
```quickchart
{
  "type": "bar",
  "data": {
    "labels": ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    "datasets": [{
      "label": "# of Votes",
      "data": [12, 19, 3, 5, 2, 3],
      "backgroundColor": ["red", "blue", "yellow", "green", "purple", "orange"]
    }]
  }
}
```
````

### Optional parameters

If you want to use your quickchart server, you can set `url` parameter to your server. The default value is `https://quickchart.io/chart`.

````markdown
```quickchart
{
  "url": "https://your-quickchart-server/chart",
  "type": "bar",
  "data": {
    "labels": ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    "datasets": [{
      "label": "# of Votes",
      "data": [12, 19, 3, 5, 2, 3],
      "backgroundColor": ["red", "blue", "yellow", "green", "purple", "orange"]
    }]
  }
}
```
````

And you alse set `width` and `height` parameters to change the size of the chart/graph. The default value is `100%` and `auto`.

````markdown
```quickchart
{
  "url": "https://your-quickchart-server/chart",
  "width": "500",
  "height": "300",
  "type": "bar",
  "data": {
    "labels": ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    "datasets": [{
      "label": "# of Votes",
      "data": [12, 19, 3, 5, 2, 3],
      "backgroundColor": ["red", "blue", "yellow", "green", "purple", "orange"]
    }]
  }
}
```
````

## License

MIT

