/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CardCharacterQueryVariables = {
    characterId?: string | null;
};
export type CardCharacterQueryResponse = {
    readonly character: {
        readonly name: string | null;
        readonly image: string | null;
    } | null;
};
export type CardCharacterQuery = {
    readonly response: CardCharacterQueryResponse;
    readonly variables: CardCharacterQueryVariables;
};



/*
query CardCharacterQuery(
  $characterId: ID
) {
  character(id: $characterId) {
    name
    image
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "characterId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "characterId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "image",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CardCharacterQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Character",
        "kind": "LinkedField",
        "name": "character",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CardCharacterQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Character",
        "kind": "LinkedField",
        "name": "character",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "49e98ca22c22c5192aa38e6a719c85b6",
    "id": null,
    "metadata": {},
    "name": "CardCharacterQuery",
    "operationKind": "query",
    "text": "query CardCharacterQuery(\n  $characterId: ID\n) {\n  character(id: $characterId) {\n    name\n    image\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '20d21fd95b2f212826ca3b9db2902482';
export default node;
