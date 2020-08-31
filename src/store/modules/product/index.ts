import { combineReducers } from "redux";

import BlindReducer, { BlindState } from "./blind";
import ReviewUploadReducer, { ReviewUploadState } from "./reviewUpload";

export type ProductState = {
  blind: BlindState;
  reviewUpload: ReviewUploadState;
};

const ProductReducer = combineReducers({
  blind: BlindReducer,
  reviewUpload: ReviewUploadReducer,
});

export default ProductReducer;
