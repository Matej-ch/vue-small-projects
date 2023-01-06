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
import OutlineInsertEmoticon from '~icons/ic/outline-insert-emoticon'
import Counter from '~icons/mdi/counter';
import Number1BoxMultipleOutline from '~icons/mdi/number-1-box-multiple-outline';
import Telephone from '~icons/mdi/telephone';
import FoodToast16Filled from '~icons/fluent/food-toast-16-filled';
import Shapes from '~icons/material-symbols/shapes';
import Stars from '~icons/material-symbols/stars';
import ImagePixel from '~icons/fluent-mdl2/image-pixel';
import BorderColor from '~icons/material-symbols/border-color';
import TodoList from '~icons/wpf/todo-list';
import CogTransferOutline from '~icons/mdi/cog-transfer-outline';
import Chess from '~icons/bxs/chess';
import Chips from '~icons/mdi/chips';
import NestClockFarsightAnalogOutline from '~icons/material-symbols/nest-clock-farsight-analog-outline';
import ChatTyping from '~icons/mdi/chat-typing';
import OtpOutline from '~icons/teenyicons/otp-outline';
import DropArea from '~icons/pixelarticons/drop-area';
import ViewCarouselOutline from '~icons/material-symbols/view-carousel-outline';
import BaselineCalendarMonth from '~icons/ic/baseline-calendar-month';
import DualScreenPagination20Filled from '~icons/fluent/dual-screen-pagination-20-filled';
import CirclesFourLight from '~icons/ph/circles-four-light';
import Comment from '~icons/material-symbols/comment';
import CodeJson from '~icons/mdi/code-json';
import DataArray from '~icons/material-symbols/data-array';
import Progressbar from '~icons/vaadin/progressbar';
import Gift from '~icons/mdi/gift'
import PartyPopper from '~icons/mdi/party-popper'
import CountdownTimer from '~icons/radix-icons/countdown-timer';
import PineTree from '~icons/mdi/pine-tree';
import TwotoneLabel from '~icons/ic/twotone-label';
import Compare from '~icons/mdi/compare'
import GoogleEarth from '~icons/mdi/google-earth'
import CreditCardEdit from '~icons/mdi/credit-card-edit'
import BaselineSort from '~icons/ic/baseline-sort'
import Secret from '~icons/eos-icons/secret'
import Exchange from '~icons/mdi/exchange'

export const useNavbarStore = defineStore('navbar', {
    state: () => {
        return {
            items: [
                {url: 'index', label: 'Home', 'icon': shallowRef(RoundHome)},
                {url: 'border', label: 'Border radius previewer', 'icon': shallowRef(BaselineBorderStyle)},
                {url: 'bindec', label: 'Bin 2 Dec', 'icon': shallowRef(OutlineNumbers)},
                {url: 'freq', label: 'Word frequency', 'icon': shallowRef(RoundQueryStats)},
                {url: 'truefalse', label: 'True or False', 'icon': shallowRef(SharpQuestionMark)},
                {
                    url: 'github', label: 'Github status',
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
                {url: 'qrcode', label: 'Qr code', 'icon': shallowRef(BaselineQrCode2)},
                {url: 'tictactoe', label: 'Tic tac toe', 'icon': shallowRef(OutlineInsertEmoticon)},
                {url: 'counter', label: 'Counter', 'icon': shallowRef(Counter)},
                {url: 'guess', label: 'Guess the number', 'icon': shallowRef(Number1BoxMultipleOutline)},
                {url: 'phone', label: 'Telephone formatter', 'icon': shallowRef(Telephone)},
                {url: 'toast', label: 'Toast Popup', 'icon': shallowRef(FoodToast16Filled)},
                {url: 'shapes', label: 'CSS Shapes', 'icon': shallowRef(Shapes)},
                {url: 'stars', label: 'Star Rating', 'icon': shallowRef(Stars)},
                {url: 'pixels', label: 'Pixel Art', 'icon': shallowRef(ImagePixel)},
                {url: 'spotter', label: 'Color Spotter', 'icon': shallowRef(BorderColor)},
                {url: 'todos', label: 'Todo List', 'icon': shallowRef(TodoList)},
                {url: 'transfers', label: 'Transfer List', 'icon': shallowRef(CogTransferOutline)},
                {url: 'chess', label: 'Chess Board', 'icon': shallowRef(Chess)},
                {url: 'chips', label: 'Chips Input', 'icon': shallowRef(Chips)},
                {url: 'clock', label: 'Analog Clock', 'icon': shallowRef(NestClockFarsightAnalogOutline)},
                {url: 'typing', label: 'Typing Speed Test', 'icon': shallowRef(ChatTyping)},
                {url: 'otp', label: 'OTP Input', 'icon': shallowRef(OtpOutline)},
                {url: 'area', label: 'Area Selector', 'icon': shallowRef(DropArea)},
                {url: 'carousel', label: 'Carousel', 'icon': shallowRef(ViewCarouselOutline)},
                {url: 'calendar', label: 'Calendar', 'icon': shallowRef(BaselineCalendarMonth)},
                {url: 'paginator', label: 'Paginator', 'icon': shallowRef(DualScreenPagination20Filled)},
                {url: 'connect', label: 'Connect Four', 'icon': shallowRef(CirclesFourLight)},
                {url: 'comments', label: 'Comment box', 'icon': shallowRef(Comment)},
                {url: 'json', label: 'JSON Creator', 'icon': shallowRef(CodeJson)},
                {url: 'array', label: 'Array methods', 'icon': shallowRef(DataArray)},
                {url: 'progress', label: 'Progress Bar', 'icon': shallowRef(Progressbar)},
                {url: 'gift', label: 'Gift search bar', 'icon': shallowRef(Gift)},
                {url: 'joke', label: 'Joke generator', 'icon': shallowRef(PartyPopper)},
                {url: 'countdown', label: 'Countdown to christmas', 'icon': shallowRef(CountdownTimer)},
                {url: 'recursive', label: 'Recursive Xmas Tree', 'icon': shallowRef(PineTree)},
                {url: 'label', label: 'Gift label', 'icon': shallowRef(TwotoneLabel)},
                {url: 'compare', label: 'Compare gifts', 'icon': shallowRef(Compare)},
                {url: 'dragPresents', label: 'Drag presents', 'icon': shallowRef(Gift)},
                {url: 'localGreeting', label: 'Localized greetings', 'icon': shallowRef(GoogleEarth)},
                {url: 'credit', label: 'Credit card', 'icon': shallowRef(CreditCardEdit)},
                {url: 'sortGifts', label: 'Present sort', 'icon': shallowRef(BaselineSort)},
                {url: 'secretSanta', label: 'Secret santa challenge', 'icon': shallowRef(Secret)},
                {url: 'josephs', label: 'Josephs gift', 'icon': shallowRef(Gift)},
                {url: 'giftExchange', label: 'Secret santa generator', 'icon': shallowRef(Exchange)},
                {url: 'directive', label: 'Custom christmas directive', 'icon': shallowRef(Exchange)},
                {url: 'renderless', label: 'Renderless component', 'icon': shallowRef(Exchange)},
                {url: 'progress', label: 'Progress bar', 'icon': shallowRef(Exchange)},
                {url: 'otp', label: 'OTP input', 'icon': shallowRef(Exchange)},
                {url: 'chips', label: 'Chips input', 'icon': shallowRef(Exchange)},
            ]
        };
    }
})