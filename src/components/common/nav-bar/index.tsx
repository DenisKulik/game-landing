import { RiArrowDownSLine } from 'react-icons/ri'

import { LanguageBlock, StyledNav } from 'components/common/nav-bar/nav-bar.styles.ts'
import { Icon } from 'components/common/icon'

export const NavBar = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <a href="#">editions</a>
                </li>
                <li>
                    <a href="#">controller</a>
                </li>
                <li>
                    <a href="#">about game</a>
                </li>
                <li>
                    <a href="#">explore</a>
                </li>
                <li>
                    <a href="#">news</a>
                </li>
                <li>
                    <a href="#">faq</a>
                </li>
            </ul>

            <LanguageBlock>
                <span>english</span>
                <Icon icon={RiArrowDownSLine} />

                <div>
                    <div>Русский</div>
                    <div>English</div>
                </div>
            </LanguageBlock>
        </StyledNav>
    )
}
