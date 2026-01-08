var APP_DATA = {
  "scenes": [
    {
      "id": "0-front",
      "name": "Front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.07598275552686218,
        "pitch": 0.2026583809210294,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 0.8171975151679796,
          "pitch": 0.11329504883506303,
          "rotation": 4.71238898038469,
          "target": "1-right"
        },
        {
          "yaw": -0.6745670027830997,
          "pitch": 0.20184118569179788,
          "rotation": 1.5707963267948966,
          "target": "2-left"
        },
        {
          "yaw": 0.14812627121983368,
          "pitch": 0.5839209333041744,
          "rotation": 0,
          "target": "3-sitout"
        },
        {
          "yaw": -0.4153008751798275,
          "pitch": 0.5969875695643889,
          "rotation": 0,
          "target": "5-show-wall"
        },
        {
          "yaw": 0.6074142147249635,
          "pitch": 0.47023655491226535,
          "rotation": 0,
          "target": "6-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-right",
      "name": "Right",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -0.11554856021149185,
          "pitch": 0.6416909509262503,
          "rotation": 0,
          "target": "4-sitout"
        },
        {
          "yaw": -0.7164906461860934,
          "pitch": 0.4290070005240292,
          "rotation": 1.5707963267948966,
          "target": "0-front"
        },
        {
          "yaw": -0.5693850868080048,
          "pitch": 0.10049964084636365,
          "rotation": 1.5707963267948966,
          "target": "2-left"
        },
        {
          "yaw": 0.331701829137069,
          "pitch": 0.5082253853775391,
          "rotation": 0,
          "target": "6-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-left",
      "name": "Left",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.18440417948240828,
          "pitch": 0.6571946318705404,
          "rotation": 0,
          "target": "5-show-wall"
        },
        {
          "yaw": 0.26721172101160384,
          "pitch": 0.43523784254774966,
          "rotation": 0,
          "target": "4-sitout"
        },
        {
          "yaw": 0.15739312186636845,
          "pitch": 0.15692687916821235,
          "rotation": 4.71238898038469,
          "target": "0-front"
        },
        {
          "yaw": 0.480005909600564,
          "pitch": 0.08300871833428758,
          "rotation": 4.71238898038469,
          "target": "1-right"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sitout",
      "name": "Sitout",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.16198282246054063,
        "pitch": 0.016267335994218257,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 0.8432446106643479,
          "pitch": 0.16764306245996252,
          "rotation": 0,
          "target": "6-side"
        },
        {
          "yaw": -0.5834576982328219,
          "pitch": 0.24729652779999256,
          "rotation": 1.5707963267948966,
          "target": "4-sitout"
        },
        {
          "yaw": 1.1755313985787819,
          "pitch": -0.65593164534042,
          "rotation": 4.71238898038469,
          "target": "1-right"
        },
        {
          "yaw": -1.3722459353758012,
          "pitch": -0.4418194528809707,
          "rotation": 1.5707963267948966,
          "target": "0-front"
        },
        {
          "yaw": -0.7087841139849438,
          "pitch": -0.5323417333577218,
          "rotation": 1.5707963267948966,
          "target": "2-left"
        },
        {
          "yaw": -0.6142009702231697,
          "pitch": 0.072916247364887,
          "rotation": 1.5707963267948966,
          "target": "5-show-wall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-sitout",
      "name": "Sitout",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.006961356870206714,
        "pitch": 0.10014100500580803,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 1.3370411097814774,
          "pitch": 0.3980276478728175,
          "rotation": 0,
          "target": "3-sitout"
        },
        {
          "yaw": 0.8046373338929271,
          "pitch": 0.12143639361871905,
          "rotation": 4.71238898038469,
          "target": "6-side"
        },
        {
          "yaw": -1.5083443307325624,
          "pitch": 0.1406337334441261,
          "rotation": 1.5707963267948966,
          "target": "5-show-wall"
        },
        {
          "yaw": -0.27711409906121176,
          "pitch": 0.11924578149070975,
          "rotation": 0,
          "target": "7-entry"
        },
        {
          "yaw": -0.8789690056326975,
          "pitch": -0.9346962994689463,
          "rotation": 0,
          "target": "0-front"
        },
        {
          "yaw": 1.4955611968849851,
          "pitch": -0.6217625958923261,
          "rotation": 4.71238898038469,
          "target": "1-right"
        },
        {
          "yaw": -1.5909357146252727,
          "pitch": -0.4412589100823361,
          "rotation": 1.5707963267948966,
          "target": "2-left"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-show-wall",
      "name": "Show wall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 0.622856356809784,
          "pitch": 0.12386470738848843,
          "rotation": 4.71238898038469,
          "target": "4-sitout"
        },
        {
          "yaw": 1.7815782982335264,
          "pitch": -0.514230657756233,
          "rotation": 4.71238898038469,
          "target": "0-front"
        },
        {
          "yaw": -2.1092256480538403,
          "pitch": -0.5736941243730698,
          "rotation": 0,
          "target": "2-left"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-side",
      "name": "Side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.36211289813972236,
        "pitch": -0.009299327667052992,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -1.888777100487106,
          "pitch": 0.23566946516641885,
          "rotation": 0,
          "target": "3-sitout"
        },
        {
          "yaw": 1.384145815572138,
          "pitch": -0.6402136725962393,
          "rotation": 4.71238898038469,
          "target": "1-right"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.075363520249482,
        "pitch": 0.02160581556774943,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -1.5360075289725437,
          "pitch": 0.17314686552644964,
          "rotation": 0,
          "target": "4-sitout"
        },
        {
          "yaw": -2.7048426435690196,
          "pitch": 0.3448644984651601,
          "rotation": 0,
          "target": "8-living"
        },
        {
          "yaw": 0.058812300416544616,
          "pitch": 0.16932042445690243,
          "rotation": 0,
          "target": "9-family-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6942737900070828,
          "pitch": 0.030866444550593286,
          "rotation": 4.71238898038469,
          "target": "7-entry"
        },
        {
          "yaw": -0.47999857265235946,
          "pitch": 0.1068063705445006,
          "rotation": 0,
          "target": "9-family-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-family-area",
      "name": "Family Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.07157210591374152,
        "pitch": -0.020458520867522978,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 0.449666933726407,
          "pitch": 0.1830617820183793,
          "rotation": 0,
          "target": "8-living"
        },
        {
          "yaw": -0.5571909391370564,
          "pitch": 0.12492725109310143,
          "rotation": 0,
          "target": "10-dining"
        },
        {
          "yaw": -1.4650687769775832,
          "pitch": 0.04767379078632317,
          "rotation": 0,
          "target": "12-gf-bed-1"
        },
        {
          "yaw": -0.24461209364698533,
          "pitch": -0.0038457058835987823,
          "rotation": 1.5707963267948966,
          "target": "13-gf-bed-2"
        },
        {
          "yaw": -0.8611648178143874,
          "pitch": 0.023096999045217004,
          "rotation": 0,
          "target": "14-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5055588163213365,
          "pitch": 0.13009899855621576,
          "rotation": 1.5707963267948966,
          "target": "12-gf-bed-1"
        },
        {
          "yaw": -0.02900818595765209,
          "pitch": 0.22375992158869806,
          "rotation": 0,
          "target": "9-family-area"
        },
        {
          "yaw": -0.6608349120010644,
          "pitch": 0.06741296663156149,
          "rotation": 4.71238898038469,
          "target": "8-living"
        },
        {
          "yaw": -1.9397354539170237,
          "pitch": 0.06835712923898285,
          "rotation": 0,
          "target": "13-gf-bed-2"
        },
        {
          "yaw": 1.9502217140380873,
          "pitch": 0.18103720601366824,
          "rotation": 0,
          "target": "11-wash"
        },
        {
          "yaw": 2.351617827180706,
          "pitch": 0.0957222750654978,
          "rotation": 0,
          "target": "14-kitchen"
        },
        {
          "yaw": 1.5048690534972877,
          "pitch": 0.0465552212047875,
          "rotation": 0,
          "target": "16-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-wash",
      "name": "Wash",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.9183874929863283,
        "pitch": 0.5066060429492776,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -0.37310158874607957,
          "pitch": 0.22483653037863682,
          "rotation": 0,
          "target": "10-dining"
        },
        {
          "yaw": 0.5632007530251961,
          "pitch": -0.12598340801979901,
          "rotation": 7.0685834705770345,
          "target": "16-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-gf-bed-1",
      "name": "GF BED 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7668861024390647,
          "pitch": 0.21163763628731758,
          "rotation": 0,
          "target": "9-family-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-gf-bed-2",
      "name": "GF BED 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.012453460408615058,
        "pitch": -0.0636884500902628,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 0.2687550679968318,
          "pitch": 0.03168721677536901,
          "rotation": 0,
          "target": "10-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.101941712820784,
          "pitch": 0.18721423321107977,
          "rotation": 0,
          "target": "10-dining"
        },
        {
          "yaw": -2.138760437592884,
          "pitch": 0.24511737661781297,
          "rotation": 0,
          "target": "15-work-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-work-area",
      "name": "Work Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6478742248981586,
          "pitch": 0.12011916823261437,
          "rotation": 0,
          "target": "14-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-upper-living",
      "name": "Upper Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.8097877420046959,
        "pitch": 0.01782917079885671,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -2.3305125757439953,
          "pitch": 0.4891987995183982,
          "rotation": 4.71238898038469,
          "target": "10-dining"
        },
        {
          "yaw": 2.149471470113464,
          "pitch": 0.1855645877360388,
          "rotation": 0,
          "target": "17-walk-in-closet"
        },
        {
          "yaw": 2.49036132722739,
          "pitch": 0.17591851100129574,
          "rotation": 0,
          "target": "18-ff-bed-1"
        },
        {
          "yaw": 0.6466373602923206,
          "pitch": 0.10774898596655902,
          "rotation": 0,
          "target": "20-ff-bed-2"
        },
        {
          "yaw": -0.012208843531318792,
          "pitch": 0.13395945944872523,
          "rotation": 0,
          "target": "22-ff-mbed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-walk-in-closet",
      "name": "Walk-in Closet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2365417912171726,
          "pitch": 0.2163607356435442,
          "rotation": 0,
          "target": "16-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-ff-bed-1",
      "name": "FF BED 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.95891156856778,
          "pitch": 0.08160407743020315,
          "rotation": 0,
          "target": "16-upper-living"
        },
        {
          "yaw": -0.17919792170073912,
          "pitch": 0.27955201365969806,
          "rotation": 0,
          "target": "19-ff-bed-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-ff-bed-1",
      "name": "FF BED 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.3778547865142272,
        "pitch": 0.01487892426727555,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -0.16794556442817132,
          "pitch": 0.4483068859595072,
          "rotation": 0,
          "target": "18-ff-bed-1"
        },
        {
          "yaw": -0.2378206837581569,
          "pitch": 0.06564423323565016,
          "rotation": 0,
          "target": "16-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-ff-bed-2",
      "name": "FF BED 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.22644600782592939,
          "pitch": 0.22426558442437283,
          "rotation": 0,
          "target": "21-ff-bed-2"
        },
        {
          "yaw": -2.7253384765050033,
          "pitch": 0.07318105977961764,
          "rotation": 4.71238898038469,
          "target": "16-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-ff-bed-2",
      "name": "FF BED 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.35657042303627406,
          "pitch": 0.35600127699827766,
          "rotation": 0,
          "target": "20-ff-bed-2"
        },
        {
          "yaw": 0.49295933205764797,
          "pitch": 0.014497156365687047,
          "rotation": 0,
          "target": "16-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-ff-mbed",
      "name": "FF MBED",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7632192218278817,
          "pitch": 0.06670860565660774,
          "rotation": 0,
          "target": "16-upper-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Dr.Sabna Najeeb Residence",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
