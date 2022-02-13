(function() {
var exports = {};
exports.id = "pages/api/graphql";
exports.ids = ["pages/api/graphql"];
exports.modules = {

/***/ "./pages/api/graphql.ts":
/*!******************************!*\
  !*** ./pages/api/graphql.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": function() { return /* binding */ config; }
/* harmony export */ });
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ "apollo-server-micro");
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tools */ "graphql-tools");
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var micro_cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micro-cors */ "micro-cors");
/* harmony import */ var micro_cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(micro_cors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_api_typeDefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/api/typeDefs */ "./utils/api/typeDefs.ts");
/* harmony import */ var _utils_api_resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/api/resolvers */ "./utils/api/resolvers.ts");
/* harmony import */ var graphql_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-middleware */ "graphql-middleware");
/* harmony import */ var graphql_middleware__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_middleware__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_api_log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/api/log */ "./utils/api/log.ts");
/* harmony import */ var _utils_api_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/api/permissions */ "./utils/api/permissions.ts");
/* harmony import */ var _utils_api_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/api/context */ "./utils/api/context.ts");









const cors = micro_cors__WEBPACK_IMPORTED_MODULE_2___default()();
const schema = (0,graphql_middleware__WEBPACK_IMPORTED_MODULE_5__.applyMiddleware)((0,graphql_tools__WEBPACK_IMPORTED_MODULE_1__.makeExecutableSchema)({
  typeDefs: _utils_api_typeDefs__WEBPACK_IMPORTED_MODULE_3__.typeDefs,
  resolvers: _utils_api_resolvers__WEBPACK_IMPORTED_MODULE_4__.resolvers
}), _utils_api_log__WEBPACK_IMPORTED_MODULE_6__.log, _utils_api_permissions__WEBPACK_IMPORTED_MODULE_7__.permissions);
const config = {
  api: {
    bodyParser: false
  }
};
const handler = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({
  typeDefs: _utils_api_typeDefs__WEBPACK_IMPORTED_MODULE_3__.typeDefs,
  schema,
  context: _utils_api_context__WEBPACK_IMPORTED_MODULE_8__.context
}).createHandler({
  path: '/api/graphql'
});
/* harmony default export */ __webpack_exports__["default"] = (cors((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.status(200).send();
  }

  return handler(req, res);
})); //==========================================================
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
// module.exports = handler.start().then(() => handler.createHandler({path: '',}))

/***/ }),

/***/ "./utils/api/context.ts":
/*!******************************!*\
  !*** ./utils/api/context.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "context": function() { return /* binding */ context; }
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);



let prisma;

if (false) {} else {
  globalThis['prisma'] = globalThis['prisma'] || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
  prisma = globalThis['prisma'];
}

const context = async ({
  req,
  res
}) => {
  try {
    const {
      user: auth0User
    } = await (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__.getSession)(req, res); // const auth0User = {nickname: 'faker', sub: "1", picture: "/blank.png"}

    let user = await prisma.user.findUnique({
      where: {
        auth0: auth0User.sub
      }
    });

    if (!user) {
      const {
        picture,
        nickname,
        sub
      } = auth0User;
      user = await prisma.user.create({
        data: {
          id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),
          auth0: sub,
          picture,
          nickname
        }
      });
    }

    return {
      user,
      prisma
    };
  } catch (e) {
    return {
      user: {},
      prisma
    };
  }
};

/***/ }),

/***/ "./utils/api/log.ts":
/*!**************************!*\
  !*** ./utils/api/log.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "log": function() { return /* binding */ log; }
/* harmony export */ });
const log = async (resolve, parent, args, ctx, info) => {
  try {
    const res = await resolve();
    return res;
  } catch (e) {
    console.log(e);
  }
};

/***/ }),

/***/ "./utils/api/permissions.ts":
/*!**********************************!*\
  !*** ./utils/api/permissions.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "permissions": function() { return /* binding */ permissions; }
/* harmony export */ });
/* harmony import */ var graphql_shield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-shield */ "graphql-shield");
/* harmony import */ var graphql_shield__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_shield__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


const rules = {
  isAuthenticated: (0,graphql_shield__WEBPACK_IMPORTED_MODULE_0__.rule)()(async (_parent, _args, context) => {
    return lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty(context.user) ? false : true;
  })
};
const permissions = (0,graphql_shield__WEBPACK_IMPORTED_MODULE_0__.shield)({
  Query: {// hello: rules.isAuthenticated
  }
});

/***/ }),

/***/ "./utils/api/resolvers.ts":
/*!********************************!*\
  !*** ./utils/api/resolvers.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolvers": function() { return /* binding */ resolvers; }
/* harmony export */ });
/* harmony import */ var _verifyOwnership__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verifyOwnership */ "./utils/api/verifyOwnership.ts");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const createFieldResolver = (modelName, parName) => ({
  [parName]: async ({
    id
  }, args, {
    prisma
  }) => {
    const modelResponse = await prisma[modelName].findUnique({
      where: {
        id
      },
      select: {
        [parName]: true
      }
    });
    return modelResponse[parName];
  }
});

const resolvers = {
  Feed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, createFieldResolver('feed', 'author')), createFieldResolver('feed', 'tags')), createFieldResolver('feed', 'bundles')), createFieldResolver('feed', 'likes')),
  Bundle: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, createFieldResolver('bundle', 'author')), createFieldResolver('bundle', 'tags')), createFieldResolver('bundle', 'feeds')), createFieldResolver('bundle', 'likes')),
  BundleTag: _objectSpread({}, createFieldResolver('bundleTag', 'bundles')),
  FeedTag: _objectSpread({}, createFieldResolver('feedTag', 'feeds')),
  SavedArticle: _objectSpread(_objectSpread({}, createFieldResolver('savedArticle', 'author')), createFieldResolver('savedArticle', 'feed')),
  User: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, createFieldResolver('user', 'bundles')), createFieldResolver('user', 'feeds')), createFieldResolver('user', 'feedLikes')), createFieldResolver('user', 'bundleLikes')),
  Query: {
    hello: (parent, args, context) => 'hi!',
    feed: (parent, {
      data: {
        id
      }
    }, {
      prisma
    }) => prisma.feed.findUnique({
      where: {
        id
      }
    }),
    feeds: (parent, args, {
      prisma
    }) => prisma.feed.findMany(),
    bundle: (parent, {
      data: {
        id
      }
    }, {
      prisma
    }) => prisma.bundle.findUnique({
      where: {
        id
      }
    }),
    bundles: (parent, args, {
      prisma
    }) => prisma.bundle.findMany(),
    findFeedTags: (parent, {
      data
    }, {
      prisma
    }) => prisma.feedTag.findMany({
      where: {
        name: {
          contains: data.search,
          mode: 'insensitive'
        }
      }
    }),
    findBundleTags: (parent, {
      data
    }, {
      prisma
    }) => prisma.bundleTag.findMany({
      where: {
        name: {
          contains: data.search,
          mode: 'insensitive'
        }
      }
    }),
    findFeeds: (parent, {
      data
    }, {
      prisma
    }) => prisma.feed.findMany({
      where: {
        name: {
          contains: data.search,
          mode: 'insensitive'
        }
      }
    }),
    savedArticle: (parent, {
      data: {
        url
      }
    }, {
      prisma,
      user: {
        id: authorId
      }
    }) => prisma.savedArticle.findUnique({
      where: {
        id: `${authorId}-${url}`
      }
    }),
    savedArticles: (parent, args, {
      prisma,
      user: {
        id: authorId
      }
    }) => prisma.savedArticle.findMany({
      where: {
        authorId: authorId ? authorId : null
      }
    }),
    me: (parent, args, {
      prisma,
      user: {
        id
      }
    }) => prisma.user.findUnique({
      where: {
        id
      }
    })
  },
  Mutation: {
    createFeed: (parent, {
      data
    }, {
      prisma,
      user
    }) => prisma.feed.create({
      data: _objectSpread(_objectSpread({}, data), {}, {
        author: {
          connect: {
            id: user.id
          }
        }
      })
    }),
    createBundle: (parent, {
      data
    }, {
      prisma,
      user
    }) => prisma.bundle.create({
      data: _objectSpread(_objectSpread({}, data), {}, {
        author: {
          connect: {
            id: user.id
          }
        }
      })
    }),
    likeBundle: (parent, {
      data
    }, {
      prisma,
      user
    }) => {
      const {
        bundleId,
        likeState
      } = data;
      const connectState = likeState ? 'connect' : 'disconnect';
      return prisma.bundle.update({
        where: {
          id: bundleId
        },
        data: {
          likes: {
            [connectState]: {
              id: user.id
            }
          }
        }
      });
    },
    likeFeed: (parent, {
      data
    }, {
      prisma,
      user
    }) => {
      const {
        feedId,
        likeState
      } = data;
      const connectState = likeState ? 'connect' : 'disconnect';
      return prisma.feed.update({
        where: {
          id: feedId
        },
        data: {
          likes: {
            [connectState]: {
              id: user.id
            }
          }
        }
      });
    },
    updateFeed: async (parent, _ref, {
      prisma,
      user
    }) => {
      let {
        data: {
          id
        }
      } = _ref,
          feedUpdate = _objectWithoutProperties(_ref.data, ["id"]);

      const feed = await prisma.feed.findUnique({
        where: {
          id
        },
        include: {
          author: true
        }
      });
      await (0,_verifyOwnership__WEBPACK_IMPORTED_MODULE_0__.verifyOwnership)(feed, user);
      return prisma.feed.update({
        where: {
          id
        },
        data: _objectSpread({}, feedUpdate)
      });
    },
    updateBundle: async (parent, _ref2, {
      prisma,
      user
    }) => {
      let {
        data: {
          id
        }
      } = _ref2,
          bundleUpdate = _objectWithoutProperties(_ref2.data, ["id"]);

      const bundle = await prisma.bundle.findUnique({
        where: {
          id
        },
        include: {
          author: true
        }
      });
      await (0,_verifyOwnership__WEBPACK_IMPORTED_MODULE_0__.verifyOwnership)(bundle, user);
      return prisma.bundle.update({
        where: {
          id
        },
        data: _objectSpread({}, bundleUpdate)
      });
    },
    createSavedArticle: async (parent, {
      data
    }, {
      prisma,
      user
    }) => {
      const author = {
        author: {
          connect: {
            id: user.id
          }
        }
      };
      return prisma.savedArticle.create({
        data: _objectSpread(_objectSpread({}, data), {}, {
          id: `${user.id}-${data.url}`,
          author: {
            connect: {
              id: user.id
            }
          }
        })
      });
    },
    deleteBundle: async (parent, {
      data: {
        id
      }
    }, {
      prisma,
      user
    }) => {
      const bundle = await prisma.bundle.findUnique({
        where: {
          id
        },
        include: {
          author: true
        }
      });
      await (0,_verifyOwnership__WEBPACK_IMPORTED_MODULE_0__.verifyOwnership)(bundle, user);
      await prisma.bundle.delete({
        where: {
          id: bundle.id
        }
      });
      return bundle;
    },
    deleteFeed: async (parent, {
      data: {
        id
      }
    }, {
      prisma,
      user
    }) => {
      const feed = await prisma.feed.findUnique({
        where: {
          id
        },
        include: {
          author: true
        }
      });
      await (0,_verifyOwnership__WEBPACK_IMPORTED_MODULE_0__.verifyOwnership)(feed, user);
      await prisma.feed.delete({
        where: {
          id: feed.id
        }
      });
      return feed;
    },
    deleteSavedArticle: async (parent, {
      data: {
        id
      }
    }, {
      prisma,
      user
    }) => {
      const savedArticle = await prisma.savedArticle.findUnique({
        where: {
          id
        },
        include: {
          author: true
        }
      });
      await (0,_verifyOwnership__WEBPACK_IMPORTED_MODULE_0__.verifyOwnership)(savedArticle, user);
      await prisma.savedArticle.delete({
        where: {
          id: savedArticle.id
        }
      });
      return savedArticle;
    }
  }
}; // // import { prisma } from '@prisma/client';
// import {Context} from './context';
// const createFieldResolver = (modelName, parName) => ({
//     [parName]: async ({id}, args, {prisma}: Context) => {
//         const modelResponse = await prisma[modelName].findUnique({
//             where: {id},
//             include: {[parName]: true}
//         }) 
//         console.log(modelResponse)
//         return modelResponse[parName]
//     }
// })
// export const resolvers = {
//     Feed: {
//         ...createFieldResolver('feed', 'author'),
//         ...createFieldResolver('feed', 'tags'),
//         ...createFieldResolver('feed', 'bundles'),
//         ...createFieldResolver('feed', 'likes')
//     },
//     Bundle: {
//         ...createFieldResolver('bundle', 'author'),
//         ...createFieldResolver('bundle', 'tags'),
//         ...createFieldResolver('bundle', 'feeds'),
//         ...createFieldResolver('bundle', 'likes')
//     },
//     BundleTag: {
//         ...createFieldResolver('bundleTag', 'bundles'),
//     },
//     FeedTag: {
//         ...createFieldResolver('feedTag', 'feeds'),
//     },
//     Query: {
//         hello: (parent, args, context: Context) => 'hi!',
//         feed: (parent, {data: {id}}, {prisma}: Context) => prisma.feed.findUnique({where: {id}}),
//         feeds: (parent, args, {prisma}: Context) => prisma.feed.findMany(),
//         bundle: (parent, {data: {id}}, {prisma}: Context) => prisma.bundle.findUnique({where: {id}}),
//         bundles: (parent, args, {prisma}: Context) => prisma.bundle.findMany(),
//         findFeedTags:(parent, { data }, { prisma }: Context) =>
//         prisma.feedTag.findMany({
//           where: { name: { contains: data.search, mode: 'insensitive' } } 
//         }),
//         findBundleTags: (parent, { data }, { prisma }: Context) =>
//         prisma.bundleTag.findMany({
//           where: { name: { contains: data.search, mode: 'insensitive' } },
//         }),
//         findFeeds: (parent, { data }, { prisma }: Context) =>
//         prisma.feed.findMany({
//           where: { name: { contains: data.search, mode: 'insensitive' } },
//         }),
//     Mutation: {
//          createFeed: async (parent, {data}, {prisma, user}: Context)  => {
//              const author = { author: {connect: {id: user.id}}}
//              const result = await prisma.feed.create({data: {...data, ...author}})
//              return result
//          },
//          createBundle: async (parent, {data}, {prisma, user}: Context)  => {
//              const author = { author: {connect: {id: user.id}}};
//              const result = await prisma.bundle.create({data: {...data, ...author}, 
//             });
//              return result;
//          },
//          likeBundle: (parent, {data}, {prisma, user}) => {
//              const {bundleId, likeState} = data;
//              const connectState = likeState ? 'connect' : 'disconnect';
//              return prisma.bundle.update({
//                  where: {id: bundleId},
//                  data: {likes: {[connectState]: { id: user.id} }},
//              });
//          },
//          likeFeed: (parent, {data}, {prisma, user}) => {
//             const {feedId, likeState} = data;
//             const connectState = likeState ? 'connect' : 'disconnect';
//             return prisma.feed.update({
//                 where: {id: feedId},
//                 data: {likes: {[connectState]: { id: user.id} }},
//             })
//             }
//         }
//     }
// }

