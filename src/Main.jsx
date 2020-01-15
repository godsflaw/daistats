import React from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HealButton from './HealButton';

const formatAmount = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
})

const formatNoDecimals = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
})

const formatCurrency = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 4
})

const formatPercent = new Intl.NumberFormat('en-US', {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

const Main = (props) => {
  document.title = `Dai Stats`
  const sysCollat = props.sysLocked / props.debt
  return (
    <div>
      <div className="notification is-primary has-text-centered">
        Current block: {props.blockNumber}. This page updates automatically every block.
      </div>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={props.debt}>
                  {formatAmount.format(props.debt)}
                </h3>
                <h4 className="subtitle is-size-3">Total Dai</h4>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title">{formatAmount.format(props.saiSupply)}</h3>
                <h4 className="subtitle is-size-3">Total Sai</h4>
              </div>
            </div>
            {/* <div className="column">
              <div className="box has-text-centered">
                <h3 className="title">{formatAmount.format(props.chaiSupply)}</h3>
                <h4 className="subtitle is-size-3">Total Chai</h4>
              </div>
            </div> */}
          </div>
          <div className="columns">
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={props.ilks[0].Art}>{formatAmount.format(props.ilks[0].Art)}</h3>
                <p className="subtitle is-size-4">Dai from ETH ({formatAmount.format(props.ilks[0].Art / props.debt * 100)}%)</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={props.ilks[1].Art}>{formatAmount.format(props.ilks[1].Art)}</h3>
                <p className="subtitle is-size-4">Dai from BAT ({formatAmount.format(props.ilks[1].Art / props.debt * 100)}%)</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={props.ilks[2].Art}>{formatAmount.format(props.ilks[2].Art)}</h3>
                <p className="subtitle is-size-4">Dai from Migration Contract</p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={props.ethLocked}>{formatNoDecimals.format(props.ethLocked)}</h3>
                <p className="title subtitle is-size-4">ETH Locked (in ETH)</p>
                <p className="subtitle is-size-6">ETH Supply Locked: {formatPercent.format(props.ethLocked / props.ethSupply)}</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={props.ilks[0].line}>{formatAmount.format(props.ilks[0].line)}</h3>
                <p className="title subtitle is-size-4">ETH Ceiling (in Dai)</p>
                <p className="subtitle is-size-6">Utilization: {formatAmount.format(props.ilks[0].Art / props.ilks[0].line * 100)}%</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={props.ethFee}>{props.ethFee}%</h3>
                <p className="title subtitle is-size-4">ETH Stability Fee</p>
                <p className="subtitle is-size-6">Last Drip: {props.jugEthDrip}</p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="box has-text-centered">
              <h3 className="title" title={props.batLocked}>{formatNoDecimals.format(props.batLocked)}</h3>
                <p className="title subtitle is-size-4">BAT Locked (in BAT)</p>
                <p className="subtitle is-size-6">BAT Supply Locked: {formatPercent.format(props.batLocked / props.batSupply)}</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={props.ilks[1].line}>{formatAmount.format(props.ilks[1].line)}</h3>
                <p className="title subtitle is-size-4">BAT Ceiling (in Dai)</p>
                <p className="subtitle is-size-6">Utilization: {formatAmount.format(props.ilks[1].Art / props.ilks[1].line * 100)}%</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={props.batFee}>{props.batFee}%</h3>
                <p className="title subtitle is-size-4">BAT Stability Fee</p>
                <p className="subtitle is-size-6">Last Drip: {props.jugBatDrip}</p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={props.daiSupply}>{formatAmount.format(props.daiSupply)}</h3>
                <p className="subtitle is-size-4">Dai (ERC20) Supply</p>
                <p className="subtitle is-size-6"> </p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={props.ethPrice}>${formatAmount.format(props.ethPrice)}</h3>
                <p className="title subtitle is-size-4">ETH Price</p>
                <p className="subtitle is-size-6">Next OSM Price: ${formatAmount.format(props.ethPriceNxt)}</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={props.batPrice}>${formatCurrency.format(props.batPrice)}</h3>
                <p className="title subtitle is-size-4">BAT Price</p>
                <p className="subtitle is-size-6">Next OSM Price: ${formatCurrency.format(props.batPriceNxt)}</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title">{formatPercent.format(sysCollat)}</h3>
                <p className="title subtitle is-size-4">Collat. Ratio</p>
                <p className="subtitle is-size-6">Total Locked: ${formatAmount.format(props.sysLocked)}</p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={props.savingsDai}>{formatAmount.format(props.savingsDai)}</h3>
                <p className="title subtitle is-size-4">Dai in DSR ({formatAmount.format(props.savingsDai/ props.debt * 100)}%)</p>
                <p className="subtitle is-size-6">(Pie in DSR: {formatAmount.format(props.savingsPie)})</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={props.potFee}>{props.potFee}%</h3>
                <p className="title subtitle is-size-4">Dai Savings Rate</p>
                <p className="subtitle is-size-6">Last Drip: {props.potDrip}</p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={props.sysSurplus}>{formatAmount.format(props.sysSurplus)}</h3>
                <p className="title subtitle is-size-4">System Surplus (Dai)</p>
                <p className="subtitle is-size-6">Surplus Buffer: {formatAmount.format(props.surplusBuffer)}</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={props.sysDebt}>{formatAmount.format(props.sysDebt)}</h3>
                <p className="title subtitle is-size-4">System Debt (Dai)</p>
                <p className="subtitle is-size-6">Debt Buffer: {formatAmount.format(props.debtSize)}</p>
                { (props.chainId === 1) && <HealButton sysDebtRaw={props.sysDebtRaw}/> }
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={props.batKicks}>{formatAmount.format(props.batKicks)}</h3>
                <p className="subtitle is-size-4">BAT Vault Auctions</p>
                <p className="subtitle is-size-6"> </p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={props.ethKicks}>{formatAmount.format(props.ethKicks)}</h3>
                <p className="subtitle is-size-4">ETH Vault Auctions</p>
                <p className="subtitle is-size-6"> </p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={props.cdps}>{props.cdps}</h3>
                <p className="subtitle is-size-4">Vaults Opened</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={props.gemPit}>{formatAmount.format(props.gemPit)}</h3>
                <p className="subtitle is-size-4">MKR in Burner</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={props.mkrSupply}>{formatAmount.format(props.mkrSupply)}</h3>
                <p className="subtitle is-size-4">MKR Supply</p>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={props.uniswapDai}>{formatAmount.format(props.uniswapDai)}</h3>
                <p className="subtitle is-size-4">Dai in Uniswap</p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="box has-text-centered">
                <a href={`https://etherscan.io/token/${props.MCD_DAI}`} target="_blank" rel="noopener noreferrer">
                  <h3 className="title"><i className="fal fa-file-code"></i> Dai</h3>
                  <p className="subtitle is-size-7">{props.MCD_DAI}</p>
                </a>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <a href={`https://etherscan.io/token/${props.SAI}`} target="_blank" rel="noopener noreferrer">
                  <h3 className="title"><i className="fal fa-file-code"></i> Sai</h3>
                  <p className="subtitle is-size-7">{props.SAI}</p>
                </a>
              </div>
            </div>
            <div className="column">
              <div className="box has-text-centered">
                <a href={`https://etherscan.io/token/${props.MCD_GOV}`} target="_blank" rel="noopener noreferrer">
                  <h3 className="title"><i className="fal fa-file-code"></i> MKR</h3>
                  <p className="subtitle is-size-7">{props.MCD_GOV}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main
