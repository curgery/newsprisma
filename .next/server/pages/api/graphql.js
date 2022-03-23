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
  Query: {
    savedArticle: rules.isAuthenticated,
    savedArticles: rules.isAuthenticated
  },
  Mutation: {
    createFeed: rules.isAuthenticated,
    createBundle: rules.isAuthenticated,
    likeFeed: rules.isAuthenticated,
    updateFeed: rules.isAuthenticated,
    updateBundle: rules.isAuthenticated,
    createSavedArticle: rules.isAuthenticated,
    deleteBundle: rules.isAuthenticated,
    deleteFeed: rules.isAuthenticated,
    deleteSavedArticle: rules.isAuthenticated
  }
}); // export const permissions = shield({
//     Query: {
//         // hello: rules.isAuthenticated
//     }
// })

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
    }) => prisma.savedArticle.create({
      data: _objectSpread(_objectSpread({}, data), {}, {
        id: `${user.id}-${data.url}`,
        author: {
          connect: {
            id: user.id
          }
        }
      })
    }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdzcHJpc20vLi9wYWdlcy9hcGkvZ3JhcGhxbC50cyIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy9hcGkvY29udGV4dC50cyIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy9hcGkvbG9nLnRzIiwid2VicGFjazovL25ld3NwcmlzbS8uL3V0aWxzL2FwaS9wZXJtaXNzaW9ucy50cyIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy9hcGkvcmVzb2x2ZXJzLnRzIiwid2VicGFjazovL25ld3NwcmlzbS8uL3V0aWxzL2FwaS90eXBlRGVmcy50cyIsIndlYnBhY2s6Ly9uZXdzcHJpc20vLi91dGlscy9hcGkvdmVyaWZ5T3duZXJzaGlwLnRzIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcIkBhdXRoMC9uZXh0anMtYXV0aDBcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXItbWljcm9cIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJncmFwaHFsLW1pZGRsZXdhcmVcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJncmFwaHFsLXNoaWVsZFwiIiwid2VicGFjazovL25ld3NwcmlzbS9leHRlcm5hbCBcImdyYXBocWwtdG9vbHNcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly9uZXdzcHJpc20vZXh0ZXJuYWwgXCJtaWNyby1jb3JzXCIiLCJ3ZWJwYWNrOi8vbmV3c3ByaXNtL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbImNvcnMiLCJDb3JzIiwic2NoZW1hIiwiYXBwbHlNaWRkbGV3YXJlIiwibWFrZUV4ZWN1dGFibGVTY2hlbWEiLCJ0eXBlRGVmcyIsInJlc29sdmVycyIsImxvZyIsInBlcm1pc3Npb25zIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsImhhbmRsZXIiLCJBcG9sbG9TZXJ2ZXIiLCJjb250ZXh0IiwiY3JlYXRlSGFuZGxlciIsInBhdGgiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJzZW5kIiwicHJpc21hIiwiZ2xvYmFsVGhpcyIsIlByaXNtYUNsaWVudCIsInVzZXIiLCJhdXRoMFVzZXIiLCJnZXRTZXNzaW9uIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiYXV0aDAiLCJzdWIiLCJwaWN0dXJlIiwibmlja25hbWUiLCJjcmVhdGUiLCJkYXRhIiwiaWQiLCJ1dWlkdjQiLCJlIiwicmVzb2x2ZSIsInBhcmVudCIsImFyZ3MiLCJjdHgiLCJpbmZvIiwiY29uc29sZSIsInJ1bGVzIiwiaXNBdXRoZW50aWNhdGVkIiwicnVsZSIsIl9wYXJlbnQiLCJfYXJncyIsIl8iLCJzaGllbGQiLCJRdWVyeSIsInNhdmVkQXJ0aWNsZSIsInNhdmVkQXJ0aWNsZXMiLCJNdXRhdGlvbiIsImNyZWF0ZUZlZWQiLCJjcmVhdGVCdW5kbGUiLCJsaWtlRmVlZCIsInVwZGF0ZUZlZWQiLCJ1cGRhdGVCdW5kbGUiLCJjcmVhdGVTYXZlZEFydGljbGUiLCJkZWxldGVCdW5kbGUiLCJkZWxldGVGZWVkIiwiZGVsZXRlU2F2ZWRBcnRpY2xlIiwiY3JlYXRlRmllbGRSZXNvbHZlciIsIm1vZGVsTmFtZSIsInBhck5hbWUiLCJtb2RlbFJlc3BvbnNlIiwic2VsZWN0IiwiRmVlZCIsIkJ1bmRsZSIsIkJ1bmRsZVRhZyIsIkZlZWRUYWciLCJTYXZlZEFydGljbGUiLCJVc2VyIiwiaGVsbG8iLCJmZWVkIiwiZmVlZHMiLCJmaW5kTWFueSIsImJ1bmRsZSIsImJ1bmRsZXMiLCJmaW5kRmVlZFRhZ3MiLCJmZWVkVGFnIiwibmFtZSIsImNvbnRhaW5zIiwic2VhcmNoIiwibW9kZSIsImZpbmRCdW5kbGVUYWdzIiwiYnVuZGxlVGFnIiwiZmluZEZlZWRzIiwidXJsIiwiYXV0aG9ySWQiLCJtZSIsImF1dGhvciIsImNvbm5lY3QiLCJsaWtlQnVuZGxlIiwiYnVuZGxlSWQiLCJsaWtlU3RhdGUiLCJjb25uZWN0U3RhdGUiLCJ1cGRhdGUiLCJsaWtlcyIsImZlZWRJZCIsImZlZWRVcGRhdGUiLCJpbmNsdWRlIiwidmVyaWZ5T3duZXJzaGlwIiwiYnVuZGxlVXBkYXRlIiwiZGVsZXRlIiwiZ3FsIiwiaXRlbSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxJQUFJLEdBQUdDLGlEQUFJLEVBQWpCO0FBRUEsTUFBTUMsTUFBTSxHQUFHQyxtRUFBZSxDQUFDQyxtRUFBb0IsQ0FBQztBQUFDQyxVQUFEO0FBQVdDLFdBQVNBO0FBQXBCLENBQUQsQ0FBckIsRUFBOENDLCtDQUE5QyxFQUFtREMsK0RBQW5ELENBQTlCO0FBRU8sTUFBTUMsTUFBTSxHQUFHO0FBQ3BCQyxLQUFHLEVBQUU7QUFDSEMsY0FBVSxFQUFFO0FBRFQ7QUFEZSxDQUFmO0FBT1AsTUFBTUMsT0FBTyxHQUFHLElBQUlDLDZEQUFKLENBQWlCO0FBQzdCUixVQUQ2QjtBQUU3QkgsUUFGNkI7QUFHN0JZLFNBQU9BO0FBSHNCLENBQWpCLEVBSVhDLGFBSlcsQ0FJRztBQUNmQyxNQUFJLEVBQUU7QUFEUyxDQUpILENBQWhCO0FBVUUsK0RBQWVoQixJQUFJLENBQUMsQ0FBQ2lCLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ2hDLE1BQUdELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLFNBQWxCLEVBQTZCO0FBQzNCLFdBQU9ELEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLEVBQVA7QUFDRDs7QUFDRCxTQUFPVCxPQUFPLENBQUNLLEdBQUQsRUFBTUMsR0FBTixDQUFkO0FBQ0QsQ0FMa0IsQ0FBbkIsRSxDQVNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLGtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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QWxCLEMsQ0ErS1A7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xSQTtBQUVPLE1BQU1oRCxRQUFRLEdBQUd1RyxvREFBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBcE5PLEMsQ0FxT1A7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLOzs7Ozs7Ozs7Ozs7Ozs7QUNoWU8sTUFBTUgsZUFBZSxHQUFHLENBQUNJLElBQUQsRUFBT3BGLElBQVAsS0FBZ0I7QUFDL0MsUUFBTTtBQUFFcUU7QUFBRixNQUFhZSxJQUFuQjs7QUFDQSxNQUFJZixNQUFNLENBQUNoRSxLQUFQLElBQWdCTCxJQUFJLENBQUNLLEtBQXpCLEVBQWdDO0FBQzVCLFVBQU0sSUFBSWdGLEtBQUosQ0FBVSw2Q0FBVixDQUFOO0FBQ0M7QUFDSixDQUxNLEM7Ozs7Ozs7Ozs7O0FDQVAsaUQ7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvYXBpL2dyYXBocWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fwb2xsb1NlcnZlcn0gZnJvbSAnYXBvbGxvLXNlcnZlci1taWNybydcclxuaW1wb3J0IHsgbWFrZUV4ZWN1dGFibGVTY2hlbWEgfSBmcm9tICdncmFwaHFsLXRvb2xzJztcclxuaW1wb3J0IENvcnMgZnJvbSAnbWljcm8tY29ycydcclxuaW1wb3J0IHt0eXBlRGVmc30gZnJvbSAnLi4vLi4vdXRpbHMvYXBpL3R5cGVEZWZzJ1xyXG5pbXBvcnQge3Jlc29sdmVyc30gZnJvbSAnLi4vLi4vdXRpbHMvYXBpL3Jlc29sdmVycydcclxuaW1wb3J0IHthcHBseU1pZGRsZXdhcmV9IGZyb20gJ2dyYXBocWwtbWlkZGxld2FyZSdcclxuaW1wb3J0IHtsb2d9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS9sb2cnXHJcbmltcG9ydCB7cGVybWlzc2lvbnN9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS9wZXJtaXNzaW9ucydcclxuaW1wb3J0IHtjb250ZXh0fSBmcm9tICcuLi8uLi91dGlscy9hcGkvY29udGV4dCdcclxuXHJcbmNvbnN0IGNvcnMgPSBDb3JzKCk7XHJcblxyXG5jb25zdCBzY2hlbWEgPSBhcHBseU1pZGRsZXdhcmUobWFrZUV4ZWN1dGFibGVTY2hlbWEoe3R5cGVEZWZzLCByZXNvbHZlcnN9KSwgbG9nLCBwZXJtaXNzaW9ucylcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgYXBpOiB7XHJcbiAgICBib2R5UGFyc2VyOiBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcclxuICAgIHR5cGVEZWZzLFxyXG4gICAgc2NoZW1hLFxyXG4gICAgY29udGV4dCxcclxuICB9KS5jcmVhdGVIYW5kbGVyKHtcclxuICAgIHBhdGg6ICcvYXBpL2dyYXBocWwnXHJcbiAgfSlcclxuXHJcbiAgXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNvcnMoKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBpZihyZXEubWV0aG9kID09PSAnT1BUSU9OUycpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKClcclxuICAgIH1cclxuICAgIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzKTtcclxuICB9KTtcclxuXHJcblxyXG5cclxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgLy8gZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICAvLyAgIGFwaToge1xyXG4gIC8vICAgICBib2R5UGFyc2VyOiBmYWxzZSxcclxuICAvLyAgIH0sXHJcbiAgLy8gfTtcclxuICBcclxuICBcclxuICAvLyBtb2R1bGUuZXhwb3J0cyA9IGhhbmRsZXIuc3RhcnQoKS50aGVuKCgpID0+IGhhbmRsZXIuY3JlYXRlSGFuZGxlcih7cGF0aDogJycsfSkpXHJcblxyXG5cclxuICBcclxuICAiLCJpbXBvcnQge1ByaXNtYUNsaWVudCwgVXNlcn0gZnJvbSAnQHByaXNtYS9jbGllbnQnXHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJztcclxuaW1wb3J0IHt2NCBhcyB1dWlkdjR9IGZyb20gJ3V1aWQnO1xyXG5cclxubGV0IHByaXNtYTogUHJpc21hQ2xpZW50XHJcblxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbn0gZWxzZSB7XHJcbiAgICBnbG9iYWxUaGlzWydwcmlzbWEnXSA9IGdsb2JhbFRoaXNbJ3ByaXNtYSddIHx8XHJcbiAgICAgICAgbmV3IFByaXNtYUNsaWVudCgpO1xyXG4gICAgcHJpc21hID0gZ2xvYmFsVGhpc1sncHJpc21hJ107XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb250ZXh0ID0gYXN5bmMgKHtyZXEsIHJlc30pID0+IHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgdXNlcjogYXV0aDBVc2VyIH0gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcSwgcmVzKTtcclxuICAgICAgICAvLyBjb25zdCBhdXRoMFVzZXIgPSB7bmlja25hbWU6ICdmYWtlcicsIHN1YjogXCIxXCIsIHBpY3R1cmU6IFwiL2JsYW5rLnBuZ1wifVxyXG4gICAgICAgIGxldCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7d2hlcmU6IHthdXRoMDogYXV0aDBVc2VyLnN1Yn0sXHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghdXNlcil7XHJcbiAgICAgICAgICAgIGNvbnN0IHtwaWN0dXJlLCBuaWNrbmFtZSwgc3VifSA9IGF1dGgwVXNlcjtcclxuICAgICAgICAgICAgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogdXVpZHY0KCksXHJcbiAgICAgICAgICAgICAgICBhdXRoMDogc3ViLFxyXG4gICAgICAgICAgICAgICAgcGljdHVyZSxcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7dXNlciwgcHJpc21hfTtcclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgIHJldHVybiB7dXNlcjoge30sIHByaXNtYX07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29udGV4dCB7XHJcbiAgICBwcmlzbWE6IFByaXNtYUNsaWVudDtcclxuICAgIHVzZXI6IFVzZXI7XHJcbn0iLCJleHBvcnQgY29uc3QgbG9nID0gYXN5bmMgKHJlc29sdmUsIHBhcmVudCwgYXJncywgY3R4LCBpbmZvKSA9PiB7XHJcbnRyeSB7XHJcbiAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlc29sdmUoKTtcclxuICAgcmV0dXJuIHJlcztcclxufSBjYXRjaCAoZSl7XHJcbiAgIGNvbnNvbGUubG9nKGUpXHJcbn1cclxufTsiLCJpbXBvcnQge3J1bGUsIHNoaWVsZH0gZnJvbSAnZ3JhcGhxbC1zaGllbGQnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcclxuXHJcblxyXG5jb25zdCBydWxlcyA9IHtcclxuICAgIGlzQXV0aGVudGljYXRlZDogcnVsZSgpKGFzeW5jKF9wYXJlbnQsIF9hcmdzLCBjb250ZXh0KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIF8uaXNFbXB0eShjb250ZXh0LnVzZXIpID8gZmFsc2UgOiB0cnVlXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGVybWlzc2lvbnMgPSBzaGllbGQoe1xyXG4gICAgUXVlcnk6IHtcclxuICAgICAgc2F2ZWRBcnRpY2xlOiBydWxlcy5pc0F1dGhlbnRpY2F0ZWQsXHJcbiAgICAgIHNhdmVkQXJ0aWNsZXM6IHJ1bGVzLmlzQXV0aGVudGljYXRlZCxcclxuICAgIH0sXHJcbiAgICBNdXRhdGlvbjoge1xyXG4gICAgICBjcmVhdGVGZWVkOiBydWxlcy5pc0F1dGhlbnRpY2F0ZWQsXHJcbiAgICAgIGNyZWF0ZUJ1bmRsZTogcnVsZXMuaXNBdXRoZW50aWNhdGVkLFxyXG4gICAgICBsaWtlRmVlZDogcnVsZXMuaXNBdXRoZW50aWNhdGVkLFxyXG4gICAgICB1cGRhdGVGZWVkOiBydWxlcy5pc0F1dGhlbnRpY2F0ZWQsXHJcbiAgICAgIHVwZGF0ZUJ1bmRsZTogcnVsZXMuaXNBdXRoZW50aWNhdGVkLFxyXG4gICAgICBjcmVhdGVTYXZlZEFydGljbGU6IHJ1bGVzLmlzQXV0aGVudGljYXRlZCxcclxuICAgICAgZGVsZXRlQnVuZGxlOiBydWxlcy5pc0F1dGhlbnRpY2F0ZWQsXHJcbiAgICAgIGRlbGV0ZUZlZWQ6IHJ1bGVzLmlzQXV0aGVudGljYXRlZCxcclxuICAgICAgZGVsZXRlU2F2ZWRBcnRpY2xlOiBydWxlcy5pc0F1dGhlbnRpY2F0ZWQsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBwZXJtaXNzaW9ucyA9IHNoaWVsZCh7XHJcbi8vICAgICBRdWVyeToge1xyXG4vLyAgICAgICAgIC8vIGhlbGxvOiBydWxlcy5pc0F1dGhlbnRpY2F0ZWRcclxuLy8gICAgIH1cclxuLy8gfSkiLCJcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4vY29udGV4dCc7XHJcbmltcG9ydCB7IHZlcmlmeU93bmVyc2hpcCB9IGZyb20gJy4vdmVyaWZ5T3duZXJzaGlwJztcclxuXHJcbmNvbnN0IGNyZWF0ZUZpZWxkUmVzb2x2ZXIgPSAobW9kZWxOYW1lLCBwYXJOYW1lKSA9PiAoe1xyXG4gIFtwYXJOYW1lXTogYXN5bmMgKHsgaWQgfSwgYXJncywgeyBwcmlzbWEgfTogQ29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgbW9kZWxSZXNwb25zZSA9IGF3YWl0IHByaXNtYVttb2RlbE5hbWVdLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBzZWxlY3Q6IHsgW3Bhck5hbWVdOiB0cnVlIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBtb2RlbFJlc3BvbnNlW3Bhck5hbWVdO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcclxuICBGZWVkOiB7XHJcbiAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCdmZWVkJywgJ2F1dGhvcicpLFxyXG4gICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcignZmVlZCcsICd0YWdzJyksXHJcbiAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCdmZWVkJywgJ2J1bmRsZXMnKSxcclxuICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ2ZlZWQnLCAnbGlrZXMnKSxcclxuICB9LFxyXG4gIEJ1bmRsZToge1xyXG4gICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcignYnVuZGxlJywgJ2F1dGhvcicpLFxyXG4gICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcignYnVuZGxlJywgJ3RhZ3MnKSxcclxuICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ2J1bmRsZScsICdmZWVkcycpLFxyXG4gICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcignYnVuZGxlJywgJ2xpa2VzJyksXHJcbiAgfSxcclxuICBCdW5kbGVUYWc6IHtcclxuICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ2J1bmRsZVRhZycsICdidW5kbGVzJyksXHJcbiAgfSxcclxuICBGZWVkVGFnOiB7XHJcbiAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCdmZWVkVGFnJywgJ2ZlZWRzJyksXHJcbiAgfSxcclxuICBTYXZlZEFydGljbGU6IHtcclxuICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ3NhdmVkQXJ0aWNsZScsICdhdXRob3InKSxcclxuICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ3NhdmVkQXJ0aWNsZScsICdmZWVkJyksXHJcbiAgfSxcclxuICBVc2VyOiB7XHJcbiAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCd1c2VyJywgJ2J1bmRsZXMnKSxcclxuICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ3VzZXInLCAnZmVlZHMnKSxcclxuICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ3VzZXInLCAnZmVlZExpa2VzJyksXHJcbiAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCd1c2VyJywgJ2J1bmRsZUxpa2VzJyksXHJcbiAgfSxcclxuICBRdWVyeToge1xyXG4gICAgaGVsbG86IChwYXJlbnQsIGFyZ3MsIGNvbnRleHQ6IENvbnRleHQpID0+ICdoaSEnLFxyXG4gICAgZmVlZDogKHBhcmVudCwgeyBkYXRhOiB7IGlkIH0gfSwgeyBwcmlzbWEgfTogQ29udGV4dCkgPT5cclxuICAgICAgcHJpc21hLmZlZWQuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSksXHJcbiAgICBmZWVkczogKHBhcmVudCwgYXJncywgeyBwcmlzbWEgfTogQ29udGV4dCkgPT4gcHJpc21hLmZlZWQuZmluZE1hbnkoKSxcclxuICAgIGJ1bmRsZTogKHBhcmVudCwgeyBkYXRhOiB7IGlkIH0gfSwgeyBwcmlzbWEgfTogQ29udGV4dCkgPT5cclxuICAgICAgcHJpc21hLmJ1bmRsZS5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQgfSB9KSxcclxuICAgIGJ1bmRsZXM6IChwYXJlbnQsIGFyZ3MsIHsgcHJpc21hIH06IENvbnRleHQpID0+IHByaXNtYS5idW5kbGUuZmluZE1hbnkoKSxcclxuICAgIGZpbmRGZWVkVGFnczogKHBhcmVudCwgeyBkYXRhIH0sIHsgcHJpc21hIH06IENvbnRleHQpID0+XHJcbiAgICAgIHByaXNtYS5mZWVkVGFnLmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZTogeyBuYW1lOiB7IGNvbnRhaW5zOiBkYXRhLnNlYXJjaCwgbW9kZTogJ2luc2Vuc2l0aXZlJyB9IH0sXHJcbiAgICAgIH0pLFxyXG4gICAgZmluZEJ1bmRsZVRhZ3M6IChwYXJlbnQsIHsgZGF0YSB9LCB7IHByaXNtYSB9OiBDb250ZXh0KSA9PlxyXG4gICAgICBwcmlzbWEuYnVuZGxlVGFnLmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZTogeyBuYW1lOiB7IGNvbnRhaW5zOiBkYXRhLnNlYXJjaCwgbW9kZTogJ2luc2Vuc2l0aXZlJyB9IH0sXHJcbiAgICAgIH0pLFxyXG4gICAgZmluZEZlZWRzOiAocGFyZW50LCB7IGRhdGEgfSwgeyBwcmlzbWEgfTogQ29udGV4dCkgPT5cclxuICAgICAgcHJpc21hLmZlZWQuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB7IG5hbWU6IHsgY29udGFpbnM6IGRhdGEuc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgfSksXHJcbiAgICBzYXZlZEFydGljbGU6IChcclxuICAgICAgcGFyZW50LFxyXG4gICAgICB7IGRhdGE6IHsgdXJsIH0gfSxcclxuICAgICAgeyBwcmlzbWEsIHVzZXI6IHsgaWQ6IGF1dGhvcklkIH0gfTogQ29udGV4dCxcclxuICAgICkgPT5cclxuICAgICAgcHJpc21hLnNhdmVkQXJ0aWNsZS5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogYCR7YXV0aG9ySWR9LSR7dXJsfWAgfSxcclxuICAgICAgfSksXHJcbiAgICBzYXZlZEFydGljbGVzOiAoXHJcbiAgICAgIHBhcmVudCxcclxuICAgICAgYXJncyxcclxuICAgICAgeyBwcmlzbWEsIHVzZXI6IHsgaWQ6IGF1dGhvcklkIH0gfTogQ29udGV4dCxcclxuICAgICkgPT5cclxuICAgICAgcHJpc21hLnNhdmVkQXJ0aWNsZS5maW5kTWFueSh7XHJcbiAgICAgICAgd2hlcmU6IHsgYXV0aG9ySWQ6IGF1dGhvcklkID8gYXV0aG9ySWQgOiBudWxsIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgbWU6IChwYXJlbnQsIGFyZ3MsIHsgcHJpc21hLCB1c2VyOiB7IGlkIH0gfTogQ29udGV4dCkgPT5cclxuICAgICAgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSksXHJcbiAgfSxcclxuICBNdXRhdGlvbjoge1xyXG4gICAgY3JlYXRlRmVlZDogKHBhcmVudCwgeyBkYXRhIH0sIHsgcHJpc21hLCB1c2VyIH06IENvbnRleHQpID0+XHJcbiAgICAgIHByaXNtYS5mZWVkLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YTogeyAuLi5kYXRhLCBhdXRob3I6IHsgY29ubmVjdDogeyBpZDogdXNlci5pZCB9IH0gfSxcclxuICAgICAgfSksXHJcbiAgICBjcmVhdGVCdW5kbGU6IChwYXJlbnQsIHsgZGF0YSB9LCB7IHByaXNtYSwgdXNlciB9OiBDb250ZXh0KSA9PlxyXG4gICAgICBwcmlzbWEuYnVuZGxlLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YTogeyAuLi5kYXRhLCBhdXRob3I6IHsgY29ubmVjdDogeyBpZDogdXNlci5pZCB9IH0gfSxcclxuICAgICAgfSksXHJcbiAgICBsaWtlQnVuZGxlOiAocGFyZW50LCB7IGRhdGEgfSwgeyBwcmlzbWEsIHVzZXIgfTogQ29udGV4dCkgPT4ge1xyXG4gICAgICBjb25zdCB7IGJ1bmRsZUlkLCBsaWtlU3RhdGUgfSA9IGRhdGE7XHJcbiAgICAgIGNvbnN0IGNvbm5lY3RTdGF0ZSA9IGxpa2VTdGF0ZSA/ICdjb25uZWN0JyA6ICdkaXNjb25uZWN0JztcclxuICAgICAgcmV0dXJuIHByaXNtYS5idW5kbGUudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogYnVuZGxlSWQgfSxcclxuICAgICAgICBkYXRhOiB7IGxpa2VzOiB7IFtjb25uZWN0U3RhdGVdOiB7IGlkOiB1c2VyLmlkIH0gfSB9LFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBsaWtlRmVlZDogKHBhcmVudCwgeyBkYXRhIH0sIHsgcHJpc21hLCB1c2VyIH06IENvbnRleHQpID0+IHtcclxuICAgICAgY29uc3QgeyBmZWVkSWQsIGxpa2VTdGF0ZSB9ID0gZGF0YTtcclxuICAgICAgY29uc3QgY29ubmVjdFN0YXRlID0gbGlrZVN0YXRlID8gJ2Nvbm5lY3QnIDogJ2Rpc2Nvbm5lY3QnO1xyXG4gICAgICByZXR1cm4gcHJpc21hLmZlZWQudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogZmVlZElkIH0sXHJcbiAgICAgICAgZGF0YTogeyBsaWtlczogeyBbY29ubmVjdFN0YXRlXTogeyBpZDogdXNlci5pZCB9IH0gfSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRmVlZDogYXN5bmMgKFxyXG4gICAgICBwYXJlbnQsXHJcbiAgICAgIHsgZGF0YTogeyBpZCwgLi4uZmVlZFVwZGF0ZSB9IH0sXHJcbiAgICAgIHsgcHJpc21hLCB1c2VyIH06IENvbnRleHQsXHJcbiAgICApID0+IHtcclxuICAgICAgY29uc3QgZmVlZCA9IGF3YWl0IHByaXNtYS5mZWVkLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgaW5jbHVkZTogeyBhdXRob3I6IHRydWUgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGF3YWl0IHZlcmlmeU93bmVyc2hpcChmZWVkLCB1c2VyKTtcclxuICAgICAgcmV0dXJuIHByaXNtYS5mZWVkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IHsgLi4uZmVlZFVwZGF0ZSB9IH0pO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUJ1bmRsZTogYXN5bmMgKFxyXG4gICAgICBwYXJlbnQsXHJcbiAgICAgIHsgZGF0YTogeyBpZCwgLi4uYnVuZGxlVXBkYXRlIH0gfSxcclxuICAgICAgeyBwcmlzbWEsIHVzZXIgfTogQ29udGV4dCxcclxuICAgICkgPT4ge1xyXG4gICAgICBjb25zdCBidW5kbGUgPSBhd2FpdCBwcmlzbWEuYnVuZGxlLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgaW5jbHVkZTogeyBhdXRob3I6IHRydWUgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGF3YWl0IHZlcmlmeU93bmVyc2hpcChidW5kbGUsIHVzZXIpO1xyXG4gICAgICByZXR1cm4gcHJpc21hLmJ1bmRsZS51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IC4uLmJ1bmRsZVVwZGF0ZSB9IH0pO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZVNhdmVkQXJ0aWNsZTogYXN5bmMgKHBhcmVudCwgeyBkYXRhIH0sIHsgcHJpc21hLCB1c2VyIH06IENvbnRleHQpID0+IFxyXG4gICAgICAgIHByaXNtYS5zYXZlZEFydGljbGUuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgaWQ6IGAke3VzZXIuaWR9LSR7ZGF0YS51cmx9YCxcclxuICAgICAgICAgIGF1dGhvcjogeyBjb25uZWN0OiB7IGlkOiB1c2VyLmlkIH0gfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgZGVsZXRlQnVuZGxlOiBhc3luYyAoXHJcbiAgICAgIHBhcmVudCxcclxuICAgICAgeyBkYXRhOiB7IGlkIH0gfSxcclxuICAgICAgeyBwcmlzbWEsIHVzZXIgfTogQ29udGV4dCxcclxuICAgICkgPT4ge1xyXG4gICAgICBjb25zdCBidW5kbGUgPSBhd2FpdCBwcmlzbWEuYnVuZGxlLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgaW5jbHVkZTogeyBhdXRob3I6IHRydWUgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGF3YWl0IHZlcmlmeU93bmVyc2hpcChidW5kbGUsIHVzZXIpO1xyXG4gICAgICBhd2FpdCBwcmlzbWEuYnVuZGxlLmRlbGV0ZSh7IHdoZXJlOiB7IGlkOiBidW5kbGUuaWQgfSB9KTtcclxuICAgICAgcmV0dXJuIGJ1bmRsZTtcclxuICAgIH0sXHJcbiAgICBkZWxldGVGZWVkOiBhc3luYyAocGFyZW50LCB7IGRhdGE6IHsgaWQgfSB9LCB7IHByaXNtYSwgdXNlciB9OiBDb250ZXh0KSA9PiB7XHJcbiAgICAgIGNvbnN0IGZlZWQgPSBhd2FpdCBwcmlzbWEuZmVlZC5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHsgYXV0aG9yOiB0cnVlIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBhd2FpdCB2ZXJpZnlPd25lcnNoaXAoZmVlZCwgdXNlcik7XHJcbiAgICAgIGF3YWl0IHByaXNtYS5mZWVkLmRlbGV0ZSh7IHdoZXJlOiB7IGlkOiBmZWVkLmlkIH0gfSk7XHJcbiAgICAgIHJldHVybiBmZWVkO1xyXG4gICAgfSxcclxuICAgIGRlbGV0ZVNhdmVkQXJ0aWNsZTogYXN5bmMgKFxyXG4gICAgICBwYXJlbnQsXHJcbiAgICAgIHsgZGF0YTogeyBpZCB9IH0sXHJcbiAgICAgIHsgcHJpc21hLCB1c2VyIH06IENvbnRleHQsXHJcbiAgICApID0+IHtcclxuICAgICAgY29uc3Qgc2F2ZWRBcnRpY2xlID0gYXdhaXQgcHJpc21hLnNhdmVkQXJ0aWNsZS5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHsgYXV0aG9yOiB0cnVlIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBhd2FpdCB2ZXJpZnlPd25lcnNoaXAoc2F2ZWRBcnRpY2xlLCB1c2VyKTtcclxuICAgICAgYXdhaXQgcHJpc21hLnNhdmVkQXJ0aWNsZS5kZWxldGUoeyB3aGVyZTogeyBpZDogc2F2ZWRBcnRpY2xlLmlkIH0gfSk7XHJcbiAgICAgIHJldHVybiBzYXZlZEFydGljbGU7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyAvLyBpbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbi8vIGltcG9ydCB7Q29udGV4dH0gZnJvbSAnLi9jb250ZXh0JztcclxuXHJcblxyXG4vLyBjb25zdCBjcmVhdGVGaWVsZFJlc29sdmVyID0gKG1vZGVsTmFtZSwgcGFyTmFtZSkgPT4gKHtcclxuLy8gICAgIFtwYXJOYW1lXTogYXN5bmMgKHtpZH0sIGFyZ3MsIHtwcmlzbWF9OiBDb250ZXh0KSA9PiB7XHJcbi8vICAgICAgICAgY29uc3QgbW9kZWxSZXNwb25zZSA9IGF3YWl0IHByaXNtYVttb2RlbE5hbWVdLmZpbmRVbmlxdWUoe1xyXG4vLyAgICAgICAgICAgICB3aGVyZToge2lkfSxcclxuLy8gICAgICAgICAgICAgaW5jbHVkZToge1twYXJOYW1lXTogdHJ1ZX1cclxuLy8gICAgICAgICB9KSBcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhtb2RlbFJlc3BvbnNlKVxyXG4vLyAgICAgICAgIHJldHVybiBtb2RlbFJlc3BvbnNlW3Bhck5hbWVdXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcbiAgICBcclxuLy8gZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcclxuLy8gICAgIEZlZWQ6IHtcclxuICAgICAgXHJcbi8vICAgICAgICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcignZmVlZCcsICdhdXRob3InKSxcclxuLy8gICAgICAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCdmZWVkJywgJ3RhZ3MnKSxcclxuLy8gICAgICAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCdmZWVkJywgJ2J1bmRsZXMnKSxcclxuLy8gICAgICAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCdmZWVkJywgJ2xpa2VzJylcclxuLy8gICAgIH0sXHJcbi8vICAgICBCdW5kbGU6IHtcclxuLy8gICAgICAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCdidW5kbGUnLCAnYXV0aG9yJyksXHJcbi8vICAgICAgICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcignYnVuZGxlJywgJ3RhZ3MnKSxcclxuLy8gICAgICAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCdidW5kbGUnLCAnZmVlZHMnKSxcclxuLy8gICAgICAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCdidW5kbGUnLCAnbGlrZXMnKVxyXG4vLyAgICAgfSxcclxuLy8gICAgIEJ1bmRsZVRhZzoge1xyXG4vLyAgICAgICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ2J1bmRsZVRhZycsICdidW5kbGVzJyksXHJcblxyXG4vLyAgICAgfSxcclxuLy8gICAgIEZlZWRUYWc6IHtcclxuLy8gICAgICAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCdmZWVkVGFnJywgJ2ZlZWRzJyksXHJcblxyXG4vLyAgICAgfSxcclxuLy8gICAgIFF1ZXJ5OiB7XHJcbi8vICAgICAgICAgaGVsbG86IChwYXJlbnQsIGFyZ3MsIGNvbnRleHQ6IENvbnRleHQpID0+ICdoaSEnLFxyXG4vLyAgICAgICAgIGZlZWQ6IChwYXJlbnQsIHtkYXRhOiB7aWR9fSwge3ByaXNtYX06IENvbnRleHQpID0+IHByaXNtYS5mZWVkLmZpbmRVbmlxdWUoe3doZXJlOiB7aWR9fSksXHJcbi8vICAgICAgICAgZmVlZHM6IChwYXJlbnQsIGFyZ3MsIHtwcmlzbWF9OiBDb250ZXh0KSA9PiBwcmlzbWEuZmVlZC5maW5kTWFueSgpLFxyXG4vLyAgICAgICAgIGJ1bmRsZTogKHBhcmVudCwge2RhdGE6IHtpZH19LCB7cHJpc21hfTogQ29udGV4dCkgPT4gcHJpc21hLmJ1bmRsZS5maW5kVW5pcXVlKHt3aGVyZToge2lkfX0pLFxyXG4vLyAgICAgICAgIGJ1bmRsZXM6IChwYXJlbnQsIGFyZ3MsIHtwcmlzbWF9OiBDb250ZXh0KSA9PiBwcmlzbWEuYnVuZGxlLmZpbmRNYW55KCksXHJcbi8vICAgICAgICAgZmluZEZlZWRUYWdzOihwYXJlbnQsIHsgZGF0YSB9LCB7IHByaXNtYSB9OiBDb250ZXh0KSA9PlxyXG4vLyAgICAgICAgIHByaXNtYS5mZWVkVGFnLmZpbmRNYW55KHtcclxuLy8gICAgICAgICAgIHdoZXJlOiB7IG5hbWU6IHsgY29udGFpbnM6IGRhdGEuc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSBcclxuLy8gICAgICAgICB9KSxcclxuLy8gICAgICAgICBmaW5kQnVuZGxlVGFnczogKHBhcmVudCwgeyBkYXRhIH0sIHsgcHJpc21hIH06IENvbnRleHQpID0+XHJcbi8vICAgICAgICAgcHJpc21hLmJ1bmRsZVRhZy5maW5kTWFueSh7XHJcbi8vICAgICAgICAgICB3aGVyZTogeyBuYW1lOiB7IGNvbnRhaW5zOiBkYXRhLnNlYXJjaCwgbW9kZTogJ2luc2Vuc2l0aXZlJyB9IH0sXHJcbi8vICAgICAgICAgfSksXHJcbi8vICAgICAgICAgZmluZEZlZWRzOiAocGFyZW50LCB7IGRhdGEgfSwgeyBwcmlzbWEgfTogQ29udGV4dCkgPT5cclxuLy8gICAgICAgICBwcmlzbWEuZmVlZC5maW5kTWFueSh7XHJcbi8vICAgICAgICAgICB3aGVyZTogeyBuYW1lOiB7IGNvbnRhaW5zOiBkYXRhLnNlYXJjaCwgbW9kZTogJ2luc2Vuc2l0aXZlJyB9IH0sXHJcbi8vICAgICAgICAgfSksXHJcbi8vICAgICBNdXRhdGlvbjoge1xyXG4vLyAgICAgICAgICBjcmVhdGVGZWVkOiBhc3luYyAocGFyZW50LCB7ZGF0YX0sIHtwcmlzbWEsIHVzZXJ9OiBDb250ZXh0KSAgPT4ge1xyXG4vLyAgICAgICAgICAgICAgY29uc3QgYXV0aG9yID0geyBhdXRob3I6IHtjb25uZWN0OiB7aWQ6IHVzZXIuaWR9fX1cclxuLy8gICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS5mZWVkLmNyZWF0ZSh7ZGF0YTogey4uLmRhdGEsIC4uLmF1dGhvcn19KVxyXG4vLyAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4vLyAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICBjcmVhdGVCdW5kbGU6IGFzeW5jIChwYXJlbnQsIHtkYXRhfSwge3ByaXNtYSwgdXNlcn06IENvbnRleHQpICA9PiB7XHJcbi8vICAgICAgICAgICAgICBjb25zdCBhdXRob3IgPSB7IGF1dGhvcjoge2Nvbm5lY3Q6IHtpZDogdXNlci5pZH19fTtcclxuLy8gICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS5idW5kbGUuY3JlYXRlKHtkYXRhOiB7Li4uZGF0YSwgLi4uYXV0aG9yfSwgXHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuLy8gICAgICAgICAgfSxcclxuLy8gICAgICAgICAgbGlrZUJ1bmRsZTogKHBhcmVudCwge2RhdGF9LCB7cHJpc21hLCB1c2VyfSkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgY29uc3Qge2J1bmRsZUlkLCBsaWtlU3RhdGV9ID0gZGF0YTtcclxuLy8gICAgICAgICAgICAgIGNvbnN0IGNvbm5lY3RTdGF0ZSA9IGxpa2VTdGF0ZSA/ICdjb25uZWN0JyA6ICdkaXNjb25uZWN0JztcclxuLy8gICAgICAgICAgICAgIHJldHVybiBwcmlzbWEuYnVuZGxlLnVwZGF0ZSh7XHJcbi8vICAgICAgICAgICAgICAgICAgd2hlcmU6IHtpZDogYnVuZGxlSWR9LFxyXG4vLyAgICAgICAgICAgICAgICAgIGRhdGE6IHtsaWtlczoge1tjb25uZWN0U3RhdGVdOiB7IGlkOiB1c2VyLmlkfSB9fSxcclxuLy8gICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICBsaWtlRmVlZDogKHBhcmVudCwge2RhdGF9LCB7cHJpc21hLCB1c2VyfSkgPT4ge1xyXG4vLyAgICAgICAgICAgICBjb25zdCB7ZmVlZElkLCBsaWtlU3RhdGV9ID0gZGF0YTtcclxuLy8gICAgICAgICAgICAgY29uc3QgY29ubmVjdFN0YXRlID0gbGlrZVN0YXRlID8gJ2Nvbm5lY3QnIDogJ2Rpc2Nvbm5lY3QnO1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gcHJpc21hLmZlZWQudXBkYXRlKHtcclxuLy8gICAgICAgICAgICAgICAgIHdoZXJlOiB7aWQ6IGZlZWRJZH0sXHJcbi8vICAgICAgICAgICAgICAgICBkYXRhOiB7bGlrZXM6IHtbY29ubmVjdFN0YXRlXTogeyBpZDogdXNlci5pZH0gfX0sXHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH0iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLW1pY3JvJztcclxuXHJcbmV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IGdxbGBcclxuICB0eXBlIEZlZWQge1xyXG4gICAgaWQ6IFN0cmluZ1xyXG4gICAgbmFtZTogU3RyaW5nXHJcbiAgICB1cmw6IFN0cmluZ1xyXG4gICAgYXV0aG9yOiBVc2VyXHJcbiAgICB0YWdzOiBbRmVlZFRhZ11cclxuICAgIGJ1bmRsZXM6IFtCdW5kbGVdXHJcbiAgICBsaWtlczogW1VzZXJdXHJcbiAgICBzYXZlZEFydGljbGVzOiBbU2F2ZWRBcnRpY2xlXVxyXG4gIH1cclxuXHJcbiAgdHlwZSBCdW5kbGUge1xyXG4gICAgaWQ6IFN0cmluZ1xyXG4gICAgbmFtZTogU3RyaW5nXHJcbiAgICBkZXNjcmlwdGlvbjogU3RyaW5nXHJcbiAgICBhdXRob3I6IFVzZXJcclxuICAgIHRhZ3M6IFtCdW5kbGVUYWddXHJcbiAgICBmZWVkczogW0ZlZWRdXHJcbiAgICBsaWtlczogW1VzZXJdXHJcbiAgfVxyXG5cclxuICB0eXBlIFVzZXIge1xyXG4gICAgaWQ6IFN0cmluZ1xyXG4gICAgYXV0aDA6IFN0cmluZ1xyXG4gICAgbmlja25hbWU6IFN0cmluZ1xyXG4gICAgcGljdHVyZTogU3RyaW5nXHJcbiAgICBidW5kbGVzOiBbQnVuZGxlXVxyXG4gICAgZmVlZHM6IFtGZWVkXVxyXG4gICAgZmVlZExpa2VzOiBbRmVlZF1cclxuICAgIGJ1bmRsZUxpa2VzOiBbQnVuZGxlXVxyXG4gIH1cclxuXHJcbiAgdHlwZSBGZWVkVGFnIHtcclxuICAgIGlkOiBTdHJpbmdcclxuICAgIG5hbWU6IFN0cmluZ1xyXG4gICAgZmVlZHM6IFtGZWVkXVxyXG4gIH1cclxuXHJcbiAgdHlwZSBCdW5kbGVUYWcge1xyXG4gICAgaWQ6IFN0cmluZ1xyXG4gICAgbmFtZTogU3RyaW5nXHJcbiAgICBidW5kbGVzOiBbQnVuZGxlXVxyXG4gIH1cclxuXHJcbiAgaW5wdXQgRmVlZElucHV0IHtcclxuICAgIGlkOiBTdHJpbmdcclxuICB9XHJcbiAgaW5wdXQgQnVuZGxlSW5wdXQge1xyXG4gICAgaWQ6IFN0cmluZ1xyXG4gIH1cclxuXHJcbiAgaW5wdXQgRmVlZENyZWF0ZUlucHV0IHtcclxuICAgIGlkOiBTdHJpbmdcclxuICAgIHVybDogU3RyaW5nXHJcbiAgICBuYW1lOiBTdHJpbmdcclxuICAgIHRhZ3M6IE5lc3RlZEZlZWRUYWdDcmVhdGVJbnB1dFxyXG4gIH1cclxuICBpbnB1dCBOZXN0ZWRGZWVkVGFnQ3JlYXRlSW5wdXQge1xyXG4gICAgY3JlYXRlOiBbRmVlZFRhZ0NyZWF0ZUlucHV0XVxyXG4gICAgY29ubmVjdDogW0ZlZWRUYWdXaGVyZVVuaXF1ZUlucHV0XVxyXG4gIH1cclxuXHJcbiAgaW5wdXQgRmVlZFRhZ0NyZWF0ZUlucHV0IHtcclxuICAgIGlkOiBTdHJpbmdcclxuICAgIG5hbWU6IFN0cmluZ1xyXG4gIH1cclxuICBpbnB1dCBGZWVkVGFnV2hlcmVVbmlxdWVJbnB1dCB7XHJcbiAgICBpZDogU3RyaW5nXHJcbiAgICBuYW1lOiBTdHJpbmdcclxuICB9XHJcblxyXG4gIGlucHV0IEJ1bmRsZUNyZWF0ZUlucHV0IHtcclxuICAgIGlkOiBTdHJpbmdcclxuICAgIG5hbWU6IFN0cmluZ1xyXG4gICAgZGVzY3JpcHRpb246IFN0cmluZ1xyXG4gICAgdGFnczogTmVzdGVkQnVuZGxlVGFnQ3JlYXRlSW5wdXRcclxuICAgIGZlZWRzOiBOZXN0ZWRCdW5kbGVGZWVkQ3JlYXRlSW5wdXRcclxuICB9XHJcbiAgaW5wdXQgTmVzdGVkQnVuZGxlVGFnQ3JlYXRlSW5wdXQge1xyXG4gICAgY3JlYXRlOiBbQnVuZGxlVGFnQ3JlYXRlSW5wdXRdXHJcbiAgICBjb25uZWN0OiBbQnVuZGxlVGFnV2hlcmVVbmlxdWVJbnB1dF1cclxuICB9XHJcblxyXG4gIGlucHV0IEJ1bmRsZVRhZ0NyZWF0ZUlucHV0IHtcclxuICAgIGlkOiBTdHJpbmdcclxuICAgIG5hbWU6IFN0cmluZ1xyXG4gIH1cclxuXHJcbiAgaW5wdXQgQnVuZGxlVGFnV2hlcmVVbmlxdWVJbnB1dCB7XHJcbiAgICBpZDogU3RyaW5nXHJcbiAgICBuYW1lOiBTdHJpbmdcclxuICB9XHJcblxyXG4gIGlucHV0IE5lc3RlZEJ1bmRsZUZlZWRDcmVhdGVJbnB1dCB7XHJcbiAgICBjcmVhdGU6IFtGZWVkQ3JlYXRlSW5wdXRdXHJcbiAgICBjb25uZWN0OiBbRmVlZFdoZXJlVW5pcXVlSW5wdXRdXHJcbiAgfVxyXG5cclxuICBpbnB1dCBGZWVkV2hlcmVVbmlxdWVJbnB1dCB7XHJcbiAgICBpZDogU3RyaW5nXHJcbiAgICB1cmw6IFN0cmluZ1xyXG4gIH1cclxuXHJcbiAgaW5wdXQgTGlrZUJ1bmRsZUlucHV0IHtcclxuICAgIGJ1bmRsZUlkOiBTdHJpbmdcclxuICAgIGxpa2VTdGF0ZTogQm9vbGVhblxyXG4gIH1cclxuXHJcbiAgaW5wdXQgTGlrZUZlZWRJbnB1dCB7XHJcbiAgICBmZWVkSWQ6IFN0cmluZ1xyXG4gICAgbGlrZVN0YXRlOiBCb29sZWFuXHJcbiAgfVxyXG5cclxuICBpbnB1dCBGaW5kRmVlZFRhZ3NJbnB1dCB7XHJcbiAgICBzZWFyY2g6IFN0cmluZ1xyXG4gIH1cclxuXHJcbiAgaW5wdXQgRmluZEJ1bmRsZVRhZ3NJbnB1dCB7XHJcbiAgICBzZWFyY2g6IFN0cmluZ1xyXG4gIH1cclxuXHJcbiAgaW5wdXQgRmluZEZlZWRzSW5wdXQge1xyXG4gICAgc2VhcmNoOiBTdHJpbmdcclxuICB9XHJcblxyXG4gIGlucHV0IEZlZWRVcGRhdGVJbnB1dCB7XHJcbiAgICBpZDogU3RyaW5nXHJcbiAgICB1cmw6IFN0cmluZ1xyXG4gICAgbmFtZTogU3RyaW5nXHJcbiAgICB0YWdzOiBOZXN0ZWRGZWVkVGFnVXBkYXRlSW5wdXRcclxuICB9XHJcblxyXG4gIGlucHV0IE5lc3RlZEZlZWRUYWdVcGRhdGVJbnB1dCB7XHJcbiAgICBjcmVhdGU6IFtGZWVkVGFnQ3JlYXRlSW5wdXRdXHJcbiAgICBjb25uZWN0OiBbRmVlZFRhZ1doZXJlVW5pcXVlSW5wdXRdXHJcbiAgICBkaXNjb25uZWN0OiBbRmVlZFRhZ1doZXJlVW5pcXVlSW5wdXRdXHJcbiAgfVxyXG5cclxuICBpbnB1dCBCdW5kbGVVcGRhdGVJbnB1dCB7XHJcbiAgICBpZDogU3RyaW5nXHJcbiAgICBuYW1lOiBTdHJpbmdcclxuICAgIGRlc2NyaXB0aW9uOiBTdHJpbmdcclxuICAgIHRhZ3M6IE5lc3RlZEJ1bmRsZVRhZ1VwZGF0ZUlucHV0XHJcbiAgICBmZWVkczogTmVzdGVkQnVuZGxlRmVlZFVwZGF0ZUlucHV0XHJcbiAgfVxyXG5cclxuICBpbnB1dCBOZXN0ZWRCdW5kbGVUYWdVcGRhdGVJbnB1dCB7XHJcbiAgICBjcmVhdGU6IFtCdW5kbGVUYWdDcmVhdGVJbnB1dF1cclxuICAgIGNvbm5lY3Q6IFtCdW5kbGVUYWdXaGVyZVVuaXF1ZUlucHV0XVxyXG4gICAgZGlzY29ubmVjdDogW0J1bmRsZVRhZ1doZXJlVW5pcXVlSW5wdXRdXHJcbiAgfVxyXG5cclxuICBpbnB1dCBOZXN0ZWRCdW5kbGVGZWVkVXBkYXRlSW5wdXQge1xyXG4gICAgY3JlYXRlOiBbRmVlZENyZWF0ZUlucHV0XVxyXG4gICAgY29ubmVjdDogW0ZlZWRXaGVyZVVuaXF1ZUlucHV0XVxyXG4gICAgZGlzY29ubmVjdDogW0ZlZWRXaGVyZVVuaXF1ZUlucHV0XVxyXG4gIH1cclxuXHJcbiAgc2NhbGFyIEpTT05cclxuXHJcbiAgdHlwZSBTYXZlZEFydGljbGUge1xyXG4gICAgaWQ6IFN0cmluZ1xyXG4gICAgYXV0aG9yOiBVc2VyXHJcbiAgICB1cmw6IFN0cmluZ1xyXG4gICAgY29udGVudDogSlNPTlxyXG4gICAgZmVlZDogRmVlZFxyXG4gIH1cclxuXHJcbiAgaW5wdXQgU2F2ZWRBcnRpY2xlSW5wdXQge1xyXG4gICAgdXJsOiBTdHJpbmdcclxuICB9XHJcblxyXG4gIGlucHV0IFNhdmVkQXJ0aWNsZUNyZWF0ZUlucHV0IHtcclxuICAgIGZlZWQ6IE5lc3RlZEZlZWRDcmVhdGVJbnB1dFxyXG4gICAgY29udGVudDogSlNPTlxyXG4gICAgdXJsOiBTdHJpbmdcclxuICB9XHJcblxyXG4gIGlucHV0IE5lc3RlZEZlZWRDcmVhdGVJbnB1dCB7XHJcbiAgICBjb25uZWN0OiBGZWVkV2hlcmVVbmlxdWVJbnB1dFxyXG4gIH1cclxuXHJcbiAgaW5wdXQgRGVsZXRlU2F2ZWRBcnRpY2xlSW5wdXQge1xyXG4gICAgaWQ6IFN0cmluZ1xyXG4gIH1cclxuXHJcbiAgdHlwZSBRdWVyeSB7XHJcbiAgICBoZWxsbzogU3RyaW5nXHJcbiAgICBmZWVkKGRhdGE6IEZlZWRJbnB1dCk6IEZlZWRcclxuICAgIGJ1bmRsZShkYXRhOiBCdW5kbGVJbnB1dCk6IEJ1bmRsZVxyXG4gICAgZmVlZHM6IFtGZWVkXVxyXG4gICAgYnVuZGxlczogW0J1bmRsZV1cclxuICAgIGZpbmRGZWVkVGFncyhkYXRhOiBGaW5kRmVlZFRhZ3NJbnB1dCk6IFtGZWVkVGFnXVxyXG4gICAgZmluZEJ1bmRsZVRhZ3MoZGF0YTogRmluZEJ1bmRsZVRhZ3NJbnB1dCk6IFtCdW5kbGVUYWddXHJcbiAgICBmaW5kRmVlZHMoZGF0YTogRmluZEZlZWRzSW5wdXQpOiBbRmVlZF1cclxuICAgIHNhdmVkQXJ0aWNsZShkYXRhOiBTYXZlZEFydGljbGVJbnB1dCk6IFNhdmVkQXJ0aWNsZVxyXG4gICAgc2F2ZWRBcnRpY2xlczogW1NhdmVkQXJ0aWNsZV1cclxuICAgIG1lOiBVc2VyXHJcbiAgfVxyXG4gIHR5cGUgTXV0YXRpb24ge1xyXG4gICAgY3JlYXRlRmVlZChkYXRhOiBGZWVkQ3JlYXRlSW5wdXQpOiBGZWVkXHJcbiAgICBjcmVhdGVCdW5kbGUoZGF0YTogQnVuZGxlQ3JlYXRlSW5wdXQpOiBCdW5kbGVcclxuICAgIGxpa2VCdW5kbGUoZGF0YTogTGlrZUJ1bmRsZUlucHV0KTogQnVuZGxlXHJcbiAgICBsaWtlRmVlZChkYXRhOiBMaWtlRmVlZElucHV0KTogRmVlZFxyXG4gICAgdXBkYXRlQnVuZGxlKGRhdGE6IEJ1bmRsZVVwZGF0ZUlucHV0KTogQnVuZGxlXHJcbiAgICB1cGRhdGVGZWVkKGRhdGE6IEZlZWRVcGRhdGVJbnB1dCk6IEZlZWRcclxuICAgIGNyZWF0ZVNhdmVkQXJ0aWNsZShkYXRhOiBTYXZlZEFydGljbGVDcmVhdGVJbnB1dCk6IFNhdmVkQXJ0aWNsZVxyXG4gICAgZGVsZXRlQnVuZGxlKGRhdGE6IEJ1bmRsZUlucHV0KTogQnVuZGxlXHJcbiAgICBkZWxldGVGZWVkKGRhdGE6IEZlZWRJbnB1dCk6IEZlZWRcclxuICAgIGRlbGV0ZVNhdmVkQXJ0aWNsZShkYXRhOiBEZWxldGVTYXZlZEFydGljbGVJbnB1dCk6IFNhdmVkQXJ0aWNsZVxyXG4gIH1cclxuYDtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIGltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItbWljcm8nO1xyXG5cclxuXHJcbi8vIGV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IGdxbGBcclxuLy8gICAgIHR5cGUgRmVlZCB7XHJcbi8vICAgICAgICBpZDogU3RyaW5nXHJcbi8vICAgICAgICBuYW1lOiBTdHJpbmdcclxuLy8gICAgICAgIHVybDogU3RyaW5nXHJcbi8vICAgICAgICBhdXRob3I6IFVzZXJcclxuLy8gICAgICAgIHRhZ3M6IFtGZWVkVGFnXVxyXG4vLyAgICAgICAgYnVuZGxlczogW0J1bmRsZV1cclxuLy8gICAgICAgIGxpa2VzOiBbVXNlcl1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICB0eXBlIEJ1bmRsZSB7XHJcbi8vICAgICAgICAgaWQ6IFN0cmluZ1xyXG4vLyAgICAgICAgIG5hbWU6IFN0cmluZ1xyXG4vLyAgICAgICAgIGRlc2NyaXB0aW9uOiBTdHJpbmdcclxuLy8gICAgICAgICBhdXRob3I6IFVzZXJcclxuLy8gICAgICAgICB0YWdzOiBbQnVuZGxlVGFnXVxyXG4vLyAgICAgICAgIGZlZWRzOiBbRmVlZF1cclxuLy8gICAgICAgICBsaWtlczogW1VzZXJdXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgdHlwZSBVc2VyIHtcclxuLy8gICAgICAgICBpZDogU3RyaW5nXHJcbi8vICAgICAgICAgYXV0aDA6IFN0cmluZ1xyXG4vLyAgICAgICAgIG5pY2tuYW1lOiBTdHJpbmdcclxuLy8gICAgICAgICBwaWN0dXJlOiBTdHJpbmdcclxuLy8gICAgICAgICBidW5kbGVzOiBbQnVuZGxlXVxyXG4vLyAgICAgICAgIGZlZWRzOiBbRmVlZF1cclxuLy8gICAgICAgICBmZWVkTGlrZXM6IFtGZWVkXVxyXG4vLyAgICAgICAgIGJ1bmRsZUxpa2VzOiBbQnVuZGxlXVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHR5cGUgRmVlZFRhZyB7XHJcbi8vICAgICAgICAgaWQ6IFN0cmluZ1xyXG4vLyAgICAgICAgIG5hbWU6IFN0cmluZ1xyXG4vLyAgICAgICAgIGZlZWRzOiBbRmVlZF1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICB0eXBlIEJ1bmRsZVRhZyB7XHJcbi8vICAgICAgICAgaWQ6IFN0cmluZ1xyXG4vLyAgICAgICAgIG5hbWU6IFN0cmluZ1xyXG4vLyAgICAgICAgIGJ1bmRsZXM6IFtCdW5kbGVdXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaW5wdXQgRmVlZElucHV0IHtcclxuLy8gICAgICAgICBpZDogU3RyaW5nXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaW5wdXQgQnVuZGxlSW5wdXQge1xyXG4vLyAgICAgICAgIGlkOiBTdHJpbmdcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpbnB1dCBGZWVkQ3JlYXRlSW5wdXQge1xyXG4vLyAgICAgICAgIGlkOiBTdHJpbmdcclxuLy8gICAgICAgICB1cmw6IFN0cmluZ1xyXG4vLyAgICAgICAgIG5hbWU6IFN0cmluZ1xyXG4vLyAgICAgICAgIHRhZ3M6IE5lc3RlZEZlZWRUYWdDcmVhdGVJbnB1dFxyXG5cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpbnB1dCBOZXN0ZWRGZWVkVGFnQ3JlYXRlSW5wdXQge1xyXG4vLyAgICAgICAgIGNyZWF0ZTogW0ZlZWRUYWdDcmVhdGVJbnB1dF1cclxuLy8gICAgICAgICBjb25uZWN0OiBbRmVlZFRhZ1doZXJlVW5pcXVlSW5wdXRdXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaW5wdXQgRmVlZFRhZ0NyZWF0ZUlucHV0IHtcclxuLy8gICAgICAgICBpZDogU3RyaW5nXHJcbi8vICAgICAgICAgbmFtZTogU3RyaW5nXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaW5wdXQgRmVlZFRhZ1doZXJlVW5pcXVlSW5wdXQge1xyXG4vLyAgICAgICAgIGlkOiBTdHJpbmdcclxuLy8gICAgICAgICBuYW1lOiBTdHJpbmdcclxuXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaW5wdXQgQnVuZGxlQ3JlYXRlSW5wdXQge1xyXG4vLyAgICAgICAgIGlkOiBTdHJpbmdcclxuLy8gICAgICAgICBuYW1lOiBTdHJpbmdcclxuLy8gICAgICAgICBkZXNjcmlwdGlvbjogU3RyaW5nXHJcbi8vICAgICAgICAgdGFnczogTmVzdGVkQnVuZGxlVGFnQ3JlYXRlSW5wdXRcclxuLy8gICAgICAgICBmZWVkczogTmVzdGVkQnVuZGxlRmVlZENyZWF0ZUlucHV0XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaW5wdXQgTmVzdGVkQnVuZGxlVGFnQ3JlYXRlSW5wdXQge1xyXG4vLyAgICAgICAgIGNyZWF0ZTogW0J1bmRsZVRhZ0NyZWF0ZUlucHV0XVxyXG4vLyAgICAgICAgIGNvbm5lY3Q6IFtCdW5kbGVUYWdXaGVyZVVuaXF1ZUlucHV0XVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGlucHV0IEJ1bmRsZVRhZ0NyZWF0ZUlucHV0IHtcclxuLy8gICAgICAgICBpZDogU3RyaW5nXHJcbi8vICAgICAgICAgbmFtZTogU3RyaW5nXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaW5wdXQgQnVuZGxlVGFnV2hlcmVVbmlxdWVJbnB1dCB7XHJcbi8vICAgICAgICAgaWQ6IFN0cmluZ1xyXG4vLyAgICAgICAgIG5hbWU6IFN0cmluZ1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGlucHV0IE5lc3RlZEJ1bmRsZUZlZWRDcmVhdGVJbnB1dCB7XHJcbi8vICAgICAgICAgY3JlYXRlOiBbRmVlZENyZWF0ZUlucHV0XVxyXG4vLyAgICAgICAgIGNvbm5lY3Q6IFtGZWVkV2hlcmVVbmlxdWVJbnB1dF1cclxuXHJcbi8vICAgICB9XHJcblxyXG4gICAgXHJcbi8vICAgICBpbnB1dCBGZWVkV2hlcmVVbmlxdWVJbnB1dCB7XHJcbi8vICAgICAgICAgaWQ6IFN0cmluZ1xyXG4vLyAgICAgICAgIHVybDogU3RyaW5nXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaW5wdXQgTGlrZUJ1bmRsZUlucHV0IHtcclxuLy8gICAgICAgICBidW5kbGVJZDogU3RyaW5nXHJcbi8vICAgICAgICAgbGlrZVN0YXRlOiBCb29sZWFuXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaW5wdXQgTGlrZUZlZWRJbnB1dCB7XHJcbi8vICAgICAgICAgZmVlZElkOiBTdHJpbmdcclxuLy8gICAgICAgICBsaWtlU3RhdGU6IEJvb2xlYW5cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpbnB1dCBGaW5kRmVlZFRhZ3NJbnB1dCB7XHJcbi8vICAgICAgICAgc2VhcmNoOiBTdHJpbmdcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpbnB1dCBGaW5kQnVuZGxlVGFnc0lucHV0IHtcclxuLy8gICAgICAgICBzZWFyY2g6IFN0cmluZ1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGlucHV0IEZpbmRGZWVkc0lucHV0IHtcclxuLy8gICAgICAgICBzZWFyY2g6IFN0cmluZ1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHR5cGUgUXVlcnkge1xyXG4vLyAgICAgICAgIGhlbGxvOiBTdHJpbmdcclxuLy8gICAgICAgICBmZWVkKGRhdGE6IEZlZWRJbnB1dCk6IEZlZWRcclxuLy8gICAgICAgICBidW5kbGUoZGF0YTogQnVuZGxlSW5wdXQpOiBCdW5kbGVcclxuLy8gICAgICAgICBmZWVkczogW0ZlZWRdXHJcbi8vICAgICAgICAgYnVuZGxlczogW0J1bmRsZV1cclxuLy8gICAgICAgICBmaW5kRmVlZFRhZ3MoZGF0YTogRmluZEZlZWRUYWdzSW5wdXQpOiBbRmVlZFRhZ11cclxuLy8gICAgICAgICBmaW5kQnVuZGxlVGFncyhkYXRhOiBGaW5kQnVuZGxlVGFnc0lucHV0KTogW0J1bmRsZVRhZ11cclxuLy8gICAgICAgICBmaW5kRmVlZHMoZGF0YTogRmluZEZlZWRzSW5wdXQpOiBbRmVlZF1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICB0eXBlIE11dGF0aW9uIHtcclxuLy8gICAgICAgIGNyZWF0ZUZlZWQoZGF0YTogRmVlZENyZWF0ZUlucHV0KSA6IEZlZWQgXHJcbi8vICAgICAgICBjcmVhdGVCdW5kbGUoZGF0YTogQnVuZGxlQ3JlYXRlSW5wdXQpIDogQnVuZGxlIFxyXG4vLyAgICAgICAgbGlrZUJ1bmRsZShkYXRhOiBMaWtlQnVuZGxlSW5wdXQpOiBCdW5kbGVcclxuLy8gICAgICAgIGxpa2VGZWVkKGRhdGE6IExpa2VGZWVkSW5wdXQpOiBGZWVkXHJcbi8vICAgICB9XHJcbi8vIGA7XHJcbiIsImV4cG9ydCBjb25zdCB2ZXJpZnlPd25lcnNoaXAgPSAoaXRlbSwgdXNlcikgPT4ge1xyXG5jb25zdCB7IGF1dGhvciB9ID0gaXRlbTtcclxuaWYgKGF1dGhvci5hdXRoMCAhPSB1c2VyLmF1dGgwKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjY2VzcyBkZW5pZWQsIHVzZXIgZG9lcyBub3Qgb3duIHRoaXMgaXRlbS4nKSBcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhdXRoMC9uZXh0anMtYXV0aDBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLW1pY3JvXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLW1pZGRsZXdhcmVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtc2hpZWxkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRvb2xzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1pY3JvLWNvcnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=