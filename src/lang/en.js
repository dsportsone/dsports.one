/* eslint-disable */
module.exports = {
  web: {
    Home: "Home",
    Swap: "Swap",
    Confirm: 'Confirm',
    Capital: "Capital",
    Contract: "Contract",
    Assets: 'Assets',
    Mine: "Mine",
    Balance: "Balance",
    Liquidity: 'Liquidity',
    AddLiquidity: 'Add Liquidity',
    SwapLiquidity: 'Swap Liquidity',
    ContractLiquidity: 'Contract Liquidity',
    recharge: 'recharge',
    Deposit: 'Deposit',
    Withdraw: 'Withdraw',
    Record: 'Record',
    Date: 'Date',
    Token: 'Token',
    Account: 'Account',
    Opening: 'Opening',
    Closing: 'Closing',
    Type: 'Type',
    Long: 'Long',
    Short: 'Short',
    Price: 'Price',
    Volume: 'Volume',
    Position: 'Position',
    LongClosing: 'Long Closing',
    ShortClosing: 'Short Closing',
    ROE: 'ROE',
    Profit: 'Profit',
    NewPrice: 'New Price',
    MarketPrice: 'Market Price',
    PositionPrice: 'Position Price',
    OpenPrice: 'Open Price',
    ClosePrice: 'Close Price',
    MarginCloseout: 'Margin Closeout',
    Trading: 'Trading',
    Detail: 'Detail',
    Usable: 'Usable',
    L1L2Transfer: 'L1&L2 Transfer',
    L2ToContract: 'L2 To Contract',
    WithdrawToL2Wallet: 'Withdraw To L2Wallet',
    ContractBalance: 'Contract Balance',
    L2WalletBalance: 'L2 Balance',
    Developers: 'Developers',
    LanguageChange: 'Language',
    Help: 'Help',
    Docs: 'help',
    Github: 'Github',
    WhitePaper: 'WhitePaper',
    Audit: 'Audit',
    BUGBounty: 'BUG Bounty',
    Issue: 'Issue',
    Governance: 'Governance',
    Community: 'Community',
    Forum: 'Forum',
    VotingPortal: 'VotingPortal',
    Recommend: 'Recommend',
    IssueToken: 'Issue Token',
    Accept: 'Accept',
    Success: 'Success',
    Warning: 'Warning',
    Error: 'Error',
    Faucet: 'Faucet',
    MyDeposit: 'My Deposit',
    MyInterest: 'My Interest',
    MyRate: 'My Rate',
    WalletBalance: 'Wallet Balance',
    RaterDaily: 'Rater Daily',
    Staking: 'Staking',
    RoadMap: 'RoadMap',
    StakingBalance: 'Staking Balance',
    Total: 'Total',
    Days: 'Days',
    MyShareOfPool: 'My Share Of Pool',
    MyEarned: 'My Earned',
    ADDStake: 'ADD Stake',
    RemoveStake: 'Remove Stake',
    WithdrawalReward: 'Withdrawal Reward'
  },
  // 句子
  long:{
    withdrawHint: 'input the withdrawal amount to withdraw your deposit',
    ResetApprove: 'Your approval action is incomplete need reset approve',
    ReSetDone: 'reset done please re-trade',
    swapHint1: 'Buy:  ETH with a maximum of 10 times your current USDT balance leveraged USDT',
    swapHint2: 'Sell: leverages up to 10 times your current ETH balance to sell ETH in exchange for USDT',
    swapHint3: 'The current currency balance can be viewed in the asset interface',
    swapHint4: 'If you do not need contract leverage, you can use the exchange function directly',
    present: 'Your balance is insufficient system give you 0.5ETH and 1500USDT\nyou can also receive more through the faucet',
    FaucetHint1: 'Free ETH and USDT test token',
    exceptions1: '1.Arbitrum and OPSWAP are currently in beta. Anything you do on this platform is at your own risk',
    exceptions2: '2.You not a citizen of one of the following countries：',
    exceptions3: 'China, the United States, antigua and barbuda, Algeria, Bangladesh, Bolivia, Burundi, belarus, Burma, the ivory coast (ivory coast), Crimea and sevastopol, Cuba, democratic republic of Congo (DRC), Ecuador, Iran, Iraq, Liberia, Libya, magnitsky, Mali, Morocco, Nepal, north Korea, somalia , Sudan, Syria, Venezuela, Yemen, Zimbabwe',
    AddLiquidityHint1: 'Add liquidity to obtain OPL',
    AddLiquidityHint2: 'Pledge OPL and start staking',
    pledgeHint1: 'You can pledge both OPL and OPS assets to earn OPS',
    pledgeHint2: 'A pledge is the beginning of mining',
    pledgeHint3: 'Mining minimum 1 OPS or 0.1 OPL',

  },
  // 错误提示
  error:{
    TFailure: 'Transaction failure',
    SystemBusy: 'System Busy',
    NetworkError: 'network error',
    NotMetaMask: 'not install metamask',
    NotMetaMaskNetworkError: 'You need to login metamask and select the correct network',
    InvalidValue: 'invalid value',
    OverContract: 'Contract reserve balance used up',
    OverOpenMax: 'Over each opening position limit',
    OverMax: 'Over the Max balance',
    OverPair: 'over pair balance',
    OverPosition: 'over you position',
    OverBalance: 'over you balance',
    OverBalanceByClose: 'over you balance please recharge or reduce amount',
    OverUsableBalance: 'Over Usable Balance',
    NotETHBalance: 'Your ETH balance are insufficient to pay for Gas\nYou can apply for ETH through the faucet',
    NotPair: 'Not Swap Pair',
    NotLiquidity: 'Not Liquidity Balance',
    NotPosition: 'you not position',
    NotAsset: 'You not ETH assets please get it in the asset page',
    OverFaucet: 'The Faucet reserve balance is used up',
    SameToken: 'the same token no need to swap',
    NotGas: 'You need reserve a few eth balance for Gas'
  },
  paint:{
    BUGBounty: '<h4>Bug Bounty Hunter</h4>' +
        '<br/><h5>Reward: 20000 OPS tokens</h5>' +
        '<br/>Participation: If you find that there is an operation failure due to the website itself during the operation of the required instructions on the test network,It can be reported in time via email or community assistants. Once adopted, it will be issued to users who report bugs after the mainnet goes online.20,000 OPPs will be rewarded to its reserved Ethereum wallet address.' +
        '<br/><br/>Activity Details:' +
        '<br/>When multiple users submit the same bug, the user who submits the bug first will be rewarded for the bug; The same user can submit multiple bugs, and the reward is calculated according to the number of adopted bugs;' +
        '<br/><br/>Users can iterate through the Opswap Github version to check whether the suggestions have been adopted; Once the suggestion is adopted, we will contact you by email, so please be sure to leave your email address.' +
        '<br/><br/>This is a testnet, and the best way you can help us is to test it. When you encounter problems in the test, you can Send questions to' +
        '<br/><br/>bug@opswap.io' +
        '<br/><br/>We are working hard to prepare code for the mainnet, and your feedback is a key part of it. We will give users who participate in the test Give generous rewards.',
  },
  home: {
    TotalLiquidity: "Total Liquidity",
    TotalMarket: "TotalMarket",
    TotalIncome: "TotalIncome",
    TotalCurrentIncome: "TotalCurrentIncome",
    ContractAuditInstitutions: "Contract Audit Institutions",
    ContractIncome: "Contract",
    RecomendIncome: "Recomend",
    MineIncome: "Mine",
    TradingPair: "TradingPair",
    PoolLiquidity2: "PoolLiquidity2",
    tfH2: "tfH2",
    StrategicInvestment: "Strategic Investment",
    FAQ: "FAQ",
    FAQ1T: "What is Automated Market Making (AMM)?",
    FAQ2T: "What is Liquidity Pool?",
    FAQ3T: "What is Order Book?",
    FAQ4T: "Is OneSwap decentralized?",
    FAQ1C:
      'Automated market making (AMM) can calculate the buying and selling price according to the formula, so as to provide continuous quotation for the market. Essentially, AMM is automatic agent and can be realized through smart contracts without human intervention. OneSwap applies the "constant product market maker formula" algorithm in AMM, which characterized in the firm liquidity provision to the market no matter how large the order book is or how small the liquidity pool is.',
    FAQ2C:
      "Each capital pool of OneSwap is a smart contract that holds balances of two unique tokens and enforces rules around depositing and withdrawing them. This rule is the constant product formula. When a token is deposited (sold), a proportional amount must be withdrawn to maintain the constant. Contrariwise, if a token is withdrawn (purchased), a certain proportion of the amount must be deposited. When the capital pool is created, the token balance is 0, and the user who deposits first will determine the initial price of the pool. The earlier the user join the pool, the greater the weight. According to the weight, users can obtain proportional share of transaction fees.",
    FAQ3C:
      "OneSwap supports on-chain order book. Users can place buy and sell orders at a fixed price. All pending orders are stored in the order book of the blockchain, and the system will conduct transaction matching and settlement in terms of the buying and selling orders. In this way, high security and transparency can be guaranteed. However, all operations like order placing, cancellation, etc. need to be confirmed on the chain, and the transaction speed is affected by the public chain network and the transaction fee paid.",
    FAQ4C:
      "OneSwap makes every effort to become a decentralized and trusted platform. There are no admin controls or shutdowns built into the code of its smart contract, and all modifications and optimization will be decided by the voting results from community governance.",
    Fee: "Fee",
    ConnectToWallet: "Connect to wallet",
    Language: "Language",
    Chinese: 'Chinese',
    English: 'English',
  },
  foot: {
    Home: "Home",
    Spot: "Spot",
    Contract: "Contract",
    Combination: "Combination",
    Farm: "Farm",
  },
  combination: {
    Assets: 'Assets',
    Metal: 'Metal',
    Name: "Name",
    LatestPrice: "Latest Price",
    RiseJump: "Rise Jump",
    Operate: 'Operate'
  },
  draw: {
    Developers: 'Developers',
    language: 'language',
    Docs: 'Docs',
    Github: 'Github',
    WhitePaper: 'WhitePaper',
    Audit: 'Audit',
    BUGBounty: 'BUGBounty',
    Governance: 'Governance',
    Community: 'Community',
    Forum: 'Forum',
    VotingPortal: 'VotingPortal',
    Recommend: 'Recommend',
    IssueToken: 'Issue Token'
  },
  exchange: {
    Exchange: 'Exchange',
    Bonus: 'Bonus',
    Tmine: 'TMine',
    Gmine: 'GMine',
    Card: 'Please card',
    Dot: 'Dot',
    Price: 'Price',
    Real: 'RealPrice',
    Limit: 'Limit',
    Input: 'InputPrice',
    LimitP: 'LimitPrice',
    History: 'History',
    Cancel: 'Cancel'
  },
  contract: {
    Fee: 'Guess Fee',
    Account: 'Account',
    Guess: 'Guess',
    Rate: 'Rate',
    Open: 'Open',
    Close: 'Close',
    Hold: 'Hold',
    Limit: 'Limit',
    Market: 'Market',
    Stop: 'Stop',
    Plan: 'Plan',
    Time: 'Time',
    Price: 'Price',
    PriceOr: 'PriceOr',
    Level5: 'Level5',
    Level10: 'Level10',
    Level20: 'Level20',
    Count: 'Count',
    Many: 'Many',
    Zhang: 'Zhang',
    Bonus: 'Bonus',
    Tmine: 'Tmine',
    Gmine: 'Gmine',
    Volume: 'Volume',
    Average: 'Average',
    Income: 'Income',
    Traded: 'Traded',
    NoData: 'NoData',
    Buy: 'Buy',
    Sell: 'Sell'
  },
  common: {
    AddLiquidity: 'AddLiquidity',
    AddFlow: 'Flow',
    AddFlowT: 'FlowFlowFlowFlAverageowFlowFlowFlowFlowFlowFlowFlowFlowFlowFlowFlowFlowFlowFlowFlowFlowFlowFlowFlowFlowFlow',
    AddFlowR: 'FlowRFlowRFlowRFlowRFlowR',
    AddOne: 'AddOne',
    TTile: 'TTile',
    TIntro: 'TIntroTIntroTIntroTIntro',
    TMore: 'TMore',
    TJoin: 'TJoin',
    Tsave: 'Save',
    TAllsave: 'TAllsave',
    Fee: 'Fee',
    FlowSave: 'FlowSaveFlowSave',
    FlowText: ' FlowTextFlowText ',
    FlowReturn: 'FlowReturn',
    Week: 'Week',
    Save: 'Save',
    Add: 'Add',
    Return: 'Return',
  }
}
