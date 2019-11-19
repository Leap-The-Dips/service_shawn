#API Endpoints


CRUD -


Create
  POST Request:
  URL: http://localhost:3002/description?prod_id=1001

  Resulting data:
  [
    {
        "_id": "5dd3676912ca0efc49a4133a",
        "item_number": 1001,
        "__v": 0
    },
    {
        "_id": "5dd3676912ca0efc49a4133c",
        "item_number": 1001,
        "__v": 0
    }
  ]

Read
  GET Request:
  URL: http://localhost:3002/description?prod_id=1

  Resulting data:
  [
    {
        "seller_msg": {
            "prod_des": "This 24 talking re-creation of the best Wookie ever will blow your mind even though he has a tiny face. Almost the same size of a small child, you will spend hours cuddling with him and pressing his belly to make him growl. Exciting gift or addition to your Star Wars collection. His spoken phrase is the trademark Wookie Growl. Chewbacca is the perfect gift for any fan who's ever wanted a furry co-pilot of their own. Add this furry 24 inch Chewie to your collection today. Recommended for ages 3+.",
            "item_des": "Star Wars 24 inch Talking Plush - Chewbacca",
            "img_url": "https://rpt16quarks.s3-us-west-2.amazonaws.com/chewy.jpg"
        },
      ...
  ]

Update
  PUT Request:
  URL: http://localhost:3002/description?prod_id=1

  Resulting data:
  [
    {
        "seller_msg": {
            "prod_des": "updated"
        },
    ...
  ]

Delete
  DELETE Request:
  URL: http://localhost:3002/description?prod_id=3

  Resulting data:
  [
    null,
    null
  ]