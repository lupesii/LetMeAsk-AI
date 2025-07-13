import dayjsLib from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjsLib.extend(relativeTime)
dayjsLib.locale('pt-br')

export const dayjs = dayjsLib
