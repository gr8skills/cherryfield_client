import React, {useState} from 'react';

const AppContext = React.createContext({
    searchOpen: false,
    openSearchOverlay: () => {},
    closeSearchOverlay: () => {},
});

export const AppContextProvider = (props) => {
    const [searchOpen, setSearchOpen] = useState(false);

    const openSearchHandler = () => setSearchOpen(true);
    const closeSearchHandler = () => setSearchOpen(false);

    return (
        <AppContext.Provider value={{
            searchOpen: searchOpen,
            closeSearchOverlay: closeSearchHandler,
            openSearchOverlay: openSearchHandler
        }}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContext;
