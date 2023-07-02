import { LessionsEnum } from '../configs/constants';
import learnUseState from './learn-use-state.md';
export const lessionsDocs: {
  [key in LessionsEnum]: any;
} = {
  [LessionsEnum.LEARN_USE_STATE]: learnUseState,
};
