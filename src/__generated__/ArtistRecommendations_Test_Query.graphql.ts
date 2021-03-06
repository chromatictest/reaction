/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArtistRecommendations_Test_QueryVariables = {};
export type ArtistRecommendations_Test_QueryResponse = {
    readonly artist: {
        readonly " $fragmentRefs": FragmentRefs<"ArtistRecommendations_artist">;
    } | null;
};
export type ArtistRecommendations_Test_QueryRawResponse = {
    readonly artist: ({
        readonly slug: string;
        readonly name: string | null;
        readonly related: ({
            readonly artistsConnection: ({
                readonly edges: ReadonlyArray<({
                    readonly node: ({
                        readonly id: string;
                        readonly slug: string;
                        readonly internalID: string;
                        readonly name: string | null;
                        readonly formatted_nationality_and_birthday: string | null;
                        readonly href: string | null;
                        readonly image: ({
                            readonly cropped: ({
                                readonly url: string | null;
                            }) | null;
                        }) | null;
                        readonly artworks_connection: ({
                            readonly edges: ReadonlyArray<({
                                readonly node: ({
                                    readonly id: string;
                                    readonly image: ({
                                        readonly aspect_ratio: number;
                                        readonly url: string | null;
                                    }) | null;
                                    readonly href: string | null;
                                    readonly title: string | null;
                                    readonly date: string | null;
                                    readonly sale_message: string | null;
                                    readonly cultural_maker: string | null;
                                    readonly artists: ReadonlyArray<({
                                        readonly id: string;
                                        readonly href: string | null;
                                        readonly name: string | null;
                                    }) | null> | null;
                                    readonly collecting_institution: string | null;
                                    readonly partner: ({
                                        readonly name: string | null;
                                        readonly href: string | null;
                                        readonly id: string | null;
                                        readonly type: string | null;
                                    }) | null;
                                    readonly sale: ({
                                        readonly is_auction: boolean | null;
                                        readonly is_closed: boolean | null;
                                        readonly id: string | null;
                                        readonly is_live_open: boolean | null;
                                        readonly is_open: boolean | null;
                                        readonly is_preview: boolean | null;
                                        readonly display_timely_at: string | null;
                                    }) | null;
                                    readonly sale_artwork: ({
                                        readonly counts: ({
                                            readonly bidder_positions: number | null;
                                        }) | null;
                                        readonly highest_bid: ({
                                            readonly display: string | null;
                                        }) | null;
                                        readonly opening_bid: ({
                                            readonly display: string | null;
                                        }) | null;
                                        readonly id: string | null;
                                    }) | null;
                                    readonly is_inquireable: boolean | null;
                                    readonly internalID: string;
                                    readonly slug: string;
                                    readonly is_saved: boolean | null;
                                    readonly is_biddable: boolean | null;
                                    readonly is_acquireable: boolean | null;
                                    readonly is_offerable: boolean | null;
                                }) | null;
                            }) | null> | null;
                        }) | null;
                        readonly is_followed: boolean | null;
                        readonly counts: ({
                            readonly follows: number | null;
                        }) | null;
                        readonly __typename: "Artist";
                    }) | null;
                    readonly cursor: string;
                }) | null> | null;
                readonly pageInfo: {
                    readonly endCursor: string | null;
                    readonly hasNextPage: boolean;
                };
            }) | null;
        }) | null;
        readonly id: string | null;
    }) | null;
};
export type ArtistRecommendations_Test_Query = {
    readonly response: ArtistRecommendations_Test_QueryResponse;
    readonly variables: ArtistRecommendations_Test_QueryVariables;
    readonly rawResponse: ArtistRecommendations_Test_QueryRawResponse;
};



