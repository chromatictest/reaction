"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirmBidBidderPositionQueryWithPending = exports.confirmBidBidderPositionQueryWithWinning = exports.createBidderPositionFailed = exports.createBidderPositionSuccessfulAndBidder = exports.createBidderPositionSuccessful = void 0;
var createBidderPositionSuccessful = {
  createBidderPosition: {
    result: {
      position: {
        id: "positionid",
        sale_artwork: {
          sale: {
            registrationStatus: {
              id: "existing-bidder-id"
            }
          }
        }
      },
      status: "SUCCESS",
      message_header: null,
      message_description_md: null
    }
  }
};
exports.createBidderPositionSuccessful = createBidderPositionSuccessful;
var createBidderPositionSuccessfulAndBidder = {
  createBidderPosition: {
    result: {
      position: {
        id: "positionid",
        sale_artwork: {
          sale: {
            registrationStatus: {
              id: "new-bidder-id"
            }
          }
        }
      },
      status: "SUCCESS",
      message_header: null,
      message_description_md: null
    }
  }
};
exports.createBidderPositionSuccessfulAndBidder = createBidderPositionSuccessfulAndBidder;
var createBidderPositionFailed = {
  createBidderPosition: {
    result: {
      position: null,
      status: "FAILED",
      message_header: "The `createBidderPosition` mutation failed.",
      message_description_md: null
    }
  }
};
exports.createBidderPositionFailed = createBidderPositionFailed;
var confirmBidBidderPositionQueryWithWinning = {
  me: {
    bidderPosition: {
      status: "WINNING",
      messageHeader: null,
      position: {
        id: "winning-bidder-position-id-from-polling",
        suggestedNextBid: null
      }
    }
  }
};
exports.confirmBidBidderPositionQueryWithWinning = confirmBidBidderPositionQueryWithWinning;
var confirmBidBidderPositionQueryWithPending = {
  me: {
    bidderPosition: {
      status: "PENDING",
      messageHeader: null,
      position: {
        id: "pending-bidder-position-id-from-polling",
        suggestedNextBid: null
      }
    }
  }
};
exports.confirmBidBidderPositionQueryWithPending = confirmBidBidderPositionQueryWithPending;
//# sourceMappingURL=createBidderPosition.js.map