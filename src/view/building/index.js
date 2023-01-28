import React, { useState } from "react";
import Building from "./Building";
import '../../assets/css/building.css'
import '../../assets/css/fontawesome.css'
import '../../assets/css/fonts.css'

function Index() {
    const [siteName, setSiteName] = useState(false)
    const [location, setLocation] = useState(false)
    const [sort, setSort] = useState(false)

    const showHideSiteNameDropdown = () =>  {
        setSiteName(!siteName)
    }
    const showHideLocationDropdown = () =>  {
        setLocation(!location)
    }
    const showHideSortDropdown = () =>  {
        setSort(!sort)
    }
    return (
        <Building siteName={siteName} siteNameDropdown={showHideSiteNameDropdown} location={location} locatonDropdown={showHideLocationDropdown} sort={sort} sortDropdown={showHideSortDropdown} />
    )
}
export default Index