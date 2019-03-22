import { Channel, CapacityUnit } from '../utils/const'
import SyntheticEventEmitter from '../utils/SyntheticEventEmitter'
import { Network } from '../contexts/Chain'

declare global {
  interface Window {
    require: any
    bridge: any
  }
}

export interface TransferItem {
  address: string
  capacity: string
  unit: CapacityUnit
}

const UILayer = (() => {
  if (window.bridge) {
    return new SyntheticEventEmitter(window.bridge.ipcRenderer)
  }
  return {
    send: (channel: string, msg: any = '') => {
      console.warn(`Message: ${msg} to channel ${channel} failed due to Electron not loaded`)
    },
    sendSync: (channel: string, msg: any = '') => {
      console.warn(`Message: ${msg} to channel ${channel} failed due to Electron not loaded`)
    },
    on: (channel: string, cb: Function) => {
      console.warn(`Channel ${channel} and Function ${cb.toString()} failed due to Electron not loaded`)
    },
    removeAllListeners: (channel?: string) => {
      console.warn(`Channel ${channel} cannot removed due to Electron not loaded`)
    },
    addEventListener: (event: string, cb: EventListenerOrEventListenerObject) => window.addEventListener(event, cb),
  }
})()

export const asw = () => UILayer.send('ASW')

export const getWallets = () => {
  UILayer.send(Channel.GetWallets)
}

export const createWallet = (wallet: { name: string; mnemonic: any; password: string }) =>
  UILayer.send(Channel.CreateWallet, wallet)

export const deleteWallet = (walletID: string, password: string, handleResult: any) => {
  UILayer.on(Channel.DeleteWallet, (_e: any, args: Response<string>) => {
    if (args.result) {
      getWallets()
    }
    handleResult(args)
  })
  UILayer.send(Channel.DeleteWallet, {
    walletID,
    password,
  })
}

export const editWallet = (
  walletID: string,
  walletName: string,
  password: string,
  newPassword: string,
  handleResult: any,
) => {
  UILayer.on(Channel.EditWallet, (_e: any, args: Response<string>) => {
    if (args.result) {
      getWallets()
    }
    handleResult(args)
  })

  UILayer.send(Channel.EditWallet, {
    walletID,
    walletName,
    password,
    newPassword,
  })
}

export const importWallet = (wallet: { name: string; mnemonic: any; password: string }) =>
  UILayer.send(Channel.ImportWallet, wallet)
export const exportWallet = () => UILayer.send(Channel.ExportWallet)
export const getLiveCell = (outpoint: any) => UILayer.send('getLiveCell', outpoint)
export const getCellsByTypeHash = (typeHash: string) => {
  UILayer.send(Channel.GetCellsByTypeHash, typeHash)
}

export const sendCapacity = (items: TransferItem[], password: string) => {
  return UILayer.sendSync(Channel.SendCapacity, {
    items,
    password,
  })
}
export const setNetwork = (network: Network) => {
  UILayer.send(Channel.SetNetwork, network)
}

export const getTransactions = (pageNo: number, pageSize: number) => {
  UILayer.send(Channel.GetTransactions, {
    pageNo,
    pageSize,
  })
}

export const checkPassword = (walletID: string, password: string, handleResult: any) => {
  UILayer.on(Channel.CheckWalletPassword, (_e: any, args: Response<string>) => {
    handleResult(args)
  })
  UILayer.send(Channel.CheckWalletPassword, {
    walletID,
    password,
  })
}

export default UILayer
