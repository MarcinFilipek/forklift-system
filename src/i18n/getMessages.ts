import pl from './lang/pl.json'
import en from './lang/en.json'
import { Locale } from './locales'

export const getMessages = (loc: Locale) => {
    switch (loc) {
        case Locale.Polish:
            return pl
        default:
            return en
    }
}
