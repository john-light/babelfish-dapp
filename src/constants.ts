export enum Urls {
  Proposals = '/proposals',
  Dashboard = '/dashboard',
  Staking = '/stake',
  Agregator = '/agregator',
}

export enum ProposalState {
  Pending = '0',
  Active = '1',
  Canceled = '2',
  Defeated = '3',
  Succeeded = '4',
  Queued = '5',
  Expired = '6',
  Executed = '7',
}

export enum Reducers {
  App = 'app',
  Staking = 'staking',
}

export const MAX_STAKING_PERIODS = 78;
export const TWO_WEEKS = 1209600;
export const ONE_DAY = 86400;

export const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

export const fieldsErrors = {
  required: 'Field Required',
  addressFormat: 'Value must be a proper RSK address',
  amountGreaterThanBalance: 'Value cannot be greater than your token balance',
};

export const decimalRegex = /^\d*\.?\d*$/;
