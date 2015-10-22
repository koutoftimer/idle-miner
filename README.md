# API title

* TOC
{:toc}

## API endpoint title

    [VERB] /path/to/endpoint

### Parameters

Name | Type | Description
-----|------|--------------
`name`|`type` | Description.

### Input (request JSON body)

Name | Type | Description
-----|------|--------------
`name`|`type` | Description.

### Response

<%= headers 200, :pagination => default_pagination_rels, 'X-Custom-Header' => "value" %>
<%= json :resource_name %>
