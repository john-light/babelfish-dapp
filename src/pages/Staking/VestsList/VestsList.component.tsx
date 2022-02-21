import { formatTimestampToUTC } from '../../../utils/helpers';
import { VestsListItem } from '../../../store/staking/staking.state';
import { DataTable } from '../../../components/DataTable/DataTable.component';
import { DataTableColumn } from '../../../components/DataTable/DataTable.types';

import { VotingDelegationColumn } from '../Staking.columns';
import { VestsListComponentProps } from './VestsList.types';
import { VestsActionColumn } from './VestsList.actions';

const vestsColumns: DataTableColumn<VestsListItem>[] = [
  { label: 'Asset', name: 'asset' },
  { label: 'Locked Amount', name: 'lockedAmount' },
  { label: 'Voting Power', name: 'votingPower' },
  {
    label: 'Voting Delegation Power',
    name: 'votingDelegation',
    component: VotingDelegationColumn,
  },
  { label: 'Staking Date', name: 'stakingDate' },
  { label: 'Staking Period', name: 'stakingPeriod' },
  { label: 'Unlock Date', name: 'unlockDate', format: formatTimestampToUTC },
  { label: 'Actions', name: 'unlockDate', component: VestsActionColumn },
];

export const VestsListComponent = ({
  vests,
  state,
}: VestsListComponentProps) => (
  <DataTable
    data={vests}
    columns={vestsColumns}
    tableTitle="Current Vests"
    isLoading={state === 'loading'}
    containerSx={{ p: 1, minHeight: 250 }}
  />
);