/*
query ArtistRecommendations_Test_Query {
  artist(id: "andy-warhol") {
    ...ArtistRecommendations_artist
    id
  }
}

fragment ArtistRecommendations_artist on Artist {
  slug
  name
  related {
    artistsConnection(first: 3, after: "", minForsaleArtworks: 7) {
      edges {
        node {
          id
          ...RecommendedArtist_artist
          __typename
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}

fragment Badge_artwork on Artwork {
  is_biddable: isBiddable
  is_acquireable: isAcquireable
  is_offerable: isOfferable
  href
  sale {
    is_preview: isPreview
    display_timely_at: displayTimelyAt
    id
  }
}

fragment Contact_artwork on Artwork {
  href
  is_inquireable: isInquireable
  sale {
    is_auction: isAuction
    is_live_open: isLiveOpen
    is_open: isOpen
    is_closed: isClosed
    id
  }
  partner(shallow: true) {
    type
    id
  }
  sale_artwork: saleArtwork {
    highest_bid: highestBid {
      display
    }
    opening_bid: openingBid {
      display
    }
    counts {
      bidder_positions: bidderPositions
    }
    id
  }
}

fragment Details_artwork on Artwork {
  href
  title
  date
  sale_message: saleMessage
  cultural_maker: culturalMaker
  artists(shallow: true) {
    id
    href
    name
  }
  collecting_institution: collectingInstitution
  partner(shallow: true) {
    name
    href
    id
  }
  sale {
    is_auction: isAuction
    is_closed: isClosed
    id
  }
  sale_artwork: saleArtwork {
    counts {
      bidder_positions: bidderPositions
    }
    highest_bid: highestBid {
      display
    }
    opening_bid: openingBid {
      display
    }
    id
  }
}

fragment FillwidthItem_artwork on Artwork {
  image {
    url(version: "large")
    aspect_ratio: aspectRatio
  }
  href
  ...Metadata_artwork
  ...Save_artwork
  ...Badge_artwork
}

fragment FollowArtistButton_artist on Artist {
  id
  internalID
  name
  is_followed: isFollowed
  counts {
    follows
  }
}

fragment Metadata_artwork on Artwork {
  ...Details_artwork
  ...Contact_artwork
  href
}

fragment RecommendedArtist_artist on Artist {
  slug
  internalID
  name
  formatted_nationality_and_birthday: formattedNationalityAndBirthday
  href
  image {
    cropped(width: 100, height: 100) {
      url
    }
  }
  artworks_connection: artworksConnection(first: 20, sort: PUBLISHED_AT_DESC, filter: IS_FOR_SALE) {
    edges {
      node {
        id
        image {
          aspect_ratio: aspectRatio
        }
        ...FillwidthItem_artwork
      }
    }
  }
  ...FollowArtistButton_artist
}

fragment Save_artwork on Artwork {
  id
  internalID
  slug
  is_saved: isSaved
  title
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "andy-warhol"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "Literal",
    "name": "after",
    "value": ""
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  },
  {
    "kind": "Literal",
    "name": "minForsaleArtworks",
    "value": 7
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "internalID",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "href",
  "args": null,
  "storageKey": null
},
v7 = [
  {
    "kind": "Literal",
    "name": "shallow",
    "value": true
  }
],
v8 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "display",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ArtistRecommendations_Test_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artist",
        "storageKey": "artist(id:\"andy-warhol\")",
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ArtistRecommendations_artist",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ArtistRecommendations_Test_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artist",
        "storageKey": "artist(id:\"andy-warhol\")",
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "related",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtistRelatedData",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "artistsConnection",
                "storageKey": "artistsConnection(after:\"\",first:3,minForsaleArtworks:7)",
                "args": (v3/*: any*/),
                "concreteType": "ArtistConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ArtistEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Artist",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          (v1/*: any*/),
                          (v5/*: any*/),
                          (v2/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": "formatted_nationality_and_birthday",
                            "name": "formattedNationalityAndBirthday",
                            "args": null,
                            "storageKey": null
                          },
                          (v6/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "image",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Image",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "cropped",
                                "storageKey": "cropped(height:100,width:100)",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "height",
                                    "value": 100
                                  },
                                  {
                                    "kind": "Literal",
                                    "name": "width",
                                    "value": 100
                                  }
                                ],
                                "concreteType": "CroppedImageUrl",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "url",
                                    "args": null,
                                    "storageKey": null
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": "artworks_connection",
                            "name": "artworksConnection",
                            "storageKey": "artworksConnection(filter:\"IS_FOR_SALE\",first:20,sort:\"PUBLISHED_AT_DESC\")",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "filter",
                                "value": "IS_FOR_SALE"
                              },
                              {
                                "kind": "Literal",
                                "name": "first",
                                "value": 20
                              },
                              {
                                "kind": "Literal",
                                "name": "sort",
                                "value": "PUBLISHED_AT_DESC"
                              }
                            ],
                            "concreteType": "ArtworkConnection",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "edges",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "ArtworkEdge",
                                "plural": true,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "node",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "Artwork",
                                    "plural": false,
                                    "selections": [
                                      (v4/*: any*/),
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "image",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "Image",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "kind": "ScalarField",
                                            "alias": "aspect_ratio",
                                            "name": "aspectRatio",
                                            "args": null,
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "url",
                                            "args": [
                                              {
                                                "kind": "Literal",
                                                "name": "version",
                                                "value": "large"
                                              }
                                            ],
                                            "storageKey": "url(version:\"large\")"
                                          }
                                        ]
                                      },
                                      (v6/*: any*/),
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "title",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "date",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": "sale_message",
                                        "name": "saleMessage",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": "cultural_maker",
                                        "name": "culturalMaker",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "artists",
                                        "storageKey": "artists(shallow:true)",
                                        "args": (v7/*: any*/),
                                        "concreteType": "Artist",
                                        "plural": true,
                                        "selections": [
                                          (v4/*: any*/),
                                          (v6/*: any*/),
                                          (v2/*: any*/)
                                        ]
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": "collecting_institution",
                                        "name": "collectingInstitution",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "partner",
                                        "storageKey": "partner(shallow:true)",
                                        "args": (v7/*: any*/),
                                        "concreteType": "Partner",
                                        "plural": false,
                                        "selections": [
                                          (v2/*: any*/),
                                          (v6/*: any*/),
                                          (v4/*: any*/),
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "type",
                                            "args": null,
                                            "storageKey": null
                                          }
                                        ]
                                      },
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "sale",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "Sale",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "kind": "ScalarField",
                                            "alias": "is_auction",
                                            "name": "isAuction",
                                            "args": null,
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": "is_closed",
                                            "name": "isClosed",
                                            "args": null,
                                            "storageKey": null
                                          },
                                          (v4/*: any*/),
                                          {
                                            "kind": "ScalarField",
                                            "alias": "is_live_open",
                                            "name": "isLiveOpen",
                                            "args": null,
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": "is_open",
                                            "name": "isOpen",
                                            "args": null,
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": "is_preview",
                                            "name": "isPreview",
                                            "args": null,
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": "display_timely_at",
                                            "name": "displayTimelyAt",
                                            "args": null,
                                            "storageKey": null
                                          }
                                        ]
                                      },
                                      {
                                        "kind": "LinkedField",
                                        "alias": "sale_artwork",
                                        "name": "saleArtwork",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "SaleArtwork",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "counts",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "SaleArtworkCounts",
                                            "plural": false,
                                            "selections": [
                                              {
                                                "kind": "ScalarField",
                                                "alias": "bidder_positions",
                                                "name": "bidderPositions",
                                                "args": null,
                                                "storageKey": null
                                              }
                                            ]
                                          },
                                          {
                                            "kind": "LinkedField",
                                            "alias": "highest_bid",
                                            "name": "highestBid",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "SaleArtworkHighestBid",
                                            "plural": false,
                                            "selections": (v8/*: any*/)
                                          },
                                          {
                                            "kind": "LinkedField",
                                            "alias": "opening_bid",
                                            "name": "openingBid",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "SaleArtworkOpeningBid",
                                            "plural": false,
                                            "selections": (v8/*: any*/)
                                          },
                                          (v4/*: any*/)
                                        ]
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": "is_inquireable",
                                        "name": "isInquireable",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      (v5/*: any*/),
                                      (v1/*: any*/),
                                      {
                                        "kind": "ScalarField",
                                        "alias": "is_saved",
                                        "name": "isSaved",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": "is_biddable",
                                        "name": "isBiddable",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": "is_acquireable",
                                        "name": "isAcquireable",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      {
                                        "kind": "ScalarField",
                                        "alias": "is_offerable",
                                        "name": "isOfferable",
                                        "args": null,
                                        "storageKey": null
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "kind": "ScalarField",
                            "alias": "is_followed",
                            "name": "isFollowed",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "counts",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "ArtistCounts",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "follows",
                                "args": null,
                                "storageKey": null
                              }
                            ]
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "__typename",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "cursor",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "pageInfo",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "endCursor",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "hasNextPage",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "artistsConnection",
                "args": (v3/*: any*/),
                "handle": "connection",
                "key": "ArtistRecommendations_artistsConnection",
                "filters": [
                  "minForsaleArtworks"
                ]
              }
            ]
          },
          (v4/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ArtistRecommendations_Test_Query",
    "id": null,
    "text": "query ArtistRecommendations_Test_Query {\n  artist(id: \"andy-warhol\") {\n    ...ArtistRecommendations_artist\n    id\n  }\n}\n\nfragment ArtistRecommendations_artist on Artist {\n  slug\n  name\n  related {\n    artistsConnection(first: 3, after: \"\", minForsaleArtworks: 7) {\n      edges {\n        node {\n          id\n          ...RecommendedArtist_artist\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n\nfragment Badge_artwork on Artwork {\n  is_biddable: isBiddable\n  is_acquireable: isAcquireable\n  is_offerable: isOfferable\n  href\n  sale {\n    is_preview: isPreview\n    display_timely_at: displayTimelyAt\n    id\n  }\n}\n\nfragment Contact_artwork on Artwork {\n  href\n  is_inquireable: isInquireable\n  sale {\n    is_auction: isAuction\n    is_live_open: isLiveOpen\n    is_open: isOpen\n    is_closed: isClosed\n    id\n  }\n  partner(shallow: true) {\n    type\n    id\n  }\n  sale_artwork: saleArtwork {\n    highest_bid: highestBid {\n      display\n    }\n    opening_bid: openingBid {\n      display\n    }\n    counts {\n      bidder_positions: bidderPositions\n    }\n    id\n  }\n}\n\nfragment Details_artwork on Artwork {\n  href\n  title\n  date\n  sale_message: saleMessage\n  cultural_maker: culturalMaker\n  artists(shallow: true) {\n    id\n    href\n    name\n  }\n  collecting_institution: collectingInstitution\n  partner(shallow: true) {\n    name\n    href\n    id\n  }\n  sale {\n    is_auction: isAuction\n    is_closed: isClosed\n    id\n  }\n  sale_artwork: saleArtwork {\n    counts {\n      bidder_positions: bidderPositions\n    }\n    highest_bid: highestBid {\n      display\n    }\n    opening_bid: openingBid {\n      display\n    }\n    id\n  }\n}\n\nfragment FillwidthItem_artwork on Artwork {\n  image {\n    url(version: \"large\")\n    aspect_ratio: aspectRatio\n  }\n  href\n  ...Metadata_artwork\n  ...Save_artwork\n  ...Badge_artwork\n}\n\nfragment FollowArtistButton_artist on Artist {\n  id\n  internalID\n  name\n  is_followed: isFollowed\n  counts {\n    follows\n  }\n}\n\nfragment Metadata_artwork on Artwork {\n  ...Details_artwork\n  ...Contact_artwork\n  href\n}\n\nfragment RecommendedArtist_artist on Artist {\n  slug\n  internalID\n  name\n  formatted_nationality_and_birthday: formattedNationalityAndBirthday\n  href\n  image {\n    cropped(width: 100, height: 100) {\n      url\n    }\n  }\n  artworks_connection: artworksConnection(first: 20, sort: PUBLISHED_AT_DESC, filter: IS_FOR_SALE) {\n    edges {\n      node {\n        id\n        image {\n          aspect_ratio: aspectRatio\n        }\n        ...FillwidthItem_artwork\n      }\n    }\n  }\n  ...FollowArtistButton_artist\n}\n\nfragment Save_artwork on Artwork {\n  id\n  internalID\n  slug\n  is_saved: isSaved\n  title\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '4477ef176c5666ffa47770d0652f8320';
export default node;
