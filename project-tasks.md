# Instruction

- Please submit your code by sharing your Github Public Repo link
- All git commits should have proper commit message.
- Please use README file for screenshot of your running code where your system date-time need to be captured.

# Task 1

Using React create a dummy Facebook home page with the following functionalities:  
- [x] Listing of posts  
- [x] Actions on each post  
  - [x] like,  
  - [x] comment,  
  - [x] share  
  - [x] (Extra) add new post
- [x] Each post should have comments  
- [x] Online users list  
- [x] Current user name and profile icon  
- [x] Header with 
  - [x] search, 
  - [x] profile, 
  - [x] messages, 
  - [x] notifications, etc...  
- [x] Implement a dummy API call that will return the list of posts that can be used to render in the UI.  
- [x] Responsive design

You can follow the below JSON structure for the API response and modify it accordingly.

```json
{
  "user": {
    "username": "joe-adam",
    "name": "Joe Adam",
    "profile_picture": ""
  },
  "posts": [
    {
      "id": "8402678390264947303",
      "user": {
        "username": "adam",
        "name": "Adam",
        "profile_picture": ""
      },
      "posted_on": "1617220982",
      "likes": 10,
      "liked": true,
      "comments": [
        {
          "text": "Hello!",
          "created_at": "1617220982",
          "user": {
            "username": "adam",
            "name": "Adam",
            "profile_picture": ""
          }
        }
      ]
    }
  ]
}
```

# Task 2

Using React create a dummy Instagram home page.
Functionalities required:
- [x] Listing of posts
- [ ] Actions on each post  
  - [ ] like,  
  - [ ] comment,  
  - [ ] share  
  - [ ] save  
- [x] Each post should have comments
- [x] Stories list
- [x] Current user name and profile icon
- [x] Header with 
  - [x] search, 
  - [x] messages, 
  - [x] profile, and more.
