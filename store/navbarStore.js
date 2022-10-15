import {defineStore} from 'pinia'
import {shallowRef} from 'vue'
import RoundCalculate from '~icons/ic/round-calculate'
import RoundHome from '~icons/ic/round-home'
import BaselineBorderStyle from '~icons/ic/baseline-border-style'
import OutlineNumbers from '~icons/ic/outline-numbers'
import RoundQueryStats from '~icons/ic/round-query-stats'
import SharpQuestionMark from '~icons/ic/sharp-question-mark'
import RoundSignalWifiStatusbarConnectedNoInternet4 from '~icons/ic/round-signal-wifi-statusbar-connected-no-internet-4'
import TwotoneGradient from '~icons/ic/twotone-gradient'
import RoundAccountBalance from '~icons/ic/round-account-balance'
import RoundCloud from '~icons/ic/round-cloud'
import RoundSetMeal from '~icons/ic/round-set-meal'
import RoundCurrencyExchange from '~icons/ic/round-currency-exchange'
import RoundLock from '~icons/ic/round-lock'
import RoundTextFields from '~icons/ic/round-text-fields'
import TwotonePolymer from '~icons/ic/twotone-polymer'
import RoundFormatColorFill from '~icons/ic/round-format-color-fill'
import RoundLocalAtm from '~icons/ic/round-local-atm'
import BaselineSupervisedUserCircle from '~icons/ic/baseline-supervised-user-circle'
import Planet from '~icons/ion/planet'
import Time from '~icons/ion/time'
import Newspaper from '~icons/ion/newspaper'
import StopwatchOutline from '~icons/ion/stopwatch-outline'
import BaselineFileCopy from '~icons/ic/baseline-file-copy'
import OutlineFileCopy from '~icons/ic/outline-file-copy'
import RoundAccountTree from '~icons/ic/round-account-tree'
import BaselineQrCode2 from '~icons/ic/baseline-qr-code-2'

export const useNavbarStore = defineStore('navbar', {
    state: () => {
        return {
            items: [
                {
                    url: 'index', label: 'Home', 'icon': shallowRef(RoundHome)
                },
                {url: 'border', label: 'Border radius previewer', 'icon': shallowRef(BaselineBorderStyle)},
                {url: 'bindec', label: 'Bin 2 Dec', 'icon': shallowRef(OutlineNumbers)},
                {url: 'freq', label: 'Word frequency', 'icon': shallowRef(RoundQueryStats)},
                {url: 'truefalse', label: 'True or False', 'icon': shallowRef(SharpQuestionMark)},
                {
                    url: 'github',
                    label: 'Github status',
                    'icon': shallowRef(RoundSignalWifiStatusbarConnectedNoInternet4)
                },
                {url: 'timeline', label: 'GitHub Timeline', 'icon': shallowRef(Time)},
                {url: 'profiles', label: 'GitHub Profiles', 'icon': shallowRef(BaselineSupervisedUserCircle)},
                {url: 'calc', label: 'Calculator', 'icon': shallowRef(RoundCalculate)},
                {url: 'random', label: 'Random number', 'icon': shallowRef(TwotoneGradient)},
                {url: 'roman', label: 'Roman numerals', 'icon': shallowRef(RoundAccountBalance)},
                {url: 'weather', label: 'Weather App', 'icon': shallowRef(RoundCloud)},
                {url: 'meal', label: 'Random Meal Generator', 'icon': shallowRef(RoundSetMeal)},
                {url: 'currency', label: 'Currency Converter', 'icon': shallowRef(RoundCurrencyExchange)},
                {url: 'password', label: 'Password Generator', 'icon': shallowRef(RoundLock)},
                {url: 'markdown', label: 'Markdown Previewer', 'icon': shallowRef(RoundTextFields)},
                {url: 'vigenere', label: 'Vigenere Cipher', 'icon': shallowRef(TwotonePolymer)},
                {url: 'color', label: 'ColorCycle', 'icon': shallowRef(RoundFormatColorFill)},
                {url: 'nasa', label: 'NASA Exoplanet Query', 'icon': shallowRef(Planet)},
                {url: 'notes', label: 'Notes App', 'icon': shallowRef(Newspaper)},
                {url: 'stopwatch', label: 'Stopwatch App', 'icon': shallowRef(StopwatchOutline)},
                {url: 'dollars', label: 'Dollars To Cents', 'icon': shallowRef(RoundLocalAtm)},
                {url: 'csvtojson', label: 'CSV2JSON', 'icon': shallowRef(BaselineFileCopy)},
                {url: 'jsontocsv', label: 'JSON2CSV', 'icon': shallowRef(OutlineFileCopy)},
                {url: 'jsontree', label: 'Json tree', 'icon': shallowRef(RoundAccountTree)},
                {url: 'qrcode', label: 'Qr code', 'icon': shallowRef(BaselineQrCode2)}
            ]
        };
    }
})