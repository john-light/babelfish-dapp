import { useSelector } from 'react-redux';
import {
  stakingConstantsSelector,
  selectedStakeSelector,
} from '../../../../store/staking/staking.selectors';

import { IncreaseStakeComponent } from './IncreaseStake.component';
import { IncreaseStakeContainerProps } from './IncreaseStake.types';

const mockNewVotingPower = '10.0000';

export const IncreaseStakeContainer = ({
  open,
  onClose,
}: IncreaseStakeContainerProps) => {
  const { kickoffTs } = useSelector(stakingConstantsSelector);
  const selectedStakeData = useSelector(selectedStakeSelector);

  if (!kickoffTs || !selectedStakeData) {
    return null;
  }

  return (
    <IncreaseStakeComponent
      open={open}
      onClose={onClose}
      votingPower={mockNewVotingPower}
      currentStakeAmount={selectedStakeData.lockedAmount}
    />
  );
};