- [x] Implement a dummy API call that will return the list of posts that can be used to render posts in the UI.  
- [ ] Responsive design
  `

You can use the below JSON as a reference for the API response, add more fields to the JSON if required.

```json
{
  "meta": {
    "code": 200
  },
  "data": [
    {
      "attribution": null,
      "tags": [],
      "type": "image",
      "location": null,
      "filter": "Normal",
      "created_time": "1440501087",
      "link": "https://instagram.com/p/6zeBG2H1oH/",
      "images": {
        "low_resolution": {
          "url": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s320x320/e15/11906267_1671515619746683_1237948463_n.jpg",
          "width": 320,
          "height": 320
        },
        "thumbnail": {
          "url": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s150x150/e15/11906267_1671515619746683_1237948463_n.jpg",
          "width": 150,
          "height": 150
        },
        "standard_resolution": {
          "url": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11906267_1671515619746683_1237948463_n.jpg",
          "width": 640,
          "height": 640
        }
      },
      "users_in_photo": [],
      "caption": {
        "created_time": "1440501087",
        "text": "Logon this is the logo of PRDP, matlab Prem Ratan Dhan Payo. Coming this Diwali",
        "from": {
          "username": "beingsalmankhan",
          "profile_picture": "https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xta1/t51.2885-19/10810066_708040225931789_33645907_a.jpg",
          "id": "1547627005",
          "full_name": "Salman Khan"
        },
        "id": "1059322357729942165"
      },
      "user_has_liked": false,
      "id": "1059322354827483655_1547627005",
      "user": {
        "username": "beingsalmankhan",
        "profile_picture": "https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xta1/t51.2885-19/10810066_708040225931789_33645907_a.jpg",
        "id": "1547627005",
        "full_name": "Salman Khan"
      }
    },
    {
      "attribution": null,
      "tags": [],
      "type": "image",
      "location": null,
      "filter": "Normal",
      "created_time": "1440499397",
      "link": "https://instagram.com/p/6zay6yBWhr/",
      "images": {
        "low_resolution": {
          "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e15/11950690_308991979224936_345640148_n.jpg",
          "width": 320,
          "height": 320
        },
        "thumbnail": {
          "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11950690_308991979224936_345640148_n.jpg",
          "width": 150,
          "height": 150
        },
        "standard_resolution": {
          "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11950690_308991979224936_345640148_n.jpg",
          "width": 640,
          "height": 640
        }
      },
      "users_in_photo": [],
      "caption": {
        "created_time": "1440499397",
        "text": "Novitec Rosso\nfollow @Cars @Cars @Cars @Cars | Photographer @cars.of.munich |",
        "from": {
          "username": "carinstagram",
          "profile_picture": "https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/11375185_1623356661262376_878819060_a.jpg",
          "id": "23275345",
          "full_name": "Kik:SoLeimanRT"
        },
        "id": "1059308188572412119"
      },
      "user_has_liked": false,
      "id": "1059308185661565035_23275345",
      "user": {
        "username": "carinstagram",
        "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/profile_23275345_75sq_1381623938.jpg",
        "id": "23275345",
        "full_name": "Kik:SoLeimanRT"
      }
    },
    {
      "attribution": null,
      "tags": ["thehuntingpartytour"],
      "type": "image",
      "location": null,
      "filter": "Normal",
      "created_time": "1440501526",
      "link": "https://instagram.com/p/6ze2yyi4eV/",
      "images": {
        "low_resolution": {
          "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e15/11909202_461512274021020_2138194013_n.jpg",
          "width": 320,
          "height": 320
        },
        "thumbnail": {
          "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11909202_461512274021020_2138194013_n.jpg",
          "width": 150,
          "height": 150
        },
        "standard_resolution": {
          "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11909202_461512274021020_2138194013_n.jpg",
          "width": 640,
          "height": 640
        }
      },
      "users_in_photo": [],
      "caption": {
        "created_time": "1440501526",
        "text": "Before / After - Rybnik tonight. #TheHuntingPartyTour",
        "from": {
          "username": "linkinpark",
          "profile_picture": "https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-19/11008267_1563640687237549_939346370_a.jpg",
          "id": "4890736",
          "full_name": "LINKIN PARK"
        },
        "id": "1059326047021663524"
      },
      "user_has_liked": false,
      "id": "1059326044144371605_4890736",
      "user": {
        "username": "linkinpark",
        "profile_picture": "https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-19/11008267_1563640687237549_939346370_a.jpg",
        "id": "4890736",
        "full_name": "LINKIN PARK"
      }
    },
    {
      "attribution": null,
      "tags": ["marmaris", "turkey", "dhotel"],
      "type": "image",
      "location": null,
      "filter": "Juno",
      "created_time": "1440495224",
      "link": "https://instagram.com/p/6zS1b4OLoe/",
      "images": {
        "low_resolution": {
          "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e15/11875537_123827731297227_268751140_n.jpg",
          "width": 320,
          "height": 320
        },
        "thumbnail": {
          "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11875537_123827731297227_268751140_n.jpg",
          "width": 150,
          "height": 150
        },
        "standard_resolution": {
          "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11875537_123827731297227_268751140_n.jpg",
          "width": 640,
          "height": 640
        }
      },
      "users_in_photo": [],
      "caption": {
        "created_time": "1440495224",
        "text": "#marmaris #dhotel #Turkey",
        "from": {
          "username": "sert_mehmet",
          "profile_picture": "https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/t51.2885-19/11032891_610949965673163_728033182_a.jpg",
          "id": "7563629",
          "full_name": "Mehmet Se®t"
        },
        "id": "1059274169221954465"
      },
      "user_has_liked": false,
      "id": "1059273174265936414_7563629",
      "user": {
        "username": "sert_mehmet",
        "profile_picture": "https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/t51.2885-19/11032891_610949965673163_728033182_a.jpg",
        "id": "7563629",
        "full_name": "Mehmet Se®t"
      }
    },
    {
      "attribution": null,
      "tags": [],
      "type": "image",
      "location": null,
      "filter": "Normal",
      "created_time": "1440501996",
      "link": "https://instagram.com/p/6zfwHMEXBY/",
      "images": {
        "low_resolution": {
          "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e15/11821069_1683591315208464_1921774986_n.jpg",
          "width": 320,
          "height": 320
        },
        "thumbnail": {
          "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11821069_1683591315208464_1921774986_n.jpg",
          "width": 150,
          "height": 150
        },
        "standard_resolution": {
          "url": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11821069_1683591315208464_1921774986_n.jpg",
          "width": 640,
          "height": 640
        }
      },
      "users_in_photo": [],
      "caption": {
        "created_time": "1440501996",
        "text": "jiff💙",
        "from": {
          "username": "jiffpom",
          "profile_picture": "https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/10534848_1445438965724038_834552885_a.jpg",
          "id": "194146115",
          "full_name": "jiff"
        },
        "id": "1059329986589192786"
      },
      "user_has_liked": false,
      "id": "1059329983057588312_194146115",
      "user": {
        "username": "jiffpom",
        "profile_picture": "https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/10534848_1445438965724038_834552885_a.jpg",
        "id": "194146115",
        "full_name": "jiff"
      }
    }
  ]
}
```
