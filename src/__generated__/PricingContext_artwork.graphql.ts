/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type AnalyticsPricingContextCategoryEnum = "ARCHITECTURE" | "BOOKS_AND_PORTFOLIOS" | "DESIGN_DECORATIVE_ART" | "DRAWING_COLLAGE_OTHER_WORK_ON_PAPER" | "FASHION" | "INSTALLATION" | "JEWELRY" | "MIXED_MEDIA" | "OTHER" | "PAINTING" | "PERFORMANCE" | "PHOTOGRAPHY" | "POSTERS" | "PRINT" | "SCULPTURE" | "SOUND" | "TEXTILE" | "VIDEO_FILM_ANIMATION" | "WORK_ON_PAPER" | "%future added value";
export type AnalyticsPricingContextDimensionEnum = "LARGE" | "MEDIUM" | "SMALL" | "%future added value";
declare const _PricingContext_artwork$ref: unique symbol;
export type PricingContext_artwork$ref = typeof _PricingContext_artwork$ref;
export type PricingContext_artwork = {
    readonly priceCents: ({
        readonly min: number | null;
        readonly max: number | null;
    }) | null;
    readonly artists: ReadonlyArray<({
        readonly id: string;
    }) | null> | null;
    readonly widthCm: number | null;
    readonly heightCm: number | null;
    readonly sizeScore: number | null;
    readonly category: string | null;
    readonly edition_sets: ReadonlyArray<({
        readonly sizeScore: number | null;
    }) | null> | null;
    readonly pricingContext?: ({
        readonly appliedFiltersDisplay: string | null;
        readonly appliedFilters: {
            readonly dimension: AnalyticsPricingContextDimensionEnum | null;
            readonly category: AnalyticsPricingContextCategoryEnum | null;
        };
        readonly bins: ReadonlyArray<{
            readonly maxPrice: string | null;
            readonly maxPriceCents: number;
            readonly minPrice: string | null;
            readonly minPriceCents: number;
            readonly numArtworks: number;
        }>;
    }) | null;
    readonly " $refType": PricingContext_artwork$ref;
};



const node: ConcreteFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sizeScore",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "category",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "PricingContext_artwork",
  "type": "Artwork",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "enablePricingContext",
      "type": "Boolean"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "priceCents",
      "storageKey": null,
      "args": null,
      "concreteType": "PriceCents",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "min",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "max",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "artists",
      "storageKey": null,
      "args": null,
      "concreteType": "Artist",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        v0
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "widthCm",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "heightCm",
      "args": null,
      "storageKey": null
    },
    v1,
    v2,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edition_sets",
      "storageKey": null,
      "args": null,
      "concreteType": "EditionSet",
      "plural": true,
      "selections": [
        v1,
        v0
      ]
    },
    v0,
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "enablePricingContext",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pricingContext",
          "storageKey": null,
          "args": null,
          "concreteType": "AnalyticsPricingContext",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "appliedFiltersDisplay",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "appliedFilters",
              "storageKey": null,
              "args": null,
              "concreteType": "AnalyticsPriceContextFilterType",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "dimension",
                  "args": null,
                  "storageKey": null
                },
                v2
              ]
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "bins",
              "storageKey": null,
              "args": null,
              "concreteType": "AnalyticsHistogramBin",
              "plural": true,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "maxPrice",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "maxPriceCents",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "minPrice",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "minPriceCents",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "numArtworks",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
(node as any).hash = '4ce85fddc2fa713dc976c1bb58c32f9e';
export default node;
