import React from 'react'
import Topbanner from '../../components/creator/Snewhome/Topbanner'
import Mainindustry from '../../components/creator/Snewhome/Industry/Mainindustry'
import Mainads from '../../components/creator/Snewhome/Ads/Mainads'
import Mainoffer from '../../components/creator/Snewhome/offer/Mainoffer'
import Professional from '../../components/creator/Snewhome/Professional/Professional'
import Team from '../../components/creator/Snewhome/Team/Team'
import Brandform from '../../components/creator/Snewhome/From/Brandform'
import Ourcreator from '../../components/creator/Snewhome/cerator/ourcreator'
import Content from '../../components/creator/Snewhome/Content/Content'
import Parelax from '../../components/NewHome/INDUSTRIES/Parelax'

function Newhome() {
  return (
    <div>
        <Topbanner/>
        <Mainindustry/>
        <Parelax/>
      
        <Ourcreator/>
        <Mainads/>
        <Mainoffer/>
        <Professional/>
        <Team/>
        <Content/>
        <Brandform/>
    </div>
  )
}

export default Newhome