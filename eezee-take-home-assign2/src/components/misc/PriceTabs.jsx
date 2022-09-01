import { useContext } from 'react'
import { classNames } from '../../utils/Helper'
import { PriceTabsContext, PriceCurrentTabContext } from '../../context/productContext'

const PriceTabs = () => {
    const { tabs } = useContext(PriceTabsContext)
    const { currentTab, setTab } = useContext(PriceCurrentTabContext)
    return (
        <div className="tw-pb-4 lg:tw-block mb:tw-block mobile:tw-hidden sm:tw-hidden">
            <nav className="tw-flex tw-space-x-0" aria-label="Tabs">
                {tabs.map((tab) => (
                    <button
                        onClick={() => setTab(tab)}
                        key={tab.name}
                        href={tab.href}
                        className={classNames(
                            tab.name == currentTab.name
                                ? 'tw-bg-tab-bg tw-text-eezee-blue tw-border tw-border-tab-border'
                                : 'tw-text-tab-text',
                            'tw-px-3 tw-py-2 tw-text-sm tw-border'
                        )}
                        aria-current={tab.current ? 'page' : undefined}
                    >
                        {tab.name}
                    </button>
                ))}
            </nav>
        </div>
    )
}

export default PriceTabs