/***/ }),

/***/ "./utils/api/typeDefs.ts":
/*!*******************************!*\
  !*** ./utils/api/typeDefs.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typeDefs": function() { return /* binding */ typeDefs; }
/* harmony export */ });
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ "apollo-server-micro");
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);

const typeDefs = apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.gql`
  type Feed {
    id: String
    name: String
    url: String
    author: User
    tags: [FeedTag]
    bundles: [Bundle]
    likes: [User]
    savedArticles: [SavedArticle]
  }

  type Bundle {
    id: String
    name: String
    description: String
    author: User
    tags: [BundleTag]
    feeds: [Feed]
    likes: [User]
  }

  type User {
    id: String
    auth0: String
    nickname: String
    picture: String
    bundles: [Bundle]
    feeds: [Feed]
    feedLikes: [Feed]
    bundleLikes: [Bundle]
  }

  type FeedTag {
    id: String
    name: String
    feeds: [Feed]
  }

  type BundleTag {
    id: String
    name: String
    bundles: [Bundle]
  }

  input FeedInput {
    id: String
  }
  input BundleInput {
    id: String
  }

  input FeedCreateInput {
    id: String
    url: String
    name: String
    tags: NestedFeedTagCreateInput
  }
  input NestedFeedTagCreateInput {
    create: [FeedTagCreateInput]
    connect: [FeedTagWhereUniqueInput]
  }

  input FeedTagCreateInput {
    id: String
    name: String
  }
  input FeedTagWhereUniqueInput {
    id: String
    name: String
  }

  input BundleCreateInput {
    id: String
    name: String
    description: String
    tags: NestedBundleTagCreateInput
    feeds: NestedBundleFeedCreateInput
  }
  input NestedBundleTagCreateInput {
    create: [BundleTagCreateInput]
    connect: [BundleTagWhereUniqueInput]
  }

  input BundleTagCreateInput {
    id: String
    name: String
  }

  input BundleTagWhereUniqueInput {
    id: String
    name: String
  }

  input NestedBundleFeedCreateInput {
    create: [FeedCreateInput]
    connect: [FeedWhereUniqueInput]
  }

  input FeedWhereUniqueInput {
    id: String
    url: String
  }

  input LikeBundleInput {
    bundleId: String
    likeState: Boolean
  }

  input LikeFeedInput {
    feedId: String
    likeState: Boolean
  }

  input FindFeedTagsInput {
    search: String
  }

  input FindBundleTagsInput {
    search: String
  }

  input FindFeedsInput {
    search: String
  }

  input FeedUpdateInput {
    id: String
    url: String
    name: String
    tags: NestedFeedTagUpdateInput
  }

  input NestedFeedTagUpdateInput {
    create: [FeedTagCreateInput]
    connect: [FeedTagWhereUniqueInput]
    disconnect: [FeedTagWhereUniqueInput]
  }

  input BundleUpdateInput {
    id: String
    name: String
    description: String
    tags: NestedBundleTagUpdateInput
    feeds: NestedBundleFeedUpdateInput
  }

  input NestedBundleTagUpdateInput {
    create: [BundleTagCreateInput]
    connect: [BundleTagWhereUniqueInput]
    disconnect: [BundleTagWhereUniqueInput]
  }

  input NestedBundleFeedUpdateInput {
    create: [FeedCreateInput]
    connect: [FeedWhereUniqueInput]
    disconnect: [FeedWhereUniqueInput]
  }

  scalar JSON

  type SavedArticle {
    id: String
    author: User
    url: String
    content: JSON
    feed: Feed
  }

  input SavedArticleInput {
    url: String
  }

  input SavedArticleCreateInput {
    feed: NestedFeedCreateInput
    content: JSON
    url: String
  }

  input NestedFeedCreateInput {
    connect: FeedWhereUniqueInput
  }

  input DeleteSavedArticleInput {
    id: String
  }

  type Query {
    hello: String
    feed(data: FeedInput): Feed
    bundle(data: BundleInput): Bundle
    feeds: [Feed]
    bundles: [Bundle]
    findFeedTags(data: FindFeedTagsInput): [FeedTag]
    findBundleTags(data: FindBundleTagsInput): [BundleTag]
    findFeeds(data: FindFeedsInput): [Feed]
    savedArticle(data: SavedArticleInput): SavedArticle
    savedArticles: [SavedArticle]
    me: User
  }
  type Mutation {
    createFeed(data: FeedCreateInput): Feed
    createBundle(data: BundleCreateInput): Bundle
    likeBundle(data: LikeBundleInput): Bundle
    likeFeed(data: LikeFeedInput): Feed
    updateBundle(data: BundleUpdateInput): Bundle
    updateFeed(data: FeedUpdateInput): Feed
    createSavedArticle(data: SavedArticleCreateInput): SavedArticle
    deleteBundle(data: BundleInput): Bundle
    deleteFeed(data: FeedInput): Feed
    deleteSavedArticle(data: DeleteSavedArticleInput): SavedArticle
  }
`; // import { gql } from 'apollo-server-micro';
// export const typeDefs = gql`
//     type Feed {
//        id: String
//        name: String
//        url: String
//        author: User
//        tags: [FeedTag]
//        bundles: [Bundle]
//        likes: [User]
//     }
//     type Bundle {
//         id: String
//         name: String
//         description: String
//         author: User
//         tags: [BundleTag]
//         feeds: [Feed]
//         likes: [User]
//     }
//     type User {
//         id: String
//         auth0: String
//         nickname: String
//         picture: String
//         bundles: [Bundle]
//         feeds: [Feed]
//         feedLikes: [Feed]
//         bundleLikes: [Bundle]
//     }
//     type FeedTag {
//         id: String
//         name: String
//         feeds: [Feed]
//     }
//     type BundleTag {
//         id: String
//         name: String
//         bundles: [Bundle]
//     }
//     input FeedInput {
//         id: String
//     }
//     input BundleInput {
//         id: String
//     }
//     input FeedCreateInput {
//         id: String
//         url: String
//         name: String
//         tags: NestedFeedTagCreateInput
//     }
//     input NestedFeedTagCreateInput {
//         create: [FeedTagCreateInput]
//         connect: [FeedTagWhereUniqueInput]
//     }
//     input FeedTagCreateInput {
//         id: String
//         name: String
//     }
//     input FeedTagWhereUniqueInput {
//         id: String
//         name: String
//     }
//     input BundleCreateInput {
//         id: String
//         name: String
//         description: String
//         tags: NestedBundleTagCreateInput
//         feeds: NestedBundleFeedCreateInput
//     }
//     input NestedBundleTagCreateInput {
//         create: [BundleTagCreateInput]
//         connect: [BundleTagWhereUniqueInput]
//     }
//     input BundleTagCreateInput {
//         id: String
//         name: String
//     }
//     input BundleTagWhereUniqueInput {
//         id: String
//         name: String
//     }
//     input NestedBundleFeedCreateInput {
//         create: [FeedCreateInput]
//         connect: [FeedWhereUniqueInput]
//     }
//     input FeedWhereUniqueInput {
//         id: String
//         url: String
//     }
//     input LikeBundleInput {
//         bundleId: String
//         likeState: Boolean
//     }
//     input LikeFeedInput {
//         feedId: String
//         likeState: Boolean
//     }
//     input FindFeedTagsInput {
//         search: String
//     }
//     input FindBundleTagsInput {
//         search: String
//     }
//     input FindFeedsInput {
//         search: String
//     }
//     type Query {
//         hello: String
//         feed(data: FeedInput): Feed
//         bundle(data: BundleInput): Bundle
//         feeds: [Feed]
//         bundles: [Bundle]
//         findFeedTags(data: FindFeedTagsInput): [FeedTag]
//         findBundleTags(data: FindBundleTagsInput): [BundleTag]
//         findFeeds(data: FindFeedsInput): [Feed]
//     }
//     type Mutation {
//        createFeed(data: FeedCreateInput) : Feed 
//        createBundle(data: BundleCreateInput) : Bundle 
//        likeBundle(data: LikeBundleInput): Bundle
//        likeFeed(data: LikeFeedInput): Feed
//     }
// `;

