# Yellow Pages Scraper

With [<u>Yellow Pages
Scraper</u>](https://oxylabs.io/products/scraper-api/web/yellow-pages-scraper-api),
you can easily overcome various anti-scraping measures and collect
public data from Yellow Pages on a large scale. See this quick tutorial
to learn how to scrape Yellow Pages using Oxylabs’ Scraper API.

## How it works

To retrieve Yellow Pages results, you simply have to provide the URLs
you want to scrape. Our API will deliver the HTML files of any public
page.

### Python code example

The example below shows how to form a payload, get a response from our
API, and print the JSON output with HTML results:

```python
import requests
from pprint import pprint

# Structure payload.
payload = {
   'source': 'universal',
   'url': 'https://www.yellowpages.ca/bus/Ontario/North-York/The-Burger-Cellar/6835043.html'
}

# Get a response.
response = requests.request(
    'POST',
    'https://realtime.oxylabs.io/v1/queries',
    auth=('USERNAME', 'PASSWORD'), #Your credentials go here
    json=payload,
)

# Instead of a response with job status and results URL, this will return the
# JSON response with results.
pprint(response.json())
```

For me details about other parameters and functionalities, head to the
[<u>documentation</u>](https://developers.oxylabs.io/scraper-apis/web-scraper-api).

### Output sample

```json
{
    "results": [
        {
            "content":"<!doctype html>\n<html lang=\"en\">\n<head>
            ...
            </script></body>\n</html>\n",
            "created_at": "2023-06-12 06:44:07",
            "updated_at": "2023-06-12 06:44:08",
            "page": 1,
            "url": "https://www.yellowpages.ca/bus/Ontario/North-York/The-Burger-Cellar/6835043.html",
            "job_id": "7073912836237308929",
            "status_code": 200
        }
    ]
}
```

Oxylabs’ Yellow Pages Scraper API provides an effortless and scalable
way to gather public data from Yellow Pages. You can extract business
names, phone numbers, addresses, emails, and similar publicly available
details. If you have any questions, please contact us via [<u>live
chat</u>](https://oxylabs.io/) or
[<u>email</u>](mailto:support@oxylabs.io).
