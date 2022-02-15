import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Reducers } from '../../constants';
import { StakingState } from './staking.state';
import { fetchStakesListThunk, initStakePageThunk } from './staking.thunks';

const initialState = { ...new StakingState() };

export const stakingSlice = createSlice({
  name: Reducers.Staking,
  initialState,
  reducers: {
    selectStake: (state, { payload }: PayloadAction<number>) => {
      state.selectedStake = payload;
    },
  },
  extraReducers: (builder) => {
    // ----- page data -----
    builder.addCase(initStakePageThunk.pending, (state) => {
      state.pageData.state = 'loading';
    });
    builder.addCase(initStakePageThunk.rejected, (state) => {
      state.pageData.state = 'failure';
    });
    builder.addCase(initStakePageThunk.fulfilled, (state, { payload }) => {
      state.pageData.state = 'success';
      state.pageData.data = payload;
    });

    // ----- stakes list -----
    builder.addCase(fetchStakesListThunk.pending, (state) => {
      state.stakesList.state = 'loading';
    });
    builder.addCase(fetchStakesListThunk.rejected, (state) => {
      state.stakesList.state = 'failure';
    });
    builder.addCase(fetchStakesListThunk.fulfilled, (state, { payload }) => {
      state.stakesList.state = 'success';
      state.stakesList.data = payload;
    });
  },
});

const { actions: stakingActions, reducer: stakingReducer } = stakingSlice;

export { stakingActions, stakingReducer };