/***/ }),

/***/ "./utils/api/verifyOwnership.ts":
/*!**************************************!*\
  !*** ./utils/api/verifyOwnership.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "verifyOwnership": function() { return /* binding */ verifyOwnership; }
/* harmony export */ });
const verifyOwnership = (item, user) => {
  const {
    author
  } = item;

  if (author.auth0 != user.auth0) {
    throw new Error('Access denied, user does not own this item.');
  }
};

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@auth0/nextjs-auth0");;

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("apollo-server-micro");;

/***/ }),

/***/ "graphql-middleware":
/*!*************************************!*\
  !*** external "graphql-middleware" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-middleware");;

/***/ }),

/***/ "graphql-shield":
/*!*********************************!*\
  !*** external "graphql-shield" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-shield");;

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tools");;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("lodash");;

/***/ }),

/***/ "micro-cors":
/*!*****************************!*\
  !*** external "micro-cors" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("micro-cors");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/graphql.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9wYWdlcy9hcGkvZ3JhcGhxbC50cyIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy9hcGkvY29udGV4dC50cyIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy9hcGkvbG9nLnRzIiwid2VicGFjazovL25ld3NwcmlzbS8uL3V0aWxzL2FwaS9wZXJtaXNzaW9ucy50cyIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy9hcGkvcmVzb2x2ZXJzLnRzIiwid2VicGFjazovL25ld3NwcmlzbS8uL3V0aWxzL2FwaS90eXBlRGVmcy50cyIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy9hcGkvdmVyaWZ5T3duZXJzaGlwLnRzIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcIkBhdXRoMC9uZXh0anMtYXV0aDBcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXItbWljcm9cIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJncmFwaHFsLW1pZGRsZXdhcmVcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJncmFwaHFsLXNoaWVsZFwiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcImdyYXBocWwtdG9vbHNcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJtaWNyby1jb3JzXCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbImNvcnMiLCJDb3JzIiwic2NoZW1hIiwiYXBwbHlNaWRkbGV3YXJlIiwibWFrZUV4ZWN1dGFibGVTY2hlbWEiLCJ0eXBlRGVmcyIsInJlc29sdmVycyIsImxvZyIsInBlcm1pc3Npb25zIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsImhhbmRsZXIiLCJBcG9sbG9TZXJ2ZXIiLCJjb250ZXh0IiwiY3JlYXRlSGFuZGxlciIsInBhdGgiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJzZW5kIiwicHJpc21hIiwiZ2xvYmFsVGhpcyIsIlByaXNtYUNsaWVudCIsInVzZXIiLCJhdXRoMFVzZXIiLCJnZXRTZXNzaW9uIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiYXV0aDAiLCJzdWIiLCJwaWN0dXJlIiwibmlja25hbWUiLCJjcmVhdGUiLCJkYXRhIiwiaWQiLCJ1dWlkdjQiLCJlIiwicmVzb2x2ZSIsInBhcmVudCIsImFyZ3MiLCJjdHgiLCJpbmZvIiwiY29uc29sZSIsInJ1bGVzIiwiaXNBdXRoZW50aWNhdGVkIiwicnVsZSIsIl9wYXJlbnQiLCJfYXJncyIsIl8iLCJzaGllbGQiLCJRdWVyeSIsImNyZWF0ZUZpZWxkUmVzb2x2ZXIiLCJtb2RlbE5hbWUiLCJwYXJOYW1lIiwibW9kZWxSZXNwb25zZSIsInNlbGVjdCIsIkZlZWQiLCJCdW5kbGUiLCJCdW5kbGVUYWciLCJGZWVkVGFnIiwiU2F2ZWRBcnRpY2xlIiwiVXNlciIsImhlbGxvIiwiZmVlZCIsImZlZWRzIiwiZmluZE1hbnkiLCJidW5kbGUiLCJidW5kbGVzIiwiZmluZEZlZWRUYWdzIiwiZmVlZFRhZyIsIm5hbWUiLCJjb250YWlucyIsInNlYXJjaCIsIm1vZGUiLCJmaW5kQnVuZGxlVGFncyIsImJ1bmRsZVRhZyIsImZpbmRGZWVkcyIsInNhdmVkQXJ0aWNsZSIsInVybCIsImF1dGhvcklkIiwic2F2ZWRBcnRpY2xlcyIsIm1lIiwiTXV0YXRpb24iLCJjcmVhdGVGZWVkIiwiYXV0aG9yIiwiY29ubmVjdCIsImNyZWF0ZUJ1bmRsZSIsImxpa2VCdW5kbGUiLCJidW5kbGVJZCIsImxpa2VTdGF0ZSIsImNvbm5lY3RTdGF0ZSIsInVwZGF0ZSIsImxpa2VzIiwibGlrZUZlZWQiLCJmZWVkSWQiLCJ1cGRhdGVGZWVkIiwiZmVlZFVwZGF0ZSIsImluY2x1ZGUiLCJ2ZXJpZnlPd25lcnNoaXAiLCJ1cGRhdGVCdW5kbGUiLCJidW5kbGVVcGRhdGUiLCJjcmVhdGVTYXZlZEFydGljbGUiLCJkZWxldGVCdW5kbGUiLCJkZWxldGUiLCJkZWxldGVGZWVkIiwiZGVsZXRlU2F2ZWRBcnRpY2xlIiwiZ3FsIiwiaXRlbSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxJQUFJLEdBQUdDLGlEQUFJLEVBQWpCO0FBRUEsTUFBTUMsTUFBTSxHQUFHQyxtRUFBZSxDQUFDQyxtRUFBb0IsQ0FBQztBQUFDQyxVQUFEO0FBQVdDLFdBQVNBO0FBQXBCLENBQUQsQ0FBckIsRUFBOENDLCtDQUE5QyxFQUFtREMsK0RBQW5ELENBQTlCO0FBRU8sTUFBTUMsTUFBTSxHQUFHO0FBQ3BCQyxLQUFHLEVBQUU7QUFDSEMsY0FBVSxFQUFFO0FBRFQ7QUFEZSxDQUFmO0FBT1AsTUFBTUMsT0FBTyxHQUFHLElBQUlDLDZEQUFKLENBQWlCO0FBQzdCUixVQUQ2QjtBQUU3QkgsUUFGNkI7QUFHN0JZLFNBQU9BO0FBSHNCLENBQWpCLEVBSVhDLGFBSlcsQ0FJRztBQUNmQyxNQUFJLEVBQUU7QUFEUyxDQUpILENBQWhCO0FBVUUsK0RBQWVoQixJQUFJLENBQUMsQ0FBQ2lCLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ2hDLE1BQUdELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLFNBQWxCLEVBQTZCO0FBQzNCLFdBQU9ELEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLEVBQVA7QUFDRDs7QUFDRCxTQUFPVCxPQUFPLENBQUNLLEdBQUQsRUFBTUMsR0FBTixDQUFkO0FBQ0QsQ0FMa0IsQ0FBbkIsRSxDQVNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLGtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblJBO0FBRU8sTUFBTTFFLFFBQVEsR0FBR3VHLG9EQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FwTk8sQyxDQXFPUDtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEs7Ozs7Ozs7Ozs7Ozs7OztBQ2hZTyxNQUFNUixlQUFlLEdBQUcsQ0FBQ1MsSUFBRCxFQUFPcEYsSUFBUCxLQUFnQjtBQUMvQyxRQUFNO0FBQUU2RDtBQUFGLE1BQWF1QixJQUFuQjs7QUFDQSxNQUFJdkIsTUFBTSxDQUFDeEQsS0FBUCxJQUFnQkwsSUFBSSxDQUFDSyxLQUF6QixFQUFnQztBQUM1QixVQUFNLElBQUlnRixLQUFKLENBQVUsNkNBQVYsQ0FBTjtBQUNDO0FBQ0osQ0FMTSxDOzs7Ozs7Ozs7OztBQ0FQLGlEOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2FwaS9ncmFwaHFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcG9sbG9TZXJ2ZXJ9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItbWljcm8nXHJcbmltcG9ydCB7IG1ha2VFeGVjdXRhYmxlU2NoZW1hIH0gZnJvbSAnZ3JhcGhxbC10b29scyc7XHJcbmltcG9ydCBDb3JzIGZyb20gJ21pY3JvLWNvcnMnXHJcbmltcG9ydCB7dHlwZURlZnN9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS90eXBlRGVmcydcclxuaW1wb3J0IHtyZXNvbHZlcnN9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS9yZXNvbHZlcnMnXHJcbmltcG9ydCB7YXBwbHlNaWRkbGV3YXJlfSBmcm9tICdncmFwaHFsLW1pZGRsZXdhcmUnXHJcbmltcG9ydCB7bG9nfSBmcm9tICcuLi8uLi91dGlscy9hcGkvbG9nJ1xyXG5pbXBvcnQge3Blcm1pc3Npb25zfSBmcm9tICcuLi8uLi91dGlscy9hcGkvcGVybWlzc2lvbnMnXHJcbmltcG9ydCB7Y29udGV4dH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpL2NvbnRleHQnXHJcblxyXG5jb25zdCBjb3JzID0gQ29ycygpO1xyXG5cclxuY29uc3Qgc2NoZW1hID0gYXBwbHlNaWRkbGV3YXJlKG1ha2VFeGVjdXRhYmxlU2NoZW1hKHt0eXBlRGVmcywgcmVzb2x2ZXJzfSksIGxvZywgcGVybWlzc2lvbnMpXHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIGFwaToge1xyXG4gICAgYm9keVBhcnNlcjogZmFsc2VcclxuICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBoYW5kbGVyID0gbmV3IEFwb2xsb1NlcnZlcih7XHJcbiAgICB0eXBlRGVmcyxcclxuICAgIHNjaGVtYSxcclxuICAgIGNvbnRleHQsXHJcbiAgfSkuY3JlYXRlSGFuZGxlcih7XHJcbiAgICBwYXRoOiAnL2FwaS9ncmFwaHFsJ1xyXG4gIH0pXHJcblxyXG4gIFxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjb3JzKChyZXEsIHJlcykgPT4ge1xyXG4gICAgaWYocmVxLm1ldGhvZCA9PT0gJ09QVElPTlMnKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCgpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcyk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gIC8vIGV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgLy8gICBhcGk6IHtcclxuICAvLyAgICAgYm9keVBhcnNlcjogZmFsc2UsXHJcbiAgLy8gICB9LFxyXG4gIC8vIH07XHJcbiAgXHJcbiAgXHJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgPSBoYW5kbGVyLnN0YXJ0KCkudGhlbigoKSA9PiBoYW5kbGVyLmNyZWF0ZUhhbmRsZXIoe3BhdGg6ICcnLH0pKVxyXG5cclxuXHJcbiAgXHJcbiAgIiwiaW1wb3J0IHtQcmlzbWFDbGllbnQsIFVzZXJ9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCc7XHJcbmltcG9ydCBhdXRoMCBmcm9tICcuLi9hdXRoMCc7XHJcbmltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcclxuXHJcbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudFxyXG5cclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG59IGVsc2Uge1xyXG4gICAgZ2xvYmFsVGhpc1sncHJpc21hJ10gPSBnbG9iYWxUaGlzWydwcmlzbWEnXSB8fFxyXG4gICAgICAgIG5ldyBQcmlzbWFDbGllbnQoKTtcclxuICAgIHByaXNtYSA9IGdsb2JhbFRoaXNbJ3ByaXNtYSddO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29udGV4dCA9IGFzeW5jICh7cmVxLCByZXN9KSA9PiB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCB7IHVzZXI6IGF1dGgwVXNlciB9ID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXEsIHJlcyk7XHJcbiAgICAgICAgLy8gY29uc3QgYXV0aDBVc2VyID0ge25pY2tuYW1lOiAnZmFrZXInLCBzdWI6IFwiMVwiLCBwaWN0dXJlOiBcIi9ibGFuay5wbmdcIn1cclxuICAgICAgICBsZXQgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe3doZXJlOiB7YXV0aDA6IGF1dGgwVXNlci5zdWJ9LFxyXG4gICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIXVzZXIpe1xyXG4gICAgICAgICAgICBjb25zdCB7cGljdHVyZSwgbmlja25hbWUsIHN1Yn0gPSBhdXRoMFVzZXI7XHJcbiAgICAgICAgICAgIHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHV1aWR2NCgpLFxyXG4gICAgICAgICAgICAgICAgYXV0aDA6IHN1YixcclxuICAgICAgICAgICAgICAgIHBpY3R1cmUsXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge3VzZXIsIHByaXNtYX07XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICByZXR1cm4ge3VzZXI6IHt9LCBwcmlzbWF9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbnRleHQge1xyXG4gICAgcHJpc21hOiBQcmlzbWFDbGllbnQ7XHJcbiAgICB1c2VyOiBVc2VyO1xyXG59IiwiZXhwb3J0IGNvbnN0IGxvZyA9IGFzeW5jIChyZXNvbHZlLCBwYXJlbnQsIGFyZ3MsIGN0eCwgaW5mbykgPT4ge1xyXG50cnkge1xyXG4gICBjb25zdCByZXMgPSBhd2FpdCByZXNvbHZlKCk7XHJcbiAgIHJldHVybiByZXM7XHJcbn0gY2F0Y2ggKGUpe1xyXG4gICBjb25zb2xlLmxvZyhlKVxyXG59XHJcbn07IiwiaW1wb3J0IHtydWxlLCBzaGllbGR9IGZyb20gJ2dyYXBocWwtc2hpZWxkJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5cclxuY29uc3QgcnVsZXMgPSB7XHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IHJ1bGUoKShhc3luYyhfcGFyZW50LCBfYXJncywgY29udGV4dCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBfLmlzRW1wdHkoY29udGV4dC51c2VyKSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgfSlcclxufVxyXG5leHBvcnQgY29uc3QgcGVybWlzc2lvbnMgPSBzaGllbGQoe1xyXG4gICAgUXVlcnk6IHtcclxuICAgICAgICAvLyBoZWxsbzogcnVsZXMuaXNBdXRoZW50aWNhdGVkXHJcbiAgICB9XHJcbn0pIiwiXHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuL2NvbnRleHQnO1xyXG5pbXBvcnQgeyB2ZXJpZnlPd25lcnNoaXAgfSBmcm9tICcuL3ZlcmlmeU93bmVyc2hpcCc7XHJcblxyXG5jb25zdCBjcmVhdGVGaWVsZFJlc29sdmVyID0gKG1vZGVsTmFtZSwgcGFyTmFtZSkgPT4gKHtcclxuICBbcGFyTmFtZV06IGFzeW5jICh7IGlkIH0sIGFyZ3MsIHsgcHJpc21hIH06IENvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IG1vZGVsUmVzcG9uc2UgPSBhd2FpdCBwcmlzbWFbbW9kZWxOYW1lXS5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgc2VsZWN0OiB7IFtwYXJOYW1lXTogdHJ1ZSB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbW9kZWxSZXNwb25zZVtwYXJOYW1lXTtcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XHJcbiAgRmVlZDoge1xyXG4gICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcignZmVlZCcsICdhdXRob3InKSxcclxuICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ2ZlZWQnLCAndGFncycpLFxyXG4gICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcignZmVlZCcsICdidW5kbGVzJyksXHJcbiAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCdmZWVkJywgJ2xpa2VzJyksXHJcbiAgfSxcclxuICBCdW5kbGU6IHtcclxuICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ2J1bmRsZScsICdhdXRob3InKSxcclxuICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ2J1bmRsZScsICd0YWdzJyksXHJcbiAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCdidW5kbGUnLCAnZmVlZHMnKSxcclxuICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ2J1bmRsZScsICdsaWtlcycpLFxyXG4gIH0sXHJcbiAgQnVuZGxlVGFnOiB7XHJcbiAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCdidW5kbGVUYWcnLCAnYnVuZGxlcycpLFxyXG4gIH0sXHJcbiAgRmVlZFRhZzoge1xyXG4gICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcignZmVlZFRhZycsICdmZWVkcycpLFxyXG4gIH0sXHJcbiAgU2F2ZWRBcnRpY2xlOiB7XHJcbiAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCdzYXZlZEFydGljbGUnLCAnYXV0aG9yJyksXHJcbiAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCdzYXZlZEFydGljbGUnLCAnZmVlZCcpLFxyXG4gIH0sXHJcbiAgVXNlcjoge1xyXG4gICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcigndXNlcicsICdidW5kbGVzJyksXHJcbiAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCd1c2VyJywgJ2ZlZWRzJyksXHJcbiAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCd1c2VyJywgJ2ZlZWRMaWtlcycpLFxyXG4gICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcigndXNlcicsICdidW5kbGVMaWtlcycpLFxyXG4gIH0sXHJcbiAgUXVlcnk6IHtcclxuICAgIGhlbGxvOiAocGFyZW50LCBhcmdzLCBjb250ZXh0OiBDb250ZXh0KSA9PiAnaGkhJyxcclxuICAgIGZlZWQ6IChwYXJlbnQsIHsgZGF0YTogeyBpZCB9IH0sIHsgcHJpc21hIH06IENvbnRleHQpID0+XHJcbiAgICAgIHByaXNtYS5mZWVkLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZCB9IH0pLFxyXG4gICAgZmVlZHM6IChwYXJlbnQsIGFyZ3MsIHsgcHJpc21hIH06IENvbnRleHQpID0+IHByaXNtYS5mZWVkLmZpbmRNYW55KCksXHJcbiAgICBidW5kbGU6IChwYXJlbnQsIHsgZGF0YTogeyBpZCB9IH0sIHsgcHJpc21hIH06IENvbnRleHQpID0+XHJcbiAgICAgIHByaXNtYS5idW5kbGUuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSksXHJcbiAgICBidW5kbGVzOiAocGFyZW50LCBhcmdzLCB7IHByaXNtYSB9OiBDb250ZXh0KSA9PiBwcmlzbWEuYnVuZGxlLmZpbmRNYW55KCksXHJcbiAgICBmaW5kRmVlZFRhZ3M6IChwYXJlbnQsIHsgZGF0YSB9LCB7IHByaXNtYSB9OiBDb250ZXh0KSA9PlxyXG4gICAgICBwcmlzbWEuZmVlZFRhZy5maW5kTWFueSh7XHJcbiAgICAgICAgd2hlcmU6IHsgbmFtZTogeyBjb250YWluczogZGF0YS5zZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB9KSxcclxuICAgIGZpbmRCdW5kbGVUYWdzOiAocGFyZW50LCB7IGRhdGEgfSwgeyBwcmlzbWEgfTogQ29udGV4dCkgPT5cclxuICAgICAgcHJpc21hLmJ1bmRsZVRhZy5maW5kTWFueSh7XHJcbiAgICAgICAgd2hlcmU6IHsgbmFtZTogeyBjb250YWluczogZGF0YS5zZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB9KSxcclxuICAgIGZpbmRGZWVkczogKHBhcmVudCwgeyBkYXRhIH0sIHsgcHJpc21hIH06IENvbnRleHQpID0+XHJcbiAgICAgIHByaXNtYS5mZWVkLmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZTogeyBuYW1lOiB7IGNvbnRhaW5zOiBkYXRhLnNlYXJjaCwgbW9kZTogJ2luc2Vuc2l0aXZlJyB9IH0sXHJcbiAgICAgIH0pLFxyXG4gICAgc2F2ZWRBcnRpY2xlOiAoXHJcbiAgICAgIHBhcmVudCxcclxuICAgICAgeyBkYXRhOiB7IHVybCB9IH0sXHJcbiAgICAgIHsgcHJpc21hLCB1c2VyOiB7IGlkOiBhdXRob3JJZCB9IH06IENvbnRleHQsXHJcbiAgICApID0+XHJcbiAgICAgIHByaXNtYS5zYXZlZEFydGljbGUuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IGAke2F1dGhvcklkfS0ke3VybH1gIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgc2F2ZWRBcnRpY2xlczogKFxyXG4gICAgICBwYXJlbnQsXHJcbiAgICAgIGFyZ3MsXHJcbiAgICAgIHsgcHJpc21hLCB1c2VyOiB7IGlkOiBhdXRob3JJZCB9IH06IENvbnRleHQsXHJcbiAgICApID0+XHJcbiAgICAgIHByaXNtYS5zYXZlZEFydGljbGUuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB7IGF1dGhvcklkOiBhdXRob3JJZCA/IGF1dGhvcklkIDogbnVsbCB9LFxyXG4gICAgICB9KSxcclxuICAgIG1lOiAocGFyZW50LCBhcmdzLCB7IHByaXNtYSwgdXNlcjogeyBpZCB9IH06IENvbnRleHQpID0+XHJcbiAgICAgIHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZCB9IH0pLFxyXG4gIH0sXHJcbiAgTXV0YXRpb246IHtcclxuICAgIGNyZWF0ZUZlZWQ6IChwYXJlbnQsIHsgZGF0YSB9LCB7IHByaXNtYSwgdXNlciB9OiBDb250ZXh0KSA9PlxyXG4gICAgICBwcmlzbWEuZmVlZC5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHsgLi4uZGF0YSwgYXV0aG9yOiB7IGNvbm5lY3Q6IHsgaWQ6IHVzZXIuaWQgfSB9IH0sXHJcbiAgICAgIH0pLFxyXG4gICAgY3JlYXRlQnVuZGxlOiAocGFyZW50LCB7IGRhdGEgfSwgeyBwcmlzbWEsIHVzZXIgfTogQ29udGV4dCkgPT5cclxuICAgICAgcHJpc21hLmJ1bmRsZS5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHsgLi4uZGF0YSwgYXV0aG9yOiB7IGNvbm5lY3Q6IHsgaWQ6IHVzZXIuaWQgfSB9IH0sXHJcbiAgICAgIH0pLFxyXG4gICAgbGlrZUJ1bmRsZTogKHBhcmVudCwgeyBkYXRhIH0sIHsgcHJpc21hLCB1c2VyIH06IENvbnRleHQpID0+IHtcclxuICAgICAgY29uc3QgeyBidW5kbGVJZCwgbGlrZVN0YXRlIH0gPSBkYXRhO1xyXG4gICAgICBjb25zdCBjb25uZWN0U3RhdGUgPSBsaWtlU3RhdGUgPyAnY29ubmVjdCcgOiAnZGlzY29ubmVjdCc7XHJcbiAgICAgIHJldHVybiBwcmlzbWEuYnVuZGxlLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IGJ1bmRsZUlkIH0sXHJcbiAgICAgICAgZGF0YTogeyBsaWtlczogeyBbY29ubmVjdFN0YXRlXTogeyBpZDogdXNlci5pZCB9IH0gfSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbGlrZUZlZWQ6IChwYXJlbnQsIHsgZGF0YSB9LCB7IHByaXNtYSwgdXNlciB9OiBDb250ZXh0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZmVlZElkLCBsaWtlU3RhdGUgfSA9IGRhdGE7XHJcbiAgICAgIGNvbnN0IGNvbm5lY3RTdGF0ZSA9IGxpa2VTdGF0ZSA/ICdjb25uZWN0JyA6ICdkaXNjb25uZWN0JztcclxuICAgICAgcmV0dXJuIHByaXNtYS5mZWVkLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IGZlZWRJZCB9LFxyXG4gICAgICAgIGRhdGE6IHsgbGlrZXM6IHsgW2Nvbm5lY3RTdGF0ZV06IHsgaWQ6IHVzZXIuaWQgfSB9IH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUZlZWQ6IGFzeW5jIChcclxuICAgICAgcGFyZW50LFxyXG4gICAgICB7IGRhdGE6IHsgaWQsIC4uLmZlZWRVcGRhdGUgfSB9LFxyXG4gICAgICB7IHByaXNtYSwgdXNlciB9OiBDb250ZXh0LFxyXG4gICAgKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZlZWQgPSBhd2FpdCBwcmlzbWEuZmVlZC5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHsgYXV0aG9yOiB0cnVlIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBhd2FpdCB2ZXJpZnlPd25lcnNoaXAoZmVlZCwgdXNlcik7XHJcbiAgICAgIHJldHVybiBwcmlzbWEuZmVlZC51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IC4uLmZlZWRVcGRhdGUgfSB9KTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVCdW5kbGU6IGFzeW5jIChcclxuICAgICAgcGFyZW50LFxyXG4gICAgICB7IGRhdGE6IHsgaWQsIC4uLmJ1bmRsZVVwZGF0ZSB9IH0sXHJcbiAgICAgIHsgcHJpc21hLCB1c2VyIH06IENvbnRleHQsXHJcbiAgICApID0+IHtcclxuICAgICAgY29uc3QgYnVuZGxlID0gYXdhaXQgcHJpc21hLmJ1bmRsZS5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHsgYXV0aG9yOiB0cnVlIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBhd2FpdCB2ZXJpZnlPd25lcnNoaXAoYnVuZGxlLCB1c2VyKTtcclxuICAgICAgcmV0dXJuIHByaXNtYS5idW5kbGUudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YTogeyAuLi5idW5kbGVVcGRhdGUgfSB9KTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVTYXZlZEFydGljbGU6IGFzeW5jIChwYXJlbnQsIHsgZGF0YSB9LCB7IHByaXNtYSwgdXNlciB9OiBDb250ZXh0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXV0aG9yID0ge2F1dGhvcjoge2Nvbm5lY3Q6IHtpZDogdXNlci5pZH19fTtcclxuICAgICAgICByZXR1cm4gcHJpc21hLnNhdmVkQXJ0aWNsZS5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICBpZDogYCR7dXNlci5pZH0tJHtkYXRhLnVybH1gLFxyXG4gICAgICAgICAgYXV0aG9yOiB7IGNvbm5lY3Q6IHsgaWQ6IHVzZXIuaWQgfSB9LFxyXG4gICAgICAgIH0sfSxcclxuICAgICAgKX0sXHJcbiAgICBkZWxldGVCdW5kbGU6IGFzeW5jIChcclxuICAgICAgcGFyZW50LFxyXG4gICAgICB7IGRhdGE6IHsgaWQgfSB9LFxyXG4gICAgICB7IHByaXNtYSwgdXNlciB9OiBDb250ZXh0LFxyXG4gICAgKSA9PiB7XHJcbiAgICAgIGNvbnN0IGJ1bmRsZSA9IGF3YWl0IHByaXNtYS5idW5kbGUuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICBpbmNsdWRlOiB7IGF1dGhvcjogdHJ1ZSB9LFxyXG4gICAgICB9KTtcclxuICAgICAgYXdhaXQgdmVyaWZ5T3duZXJzaGlwKGJ1bmRsZSwgdXNlcik7XHJcbiAgICAgIGF3YWl0IHByaXNtYS5idW5kbGUuZGVsZXRlKHsgd2hlcmU6IHsgaWQ6IGJ1bmRsZS5pZCB9IH0pO1xyXG4gICAgICByZXR1cm4gYnVuZGxlO1xyXG4gICAgfSxcclxuICAgIGRlbGV0ZUZlZWQ6IGFzeW5jIChwYXJlbnQsIHsgZGF0YTogeyBpZCB9IH0sIHsgcHJpc21hLCB1c2VyIH06IENvbnRleHQpID0+IHtcclxuICAgICAgY29uc3QgZmVlZCA9IGF3YWl0IHByaXNtYS5mZWVkLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgaW5jbHVkZTogeyBhdXRob3I6IHRydWUgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGF3YWl0IHZlcmlmeU93bmVyc2hpcChmZWVkLCB1c2VyKTtcclxuICAgICAgYXdhaXQgcHJpc21hLmZlZWQuZGVsZXRlKHsgd2hlcmU6IHsgaWQ6IGZlZWQuaWQgfSB9KTtcclxuICAgICAgcmV0dXJuIGZlZWQ7XHJcbiAgICB9LFxyXG4gICAgZGVsZXRlU2F2ZWRBcnRpY2xlOiBhc3luYyAoXHJcbiAgICAgIHBhcmVudCxcclxuICAgICAgeyBkYXRhOiB7IGlkIH0gfSxcclxuICAgICAgeyBwcmlzbWEsIHVzZXIgfTogQ29udGV4dCxcclxuICAgICkgPT4ge1xyXG4gICAgICBjb25zdCBzYXZlZEFydGljbGUgPSBhd2FpdCBwcmlzbWEuc2F2ZWRBcnRpY2xlLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgaW5jbHVkZTogeyBhdXRob3I6IHRydWUgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGF3YWl0IHZlcmlmeU93bmVyc2hpcChzYXZlZEFydGljbGUsIHVzZXIpO1xyXG4gICAgICBhd2FpdCBwcmlzbWEuc2F2ZWRBcnRpY2xlLmRlbGV0ZSh7IHdoZXJlOiB7IGlkOiBzYXZlZEFydGljbGUuaWQgfSB9KTtcclxuICAgICAgcmV0dXJuIHNhdmVkQXJ0aWNsZTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIC8vIGltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuLy8gaW1wb3J0IHtDb250ZXh0fSBmcm9tICcuL2NvbnRleHQnO1xyXG5cclxuXHJcbi8vIGNvbnN0IGNyZWF0ZUZpZWxkUmVzb2x2ZXIgPSAobW9kZWxOYW1lLCBwYXJOYW1lKSA9PiAoe1xyXG4vLyAgICAgW3Bhck5hbWVdOiBhc3luYyAoe2lkfSwgYXJncywge3ByaXNtYX06IENvbnRleHQpID0+IHtcclxuLy8gICAgICAgICBjb25zdCBtb2RlbFJlc3BvbnNlID0gYXdhaXQgcHJpc21hW21vZGVsTmFtZV0uZmluZFVuaXF1ZSh7XHJcbi8vICAgICAgICAgICAgIHdoZXJlOiB7aWR9LFxyXG4vLyAgICAgICAgICAgICBpbmNsdWRlOiB7W3Bhck5hbWVdOiB0cnVlfVxyXG4vLyAgICAgICAgIH0pIFxyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKG1vZGVsUmVzcG9uc2UpXHJcbi8vICAgICAgICAgcmV0dXJuIG1vZGVsUmVzcG9uc2VbcGFyTmFtZV1cclxuLy8gICAgIH1cclxuLy8gfSlcclxuICAgIFxyXG4vLyBleHBvcnQgY29uc3QgcmVzb2x2ZXJzID0ge1xyXG4vLyAgICAgRmVlZDoge1xyXG4gICAgICBcclxuLy8gICAgICAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCdmZWVkJywgJ2F1dGhvcicpLFxyXG4vLyAgICAgICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ2ZlZWQnLCAndGFncycpLFxyXG4vLyAgICAgICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ2ZlZWQnLCAnYnVuZGxlcycpLFxyXG4vLyAgICAgICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ2ZlZWQnLCAnbGlrZXMnKVxyXG4vLyAgICAgfSxcclxuLy8gICAgIEJ1bmRsZToge1xyXG4vLyAgICAgICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ2J1bmRsZScsICdhdXRob3InKSxcclxuLy8gICAgICAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCdidW5kbGUnLCAndGFncycpLFxyXG4vLyAgICAgICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ2J1bmRsZScsICdmZWVkcycpLFxyXG4vLyAgICAgICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ2J1bmRsZScsICdsaWtlcycpXHJcbi8vICAgICB9LFxyXG4vLyAgICAgQnVuZGxlVGFnOiB7XHJcbi8vICAgICAgICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcignYnVuZGxlVGFnJywgJ2J1bmRsZXMnKSxcclxuXHJcbi8vICAgICB9LFxyXG4vLyAgICAgRmVlZFRhZzoge1xyXG4vLyAgICAgICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ2ZlZWRUYWcnLCAnZmVlZHMnKSxcclxuXHJcbi8vICAgICB9LFxyXG4vLyAgICAgUXVlcnk6IHtcclxuLy8gICAgICAgICBoZWxsbzogKHBhcmVudCwgYXJncywgY29udGV4dDogQ29udGV4dCkgPT4gJ2hpIScsXHJcbi8vICAgICAgICAgZmVlZDogKHBhcmVudCwge2RhdGE6IHtpZH19LCB7cHJpc21hfTogQ29udGV4dCkgPT4gcHJpc21hLmZlZWQuZmluZFVuaXF1ZSh7d2hlcmU6IHtpZH19KSxcclxuLy8gICAgICAgICBmZWVkczogKHBhcmVudCwgYXJncywge3ByaXNtYX06IENvbnRleHQpID0+IHByaXNtYS5mZWVkLmZpbmRNYW55KCksXHJcbi8vICAgICAgICAgYnVuZGxlOiAocGFyZW50LCB7ZGF0YToge2lkfX0sIHtwcmlzbWF9OiBDb250ZXh0KSA9PiBwcmlzbWEuYnVuZGxlLmZpbmRVbmlxdWUoe3doZXJlOiB7aWR9fSksXHJcbi8vICAgICAgICAgYnVuZGxlczogKHBhcmVudCwgYXJncywge3ByaXNtYX06IENvbnRleHQpID0+IHByaXNtYS5idW5kbGUuZmluZE1hbnkoKSxcclxuLy8gICAgICAgICBmaW5kRmVlZFRhZ3M6KHBhcmVudCwgeyBkYXRhIH0sIHsgcHJpc21hIH06IENvbnRleHQpID0+XHJcbi8vICAgICAgICAgcHJpc21hLmZlZWRUYWcuZmluZE1hbnkoe1xyXG4vLyAgICAgICAgICAgd2hlcmU6IHsgbmFtZTogeyBjb250YWluczogZGF0YS5zZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9IFxyXG4vLyAgICAgICAgIH0pLFxyXG4vLyAgICAgICAgIGZpbmRCdW5kbGVUYWdzOiAocGFyZW50LCB7IGRhdGEgfSwgeyBwcmlzbWEgfTogQ29udGV4dCkgPT5cclxuLy8gICAgICAgICBwcmlzbWEuYnVuZGxlVGFnLmZpbmRNYW55KHtcclxuLy8gICAgICAgICAgIHdoZXJlOiB7IG5hbWU6IHsgY29udGFpbnM6IGRhdGEuc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuLy8gICAgICAgICB9KSxcclxuLy8gICAgICAgICBmaW5kRmVlZHM6IChwYXJlbnQsIHsgZGF0YSB9LCB7IHByaXNtYSB9OiBDb250ZXh0KSA9PlxyXG4vLyAgICAgICAgIHByaXNtYS5mZWVkLmZpbmRNYW55KHtcclxuLy8gICAgICAgICAgIHdoZXJlOiB7IG5hbWU6IHsgY29udGFpbnM6IGRhdGEuc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuLy8gICAgICAgICB9KSxcclxuLy8gICAgIE11dGF0aW9uOiB7XHJcbi8vICAgICAgICAgIGNyZWF0ZUZlZWQ6IGFzeW5jIChwYXJlbnQsIHtkYXRhfSwge3ByaXNtYSwgdXNlcn06IENvbnRleHQpICA9PiB7XHJcbi8vICAgICAgICAgICAgICBjb25zdCBhdXRob3IgPSB7IGF1dGhvcjoge2Nvbm5lY3Q6IHtpZDogdXNlci5pZH19fVxyXG4vLyAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hLmZlZWQuY3JlYXRlKHtkYXRhOiB7Li4uZGF0YSwgLi4uYXV0aG9yfX0pXHJcbi8vICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XHJcbi8vICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgIGNyZWF0ZUJ1bmRsZTogYXN5bmMgKHBhcmVudCwge2RhdGF9LCB7cHJpc21hLCB1c2VyfTogQ29udGV4dCkgID0+IHtcclxuLy8gICAgICAgICAgICAgIGNvbnN0IGF1dGhvciA9IHsgYXV0aG9yOiB7Y29ubmVjdDoge2lkOiB1c2VyLmlkfX19O1xyXG4vLyAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hLmJ1bmRsZS5jcmVhdGUoe2RhdGE6IHsuLi5kYXRhLCAuLi5hdXRob3J9LCBcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4vLyAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICBsaWtlQnVuZGxlOiAocGFyZW50LCB7ZGF0YX0sIHtwcmlzbWEsIHVzZXJ9KSA9PiB7XHJcbi8vICAgICAgICAgICAgICBjb25zdCB7YnVuZGxlSWQsIGxpa2VTdGF0ZX0gPSBkYXRhO1xyXG4vLyAgICAgICAgICAgICAgY29uc3QgY29ubmVjdFN0YXRlID0gbGlrZVN0YXRlID8gJ2Nvbm5lY3QnIDogJ2Rpc2Nvbm5lY3QnO1xyXG4vLyAgICAgICAgICAgICAgcmV0dXJuIHByaXNtYS5idW5kbGUudXBkYXRlKHtcclxuLy8gICAgICAgICAgICAgICAgICB3aGVyZToge2lkOiBidW5kbGVJZH0sXHJcbi8vICAgICAgICAgICAgICAgICAgZGF0YToge2xpa2VzOiB7W2Nvbm5lY3RTdGF0ZV06IHsgaWQ6IHVzZXIuaWR9IH19LFxyXG4vLyAgICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgIGxpa2VGZWVkOiAocGFyZW50LCB7ZGF0YX0sIHtwcmlzbWEsIHVzZXJ9KSA9PiB7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IHtmZWVkSWQsIGxpa2VTdGF0ZX0gPSBkYXRhO1xyXG4vLyAgICAgICAgICAgICBjb25zdCBjb25uZWN0U3RhdGUgPSBsaWtlU3RhdGUgPyAnY29ubmVjdCcgOiAnZGlzY29ubmVjdCc7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBwcmlzbWEuZmVlZC51cGRhdGUoe1xyXG4vLyAgICAgICAgICAgICAgICAgd2hlcmU6IHtpZDogZmVlZElkfSxcclxuLy8gICAgICAgICAgICAgICAgIGRhdGE6IHtsaWtlczoge1tjb25uZWN0U3RhdGVdOiB7IGlkOiB1c2VyLmlkfSB9fSxcclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfSIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItbWljcm8nO1xyXG5cclxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsYFxyXG4gIHR5cGUgRmVlZCB7XHJcbiAgICBpZDogU3RyaW5nXHJcbiAgICBuYW1lOiBTdHJpbmdcclxuICAgIHVybDogU3RyaW5nXHJcbiAgICBhdXRob3I6IFVzZXJcclxuICAgIHRhZ3M6IFtGZWVkVGFnXVxyXG4gICAgYnVuZGxlczogW0J1bmRsZV1cclxuICAgIGxpa2VzOiBbVXNlcl1cclxuICAgIHNhdmVkQXJ0aWNsZXM6IFtTYXZlZEFydGljbGVdXHJcbiAgfVxyXG5cclxuICB0eXBlIEJ1bmRsZSB7XHJcbiAgICBpZDogU3RyaW5nXHJcbiAgICBuYW1lOiBTdHJpbmdcclxuICAgIGRlc2NyaXB0aW9uOiBTdHJpbmdcclxuICAgIGF1dGhvcjogVXNlclxyXG4gICAgdGFnczogW0J1bmRsZVRhZ11cclxuICAgIGZlZWRzOiBbRmVlZF1cclxuICAgIGxpa2VzOiBbVXNlcl1cclxuICB9XHJcblxyXG4gIHR5cGUgVXNlciB7XHJcbiAgICBpZDogU3RyaW5nXHJcbiAgICBhdXRoMDogU3RyaW5nXHJcbiAgICBuaWNrbmFtZTogU3RyaW5nXHJcbiAgICBwaWN0dXJlOiBTdHJpbmdcclxuICAgIGJ1bmRsZXM6IFtCdW5kbGVdXHJcbiAgICBmZWVkczogW0ZlZWRdXHJcbiAgICBmZWVkTGlrZXM6IFtGZWVkXVxyXG4gICAgYnVuZGxlTGlrZXM6IFtCdW5kbGVdXHJcbiAgfVxyXG5cclxuICB0eXBlIEZlZWRUYWcge1xyXG4gICAgaWQ6IFN0cmluZ1xyXG4gICAgbmFtZTogU3RyaW5nXHJcbiAgICBmZWVkczogW0ZlZWRdXHJcbiAgfVxyXG5cclxuICB0eXBlIEJ1bmRsZVRhZyB7XHJcbiAgICBpZDogU3RyaW5nXHJcbiAgICBuYW1lOiBTdHJpbmdcclxuICAgIGJ1bmRsZXM6IFtCdW5kbGVdXHJcbiAgfVxyXG5cclxuICBpbnB1dCBGZWVkSW5wdXQge1xyXG4gICAgaWQ6IFN0cmluZ1xyXG4gIH1cclxuICBpbnB1dCBCdW5kbGVJbnB1dCB7XHJcbiAgICBpZDogU3RyaW5nXHJcbiAgfVxyXG5cclxuICBpbnB1dCBGZWVkQ3JlYXRlSW5wdXQge1xyXG4gICAgaWQ6IFN0cmluZ1xyXG4gICAgdXJsOiBTdHJpbmdcclxuICAgIG5hbWU6IFN0cmluZ1xyXG4gICAgdGFnczogTmVzdGVkRmVlZFRhZ0NyZWF0ZUlucHV0XHJcbiAgfVxyXG4gIGlucHV0IE5lc3RlZEZlZWRUYWdDcmVhdGVJbnB1dCB7XHJcbiAgICBjcmVhdGU6IFtGZWVkVGFnQ3JlYXRlSW5wdXRdXHJcbiAgICBjb25uZWN0OiBbRmVlZFRhZ1doZXJlVW5pcXVlSW5wdXRdXHJcbiAgfVxyXG5cclxuICBpbnB1dCBGZWVkVGFnQ3JlYXRlSW5wdXQge1xyXG4gICAgaWQ6IFN0cmluZ1xyXG4gICAgbmFtZTogU3RyaW5nXHJcbiAgfVxyXG4gIGlucHV0IEZlZWRUYWdXaGVyZVVuaXF1ZUlucHV0IHtcclxuICAgIGlkOiBTdHJpbmdcclxuICAgIG5hbWU6IFN0cmluZ1xyXG4gIH1cclxuXHJcbiAgaW5wdXQgQnVuZGxlQ3JlYXRlSW5wdXQge1xyXG4gICAgaWQ6IFN0cmluZ1xyXG4gICAgbmFtZTogU3RyaW5nXHJcbiAgICBkZXNjcmlwdGlvbjogU3RyaW5nXHJcbiAgICB0YWdzOiBOZXN0ZWRCdW5kbGVUYWdDcmVhdGVJbnB1dFxyXG4gICAgZmVlZHM6IE5lc3RlZEJ1bmRsZUZlZWRDcmVhdGVJbnB1dFxyXG4gIH1cclxuICBpbnB1dCBOZXN0ZWRCdW5kbGVUYWdDcmVhdGVJbnB1dCB7XHJcbiAgICBjcmVhdGU6IFtCdW5kbGVUYWdDcmVhdGVJbnB1dF1cclxuICAgIGNvbm5lY3Q6IFtCdW5kbGVUYWdXaGVyZVVuaXF1ZUlucHV0XVxyXG4gIH1cclxuXHJcbiAgaW5wdXQgQnVuZGxlVGFnQ3JlYXRlSW5wdXQge1xyXG4gICAgaWQ6IFN0cmluZ1xyXG4gICAgbmFtZTogU3RyaW5nXHJcbiAgfVxyXG5cclxuICBpbnB1dCBCdW5kbGVUYWdXaGVyZVVuaXF1ZUlucHV0IHtcclxuICAgIGlkOiBTdHJpbmdcclxuICAgIG5hbWU6IFN0cmluZ1xyXG4gIH1cclxuXHJcbiAgaW5wdXQgTmVzdGVkQnVuZGxlRmVlZENyZWF0ZUlucHV0IHtcclxuICAgIGNyZWF0ZTogW0ZlZWRDcmVhdGVJbnB1dF1cclxuICAgIGNvbm5lY3Q6IFtGZWVkV2hlcmVVbmlxdWVJbnB1dF1cclxuICB9XHJcblxyXG4gIGlucHV0IEZlZWRXaGVyZVVuaXF1ZUlucHV0IHtcclxuICAgIGlkOiBTdHJpbmdcclxuICAgIHVybDogU3RyaW5nXHJcbiAgfVxyXG5cclxuICBpbnB1dCBMaWtlQnVuZGxlSW5wdXQge1xyXG4gICAgYnVuZGxlSWQ6IFN0cmluZ1xyXG4gICAgbGlrZVN0YXRlOiBCb29sZWFuXHJcbiAgfVxyXG5cclxuICBpbnB1dCBMaWtlRmVlZElucHV0IHtcclxuICAgIGZlZWRJZDogU3RyaW5nXHJcbiAgICBsaWtlU3RhdGU6IEJvb2xlYW5cclxuICB9XHJcblxyXG4gIGlucHV0IEZpbmRGZWVkVGFnc0lucHV0IHtcclxuICAgIHNlYXJjaDogU3RyaW5nXHJcbiAgfVxyXG5cclxuICBpbnB1dCBGaW5kQnVuZGxlVGFnc0lucHV0IHtcclxuICAgIHNlYXJjaDogU3RyaW5nXHJcbiAgfVxyXG5cclxuICBpbnB1dCBGaW5kRmVlZHNJbnB1dCB7XHJcbiAgICBzZWFyY2g6IFN0cmluZ1xyXG4gIH1cclxuXHJcbiAgaW5wdXQgRmVlZFVwZGF0ZUlucHV0IHtcclxuICAgIGlkOiBTdHJpbmdcclxuICAgIHVybDogU3RyaW5nXHJcbiAgICBuYW1lOiBTdHJpbmdcclxuICAgIHRhZ3M6IE5lc3RlZEZlZWRUYWdVcGRhdGVJbnB1dFxyXG4gIH1cclxuXHJcbiAgaW5wdXQgTmVzdGVkRmVlZFRhZ1VwZGF0ZUlucHV0IHtcclxuICAgIGNyZWF0ZTogW0ZlZWRUYWdDcmVhdGVJbnB1dF1cclxuICAgIGNvbm5lY3Q6IFtGZWVkVGFnV2hlcmVVbmlxdWVJbnB1dF1cclxuICAgIGRpc2Nvbm5lY3Q6IFtGZWVkVGFnV2hlcmVVbmlxdWVJbnB1dF1cclxuICB9XHJcblxyXG4gIGlucHV0IEJ1bmRsZVVwZGF0ZUlucHV0IHtcclxuICAgIGlkOiBTdHJpbmdcclxuICAgIG5hbWU6IFN0cmluZ1xyXG4gICAgZGVzY3JpcHRpb246IFN0cmluZ1xyXG4gICAgdGFnczogTmVzdGVkQnVuZGxlVGFnVXBkYXRlSW5wdXRcclxuICAgIGZlZWRzOiBOZXN0ZWRCdW5kbGVGZWVkVXBkYXRlSW5wdXRcclxuICB9XHJcblxyXG4gIGlucHV0IE5lc3RlZEJ1bmRsZVRhZ1VwZGF0ZUlucHV0IHtcclxuICAgIGNyZWF0ZTogW0J1bmRsZVRhZ0NyZWF0ZUlucHV0XVxyXG4gICAgY29ubmVjdDogW0J1bmRsZVRhZ1doZXJlVW5pcXVlSW5wdXRdXHJcbiAgICBkaXNjb25uZWN0OiBbQnVuZGxlVGFnV2hlcmVVbmlxdWVJbnB1dF1cclxuICB9XHJcblxyXG4gIGlucHV0IE5lc3RlZEJ1bmRsZUZlZWRVcGRhdGVJbnB1dCB7XHJcbiAgICBjcmVhdGU6IFtGZWVkQ3JlYXRlSW5wdXRdXHJcbiAgICBjb25uZWN0OiBbRmVlZFdoZXJlVW5pcXVlSW5wdXRdXHJcbiAgICBkaXNjb25uZWN0OiBbRmVlZFdoZXJlVW5pcXVlSW5wdXRdXHJcbiAgfVxyXG5cclxuICBzY2FsYXIgSlNPTlxyXG5cclxuICB0eXBlIFNhdmVkQXJ0aWNsZSB7XHJcbiAgICBpZDogU3RyaW5nXHJcbiAgICBhdXRob3I6IFVzZXJcclxuICAgIHVybDogU3RyaW5nXHJcbiAgICBjb250ZW50OiBKU09OXHJcbiAgICBmZWVkOiBGZWVkXHJcbiAgfVxyXG5cclxuICBpbnB1dCBTYXZlZEFydGljbGVJbnB1dCB7XHJcbiAgICB1cmw6IFN0cmluZ1xyXG4gIH1cclxuXHJcbiAgaW5wdXQgU2F2ZWRBcnRpY2xlQ3JlYXRlSW5wdXQge1xyXG4gICAgZmVlZDogTmVzdGVkRmVlZENyZWF0ZUlucHV0XHJcbiAgICBjb250ZW50OiBKU09OXHJcbiAgICB1cmw6IFN0cmluZ1xyXG4gIH1cclxuXHJcbiAgaW5wdXQgTmVzdGVkRmVlZENyZWF0ZUlucHV0IHtcclxuICAgIGNvbm5lY3Q6IEZlZWRXaGVyZVVuaXF1ZUlucHV0XHJcbiAgfVxyXG5cclxuICBpbnB1dCBEZWxldGVTYXZlZEFydGljbGVJbnB1dCB7XHJcbiAgICBpZDogU3RyaW5nXHJcbiAgfVxyXG5cclxuICB0eXBlIFF1ZXJ5IHtcclxuICAgIGhlbGxvOiBTdHJpbmdcclxuICAgIGZlZWQoZGF0YTogRmVlZElucHV0KTogRmVlZFxyXG4gICAgYnVuZGxlKGRhdGE6IEJ1bmRsZUlucHV0KTogQnVuZGxlXHJcbiAgICBmZWVkczogW0ZlZWRdXHJcbiAgICBidW5kbGVzOiBbQnVuZGxlXVxyXG4gICAgZmluZEZlZWRUYWdzKGRhdGE6IEZpbmRGZWVkVGFnc0lucHV0KTogW0ZlZWRUYWddXHJcbiAgICBmaW5kQnVuZGxlVGFncyhkYXRhOiBGaW5kQnVuZGxlVGFnc0lucHV0KTogW0J1bmRsZVRhZ11cclxuICAgIGZpbmRGZWVkcyhkYXRhOiBGaW5kRmVlZHNJbnB1dCk6IFtGZWVkXVxyXG4gICAgc2F2ZWRBcnRpY2xlKGRhdGE6IFNhdmVkQXJ0aWNsZUlucHV0KTogU2F2ZWRBcnRpY2xlXHJcbiAgICBzYXZlZEFydGljbGVzOiBbU2F2ZWRBcnRpY2xlXVxyXG4gICAgbWU6IFVzZXJcclxuICB9XHJcbiAgdHlwZSBNdXRhdGlvbiB7XHJcbiAgICBjcmVhdGVGZWVkKGRhdGE6IEZlZWRDcmVhdGVJbnB1dCk6IEZlZWRcclxuICAgIGNyZWF0ZUJ1bmRsZShkYXRhOiBCdW5kbGVDcmVhdGVJbnB1dCk6IEJ1bmRsZVxyXG4gICAgbGlrZUJ1bmRsZShkYXRhOiBMaWtlQnVuZGxlSW5wdXQpOiBCdW5kbGVcclxuICAgIGxpa2VGZWVkKGRhdGE6IExpa2VGZWVkSW5wdXQpOiBGZWVkXHJcbiAgICB1cGRhdGVCdW5kbGUoZGF0YTogQnVuZGxlVXBkYXRlSW5wdXQpOiBCdW5kbGVcclxuICAgIHVwZGF0ZUZlZWQoZGF0YTogRmVlZFVwZGF0ZUlucHV0KTogRmVlZFxyXG4gICAgY3JlYXRlU2F2ZWRBcnRpY2xlKGRhdGE6IFNhdmVkQXJ0aWNsZUNyZWF0ZUlucHV0KTogU2F2ZWRBcnRpY2xlXHJcbiAgICBkZWxldGVCdW5kbGUoZGF0YTogQnVuZGxlSW5wdXQpOiBCdW5kbGVcclxuICAgIGRlbGV0ZUZlZWQoZGF0YTogRmVlZElucHV0KTogRmVlZFxyXG4gICAgZGVsZXRlU2F2ZWRBcnRpY2xlKGRhdGE6IERlbGV0ZVNhdmVkQXJ0aWNsZUlucHV0KTogU2F2ZWRBcnRpY2xlXHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1taWNybyc7XHJcblxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsYFxyXG4vLyAgICAgdHlwZSBGZWVkIHtcclxuLy8gICAgICAgIGlkOiBTdHJpbmdcclxuLy8gICAgICAgIG5hbWU6IFN0cmluZ1xyXG4vLyAgICAgICAgdXJsOiBTdHJpbmdcclxuLy8gICAgICAgIGF1dGhvcjogVXNlclxyXG4vLyAgICAgICAgdGFnczogW0ZlZWRUYWddXHJcbi8vICAgICAgICBidW5kbGVzOiBbQnVuZGxlXVxyXG4vLyAgICAgICAgbGlrZXM6IFtVc2VyXVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHR5cGUgQnVuZGxlIHtcclxuLy8gICAgICAgICBpZDogU3RyaW5nXHJcbi8vICAgICAgICAgbmFtZTogU3RyaW5nXHJcbi8vICAgICAgICAgZGVzY3JpcHRpb246IFN0cmluZ1xyXG4vLyAgICAgICAgIGF1dGhvcjogVXNlclxyXG4vLyAgICAgICAgIHRhZ3M6IFtCdW5kbGVUYWddXHJcbi8vICAgICAgICAgZmVlZHM6IFtGZWVkXVxyXG4vLyAgICAgICAgIGxpa2VzOiBbVXNlcl1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICB0eXBlIFVzZXIge1xyXG4vLyAgICAgICAgIGlkOiBTdHJpbmdcclxuLy8gICAgICAgICBhdXRoMDogU3RyaW5nXHJcbi8vICAgICAgICAgbmlja25hbWU6IFN0cmluZ1xyXG4vLyAgICAgICAgIHBpY3R1cmU6IFN0cmluZ1xyXG4vLyAgICAgICAgIGJ1bmRsZXM6IFtCdW5kbGVdXHJcbi8vICAgICAgICAgZmVlZHM6IFtGZWVkXVxyXG4vLyAgICAgICAgIGZlZWRMaWtlczogW0ZlZWRdXHJcbi8vICAgICAgICAgYnVuZGxlTGlrZXM6IFtCdW5kbGVdXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgdHlwZSBGZWVkVGFnIHtcclxuLy8gICAgICAgICBpZDogU3RyaW5nXHJcbi8vICAgICAgICAgbmFtZTogU3RyaW5nXHJcbi8vICAgICAgICAgZmVlZHM6IFtGZWVkXVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHR5cGUgQnVuZGxlVGFnIHtcclxuLy8gICAgICAgICBpZDogU3RyaW5nXHJcbi8vICAgICAgICAgbmFtZTogU3RyaW5nXHJcbi8vICAgICAgICAgYnVuZGxlczogW0J1bmRsZV1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpbnB1dCBGZWVkSW5wdXQge1xyXG4vLyAgICAgICAgIGlkOiBTdHJpbmdcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpbnB1dCBCdW5kbGVJbnB1dCB7XHJcbi8vICAgICAgICAgaWQ6IFN0cmluZ1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGlucHV0IEZlZWRDcmVhdGVJbnB1dCB7XHJcbi8vICAgICAgICAgaWQ6IFN0cmluZ1xyXG4vLyAgICAgICAgIHVybDogU3RyaW5nXHJcbi8vICAgICAgICAgbmFtZTogU3RyaW5nXHJcbi8vICAgICAgICAgdGFnczogTmVzdGVkRmVlZFRhZ0NyZWF0ZUlucHV0XHJcblxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGlucHV0IE5lc3RlZEZlZWRUYWdDcmVhdGVJbnB1dCB7XHJcbi8vICAgICAgICAgY3JlYXRlOiBbRmVlZFRhZ0NyZWF0ZUlucHV0XVxyXG4vLyAgICAgICAgIGNvbm5lY3Q6IFtGZWVkVGFnV2hlcmVVbmlxdWVJbnB1dF1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpbnB1dCBGZWVkVGFnQ3JlYXRlSW5wdXQge1xyXG4vLyAgICAgICAgIGlkOiBTdHJpbmdcclxuLy8gICAgICAgICBuYW1lOiBTdHJpbmdcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpbnB1dCBGZWVkVGFnV2hlcmVVbmlxdWVJbnB1dCB7XHJcbi8vICAgICAgICAgaWQ6IFN0cmluZ1xyXG4vLyAgICAgICAgIG5hbWU6IFN0cmluZ1xyXG5cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpbnB1dCBCdW5kbGVDcmVhdGVJbnB1dCB7XHJcbi8vICAgICAgICAgaWQ6IFN0cmluZ1xyXG4vLyAgICAgICAgIG5hbWU6IFN0cmluZ1xyXG4vLyAgICAgICAgIGRlc2NyaXB0aW9uOiBTdHJpbmdcclxuLy8gICAgICAgICB0YWdzOiBOZXN0ZWRCdW5kbGVUYWdDcmVhdGVJbnB1dFxyXG4vLyAgICAgICAgIGZlZWRzOiBOZXN0ZWRCdW5kbGVGZWVkQ3JlYXRlSW5wdXRcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpbnB1dCBOZXN0ZWRCdW5kbGVUYWdDcmVhdGVJbnB1dCB7XHJcbi8vICAgICAgICAgY3JlYXRlOiBbQnVuZGxlVGFnQ3JlYXRlSW5wdXRdXHJcbi8vICAgICAgICAgY29ubmVjdDogW0J1bmRsZVRhZ1doZXJlVW5pcXVlSW5wdXRdXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaW5wdXQgQnVuZGxlVGFnQ3JlYXRlSW5wdXQge1xyXG4vLyAgICAgICAgIGlkOiBTdHJpbmdcclxuLy8gICAgICAgICBuYW1lOiBTdHJpbmdcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpbnB1dCBCdW5kbGVUYWdXaGVyZVVuaXF1ZUlucHV0IHtcclxuLy8gICAgICAgICBpZDogU3RyaW5nXHJcbi8vICAgICAgICAgbmFtZTogU3RyaW5nXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaW5wdXQgTmVzdGVkQnVuZGxlRmVlZENyZWF0ZUlucHV0IHtcclxuLy8gICAgICAgICBjcmVhdGU6IFtGZWVkQ3JlYXRlSW5wdXRdXHJcbi8vICAgICAgICAgY29ubmVjdDogW0ZlZWRXaGVyZVVuaXF1ZUlucHV0XVxyXG5cclxuLy8gICAgIH1cclxuXHJcbiAgICBcclxuLy8gICAgIGlucHV0IEZlZWRXaGVyZVVuaXF1ZUlucHV0IHtcclxuLy8gICAgICAgICBpZDogU3RyaW5nXHJcbi8vICAgICAgICAgdXJsOiBTdHJpbmdcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpbnB1dCBMaWtlQnVuZGxlSW5wdXQge1xyXG4vLyAgICAgICAgIGJ1bmRsZUlkOiBTdHJpbmdcclxuLy8gICAgICAgICBsaWtlU3RhdGU6IEJvb2xlYW5cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpbnB1dCBMaWtlRmVlZElucHV0IHtcclxuLy8gICAgICAgICBmZWVkSWQ6IFN0cmluZ1xyXG4vLyAgICAgICAgIGxpa2VTdGF0ZTogQm9vbGVhblxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGlucHV0IEZpbmRGZWVkVGFnc0lucHV0IHtcclxuLy8gICAgICAgICBzZWFyY2g6IFN0cmluZ1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGlucHV0IEZpbmRCdW5kbGVUYWdzSW5wdXQge1xyXG4vLyAgICAgICAgIHNlYXJjaDogU3RyaW5nXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaW5wdXQgRmluZEZlZWRzSW5wdXQge1xyXG4vLyAgICAgICAgIHNlYXJjaDogU3RyaW5nXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgdHlwZSBRdWVyeSB7XHJcbi8vICAgICAgICAgaGVsbG86IFN0cmluZ1xyXG4vLyAgICAgICAgIGZlZWQoZGF0YTogRmVlZElucHV0KTogRmVlZFxyXG4vLyAgICAgICAgIGJ1bmRsZShkYXRhOiBCdW5kbGVJbnB1dCk6IEJ1bmRsZVxyXG4vLyAgICAgICAgIGZlZWRzOiBbRmVlZF1cclxuLy8gICAgICAgICBidW5kbGVzOiBbQnVuZGxlXVxyXG4vLyAgICAgICAgIGZpbmRGZWVkVGFncyhkYXRhOiBGaW5kRmVlZFRhZ3NJbnB1dCk6IFtGZWVkVGFnXVxyXG4vLyAgICAgICAgIGZpbmRCdW5kbGVUYWdzKGRhdGE6IEZpbmRCdW5kbGVUYWdzSW5wdXQpOiBbQnVuZGxlVGFnXVxyXG4vLyAgICAgICAgIGZpbmRGZWVkcyhkYXRhOiBGaW5kRmVlZHNJbnB1dCk6IFtGZWVkXVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHR5cGUgTXV0YXRpb24ge1xyXG4vLyAgICAgICAgY3JlYXRlRmVlZChkYXRhOiBGZWVkQ3JlYXRlSW5wdXQpIDogRmVlZCBcclxuLy8gICAgICAgIGNyZWF0ZUJ1bmRsZShkYXRhOiBCdW5kbGVDcmVhdGVJbnB1dCkgOiBCdW5kbGUgXHJcbi8vICAgICAgICBsaWtlQnVuZGxlKGRhdGE6IExpa2VCdW5kbGVJbnB1dCk6IEJ1bmRsZVxyXG4vLyAgICAgICAgbGlrZUZlZWQoZGF0YTogTGlrZUZlZWRJbnB1dCk6IEZlZWRcclxuLy8gICAgIH1cclxuLy8gYDtcclxuIiwiZXhwb3J0IGNvbnN0IHZlcmlmeU93bmVyc2hpcCA9IChpdGVtLCB1c2VyKSA9PiB7XHJcbmNvbnN0IHsgYXV0aG9yIH0gPSBpdGVtO1xyXG5pZiAoYXV0aG9yLmF1dGgwICE9IHVzZXIuYXV0aDApIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignQWNjZXNzIGRlbmllZCwgdXNlciBkb2VzIG5vdCBvd24gdGhpcyBpdGVtLicpIFxyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGF1dGgwL25leHRqcy1hdXRoMFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXItbWljcm9cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtbWlkZGxld2FyZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC1zaGllbGRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdG9vbHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWljcm8tY29yc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==