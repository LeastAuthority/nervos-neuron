import { walletsCall } from 'services/UILayer'

import { Message } from 'utils/const'
import { verifyAddress } from 'utils/validators'
import { CKBToShannonFormatter } from 'utils/formatters'
import { TransactionOutput } from 'components/Send'

import { AppActions } from '../reducer'

export default {
  submitTransaction: (id: string, walletID: string, items: TransactionOutput[], description: string) => {
    const errorAction = {
      type: AppActions.AddNotification,
      payload: {
        type: 'warning',
        timestamp: Date.now(),
        content: Message.AtLeastOneAddressNeeded,
      },
    }
    if (!items.length || !items[0].address) {
      return errorAction
    }
    const invalid = items.some(
      (item): boolean => {
        if (!verifyAddress(item.address)) {
          errorAction.payload.content = Message.InvalidAddress
          return true
        }
        if (Number.isNaN(+item.amount) || +item.amount < 0) {
          errorAction.payload.content = Message.InvalidAmount
          return true
        }
        const [, decimal = ''] = item.amount.split('.')
        if (decimal.length > 8) {
          errorAction.payload.content = Message.InvalidAmount
          return true
        }
        return false
      }
    )
    if (invalid) {
      return errorAction
    }
    walletsCall.sendCapacity({
      id,
      walletID,
      items: items.map(item => ({
        address: item.address,
        capacity: CKBToShannonFormatter(item.amount, item.unit),
      })),
      fee: '0',
      description,
    })
    return {
      type: AppActions.UpdateSendLoading,
      payload: true,
    }
  },
}