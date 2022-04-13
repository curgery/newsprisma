module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/graphql.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/graphql.ts":
/*!******************************!*\
  !*** ./pages/api/graphql.ts ***!
  \******************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
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
/* harmony import */ var _utils_api_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/api/context */ "./utils/api/context.ts");






 // import {permissions} from '../../utils/api/permissions'


const cors = micro_cors__WEBPACK_IMPORTED_MODULE_2___default()();
const schema = Object(graphql_middleware__WEBPACK_IMPORTED_MODULE_5__["applyMiddleware"])(Object(graphql_tools__WEBPACK_IMPORTED_MODULE_1__["makeExecutableSchema"])({
  typeDefs: _utils_api_typeDefs__WEBPACK_IMPORTED_MODULE_3__["typeDefs"],
  resolvers: _utils_api_resolvers__WEBPACK_IMPORTED_MODULE_4__["resolvers"]
}), _utils_api_log__WEBPACK_IMPORTED_MODULE_6__["log"]);
const config = {
  api: {
    bodyParser: false
  }
};
const handler = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__["ApolloServer"]({
  typeDefs: _utils_api_typeDefs__WEBPACK_IMPORTED_MODULE_3__["typeDefs"],
  schema,
  context: _utils_api_context__WEBPACK_IMPORTED_MODULE_7__["context"]
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
/*! exports provided: context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "context", function() { return context; });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);


let prisma;

if (false) {} else {
  globalThis['prisma'] = globalThis['prisma'] || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__["PrismaClient"]();
  prisma = globalThis['prisma'];
}

const context = async ({
  req,
  res
}) => {
  try {
    // const { user: auth0User } = await getSession(req, res);
    const auth0User = {
      nickname: 'faker',
      sub: "1",
      picture: "/blank.png"
    };
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
          id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])(),
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
/*! exports provided: log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
const log = async (resolve, parent, args, ctx, info) => {
  try {
    const res = await resolve();
    return res;
  } catch (e) {
    console.log(e);
  }
};

/***/ }),

/***/ "./utils/api/resolvers.ts":
/*!********************************!*\
  !*** ./utils/api/resolvers.ts ***!
  \********************************/
/*! exports provided: resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
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
      await Object(_verifyOwnership__WEBPACK_IMPORTED_MODULE_0__["verifyOwnership"])(feed, user);
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
      await Object(_verifyOwnership__WEBPACK_IMPORTED_MODULE_0__["verifyOwnership"])(bundle, user);
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
      await Object(_verifyOwnership__WEBPACK_IMPORTED_MODULE_0__["verifyOwnership"])(bundle, user);
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
      await Object(_verifyOwnership__WEBPACK_IMPORTED_MODULE_0__["verifyOwnership"])(feed, user);
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
      await Object(_verifyOwnership__WEBPACK_IMPORTED_MODULE_0__["verifyOwnership"])(savedArticle, user);
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
/*! exports provided: typeDefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ "apollo-server-micro");
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);

const typeDefs = apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__["gql"]`
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
/*! exports provided: verifyOwnership */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyOwnership", function() { return verifyOwnership; });
const verifyOwnership = (item, user) => {
  const {
    author
  } = item;

  if (author.auth0 != user.auth0) {
    throw new Error('Access denied, user does not own this item.');
  }
};

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@prisma/client");

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-micro");

/***/ }),

