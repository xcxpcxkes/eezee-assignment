import { createContext, useState } from 'react'
import { price_tabs } from '../constants'

const tabs = price_tabs

export const PriceTabsContext = createContext()
export const PriceCurrentTabContext = createContext()

export const PriceContextProvider = (props) => {
    const [currentTab, setTab] = useState(tabs[0])
    const contextValue = { currentTab, setTab }

    return (
        <PriceTabsContext.Provider value={{ tabs }}>
            <PriceCurrentTabContext.Provider value={contextValue}>{props.children}</PriceCurrentTabContext.Provider>
        </PriceTabsContext.Provider>
    )
}
