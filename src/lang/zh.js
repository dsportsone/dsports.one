/* eslint-disable */
module.exports = {
  web: {
    Home: "首页",
    Swap: "兑换",
    Confirm: '确认',
    Capital: "资金池",
    Contract: "合约",
    Assets: '资产',
    Mine: "挖矿",
    Balance: "余额",
    Liquidity: '流动性',
    AddLiquidity: '添加流动性',
    SwapLiquidity: '现货流动性',
    ContractLiquidity: '合约流动性',
    recharge: '充值',
    Deposit: '存款',
    Withdraw: '提现',
    Record: '记录',
    Date: '日期',
    Token: '币种',
    Account: '账号',
    Opening: '开仓',
    Closing: '平仓',
    Type: '类型',
    Long: '买多',
    Short: '卖空',
    Price: '价格',
    Volume: '数量',
    Position: '持仓',
    LongClosing: '平多',
    ShortClosing: '平空',
    ROE: '盈亏率',
    Profit: '浮盈',
    NewPrice: '最新价',
    MarketPrice: '市价',
    PositionPrice: '持仓价',
    OpenPrice: '开仓价',
    ClosePrice: '平仓价',
    MarginCloseout: '强平价',
    Trading: '交易',
    Detail: '明细',
    Usable: '可用',
    L1L2Transfer: '一层二层互转',
    L2ToContract: 'L2充值到合约',
    WithdrawToL2Wallet: '提现到L2钱包',
    ContractBalance: '合约余额',
    L2WalletBalance: 'L2钱包余额',
    Developers: '开发者',
    LanguageChange: 'English',
    Help: '使用帮助',
    Docs: '使用帮助',
    Github: 'Github',
    WhitePaper: '白皮书',
    Audit: '审计报告',
    BUGBounty: 'BUG提交',
    Issue: '发 布',
    Governance: '管理',
    Community: '社区',
    Forum: '论坛',
    VotingPortal: '提案投票',
    Recommend: '用户推广',
    IssueToken: '发行代币',
    Accept: '接受',
    Success: '成功',
    Warning: '提醒',
    Error: '错误',
    Faucet: '水龙头',
    MyDeposit: '我的存款',
    MyInterest: '我的利息',
    MyRate: '我的占比',
    WalletBalance: '钱包余额',
    RaterDaily: '日利率',
    Staking: '质押挖矿',
    RoadMap: '路线图',
    StakingBalance: '质押余额',
    Total: '总计',
    Days: '每日发放',
    MyShareOfPool: '占比',
    MyEarned: '我的收益',
    ADDStake: '质押挖矿',
    RemoveStake: '取出质押',
    WithdrawalReward: '提取收益'

  },
  // 句子
  long:{

    withdrawHint: '输入取款数量取回您的存款',
    ResetApprove: '您有未完成的批准余额 需要先重置该额度',
    ReSetDone: '重置完成请重新交易',
    swapHint1: '买多: 以你当前的USDT余额 最大10倍杠杆融资USDT买入ETH',
    swapHint2: '卖空: 以你当前的ETH余额 最大10倍杠杆融资卖出ETH换取USDT',
    swapHint3: '当前币种余额可在资产界面查看',
    swapHint4: '如果您无需合约杠杆融资可直接使用兑换功能',
    present: '您的余额不足 新用户可赠送您0.5ETH和1500USDT\n您也可以通过水龙头领取更多',
    FaucetHint1: '免费领取ETH和USDT测试币',
    exceptions1: '1.Arbitrum网络和OPSWAP目前都处于测试状态。您在这个平台上采取的任何操作都将由您自己承担风险',
    exceptions2: '2.请确保您不是以下国家的公民：',
    exceptions3: '中国、美国、安提瓜和巴布达、阿尔及利亚、孟加拉国、玻利维亚、白俄罗斯、布隆迪、缅甸、科特迪瓦（象牙海岸）、克里米亚和塞瓦斯托波尔、古巴、刚果民主共和国、厄瓜多尔、伊朗、伊拉克、利比里亚、利比亚、马格尼茨基、马里、摩洛哥、尼泊尔、朝鲜、索马里、苏丹、叙利亚、委内瑞拉、也门、津巴布韦',
    AddLiquidityHint1: '添加流动性可获取OPL',
    AddLiquidityHint2: '质押OPL即开始挖矿',
    pledgeHint1: '可以质押OPL或OPS两种资产来赚取OPS',
    pledgeHint2: '质押即开始挖矿',
    pledgeHint3: '挖矿最小值 1 OPS或0.1 OPL',

  },
  // 错误提示
  error:{
    TFailure: '交易失败',
    SystemBusy: '系统 忙碌',
    NetworkError: '网络错误',
    NotMetaMask: '请先安装MetaMask钱包',
    NotMetaMaskNetworkError: 'Metamask需登录并选择正确的网络',
    InvalidValue: '无效值',
    OverContract: '合约储备余额已用完',
    OverOpenMax: '超出单次开仓限额',
    OverMax: '超出最大值',
    OverPair: '超出交易对 余额',
    OverPosition: '超出您的持仓',
    OverBalance: '超出您的余额',
    OverBalanceByClose: '超出您的余额 请先充值或减少平仓数量',
    OverUsableBalance: '超出可用余额',
    NotETHBalance: 'ETH资产不足无法支付Gas费用\n您可通过水龙头申领ETH',
    NotPair: '没有该交易对',
    NotLiquidity: '没有流动性余额',
    NotPosition: '你没有持仓',
    NotAsset: '您没有可用的资产 请在资产界面获取资产',
    OverFaucet: '水龙头储备余额已用完',
    SameToken: '同一币种无需兑换',
    NotGas: '你需要预留少量ETH做为Gas费'
  },
  // 段落
  paint:{
    BUGBounty: '<h4>Bug 赏金猎人</h4><br/>' +
        '<h5>奖励: 20000 枚 OPS 代币</h5>' +
        '<br/>参与方式: 如果在测试网操作所要求的指令时，发现有因网站本身原因造成的操作失败， 可及时通过邮箱或社区小助手进行上报，一经采纳，主网上线后将向上报 Bug 的用户发放 20000 的枚 OPS 奖励至其预留的以太坊钱包地址。' +
        '<br/><br/>活动细则:' +
        '<br/>当多个用户提交同个 Bug 时，最先提交 Bug 的用户将获得该 Bug 的奖励; 同个用户可提交多个 Bug , 该奖励按照被采纳的 Bug 个数计算;' +
        '<br/><br/>用户可通过 Opswap Github 版本迭代内容查看建议是否被采纳; 建议一旦被采纳，我们将以邮件的形式与您进行联系，所以务必请您留下邮箱地址。' +
        '<br/><br/>这是一个测试网，你可以帮助我们的最佳方法就是对其进行测试。当您在测试中遇到问题可 将问题发送至' +
        '<br/><br/>bug@opswap.io' +
        '<br/><br/>我们正在努力为主网准备代码，你的反馈意见是其中的关键部分。我们将对参与测试的用户 进行丰厚的奖励。',

  },
  home: {
    TotalLiquidity: "总流动性",
    TotalMarket: "成交市值",
    TotalIncome: "总收益",
    TotalCurrentIncome: "合约当期收益",
    ContractAuditInstitutions: "合约审计单位",
    StrategicInvestment: "战略投资",
    ContractIncome: "合约收益",
    RecomendIncome: "推荐收益",
    MineIncome: "挖矿收益",
    TradingPair: "地址",
    PoolLiquidity2: "流动性市值",
    tfH2: "30天收益",
    FAQ: "帮助中心",
    FAQ1T: "什么是自动化做市",
    FAQ2T: "什么是资金池",
    FAQ3T: "什么是订单簿模式",
    FAQ4T: "OneSwap是去中心化的吗",
    FAQ1C:
      "自动化做市（AMM）能根据公式计算出买卖价格，从而为市场提供连续报价。AMM本质上是自动代理，无需人工介入通过智能合约实现。OneSwap选用了AMM中的“恒定乘积做市商模型”的算法，其特点是无论订单簿规模有多大，或者流动性资金池有多小，它都能为市场提供流动性。",
    FAQ2C:
      "每一个OneSwap的流动资金池都是一个智能合约，它持有两种ERC20 Token的余额，并执行这两种Token的存入、提取和交易规则。此规则为恒定乘积公式，当其中一种Token被存入（卖出）时，另一种Token必须提取一定比例的金额以保证乘积恒定；反之，如果提取（买入）某种Token时，另一种Token也需存入一定比例金额。创建资金池时Token的余额为0，最先存入的用户决定了资金池的初始价格。越早加入权重越大。根据权重可获得手续费收入分红。",
    FAQ3C:
      "OneSwap支持链上订单簿模式。用户可按固定价格挂买卖单，所有挂单都存储在区块链中的订单簿（Order Book）上，系统会根据订单簿中的买卖盘进行交易撮合与结算。这种模式安全性好，透明度高，但所有操作（挂单、撤单等）需链上确认，交易速度受公链网络与支付的手续费共同影响。",
    FAQ4C:
      "OneSwap致力于成为去中心化的可信任平台，其智能合约经过多方审计，代码中没有内置的管理控制系统或关闭功能，所有修改和优化均需通过社区治理的方式投票决定。",
    BUGBounty: "上报BUG",
    HelpCenter: "帮助中心",
    Fee: "费率",
    Github: "Github",
    API: "API",
    WhitePaper: "白皮书",
    ConnectToWallet: "连接钱包",
    Language: "语言",
    Chinese: '中文',
    English: 'English',
  },
  combination: {
    Assets: '组合资产',
    Metal: '贵金属',
    Name: "名称",
    LatestPrice: "最新价",
    RiseJump: "涨跌幅",
    Operate: '操作'
  },
  draw: {
    Developers: '开发者',
    language: 'English',
    Docs: '文档',
    Github: 'Github',
    WhitePaper: '白皮书',
    Audit: '审计报告',
    BUGBounty: '上报Bug',
    Governance: '管理',
    Community: '社区',
    Forum: '论坛',
    VotingPortal: '提案投票',
    Recommend: '用户推广',
    IssueToken: '发行代币'
  },
  exchange: {
    swap: '兑换',
    Bonus: '奖金池',
    Tmine: 'tts挖矿',
    Gmine: 'gtr挖矿',
    Card: '请选择通行证',
    Dot: '滑点',
    Price: '当前价格',
    Real: '实时兑换',
    Limit: '限价兑换',
    Input: '请输入价格',
    LimitP: '限价单',
    History: '交易历史',
    Cancel: '取消'
  },
  contract: {
    Fee: '预测奖金费率',
    Account: '账户总权益',
    Guess: '预估强平价',
    Rate: '担保资产率',
    Open: '开仓',
    Close: '平仓',
    Hold: '持仓',
    Limit: '限价委托',
    Market: '市价委托',
    Stop: '止盈止损',
    Plan: '计划委托',
    Time: '倍数',
    Price: '价格',
    PriceOr: '对手价',
    Level5: '最优5档',
    Level10: '最优10档',
    Level20: '最优20档',
    Count: '数量',
    Many: '可多开',
    Zhang: '张',
    Bonus: '资金池',
    Tmine: 'tts挖矿',
    Gmine: 'gtr挖矿',
    Volume: '成交量',
    Average: '成交均价',
    Income: '收益',
    Traded: '已成交',
    NoData: '暂无数据',
    Buy: '买入',
    Sell: '卖出'
  },
  common: {
    AddLiquidity: '增加流动性',
    AddFlow: '流动性提供者的奖励',
    AddFlowT: '流动性提供者从所有交易中赚钱0.3%的费用，这与他们在池中的份额成比例。费用呗添加到池中，实时积累，可以通过提取你的流动性来要求',
    AddFlowR: '阅读更多关于提供流动性的内容',
    AddOne: '创建一个对',
    TTile: 'UNISWAP流动性矿业',
    TIntro: '流动性提供者从所有交易中赚钱0.3%存入流动性提供者令牌以接受UNI，即Uniswap协议治理令牌',
    TMore: '阅读更多关于UNI的内容',
    TJoin: '参与泳池奖励',
    Tsave: '存款',
    TAllsave: '总存款',
    Fee: '费率',
    FlowSave: '流动性存款',
    FlowText: ' 当你抛出时，CONTRACT将自动取消你的UNI ',
    FlowReturn: '返回',
    Week: '周',
    Save: '存入',
    Add: '添加',
    Return: '返回',
  }
}