/***/ "graphql-middleware":
/*!*************************************!*\
  !*** external "graphql-middleware" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-middleware");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ }),

/***/ "micro-cors":
/*!*****************************!*\
  !*** external "micro-cors" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("micro-cors");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2dyYXBocWwudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvYXBpL2NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvYXBpL2xvZy50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9hcGkvcmVzb2x2ZXJzLnRzIiwid2VicGFjazovLy8uL3V0aWxzL2FwaS90eXBlRGVmcy50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9hcGkvdmVyaWZ5T3duZXJzaGlwLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLXNlcnZlci1taWNyb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtbWlkZGxld2FyZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdG9vbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtaWNyby1jb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbImNvcnMiLCJDb3JzIiwic2NoZW1hIiwiYXBwbHlNaWRkbGV3YXJlIiwibWFrZUV4ZWN1dGFibGVTY2hlbWEiLCJ0eXBlRGVmcyIsInJlc29sdmVycyIsImxvZyIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJoYW5kbGVyIiwiQXBvbGxvU2VydmVyIiwiY29udGV4dCIsImNyZWF0ZUhhbmRsZXIiLCJwYXRoIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwic2VuZCIsInByaXNtYSIsImdsb2JhbFRoaXMiLCJQcmlzbWFDbGllbnQiLCJhdXRoMFVzZXIiLCJuaWNrbmFtZSIsInN1YiIsInBpY3R1cmUiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiYXV0aDAiLCJjcmVhdGUiLCJkYXRhIiwiaWQiLCJ1dWlkdjQiLCJlIiwicmVzb2x2ZSIsInBhcmVudCIsImFyZ3MiLCJjdHgiLCJpbmZvIiwiY29uc29sZSIsImNyZWF0ZUZpZWxkUmVzb2x2ZXIiLCJtb2RlbE5hbWUiLCJwYXJOYW1lIiwibW9kZWxSZXNwb25zZSIsInNlbGVjdCIsIkZlZWQiLCJCdW5kbGUiLCJCdW5kbGVUYWciLCJGZWVkVGFnIiwiU2F2ZWRBcnRpY2xlIiwiVXNlciIsIlF1ZXJ5IiwiaGVsbG8iLCJmZWVkIiwiZmVlZHMiLCJmaW5kTWFueSIsImJ1bmRsZSIsImJ1bmRsZXMiLCJmaW5kRmVlZFRhZ3MiLCJmZWVkVGFnIiwibmFtZSIsImNvbnRhaW5zIiwic2VhcmNoIiwibW9kZSIsImZpbmRCdW5kbGVUYWdzIiwiYnVuZGxlVGFnIiwiZmluZEZlZWRzIiwic2F2ZWRBcnRpY2xlIiwidXJsIiwiYXV0aG9ySWQiLCJzYXZlZEFydGljbGVzIiwibWUiLCJNdXRhdGlvbiIsImNyZWF0ZUZlZWQiLCJhdXRob3IiLCJjb25uZWN0IiwiY3JlYXRlQnVuZGxlIiwibGlrZUJ1bmRsZSIsImJ1bmRsZUlkIiwibGlrZVN0YXRlIiwiY29ubmVjdFN0YXRlIiwidXBkYXRlIiwibGlrZXMiLCJsaWtlRmVlZCIsImZlZWRJZCIsInVwZGF0ZUZlZWQiLCJmZWVkVXBkYXRlIiwiaW5jbHVkZSIsInZlcmlmeU93bmVyc2hpcCIsInVwZGF0ZUJ1bmRsZSIsImJ1bmRsZVVwZGF0ZSIsImNyZWF0ZVNhdmVkQXJ0aWNsZSIsImRlbGV0ZUJ1bmRsZSIsImRlbGV0ZSIsImRlbGV0ZUZlZWQiLCJkZWxldGVTYXZlZEFydGljbGUiLCJncWwiLCJpdGVtIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FwTk8sQyxDQXFPUDtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEs7Ozs7Ozs7Ozs7OztBQ2hZQTtBQUFBO0FBQU8sTUFBTVIsZUFBZSxHQUFHLENBQUNTLElBQUQsRUFBT3hFLElBQVAsS0FBZ0I7QUFDL0MsUUFBTTtBQUFFaUQ7QUFBRixNQUFhdUIsSUFBbkI7O0FBQ0EsTUFBSXZCLE1BQU0sQ0FBQzlDLEtBQVAsSUFBZ0JILElBQUksQ0FBQ0csS0FBekIsRUFBZ0M7QUFDNUIsVUFBTSxJQUFJc0UsS0FBSixDQUFVLDZDQUFWLENBQU47QUFDQztBQUNKLENBTE0sQzs7Ozs7Ozs7Ozs7QUNBUCwyQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9hcGkvZ3JhcGhxbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2dyYXBocWwudHNcIik7XG4iLCJpbXBvcnQge0Fwb2xsb1NlcnZlcn0gZnJvbSAnYXBvbGxvLXNlcnZlci1taWNybydcclxuaW1wb3J0IHsgbWFrZUV4ZWN1dGFibGVTY2hlbWEgfSBmcm9tICdncmFwaHFsLXRvb2xzJztcclxuaW1wb3J0IENvcnMgZnJvbSAnbWljcm8tY29ycydcclxuaW1wb3J0IHt0eXBlRGVmc30gZnJvbSAnLi4vLi4vdXRpbHMvYXBpL3R5cGVEZWZzJ1xyXG5pbXBvcnQge3Jlc29sdmVyc30gZnJvbSAnLi4vLi4vdXRpbHMvYXBpL3Jlc29sdmVycydcclxuaW1wb3J0IHthcHBseU1pZGRsZXdhcmV9IGZyb20gJ2dyYXBocWwtbWlkZGxld2FyZSdcclxuaW1wb3J0IHtsb2d9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS9sb2cnXHJcbi8vIGltcG9ydCB7cGVybWlzc2lvbnN9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS9wZXJtaXNzaW9ucydcclxuaW1wb3J0IHtjb250ZXh0fSBmcm9tICcuLi8uLi91dGlscy9hcGkvY29udGV4dCdcclxuXHJcbmNvbnN0IGNvcnMgPSBDb3JzKCk7XHJcblxyXG5jb25zdCBzY2hlbWEgPSBhcHBseU1pZGRsZXdhcmUobWFrZUV4ZWN1dGFibGVTY2hlbWEoe3R5cGVEZWZzLCByZXNvbHZlcnN9KSwgbG9nLCApXHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIGFwaToge1xyXG4gICAgYm9keVBhcnNlcjogZmFsc2VcclxuICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBoYW5kbGVyID0gbmV3IEFwb2xsb1NlcnZlcih7XHJcbiAgICB0eXBlRGVmcyxcclxuICAgIHNjaGVtYSxcclxuICAgIGNvbnRleHQsXHJcbiAgfSkuY3JlYXRlSGFuZGxlcih7XHJcbiAgICBwYXRoOiAnL2FwaS9ncmFwaHFsJ1xyXG4gIH0pXHJcblxyXG4gIFxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjb3JzKChyZXEsIHJlcykgPT4ge1xyXG4gICAgaWYocmVxLm1ldGhvZCA9PT0gJ09QVElPTlMnKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCgpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcyk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gIC8vIGV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgLy8gICBhcGk6IHtcclxuICAvLyAgICAgYm9keVBhcnNlcjogZmFsc2UsXHJcbiAgLy8gICB9LFxyXG4gIC8vIH07XHJcbiAgXHJcbiAgXHJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgPSBoYW5kbGVyLnN0YXJ0KCkudGhlbigoKSA9PiBoYW5kbGVyLmNyZWF0ZUhhbmRsZXIoe3BhdGg6ICcnLH0pKVxyXG5cclxuXHJcbiAgXHJcbiAgIiwiaW1wb3J0IHtQcmlzbWFDbGllbnQsIFVzZXJ9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCc7XHJcbmltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcclxuXHJcbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudFxyXG5cclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG59IGVsc2Uge1xyXG4gICAgZ2xvYmFsVGhpc1sncHJpc21hJ10gPSBnbG9iYWxUaGlzWydwcmlzbWEnXSB8fFxyXG4gICAgICAgIG5ldyBQcmlzbWFDbGllbnQoKTtcclxuICAgIHByaXNtYSA9IGdsb2JhbFRoaXNbJ3ByaXNtYSddO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29udGV4dCA9IGFzeW5jICh7cmVxLCByZXN9KSA9PiB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICAvLyBjb25zdCB7IHVzZXI6IGF1dGgwVXNlciB9ID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXEsIHJlcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGF1dGgwVXNlciA9IHtuaWNrbmFtZTogJ2Zha2VyJywgc3ViOiBcIjFcIiwgcGljdHVyZTogXCIvYmxhbmsucG5nXCJ9XHJcblxyXG5cclxuICAgICAgICBsZXQgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe3doZXJlOiB7YXV0aDA6IGF1dGgwVXNlci5zdWJ9LFxyXG4gICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIXVzZXIpe1xyXG4gICAgICAgICAgICBjb25zdCB7cGljdHVyZSwgbmlja25hbWUsIHN1Yn0gPSBhdXRoMFVzZXI7XHJcbiAgICAgICAgICAgIHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHV1aWR2NCgpLFxyXG4gICAgICAgICAgICAgICAgYXV0aDA6IHN1YixcclxuICAgICAgICAgICAgICAgIHBpY3R1cmUsXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge3VzZXIsIHByaXNtYX07XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICByZXR1cm4ge3VzZXI6IHt9LCBwcmlzbWF9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbnRleHQge1xyXG4gICAgcHJpc21hOiBQcmlzbWFDbGllbnQ7XHJcbiAgICB1c2VyOiBVc2VyO1xyXG59IiwiZXhwb3J0IGNvbnN0IGxvZyA9IGFzeW5jIChyZXNvbHZlLCBwYXJlbnQsIGFyZ3MsIGN0eCwgaW5mbykgPT4ge1xyXG50cnkge1xyXG4gICBjb25zdCByZXMgPSBhd2FpdCByZXNvbHZlKCk7XHJcbiAgIHJldHVybiByZXM7XHJcbn0gY2F0Y2ggKGUpe1xyXG4gICBjb25zb2xlLmxvZyhlKVxyXG59XHJcbn07IiwiXHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuL2NvbnRleHQnO1xyXG5pbXBvcnQgeyB2ZXJpZnlPd25lcnNoaXAgfSBmcm9tICcuL3ZlcmlmeU93bmVyc2hpcCc7XHJcblxyXG5jb25zdCBjcmVhdGVGaWVsZFJlc29sdmVyID0gKG1vZGVsTmFtZSwgcGFyTmFtZSkgPT4gKHtcclxuICBbcGFyTmFtZV06IGFzeW5jICh7IGlkIH0sIGFyZ3MsIHsgcHJpc21hIH06IENvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IG1vZGVsUmVzcG9uc2UgPSBhd2FpdCBwcmlzbWFbbW9kZWxOYW1lXS5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgc2VsZWN0OiB7IFtwYXJOYW1lXTogdHJ1ZSB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbW9kZWxSZXNwb25zZVtwYXJOYW1lXTtcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XHJcbiAgRmVlZDoge1xyXG4gICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcignZmVlZCcsICdhdXRob3InKSxcclxuICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ2ZlZWQnLCAndGFncycpLFxyXG4gICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcignZmVlZCcsICdidW5kbGVzJyksXHJcbiAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCdmZWVkJywgJ2xpa2VzJyksXHJcbiAgfSxcclxuICBCdW5kbGU6IHtcclxuICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ2J1bmRsZScsICdhdXRob3InKSxcclxuICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ2J1bmRsZScsICd0YWdzJyksXHJcbiAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCdidW5kbGUnLCAnZmVlZHMnKSxcclxuICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ2J1bmRsZScsICdsaWtlcycpLFxyXG4gIH0sXHJcbiAgQnVuZGxlVGFnOiB7XHJcbiAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCdidW5kbGVUYWcnLCAnYnVuZGxlcycpLFxyXG4gIH0sXHJcbiAgRmVlZFRhZzoge1xyXG4gICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcignZmVlZFRhZycsICdmZWVkcycpLFxyXG4gIH0sXHJcbiAgU2F2ZWRBcnRpY2xlOiB7XHJcbiAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCdzYXZlZEFydGljbGUnLCAnYXV0aG9yJyksXHJcbiAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCdzYXZlZEFydGljbGUnLCAnZmVlZCcpLFxyXG4gIH0sXHJcbiAgVXNlcjoge1xyXG4gICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcigndXNlcicsICdidW5kbGVzJyksXHJcbiAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCd1c2VyJywgJ2ZlZWRzJyksXHJcbiAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCd1c2VyJywgJ2ZlZWRMaWtlcycpLFxyXG4gICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcigndXNlcicsICdidW5kbGVMaWtlcycpLFxyXG4gIH0sXHJcbiAgUXVlcnk6IHtcclxuICAgIGhlbGxvOiAocGFyZW50LCBhcmdzLCBjb250ZXh0OiBDb250ZXh0KSA9PiAnaGkhJyxcclxuICAgIGZlZWQ6IChwYXJlbnQsIHsgZGF0YTogeyBpZCB9IH0sIHsgcHJpc21hIH06IENvbnRleHQpID0+XHJcbiAgICAgIHByaXNtYS5mZWVkLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZCB9IH0pLFxyXG4gICAgZmVlZHM6IChwYXJlbnQsIGFyZ3MsIHsgcHJpc21hIH06IENvbnRleHQpID0+IHByaXNtYS5mZWVkLmZpbmRNYW55KCksXHJcbiAgICBidW5kbGU6IChwYXJlbnQsIHsgZGF0YTogeyBpZCB9IH0sIHsgcHJpc21hIH06IENvbnRleHQpID0+XHJcbiAgICAgIHByaXNtYS5idW5kbGUuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSksXHJcbiAgICBidW5kbGVzOiAocGFyZW50LCBhcmdzLCB7IHByaXNtYSB9OiBDb250ZXh0KSA9PiBwcmlzbWEuYnVuZGxlLmZpbmRNYW55KCksXHJcbiAgICBmaW5kRmVlZFRhZ3M6IChwYXJlbnQsIHsgZGF0YSB9LCB7IHByaXNtYSB9OiBDb250ZXh0KSA9PlxyXG4gICAgICBwcmlzbWEuZmVlZFRhZy5maW5kTWFueSh7XHJcbiAgICAgICAgd2hlcmU6IHsgbmFtZTogeyBjb250YWluczogZGF0YS5zZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB9KSxcclxuICAgIGZpbmRCdW5kbGVUYWdzOiAocGFyZW50LCB7IGRhdGEgfSwgeyBwcmlzbWEgfTogQ29udGV4dCkgPT5cclxuICAgICAgcHJpc21hLmJ1bmRsZVRhZy5maW5kTWFueSh7XHJcbiAgICAgICAgd2hlcmU6IHsgbmFtZTogeyBjb250YWluczogZGF0YS5zZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB9KSxcclxuICAgIGZpbmRGZWVkczogKHBhcmVudCwgeyBkYXRhIH0sIHsgcHJpc21hIH06IENvbnRleHQpID0+XHJcbiAgICAgIHByaXNtYS5mZWVkLmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZTogeyBuYW1lOiB7IGNvbnRhaW5zOiBkYXRhLnNlYXJjaCwgbW9kZTogJ2luc2Vuc2l0aXZlJyB9IH0sXHJcbiAgICAgIH0pLFxyXG4gICAgc2F2ZWRBcnRpY2xlOiAoXHJcbiAgICAgIHBhcmVudCxcclxuICAgICAgeyBkYXRhOiB7IHVybCB9IH0sXHJcbiAgICAgIHsgcHJpc21hLCB1c2VyOiB7IGlkOiBhdXRob3JJZCB9IH06IENvbnRleHQsXHJcbiAgICApID0+XHJcbiAgICAgIHByaXNtYS5zYXZlZEFydGljbGUuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IGAke2F1dGhvcklkfS0ke3VybH1gIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgc2F2ZWRBcnRpY2xlczogKFxyXG4gICAgICBwYXJlbnQsXHJcbiAgICAgIGFyZ3MsXHJcbiAgICAgIHsgcHJpc21hLCB1c2VyOiB7IGlkOiBhdXRob3JJZCB9IH06IENvbnRleHQsXHJcbiAgICApID0+XHJcbiAgICAgIHByaXNtYS5zYXZlZEFydGljbGUuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB7IGF1dGhvcklkOiBhdXRob3JJZCA/IGF1dGhvcklkIDogbnVsbCB9LFxyXG4gICAgICB9KSxcclxuICAgIG1lOiAocGFyZW50LCBhcmdzLCB7IHByaXNtYSwgdXNlcjogeyBpZCB9IH06IENvbnRleHQpID0+XHJcbiAgICAgIHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZCB9IH0pLFxyXG4gIH0sXHJcbiAgTXV0YXRpb246IHtcclxuICAgIGNyZWF0ZUZlZWQ6IChwYXJlbnQsIHsgZGF0YSB9LCB7IHByaXNtYSwgdXNlciB9OiBDb250ZXh0KSA9PlxyXG4gICAgICBwcmlzbWEuZmVlZC5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHsgLi4uZGF0YSwgYXV0aG9yOiB7IGNvbm5lY3Q6IHsgaWQ6IHVzZXIuaWQgfSB9IH0sXHJcbiAgICAgIH0pLFxyXG4gICAgY3JlYXRlQnVuZGxlOiAocGFyZW50LCB7IGRhdGEgfSwgeyBwcmlzbWEsIHVzZXIgfTogQ29udGV4dCkgPT5cclxuICAgICAgcHJpc21hLmJ1bmRsZS5jcmVhdGUoe1xyXG4gICAgICAgIGRhdGE6IHsgLi4uZGF0YSwgYXV0aG9yOiB7IGNvbm5lY3Q6IHsgaWQ6IHVzZXIuaWQgfSB9IH0sXHJcbiAgICAgIH0pLFxyXG4gICAgbGlrZUJ1bmRsZTogKHBhcmVudCwgeyBkYXRhIH0sIHsgcHJpc21hLCB1c2VyIH06IENvbnRleHQpID0+IHtcclxuICAgICAgY29uc3QgeyBidW5kbGVJZCwgbGlrZVN0YXRlIH0gPSBkYXRhO1xyXG4gICAgICBjb25zdCBjb25uZWN0U3RhdGUgPSBsaWtlU3RhdGUgPyAnY29ubmVjdCcgOiAnZGlzY29ubmVjdCc7XHJcbiAgICAgIHJldHVybiBwcmlzbWEuYnVuZGxlLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IGJ1bmRsZUlkIH0sXHJcbiAgICAgICAgZGF0YTogeyBsaWtlczogeyBbY29ubmVjdFN0YXRlXTogeyBpZDogdXNlci5pZCB9IH0gfSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbGlrZUZlZWQ6IChwYXJlbnQsIHsgZGF0YSB9LCB7IHByaXNtYSwgdXNlciB9OiBDb250ZXh0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZmVlZElkLCBsaWtlU3RhdGUgfSA9IGRhdGE7XHJcbiAgICAgIGNvbnN0IGNvbm5lY3RTdGF0ZSA9IGxpa2VTdGF0ZSA/ICdjb25uZWN0JyA6ICdkaXNjb25uZWN0JztcclxuICAgICAgcmV0dXJuIHByaXNtYS5mZWVkLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQ6IGZlZWRJZCB9LFxyXG4gICAgICAgIGRhdGE6IHsgbGlrZXM6IHsgW2Nvbm5lY3RTdGF0ZV06IHsgaWQ6IHVzZXIuaWQgfSB9IH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUZlZWQ6IGFzeW5jIChcclxuICAgICAgcGFyZW50LFxyXG4gICAgICB7IGRhdGE6IHsgaWQsIC4uLmZlZWRVcGRhdGUgfSB9LFxyXG4gICAgICB7IHByaXNtYSwgdXNlciB9OiBDb250ZXh0LFxyXG4gICAgKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZlZWQgPSBhd2FpdCBwcmlzbWEuZmVlZC5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHsgYXV0aG9yOiB0cnVlIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBhd2FpdCB2ZXJpZnlPd25lcnNoaXAoZmVlZCwgdXNlcik7XHJcbiAgICAgIHJldHVybiBwcmlzbWEuZmVlZC51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhOiB7IC4uLmZlZWRVcGRhdGUgfSB9KTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVCdW5kbGU6IGFzeW5jIChcclxuICAgICAgcGFyZW50LFxyXG4gICAgICB7IGRhdGE6IHsgaWQsIC4uLmJ1bmRsZVVwZGF0ZSB9IH0sXHJcbiAgICAgIHsgcHJpc21hLCB1c2VyIH06IENvbnRleHQsXHJcbiAgICApID0+IHtcclxuICAgICAgY29uc3QgYnVuZGxlID0gYXdhaXQgcHJpc21hLmJ1bmRsZS5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHsgYXV0aG9yOiB0cnVlIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBhd2FpdCB2ZXJpZnlPd25lcnNoaXAoYnVuZGxlLCB1c2VyKTtcclxuICAgICAgcmV0dXJuIHByaXNtYS5idW5kbGUudXBkYXRlKHsgd2hlcmU6IHsgaWQgfSwgZGF0YTogeyAuLi5idW5kbGVVcGRhdGUgfSB9KTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVTYXZlZEFydGljbGU6IGFzeW5jIChwYXJlbnQsIHsgZGF0YSB9LCB7IHByaXNtYSwgdXNlciB9OiBDb250ZXh0KSA9PiBcclxuICAgICAgICBwcmlzbWEuc2F2ZWRBcnRpY2xlLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgIGlkOiBgJHt1c2VyLmlkfS0ke2RhdGEudXJsfWAsXHJcbiAgICAgICAgICBhdXRob3I6IHsgY29ubmVjdDogeyBpZDogdXNlci5pZCB9IH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB9KSxcclxuICAgIGRlbGV0ZUJ1bmRsZTogYXN5bmMgKFxyXG4gICAgICBwYXJlbnQsXHJcbiAgICAgIHsgZGF0YTogeyBpZCB9IH0sXHJcbiAgICAgIHsgcHJpc21hLCB1c2VyIH06IENvbnRleHQsXHJcbiAgICApID0+IHtcclxuICAgICAgY29uc3QgYnVuZGxlID0gYXdhaXQgcHJpc21hLmJ1bmRsZS5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgIGluY2x1ZGU6IHsgYXV0aG9yOiB0cnVlIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBhd2FpdCB2ZXJpZnlPd25lcnNoaXAoYnVuZGxlLCB1c2VyKTtcclxuICAgICAgYXdhaXQgcHJpc21hLmJ1bmRsZS5kZWxldGUoeyB3aGVyZTogeyBpZDogYnVuZGxlLmlkIH0gfSk7XHJcbiAgICAgIHJldHVybiBidW5kbGU7XHJcbiAgICB9LFxyXG4gICAgZGVsZXRlRmVlZDogYXN5bmMgKHBhcmVudCwgeyBkYXRhOiB7IGlkIH0gfSwgeyBwcmlzbWEsIHVzZXIgfTogQ29udGV4dCkgPT4ge1xyXG4gICAgICBjb25zdCBmZWVkID0gYXdhaXQgcHJpc21hLmZlZWQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICBpbmNsdWRlOiB7IGF1dGhvcjogdHJ1ZSB9LFxyXG4gICAgICB9KTtcclxuICAgICAgYXdhaXQgdmVyaWZ5T3duZXJzaGlwKGZlZWQsIHVzZXIpO1xyXG4gICAgICBhd2FpdCBwcmlzbWEuZmVlZC5kZWxldGUoeyB3aGVyZTogeyBpZDogZmVlZC5pZCB9IH0pO1xyXG4gICAgICByZXR1cm4gZmVlZDtcclxuICAgIH0sXHJcbiAgICBkZWxldGVTYXZlZEFydGljbGU6IGFzeW5jIChcclxuICAgICAgcGFyZW50LFxyXG4gICAgICB7IGRhdGE6IHsgaWQgfSB9LFxyXG4gICAgICB7IHByaXNtYSwgdXNlciB9OiBDb250ZXh0LFxyXG4gICAgKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNhdmVkQXJ0aWNsZSA9IGF3YWl0IHByaXNtYS5zYXZlZEFydGljbGUuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICBpbmNsdWRlOiB7IGF1dGhvcjogdHJ1ZSB9LFxyXG4gICAgICB9KTtcclxuICAgICAgYXdhaXQgdmVyaWZ5T3duZXJzaGlwKHNhdmVkQXJ0aWNsZSwgdXNlcik7XHJcbiAgICAgIGF3YWl0IHByaXNtYS5zYXZlZEFydGljbGUuZGVsZXRlKHsgd2hlcmU6IHsgaWQ6IHNhdmVkQXJ0aWNsZS5pZCB9IH0pO1xyXG4gICAgICByZXR1cm4gc2F2ZWRBcnRpY2xlO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gLy8gaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG4vLyBpbXBvcnQge0NvbnRleHR9IGZyb20gJy4vY29udGV4dCc7XHJcblxyXG5cclxuLy8gY29uc3QgY3JlYXRlRmllbGRSZXNvbHZlciA9IChtb2RlbE5hbWUsIHBhck5hbWUpID0+ICh7XHJcbi8vICAgICBbcGFyTmFtZV06IGFzeW5jICh7aWR9LCBhcmdzLCB7cHJpc21hfTogQ29udGV4dCkgPT4ge1xyXG4vLyAgICAgICAgIGNvbnN0IG1vZGVsUmVzcG9uc2UgPSBhd2FpdCBwcmlzbWFbbW9kZWxOYW1lXS5maW5kVW5pcXVlKHtcclxuLy8gICAgICAgICAgICAgd2hlcmU6IHtpZH0sXHJcbi8vICAgICAgICAgICAgIGluY2x1ZGU6IHtbcGFyTmFtZV06IHRydWV9XHJcbi8vICAgICAgICAgfSkgXHJcbi8vICAgICAgICAgY29uc29sZS5sb2cobW9kZWxSZXNwb25zZSlcclxuLy8gICAgICAgICByZXR1cm4gbW9kZWxSZXNwb25zZVtwYXJOYW1lXVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG4gICAgXHJcbi8vIGV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XHJcbi8vICAgICBGZWVkOiB7XHJcbiAgICAgIFxyXG4vLyAgICAgICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ2ZlZWQnLCAnYXV0aG9yJyksXHJcbi8vICAgICAgICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcignZmVlZCcsICd0YWdzJyksXHJcbi8vICAgICAgICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcignZmVlZCcsICdidW5kbGVzJyksXHJcbi8vICAgICAgICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcignZmVlZCcsICdsaWtlcycpXHJcbi8vICAgICB9LFxyXG4vLyAgICAgQnVuZGxlOiB7XHJcbi8vICAgICAgICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcignYnVuZGxlJywgJ2F1dGhvcicpLFxyXG4vLyAgICAgICAgIC4uLmNyZWF0ZUZpZWxkUmVzb2x2ZXIoJ2J1bmRsZScsICd0YWdzJyksXHJcbi8vICAgICAgICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcignYnVuZGxlJywgJ2ZlZWRzJyksXHJcbi8vICAgICAgICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcignYnVuZGxlJywgJ2xpa2VzJylcclxuLy8gICAgIH0sXHJcbi8vICAgICBCdW5kbGVUYWc6IHtcclxuLy8gICAgICAgICAuLi5jcmVhdGVGaWVsZFJlc29sdmVyKCdidW5kbGVUYWcnLCAnYnVuZGxlcycpLFxyXG5cclxuLy8gICAgIH0sXHJcbi8vICAgICBGZWVkVGFnOiB7XHJcbi8vICAgICAgICAgLi4uY3JlYXRlRmllbGRSZXNvbHZlcignZmVlZFRhZycsICdmZWVkcycpLFxyXG5cclxuLy8gICAgIH0sXHJcbi8vICAgICBRdWVyeToge1xyXG4vLyAgICAgICAgIGhlbGxvOiAocGFyZW50LCBhcmdzLCBjb250ZXh0OiBDb250ZXh0KSA9PiAnaGkhJyxcclxuLy8gICAgICAgICBmZWVkOiAocGFyZW50LCB7ZGF0YToge2lkfX0sIHtwcmlzbWF9OiBDb250ZXh0KSA9PiBwcmlzbWEuZmVlZC5maW5kVW5pcXVlKHt3aGVyZToge2lkfX0pLFxyXG4vLyAgICAgICAgIGZlZWRzOiAocGFyZW50LCBhcmdzLCB7cHJpc21hfTogQ29udGV4dCkgPT4gcHJpc21hLmZlZWQuZmluZE1hbnkoKSxcclxuLy8gICAgICAgICBidW5kbGU6IChwYXJlbnQsIHtkYXRhOiB7aWR9fSwge3ByaXNtYX06IENvbnRleHQpID0+IHByaXNtYS5idW5kbGUuZmluZFVuaXF1ZSh7d2hlcmU6IHtpZH19KSxcclxuLy8gICAgICAgICBidW5kbGVzOiAocGFyZW50LCBhcmdzLCB7cHJpc21hfTogQ29udGV4dCkgPT4gcHJpc21hLmJ1bmRsZS5maW5kTWFueSgpLFxyXG4vLyAgICAgICAgIGZpbmRGZWVkVGFnczoocGFyZW50LCB7IGRhdGEgfSwgeyBwcmlzbWEgfTogQ29udGV4dCkgPT5cclxuLy8gICAgICAgICBwcmlzbWEuZmVlZFRhZy5maW5kTWFueSh7XHJcbi8vICAgICAgICAgICB3aGVyZTogeyBuYW1lOiB7IGNvbnRhaW5zOiBkYXRhLnNlYXJjaCwgbW9kZTogJ2luc2Vuc2l0aXZlJyB9IH0gXHJcbi8vICAgICAgICAgfSksXHJcbi8vICAgICAgICAgZmluZEJ1bmRsZVRhZ3M6IChwYXJlbnQsIHsgZGF0YSB9LCB7IHByaXNtYSB9OiBDb250ZXh0KSA9PlxyXG4vLyAgICAgICAgIHByaXNtYS5idW5kbGVUYWcuZmluZE1hbnkoe1xyXG4vLyAgICAgICAgICAgd2hlcmU6IHsgbmFtZTogeyBjb250YWluczogZGF0YS5zZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4vLyAgICAgICAgIH0pLFxyXG4vLyAgICAgICAgIGZpbmRGZWVkczogKHBhcmVudCwgeyBkYXRhIH0sIHsgcHJpc21hIH06IENvbnRleHQpID0+XHJcbi8vICAgICAgICAgcHJpc21hLmZlZWQuZmluZE1hbnkoe1xyXG4vLyAgICAgICAgICAgd2hlcmU6IHsgbmFtZTogeyBjb250YWluczogZGF0YS5zZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4vLyAgICAgICAgIH0pLFxyXG4vLyAgICAgTXV0YXRpb246IHtcclxuLy8gICAgICAgICAgY3JlYXRlRmVlZDogYXN5bmMgKHBhcmVudCwge2RhdGF9LCB7cHJpc21hLCB1c2VyfTogQ29udGV4dCkgID0+IHtcclxuLy8gICAgICAgICAgICAgIGNvbnN0IGF1dGhvciA9IHsgYXV0aG9yOiB7Y29ubmVjdDoge2lkOiB1c2VyLmlkfX19XHJcbi8vICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuZmVlZC5jcmVhdGUoe2RhdGE6IHsuLi5kYXRhLCAuLi5hdXRob3J9fSlcclxuLy8gICAgICAgICAgICAgIHJldHVybiByZXN1bHRcclxuLy8gICAgICAgICAgfSxcclxuLy8gICAgICAgICAgY3JlYXRlQnVuZGxlOiBhc3luYyAocGFyZW50LCB7ZGF0YX0sIHtwcmlzbWEsIHVzZXJ9OiBDb250ZXh0KSAgPT4ge1xyXG4vLyAgICAgICAgICAgICAgY29uc3QgYXV0aG9yID0geyBhdXRob3I6IHtjb25uZWN0OiB7aWQ6IHVzZXIuaWR9fX07XHJcbi8vICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuYnVuZGxlLmNyZWF0ZSh7ZGF0YTogey4uLmRhdGEsIC4uLmF1dGhvcn0sIFxyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbi8vICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgIGxpa2VCdW5kbGU6IChwYXJlbnQsIHtkYXRhfSwge3ByaXNtYSwgdXNlcn0pID0+IHtcclxuLy8gICAgICAgICAgICAgIGNvbnN0IHtidW5kbGVJZCwgbGlrZVN0YXRlfSA9IGRhdGE7XHJcbi8vICAgICAgICAgICAgICBjb25zdCBjb25uZWN0U3RhdGUgPSBsaWtlU3RhdGUgPyAnY29ubmVjdCcgOiAnZGlzY29ubmVjdCc7XHJcbi8vICAgICAgICAgICAgICByZXR1cm4gcHJpc21hLmJ1bmRsZS51cGRhdGUoe1xyXG4vLyAgICAgICAgICAgICAgICAgIHdoZXJlOiB7aWQ6IGJ1bmRsZUlkfSxcclxuLy8gICAgICAgICAgICAgICAgICBkYXRhOiB7bGlrZXM6IHtbY29ubmVjdFN0YXRlXTogeyBpZDogdXNlci5pZH0gfX0sXHJcbi8vICAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgfSxcclxuLy8gICAgICAgICAgbGlrZUZlZWQ6IChwYXJlbnQsIHtkYXRhfSwge3ByaXNtYSwgdXNlcn0pID0+IHtcclxuLy8gICAgICAgICAgICAgY29uc3Qge2ZlZWRJZCwgbGlrZVN0YXRlfSA9IGRhdGE7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IGNvbm5lY3RTdGF0ZSA9IGxpa2VTdGF0ZSA/ICdjb25uZWN0JyA6ICdkaXNjb25uZWN0JztcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHByaXNtYS5mZWVkLnVwZGF0ZSh7XHJcbi8vICAgICAgICAgICAgICAgICB3aGVyZToge2lkOiBmZWVkSWR9LFxyXG4vLyAgICAgICAgICAgICAgICAgZGF0YToge2xpa2VzOiB7W2Nvbm5lY3RTdGF0ZV06IHsgaWQ6IHVzZXIuaWR9IH19LFxyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9IiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1taWNybyc7XHJcblxyXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWxgXHJcbiAgdHlwZSBGZWVkIHtcclxuICAgIGlkOiBTdHJpbmdcclxuICAgIG5hbWU6IFN0cmluZ1xyXG4gICAgdXJsOiBTdHJpbmdcclxuICAgIGF1dGhvcjogVXNlclxyXG4gICAgdGFnczogW0ZlZWRUYWddXHJcbiAgICBidW5kbGVzOiBbQnVuZGxlXVxyXG4gICAgbGlrZXM6IFtVc2VyXVxyXG4gICAgc2F2ZWRBcnRpY2xlczogW1NhdmVkQXJ0aWNsZV1cclxuICB9XHJcblxyXG4gIHR5cGUgQnVuZGxlIHtcclxuICAgIGlkOiBTdHJpbmdcclxuICAgIG5hbWU6IFN0cmluZ1xyXG4gICAgZGVzY3JpcHRpb246IFN0cmluZ1xyXG4gICAgYXV0aG9yOiBVc2VyXHJcbiAgICB0YWdzOiBbQnVuZGxlVGFnXVxyXG4gICAgZmVlZHM6IFtGZWVkXVxyXG4gICAgbGlrZXM6IFtVc2VyXVxyXG4gIH1cclxuXHJcbiAgdHlwZSBVc2VyIHtcclxuICAgIGlkOiBTdHJpbmdcclxuICAgIGF1dGgwOiBTdHJpbmdcclxuICAgIG5pY2tuYW1lOiBTdHJpbmdcclxuICAgIHBpY3R1cmU6IFN0cmluZ1xyXG4gICAgYnVuZGxlczogW0J1bmRsZV1cclxuICAgIGZlZWRzOiBbRmVlZF1cclxuICAgIGZlZWRMaWtlczogW0ZlZWRdXHJcbiAgICBidW5kbGVMaWtlczogW0J1bmRsZV1cclxuICB9XHJcblxyXG4gIHR5cGUgRmVlZFRhZyB7XHJcbiAgICBpZDogU3RyaW5nXHJcbiAgICBuYW1lOiBTdHJpbmdcclxuICAgIGZlZWRzOiBbRmVlZF1cclxuICB9XHJcblxyXG4gIHR5cGUgQnVuZGxlVGFnIHtcclxuICAgIGlkOiBTdHJpbmdcclxuICAgIG5hbWU6IFN0cmluZ1xyXG4gICAgYnVuZGxlczogW0J1bmRsZV1cclxuICB9XHJcblxyXG4gIGlucHV0IEZlZWRJbnB1dCB7XHJcbiAgICBpZDogU3RyaW5nXHJcbiAgfVxyXG4gIGlucHV0IEJ1bmRsZUlucHV0IHtcclxuICAgIGlkOiBTdHJpbmdcclxuICB9XHJcblxyXG4gIGlucHV0IEZlZWRDcmVhdGVJbnB1dCB7XHJcbiAgICBpZDogU3RyaW5nXHJcbiAgICB1cmw6IFN0cmluZ1xyXG4gICAgbmFtZTogU3RyaW5nXHJcbiAgICB0YWdzOiBOZXN0ZWRGZWVkVGFnQ3JlYXRlSW5wdXRcclxuICB9XHJcbiAgaW5wdXQgTmVzdGVkRmVlZFRhZ0NyZWF0ZUlucHV0IHtcclxuICAgIGNyZWF0ZTogW0ZlZWRUYWdDcmVhdGVJbnB1dF1cclxuICAgIGNvbm5lY3Q6IFtGZWVkVGFnV2hlcmVVbmlxdWVJbnB1dF1cclxuICB9XHJcblxyXG4gIGlucHV0IEZlZWRUYWdDcmVhdGVJbnB1dCB7XHJcbiAgICBpZDogU3RyaW5nXHJcbiAgICBuYW1lOiBTdHJpbmdcclxuICB9XHJcbiAgaW5wdXQgRmVlZFRhZ1doZXJlVW5pcXVlSW5wdXQge1xyXG4gICAgaWQ6IFN0cmluZ1xyXG4gICAgbmFtZTogU3RyaW5nXHJcbiAgfVxyXG5cclxuICBpbnB1dCBCdW5kbGVDcmVhdGVJbnB1dCB7XHJcbiAgICBpZDogU3RyaW5nXHJcbiAgICBuYW1lOiBTdHJpbmdcclxuICAgIGRlc2NyaXB0aW9uOiBTdHJpbmdcclxuICAgIHRhZ3M6IE5lc3RlZEJ1bmRsZVRhZ0NyZWF0ZUlucHV0XHJcbiAgICBmZWVkczogTmVzdGVkQnVuZGxlRmVlZENyZWF0ZUlucHV0XHJcbiAgfVxyXG4gIGlucHV0IE5lc3RlZEJ1bmRsZVRhZ0NyZWF0ZUlucHV0IHtcclxuICAgIGNyZWF0ZTogW0J1bmRsZVRhZ0NyZWF0ZUlucHV0XVxyXG4gICAgY29ubmVjdDogW0J1bmRsZVRhZ1doZXJlVW5pcXVlSW5wdXRdXHJcbiAgfVxyXG5cclxuICBpbnB1dCBCdW5kbGVUYWdDcmVhdGVJbnB1dCB7XHJcbiAgICBpZDogU3RyaW5nXHJcbiAgICBuYW1lOiBTdHJpbmdcclxuICB9XHJcblxyXG4gIGlucHV0IEJ1bmRsZVRhZ1doZXJlVW5pcXVlSW5wdXQge1xyXG4gICAgaWQ6IFN0cmluZ1xyXG4gICAgbmFtZTogU3RyaW5nXHJcbiAgfVxyXG5cclxuICBpbnB1dCBOZXN0ZWRCdW5kbGVGZWVkQ3JlYXRlSW5wdXQge1xyXG4gICAgY3JlYXRlOiBbRmVlZENyZWF0ZUlucHV0XVxyXG4gICAgY29ubmVjdDogW0ZlZWRXaGVyZVVuaXF1ZUlucHV0XVxyXG4gIH1cclxuXHJcbiAgaW5wdXQgRmVlZFdoZXJlVW5pcXVlSW5wdXQge1xyXG4gICAgaWQ6IFN0cmluZ1xyXG4gICAgdXJsOiBTdHJpbmdcclxuICB9XHJcblxyXG4gIGlucHV0IExpa2VCdW5kbGVJbnB1dCB7XHJcbiAgICBidW5kbGVJZDogU3RyaW5nXHJcbiAgICBsaWtlU3RhdGU6IEJvb2xlYW5cclxuICB9XHJcblxyXG4gIGlucHV0IExpa2VGZWVkSW5wdXQge1xyXG4gICAgZmVlZElkOiBTdHJpbmdcclxuICAgIGxpa2VTdGF0ZTogQm9vbGVhblxyXG4gIH1cclxuXHJcbiAgaW5wdXQgRmluZEZlZWRUYWdzSW5wdXQge1xyXG4gICAgc2VhcmNoOiBTdHJpbmdcclxuICB9XHJcblxyXG4gIGlucHV0IEZpbmRCdW5kbGVUYWdzSW5wdXQge1xyXG4gICAgc2VhcmNoOiBTdHJpbmdcclxuICB9XHJcblxyXG4gIGlucHV0IEZpbmRGZWVkc0lucHV0IHtcclxuICAgIHNlYXJjaDogU3RyaW5nXHJcbiAgfVxyXG5cclxuICBpbnB1dCBGZWVkVXBkYXRlSW5wdXQge1xyXG4gICAgaWQ6IFN0cmluZ1xyXG4gICAgdXJsOiBTdHJpbmdcclxuICAgIG5hbWU6IFN0cmluZ1xyXG4gICAgdGFnczogTmVzdGVkRmVlZFRhZ1VwZGF0ZUlucHV0XHJcbiAgfVxyXG5cclxuICBpbnB1dCBOZXN0ZWRGZWVkVGFnVXBkYXRlSW5wdXQge1xyXG4gICAgY3JlYXRlOiBbRmVlZFRhZ0NyZWF0ZUlucHV0XVxyXG4gICAgY29ubmVjdDogW0ZlZWRUYWdXaGVyZVVuaXF1ZUlucHV0XVxyXG4gICAgZGlzY29ubmVjdDogW0ZlZWRUYWdXaGVyZVVuaXF1ZUlucHV0XVxyXG4gIH1cclxuXHJcbiAgaW5wdXQgQnVuZGxlVXBkYXRlSW5wdXQge1xyXG4gICAgaWQ6IFN0cmluZ1xyXG4gICAgbmFtZTogU3RyaW5nXHJcbiAgICBkZXNjcmlwdGlvbjogU3RyaW5nXHJcbiAgICB0YWdzOiBOZXN0ZWRCdW5kbGVUYWdVcGRhdGVJbnB1dFxyXG4gICAgZmVlZHM6IE5lc3RlZEJ1bmRsZUZlZWRVcGRhdGVJbnB1dFxyXG4gIH1cclxuXHJcbiAgaW5wdXQgTmVzdGVkQnVuZGxlVGFnVXBkYXRlSW5wdXQge1xyXG4gICAgY3JlYXRlOiBbQnVuZGxlVGFnQ3JlYXRlSW5wdXRdXHJcbiAgICBjb25uZWN0OiBbQnVuZGxlVGFnV2hlcmVVbmlxdWVJbnB1dF1cclxuICAgIGRpc2Nvbm5lY3Q6IFtCdW5kbGVUYWdXaGVyZVVuaXF1ZUlucHV0XVxyXG4gIH1cclxuXHJcbiAgaW5wdXQgTmVzdGVkQnVuZGxlRmVlZFVwZGF0ZUlucHV0IHtcclxuICAgIGNyZWF0ZTogW0ZlZWRDcmVhdGVJbnB1dF1cclxuICAgIGNvbm5lY3Q6IFtGZWVkV2hlcmVVbmlxdWVJbnB1dF1cclxuICAgIGRpc2Nvbm5lY3Q6IFtGZWVkV2hlcmVVbmlxdWVJbnB1dF1cclxuICB9XHJcblxyXG4gIHNjYWxhciBKU09OXHJcblxyXG4gIHR5cGUgU2F2ZWRBcnRpY2xlIHtcclxuICAgIGlkOiBTdHJpbmdcclxuICAgIGF1dGhvcjogVXNlclxyXG4gICAgdXJsOiBTdHJpbmdcclxuICAgIGNvbnRlbnQ6IEpTT05cclxuICAgIGZlZWQ6IEZlZWRcclxuICB9XHJcblxyXG4gIGlucHV0IFNhdmVkQXJ0aWNsZUlucHV0IHtcclxuICAgIHVybDogU3RyaW5nXHJcbiAgfVxyXG5cclxuICBpbnB1dCBTYXZlZEFydGljbGVDcmVhdGVJbnB1dCB7XHJcbiAgICBmZWVkOiBOZXN0ZWRGZWVkQ3JlYXRlSW5wdXRcclxuICAgIGNvbnRlbnQ6IEpTT05cclxuICAgIHVybDogU3RyaW5nXHJcbiAgfVxyXG5cclxuICBpbnB1dCBOZXN0ZWRGZWVkQ3JlYXRlSW5wdXQge1xyXG4gICAgY29ubmVjdDogRmVlZFdoZXJlVW5pcXVlSW5wdXRcclxuICB9XHJcblxyXG4gIGlucHV0IERlbGV0ZVNhdmVkQXJ0aWNsZUlucHV0IHtcclxuICAgIGlkOiBTdHJpbmdcclxuICB9XHJcblxyXG4gIHR5cGUgUXVlcnkge1xyXG4gICAgaGVsbG86IFN0cmluZ1xyXG4gICAgZmVlZChkYXRhOiBGZWVkSW5wdXQpOiBGZWVkXHJcbiAgICBidW5kbGUoZGF0YTogQnVuZGxlSW5wdXQpOiBCdW5kbGVcclxuICAgIGZlZWRzOiBbRmVlZF1cclxuICAgIGJ1bmRsZXM6IFtCdW5kbGVdXHJcbiAgICBmaW5kRmVlZFRhZ3MoZGF0YTogRmluZEZlZWRUYWdzSW5wdXQpOiBbRmVlZFRhZ11cclxuICAgIGZpbmRCdW5kbGVUYWdzKGRhdGE6IEZpbmRCdW5kbGVUYWdzSW5wdXQpOiBbQnVuZGxlVGFnXVxyXG4gICAgZmluZEZlZWRzKGRhdGE6IEZpbmRGZWVkc0lucHV0KTogW0ZlZWRdXHJcbiAgICBzYXZlZEFydGljbGUoZGF0YTogU2F2ZWRBcnRpY2xlSW5wdXQpOiBTYXZlZEFydGljbGVcclxuICAgIHNhdmVkQXJ0aWNsZXM6IFtTYXZlZEFydGljbGVdXHJcbiAgICBtZTogVXNlclxyXG4gIH1cclxuICB0eXBlIE11dGF0aW9uIHtcclxuICAgIGNyZWF0ZUZlZWQoZGF0YTogRmVlZENyZWF0ZUlucHV0KTogRmVlZFxyXG4gICAgY3JlYXRlQnVuZGxlKGRhdGE6IEJ1bmRsZUNyZWF0ZUlucHV0KTogQnVuZGxlXHJcbiAgICBsaWtlQnVuZGxlKGRhdGE6IExpa2VCdW5kbGVJbnB1dCk6IEJ1bmRsZVxyXG4gICAgbGlrZUZlZWQoZGF0YTogTGlrZUZlZWRJbnB1dCk6IEZlZWRcclxuICAgIHVwZGF0ZUJ1bmRsZShkYXRhOiBCdW5kbGVVcGRhdGVJbnB1dCk6IEJ1bmRsZVxyXG4gICAgdXBkYXRlRmVlZChkYXRhOiBGZWVkVXBkYXRlSW5wdXQpOiBGZWVkXHJcbiAgICBjcmVhdGVTYXZlZEFydGljbGUoZGF0YTogU2F2ZWRBcnRpY2xlQ3JlYXRlSW5wdXQpOiBTYXZlZEFydGljbGVcclxuICAgIGRlbGV0ZUJ1bmRsZShkYXRhOiBCdW5kbGVJbnB1dCk6IEJ1bmRsZVxyXG4gICAgZGVsZXRlRmVlZChkYXRhOiBGZWVkSW5wdXQpOiBGZWVkXHJcbiAgICBkZWxldGVTYXZlZEFydGljbGUoZGF0YTogRGVsZXRlU2F2ZWRBcnRpY2xlSW5wdXQpOiBTYXZlZEFydGljbGVcclxuICB9XHJcbmA7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLW1pY3JvJztcclxuXHJcblxyXG4vLyBleHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWxgXHJcbi8vICAgICB0eXBlIEZlZWQge1xyXG4vLyAgICAgICAgaWQ6IFN0cmluZ1xyXG4vLyAgICAgICAgbmFtZTogU3RyaW5nXHJcbi8vICAgICAgICB1cmw6IFN0cmluZ1xyXG4vLyAgICAgICAgYXV0aG9yOiBVc2VyXHJcbi8vICAgICAgICB0YWdzOiBbRmVlZFRhZ11cclxuLy8gICAgICAgIGJ1bmRsZXM6IFtCdW5kbGVdXHJcbi8vICAgICAgICBsaWtlczogW1VzZXJdXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgdHlwZSBCdW5kbGUge1xyXG4vLyAgICAgICAgIGlkOiBTdHJpbmdcclxuLy8gICAgICAgICBuYW1lOiBTdHJpbmdcclxuLy8gICAgICAgICBkZXNjcmlwdGlvbjogU3RyaW5nXHJcbi8vICAgICAgICAgYXV0aG9yOiBVc2VyXHJcbi8vICAgICAgICAgdGFnczogW0J1bmRsZVRhZ11cclxuLy8gICAgICAgICBmZWVkczogW0ZlZWRdXHJcbi8vICAgICAgICAgbGlrZXM6IFtVc2VyXVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHR5cGUgVXNlciB7XHJcbi8vICAgICAgICAgaWQ6IFN0cmluZ1xyXG4vLyAgICAgICAgIGF1dGgwOiBTdHJpbmdcclxuLy8gICAgICAgICBuaWNrbmFtZTogU3RyaW5nXHJcbi8vICAgICAgICAgcGljdHVyZTogU3RyaW5nXHJcbi8vICAgICAgICAgYnVuZGxlczogW0J1bmRsZV1cclxuLy8gICAgICAgICBmZWVkczogW0ZlZWRdXHJcbi8vICAgICAgICAgZmVlZExpa2VzOiBbRmVlZF1cclxuLy8gICAgICAgICBidW5kbGVMaWtlczogW0J1bmRsZV1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICB0eXBlIEZlZWRUYWcge1xyXG4vLyAgICAgICAgIGlkOiBTdHJpbmdcclxuLy8gICAgICAgICBuYW1lOiBTdHJpbmdcclxuLy8gICAgICAgICBmZWVkczogW0ZlZWRdXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgdHlwZSBCdW5kbGVUYWcge1xyXG4vLyAgICAgICAgIGlkOiBTdHJpbmdcclxuLy8gICAgICAgICBuYW1lOiBTdHJpbmdcclxuLy8gICAgICAgICBidW5kbGVzOiBbQnVuZGxlXVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGlucHV0IEZlZWRJbnB1dCB7XHJcbi8vICAgICAgICAgaWQ6IFN0cmluZ1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGlucHV0IEJ1bmRsZUlucHV0IHtcclxuLy8gICAgICAgICBpZDogU3RyaW5nXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaW5wdXQgRmVlZENyZWF0ZUlucHV0IHtcclxuLy8gICAgICAgICBpZDogU3RyaW5nXHJcbi8vICAgICAgICAgdXJsOiBTdHJpbmdcclxuLy8gICAgICAgICBuYW1lOiBTdHJpbmdcclxuLy8gICAgICAgICB0YWdzOiBOZXN0ZWRGZWVkVGFnQ3JlYXRlSW5wdXRcclxuXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaW5wdXQgTmVzdGVkRmVlZFRhZ0NyZWF0ZUlucHV0IHtcclxuLy8gICAgICAgICBjcmVhdGU6IFtGZWVkVGFnQ3JlYXRlSW5wdXRdXHJcbi8vICAgICAgICAgY29ubmVjdDogW0ZlZWRUYWdXaGVyZVVuaXF1ZUlucHV0XVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGlucHV0IEZlZWRUYWdDcmVhdGVJbnB1dCB7XHJcbi8vICAgICAgICAgaWQ6IFN0cmluZ1xyXG4vLyAgICAgICAgIG5hbWU6IFN0cmluZ1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGlucHV0IEZlZWRUYWdXaGVyZVVuaXF1ZUlucHV0IHtcclxuLy8gICAgICAgICBpZDogU3RyaW5nXHJcbi8vICAgICAgICAgbmFtZTogU3RyaW5nXHJcblxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGlucHV0IEJ1bmRsZUNyZWF0ZUlucHV0IHtcclxuLy8gICAgICAgICBpZDogU3RyaW5nXHJcbi8vICAgICAgICAgbmFtZTogU3RyaW5nXHJcbi8vICAgICAgICAgZGVzY3JpcHRpb246IFN0cmluZ1xyXG4vLyAgICAgICAgIHRhZ3M6IE5lc3RlZEJ1bmRsZVRhZ0NyZWF0ZUlucHV0XHJcbi8vICAgICAgICAgZmVlZHM6IE5lc3RlZEJ1bmRsZUZlZWRDcmVhdGVJbnB1dFxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGlucHV0IE5lc3RlZEJ1bmRsZVRhZ0NyZWF0ZUlucHV0IHtcclxuLy8gICAgICAgICBjcmVhdGU6IFtCdW5kbGVUYWdDcmVhdGVJbnB1dF1cclxuLy8gICAgICAgICBjb25uZWN0OiBbQnVuZGxlVGFnV2hlcmVVbmlxdWVJbnB1dF1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpbnB1dCBCdW5kbGVUYWdDcmVhdGVJbnB1dCB7XHJcbi8vICAgICAgICAgaWQ6IFN0cmluZ1xyXG4vLyAgICAgICAgIG5hbWU6IFN0cmluZ1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGlucHV0IEJ1bmRsZVRhZ1doZXJlVW5pcXVlSW5wdXQge1xyXG4vLyAgICAgICAgIGlkOiBTdHJpbmdcclxuLy8gICAgICAgICBuYW1lOiBTdHJpbmdcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpbnB1dCBOZXN0ZWRCdW5kbGVGZWVkQ3JlYXRlSW5wdXQge1xyXG4vLyAgICAgICAgIGNyZWF0ZTogW0ZlZWRDcmVhdGVJbnB1dF1cclxuLy8gICAgICAgICBjb25uZWN0OiBbRmVlZFdoZXJlVW5pcXVlSW5wdXRdXHJcblxyXG4vLyAgICAgfVxyXG5cclxuICAgIFxyXG4vLyAgICAgaW5wdXQgRmVlZFdoZXJlVW5pcXVlSW5wdXQge1xyXG4vLyAgICAgICAgIGlkOiBTdHJpbmdcclxuLy8gICAgICAgICB1cmw6IFN0cmluZ1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGlucHV0IExpa2VCdW5kbGVJbnB1dCB7XHJcbi8vICAgICAgICAgYnVuZGxlSWQ6IFN0cmluZ1xyXG4vLyAgICAgICAgIGxpa2VTdGF0ZTogQm9vbGVhblxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGlucHV0IExpa2VGZWVkSW5wdXQge1xyXG4vLyAgICAgICAgIGZlZWRJZDogU3RyaW5nXHJcbi8vICAgICAgICAgbGlrZVN0YXRlOiBCb29sZWFuXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaW5wdXQgRmluZEZlZWRUYWdzSW5wdXQge1xyXG4vLyAgICAgICAgIHNlYXJjaDogU3RyaW5nXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaW5wdXQgRmluZEJ1bmRsZVRhZ3NJbnB1dCB7XHJcbi8vICAgICAgICAgc2VhcmNoOiBTdHJpbmdcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBpbnB1dCBGaW5kRmVlZHNJbnB1dCB7XHJcbi8vICAgICAgICAgc2VhcmNoOiBTdHJpbmdcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICB0eXBlIFF1ZXJ5IHtcclxuLy8gICAgICAgICBoZWxsbzogU3RyaW5nXHJcbi8vICAgICAgICAgZmVlZChkYXRhOiBGZWVkSW5wdXQpOiBGZWVkXHJcbi8vICAgICAgICAgYnVuZGxlKGRhdGE6IEJ1bmRsZUlucHV0KTogQnVuZGxlXHJcbi8vICAgICAgICAgZmVlZHM6IFtGZWVkXVxyXG4vLyAgICAgICAgIGJ1bmRsZXM6IFtCdW5kbGVdXHJcbi8vICAgICAgICAgZmluZEZlZWRUYWdzKGRhdGE6IEZpbmRGZWVkVGFnc0lucHV0KTogW0ZlZWRUYWddXHJcbi8vICAgICAgICAgZmluZEJ1bmRsZVRhZ3MoZGF0YTogRmluZEJ1bmRsZVRhZ3NJbnB1dCk6IFtCdW5kbGVUYWddXHJcbi8vICAgICAgICAgZmluZEZlZWRzKGRhdGE6IEZpbmRGZWVkc0lucHV0KTogW0ZlZWRdXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgdHlwZSBNdXRhdGlvbiB7XHJcbi8vICAgICAgICBjcmVhdGVGZWVkKGRhdGE6IEZlZWRDcmVhdGVJbnB1dCkgOiBGZWVkIFxyXG4vLyAgICAgICAgY3JlYXRlQnVuZGxlKGRhdGE6IEJ1bmRsZUNyZWF0ZUlucHV0KSA6IEJ1bmRsZSBcclxuLy8gICAgICAgIGxpa2VCdW5kbGUoZGF0YTogTGlrZUJ1bmRsZUlucHV0KTogQnVuZGxlXHJcbi8vICAgICAgICBsaWtlRmVlZChkYXRhOiBMaWtlRmVlZElucHV0KTogRmVlZFxyXG4vLyAgICAgfVxyXG4vLyBgO1xyXG4iLCJleHBvcnQgY29uc3QgdmVyaWZ5T3duZXJzaGlwID0gKGl0ZW0sIHVzZXIpID0+IHtcclxuY29uc3QgeyBhdXRob3IgfSA9IGl0ZW07XHJcbmlmIChhdXRob3IuYXV0aDAgIT0gdXNlci5hdXRoMCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdBY2Nlc3MgZGVuaWVkLCB1c2VyIGRvZXMgbm90IG93biB0aGlzIGl0ZW0uJykgXHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLW1pY3JvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtbWlkZGxld2FyZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRvb2xzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1pY3JvLWNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9