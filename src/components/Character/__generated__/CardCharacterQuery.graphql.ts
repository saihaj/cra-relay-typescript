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
          (v2/*: any*/)
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
    "cacheID": "6409491b7d8449ae10d02ba9a12202f7",
    "id": null,
    "metadata": {},
    "name": "CardCharacterQuery",
    "operationKind": "query",
    "text": "query CardCharacterQuery(\n  $characterId: ID\n) {\n  character(id: $characterId) {\n    name\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '0ae3313cdfee084131211ec2ba177408';
export default node;
